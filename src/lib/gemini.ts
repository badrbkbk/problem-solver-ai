const GEMINI_API_KEY = "AIzaSyBa-Jui8bpxcBli_SGICsycE5yFlIKgJZ0";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export interface Solution {
  title: string;
  description: string;
  type: 'website' | 'youtube' | 'article';
  url: string;
  source: string;
}

export interface SolverResponse {
  summary: string;
  solutions: Solution[];
}

const SYSTEM_PROMPT = `You are an expert problem solver AI. The user will describe a problem in Arabic (Darija or Modern Standard Arabic) or any language.

Your task:
1. Understand the problem deeply
2. Return a JSON response with this EXACT structure (no markdown, pure JSON):
{
  "summary": "ملخص قصير للحل بالعربية (2-3 جمل)",
  "solutions": [
    {
      "title": "عنوان الحل",
      "description": "وصف مختصر لماذا هذا مفيد",
      "type": "website" | "youtube" | "article",
      "url": "رابط حقيقي وصحيح",
      "source": "اسم الموقع أو القناة"
    }
  ]
}

Rules:
- Provide 6 solutions: 2 websites, 2 YouTube searches, 2 articles
- For YouTube: use https://www.youtube.com/results?search_query=KEYWORD format
- For websites: use real, well-known websites relevant to the problem
- For articles: use Google search or well-known blogs
- All titles and descriptions MUST be in Arabic
- URLs must be real and working
- Return ONLY the JSON, no extra text`;

export async function solveProblem(problem: string): Promise<SolverResponse> {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT + '\n\nالمشكلة: ' + problem }],
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('فشل الاتصال بالذكاء الاصطناعي');
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('لم يتم الحصول على إجابة');

  const cleaned = text.replace(/```json|```/g, '').trim();
  try {
    return JSON.parse(cleaned) as SolverResponse;
  } catch {
    throw new Error('خطأ في معالجة الإجابة');
  }
}

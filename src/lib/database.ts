export interface Solution {
  title: string;
  description: string;
  type: 'website' | 'youtube' | 'article';
  url: string;
  source: string;
  lang?: 'ar' | 'en';
}

export interface ProblemEntry {
  keywords: string[];
  englishKeywords: string[];
  summary: string;
  solutions: Solution[];
}

export const PROBLEMS_DB: ProblemEntry[] = [
  // ===== تعلم البرمجة =====
  {
    keywords: ['برمجة', 'بغيت نتعلم', 'كيفاش نتعلم', 'كود', 'تطوير', 'مبتدئ', 'تقنية'],
    englishKeywords: ['programming', 'coding', 'developer', 'code', 'software', 'learn coding'],
    summary: 'تعلم البرمجة يبدأ باختيار لغة مناسبة للمبتدئين مثل Python أو JavaScript. هناك موارد مجانية ممتازة بالعربية.',
    solutions: [
      { title: 'أكاديمية حسوب — تعلم البرمجة بالعربي', description: 'أفضل موقع عربي لتعلم البرمجة من الصفر بمحتوى احترافي', type: 'website', url: 'https://academy.hsoub.com', source: 'حسوب', lang: 'ar' },
      { title: 'Elzero Web School — دروس مجانية', description: 'قناة يوتيوب عربية متخصصة في تعليم البرمجة من الصفر', type: 'youtube', url: 'https://www.youtube.com/@ElzeroWebSchool', source: 'YouTube', lang: 'ar' },
      { title: 'تعلم البرمجة للمبتدئين', description: 'بحث يوتيوب شامل لدروس البرمجة بالعربية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تعلم+البرمجة+للمبتدئين+بالعربي', source: 'YouTube', lang: 'ar' },
      { title: 'freeCodeCamp — Learn to Code Free', description: 'Best free platform to learn web development with certificates', type: 'website', url: 'https://www.freecodecamp.org', source: 'freeCodeCamp', lang: 'en' },
      { title: 'The Odin Project — Full Stack Path', description: 'Free open source coding curriculum from beginner to advanced', type: 'website', url: 'https://www.theodinproject.com', source: 'The Odin Project', lang: 'en' },
      { title: 'Traversy Media — Web Dev Tutorials', description: 'Top YouTube channel for learning web development and programming', type: 'youtube', url: 'https://www.youtube.com/@TraversyMedia', source: 'YouTube', lang: 'en' },
    ]
  },
  // ===== النوم =====
  {
    keywords: ['نوم', 'أرق', 'ما ننعس', 'ما نقدرش ننام', 'نعاس', 'تعب', 'إرهاق', 'صحيان', 'نعيس'],
    englishKeywords: ['sleep', 'insomnia', 'cant sleep', 'sleep disorder', 'tired', 'fatigue', 'rest'],
    summary: 'مشاكل النوم شائعة جداً وغالباً سببها التوتر أو الشاشات قبل النوم. هناك حلول بسيطة وفعالة.',
    solutions: [
      { title: 'تقنيات النوم السريع والعميق', description: 'فيديو شامل يشرح أفضل الطرق للنوم بسرعة وجودة عالية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تنام+بسرعة+وبعمق', source: 'YouTube', lang: 'ar' },
      { title: 'موقع WebTeb — علاج الأرق', description: 'موقع طبي عربي موثوق يشرح أسباب وعلاج مشاكل النوم', type: 'website', url: 'https://www.webteb.com/articles/أسباب-الأرق', source: 'WebTeb', lang: 'ar' },
      { title: 'تأمل وتنفس للنوم', description: 'جلسات تأمل موجهة بالعربية لتهدئة العقل قبل النوم', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تأمل+عربي+للنوم+والاسترخاء', source: 'YouTube', lang: 'ar' },
      { title: 'Sleep Foundation — Sleep Tips', description: 'Science-based tips to fix your sleep schedule and cure insomnia', type: 'website', url: 'https://www.sleepfoundation.org/insomnia', source: 'Sleep Foundation', lang: 'en' },
      { title: 'Calm App — Sleep & Meditation', description: 'Best app worldwide for sleep stories, meditation and relaxation', type: 'website', url: 'https://www.calm.com', source: 'Calm', lang: 'en' },
      { title: 'Matthew Walker — Sleep Science', description: 'Top scientist explains how to fix your sleep on YouTube', type: 'youtube', url: 'https://www.youtube.com/results?search_query=Matthew+Walker+sleep+tips', source: 'YouTube', lang: 'en' },
    ]
  },
  // ===== المال والأعمال =====
  {
    keywords: ['مشروع', 'بيزنس', 'ربح', 'فلوس', 'كاش', 'مال', 'أعمال', 'تجارة', 'بغيت نربح', 'ميزانية', 'استثمار'],
    englishKeywords: ['business', 'startup', 'money', 'income', 'invest', 'entrepreneur', 'profit', 'side hustle'],
    summary: 'بدء مشروع صغير يتطلب فكرة واضحة، تخطيط مالي، وتسويق ذكي. هناك موارد عربية ودولية ممتازة.',
    solutions: [
      { title: 'ريادة الأعمال للمبتدئين', description: 'قناة عربية متخصصة في كيفية بدء المشاريع الصغيرة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تبدأ+مشروعك+الخاص+من+الصفر', source: 'YouTube', lang: 'ar' },
      { title: 'مستقل — العمل الحر', description: 'أكبر منصة عربية للعمل الحر وإيجاد مشاريع مربحة', type: 'website', url: 'https://mostaql.com', source: 'مستقل', lang: 'ar' },
      { title: 'موقع رواد الأعمال', description: 'أكبر موقع عربي متخصص في ريادة الأعمال والمشاريع', type: 'website', url: 'https://www.raieda.com', source: 'رواد الأعمال', lang: 'ar' },
      { title: 'Y Combinator Startup School', description: 'Free startup school from the world top startup accelerator', type: 'website', url: 'https://www.startupschool.org', source: 'Y Combinator', lang: 'en' },
      { title: 'Alex Hormozi — Business Growth', description: 'Best YouTube channel on building profitable businesses from scratch', type: 'youtube', url: 'https://www.youtube.com/@AlexHormozi', source: 'YouTube', lang: 'en' },
      { title: 'Investopedia — Business Basics', description: 'Best reference site for business, finance and investment concepts', type: 'website', url: 'https://www.investopedia.com', source: 'Investopedia', lang: 'en' },
    ]
  },
  // ===== اللغة الإنجليزية =====
  {
    keywords: ['إنجليزية', 'إنجليزي', 'لغة', 'تحسين', 'كلام', 'نطق', 'لفظ', 'مستواي', 'محادثة'],
    englishKeywords: ['english', 'language', 'speak english', 'fluent', 'vocabulary', 'grammar', 'accent', 'IELTS', 'TOEFL'],
    summary: 'تحسين اللغة الإنجليزية يحتاج إلى ممارسة يومية عبر الاستماع والتحدث والقراءة.',
    solutions: [
      { title: 'تعلم الإنجليزية بسرعة', description: 'أفضل قنوات عربية لتعلم الإنجليزية بطريقة ممتعة وسهلة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تعلم+الإنجليزية+بسرعة+للعرب', source: 'YouTube', lang: 'ar' },
      { title: 'تطبيق Duolingo', description: 'أشهر تطبيق في العالم لتعلم اللغات بطريقة ممتعة يومياً', type: 'website', url: 'https://www.duolingo.com', source: 'Duolingo', lang: 'ar' },
      { title: 'BBC Learning English', description: 'الموقع الرسمي لـ BBC لتعلم الإنجليزية مجاناً', type: 'website', url: 'https://www.bbc.co.uk/learningenglish', source: 'BBC', lang: 'ar' },
      { title: 'EnglishClass101 — Full Course', description: 'Complete Arabic-speaker English learning system with audio lessons', type: 'website', url: 'https://www.englishclass101.com', source: 'EnglishClass101', lang: 'en' },
      { title: 'Speak English With Vanessa', description: 'Top YouTube channel to improve English speaking and fluency fast', type: 'youtube', url: 'https://www.youtube.com/@SpeakEnglishWithVanessa', source: 'YouTube', lang: 'en' },
      { title: 'HelloTalk — Talk With Natives', description: 'App to practice English with native speakers for free', type: 'website', url: 'https://www.hellotalk.com', source: 'HelloTalk', lang: 'en' },
    ]
  },
  // ===== الصحة والرياضة =====
  {
    keywords: ['رياضة', 'تمارين', 'وزن', 'تخسيس', 'نحافة', 'جسم', 'صحة', 'رجيم', 'ظهر', 'ألم', 'بطن'],
    englishKeywords: ['fitness', 'workout', 'exercise', 'weight loss', 'diet', 'gym', 'health', 'nutrition', 'back pain', 'body'],
    summary: 'الصحة الجيدة تأتي من التوازن بين التغذية السليمة والنشاط البدني المنتظم. ابدأ بخطوات صغيرة.',
    solutions: [
      { title: 'تمارين منزلية بدون معدات', description: 'دروس فيديو لأفضل التمارين التي تمارسها في البيت', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تمارين+منزلية+يومية+بدون+معدات', source: 'YouTube', lang: 'ar' },
      { title: 'موقع WebTeb الطبي', description: 'موقع طبي عربي موثوق لكل الأسئلة الصحية', type: 'website', url: 'https://www.webteb.com', source: 'WebTeb', lang: 'ar' },
      { title: 'نظام غذائي صحي', description: 'فيديوهات عن أفضل الأنظمة الغذائية المناسبة للأكل العربي', type: 'youtube', url: 'https://www.youtube.com/results?search_query=نظام+غذائي+صحي+رجيم+طبيعي', source: 'YouTube', lang: 'ar' },
      { title: 'Jeff Nippard — Science-Based Fitness', description: 'Best science-backed workout and nutrition advice on YouTube', type: 'youtube', url: 'https://www.youtube.com/@JeffNippard', source: 'YouTube', lang: 'en' },
      { title: 'MyFitnessPal — Track Calories', description: 'Best app to track your diet, calories and fitness goals', type: 'website', url: 'https://www.myfitnesspal.com', source: 'MyFitnessPal', lang: 'en' },
      { title: 'Healthline — Back Pain Relief', description: 'Trusted medical website with evidence-based health advice', type: 'website', url: 'https://www.healthline.com', source: 'Healthline', lang: 'en' },
    ]
  },
  // ===== التوتر والضغط النفسي =====
  {
    keywords: ['توتر', 'قلق', 'ضغط', 'خايف', 'مضغوط', 'محمول', 'ما عندي راحة', 'تفكير زياد', 'اكتئاب', 'حزين'],
    englishKeywords: ['stress', 'anxiety', 'depression', 'mental health', 'panic', 'overwhelmed', 'burnout', 'nervous', 'worry'],
    summary: 'التوتر والقلق من أكثر المشكلات شيوعاً. هناك تقنيات مجربة للتخلص منهما بشكل طبيعي.',
    solutions: [
      { title: 'تقنيات التخلص من التوتر', description: 'فيديوهات عملية لأفضل طرق إدارة التوتر والقلق اليومي', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تتخلص+من+التوتر+والقلق', source: 'YouTube', lang: 'ar' },
      { title: 'موقع نفسي للصحة النفسية', description: 'أول موقع عربي متخصص في الصحة النفسية والدعم', type: 'website', url: 'https://nafsee.net', source: 'نفسي', lang: 'ar' },
      { title: 'تأمل واسترخاء بالعربية', description: 'جلسات تأمل عربية موجهة للتخلص من القلق والتوتر', type: 'youtube', url: 'https://www.youtube.com/results?search_query=جلسات+تأمل+عربية+للاسترخاء', source: 'YouTube', lang: 'ar' },
      { title: 'Headspace — Meditation & Sleep', description: 'Best meditation app for stress relief, anxiety and better sleep', type: 'website', url: 'https://www.headspace.com', source: 'Headspace', lang: 'en' },
      { title: 'Andrew Huberman — Stress Control', description: 'Neuroscientist explains science-based tools to control stress instantly', type: 'youtube', url: 'https://www.youtube.com/results?search_query=Andrew+Huberman+stress+anxiety+relief', source: 'YouTube', lang: 'en' },
      { title: 'Psychology Today — Anxiety Help', description: 'Leading psychology website with expert articles on anxiety and stress', type: 'website', url: 'https://www.psychologytoday.com/us/basics/anxiety', source: 'Psychology Today', lang: 'en' },
    ]
  },
  // ===== الدراسة =====
  {
    keywords: ['دراسة', 'امتحان', 'باك', 'جامعة', 'مذاكرة', 'حفظ', 'تركيز', 'فهم', 'دروس', 'مادة'],
    englishKeywords: ['study', 'exam', 'memorize', 'focus', 'concentration', 'university', 'student', 'learn fast', 'grades'],
    summary: 'النجاح في الدراسة يعتمد على التنظيم والفهم وليس الحفظ فقط. هناك تقنيات علمية تضاعف كفاءتك.',
    solutions: [
      { title: 'تقنيات المذاكرة الفعالة', description: 'أفضل طرق الدراسة العلمية لتحقيق نتائج أفضل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تقنيات+المذاكرة+الفعالة+للطلاب', source: 'YouTube', lang: 'ar' },
      { title: 'Khan Academy بالعربي', description: 'دروس مجانية في جميع المواد الدراسية لكل المستويات', type: 'website', url: 'https://ar.khanacademy.org', source: 'Khan Academy', lang: 'ar' },
      { title: 'تقنية Pomodoro للدراسة', description: 'أشهر تقنية في العالم لإدارة الوقت أثناء الدراسة', type: 'article', url: 'https://www.google.com/search?q=تقنية+بومودورو+للدراسة', source: 'Google', lang: 'ar' },
      { title: 'Ali Abdaal — Study Techniques', description: 'Cambridge doctor shares the best science-based study methods', type: 'youtube', url: 'https://www.youtube.com/@aliabdaal', source: 'YouTube', lang: 'en' },
      { title: 'Coursera — Learning How to Learn', description: 'World famous free course on the best techniques to study and memorize', type: 'website', url: 'https://www.coursera.org/learn/learning-how-to-learn', source: 'Coursera', lang: 'en' },
      { title: 'Anki — Flashcard Memory Tool', description: 'Best free tool using spaced repetition to memorize anything fast', type: 'website', url: 'https://apps.ankiweb.net', source: 'Anki', lang: 'en' },
    ]
  },
  // ===== العمل =====
  {
    keywords: ['شغل', 'وظيفة', 'عمل', 'CV', 'سيرة ذاتية', 'مقابلة', 'توظيف', 'بطالة', 'فريلانس', 'عمل حر'],
    englishKeywords: ['job', 'career', 'resume', 'interview', 'freelance', 'remote work', 'hire', 'salary', 'LinkedIn'],
    summary: 'إيجاد العمل يتطلب سيرة ذاتية قوية وشبكة علاقات جيدة. هناك منصات عربية ودولية تساعدك.',
    solutions: [
      { title: 'كيف تكتب CV احترافي', description: 'دروس يوتيوب لكتابة سيرة ذاتية تجذب أصحاب العمل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تكتب+CV+احترافي+بالعربي', source: 'YouTube', lang: 'ar' },
      { title: 'مستقل — عمل حر عربي', description: 'أكبر منصة عربية للعمل الحر والمشاريع المستقلة', type: 'website', url: 'https://mostaql.com', source: 'مستقل', lang: 'ar' },
      { title: 'LinkedIn — شبكة مهنية', description: 'أكبر منصة مهنية في العالم لإيجاد الوظائف وبناء الشبكة', type: 'website', url: 'https://www.linkedin.com', source: 'LinkedIn', lang: 'ar' },
      { title: 'Indeed — Job Search', description: 'Largest global job search engine with millions of listings worldwide', type: 'website', url: 'https://www.indeed.com', source: 'Indeed', lang: 'en' },
      { title: 'Upwork — Freelance Work', description: 'Best platform for finding remote freelance work internationally', type: 'website', url: 'https://www.upwork.com', source: 'Upwork', lang: 'en' },
      { title: 'Jeff Su — Resume & Interview Tips', description: 'Top YouTube channel for resume writing and job interview preparation', type: 'youtube', url: 'https://www.youtube.com/@JeffSu', source: 'YouTube', lang: 'en' },
    ]
  },
  // ===== التقنية =====
  {
    keywords: ['واي فاي', 'انترنت', 'بطيء', 'هاتف', 'تلفون', 'كمبيوتر', 'لابتوب', 'شبكة'],
    englishKeywords: ['wifi', 'internet', 'slow internet', 'phone', 'laptop', 'computer', 'network', 'speed', 'tech'],
    summary: 'مشاكل الإنترنت البطيء لها حلول عملية بسيطة يمكنك تجربتها في المنزل.',
    solutions: [
      { title: 'حلول الإنترنت البطيء', description: 'فيديو شامل لأفضل الحلول العملية لتسريع الإنترنت', type: 'youtube', url: 'https://www.youtube.com/results?search_query=حلول+الإنترنت+البطيء+في+المنزل', source: 'YouTube', lang: 'ar' },
      { title: 'Fast.com — قياس السرعة', description: 'اختبر سرعة إنترنتك الحقيقية الآن', type: 'website', url: 'https://fast.com', source: 'Netflix / Fast.com', lang: 'ar' },
      { title: 'تسريع وإصلاح الهاتف', description: 'دروس لإصلاح مشاكل الهاتف الذكي وتسريعه', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تسريع+الهاتف+وحل+مشاكله', source: 'YouTube', lang: 'ar' },
      { title: 'Speedtest.net — Check Speed', description: 'Most used website to test internet speed and diagnose issues', type: 'website', url: 'https://www.speedtest.net', source: 'Speedtest', lang: 'en' },
      { title: 'Linus Tech Tips — Fix Your Network', description: 'Best YouTube channel for tech fixes, WiFi and internet problems', type: 'youtube', url: 'https://www.youtube.com/results?search_query=fix+slow+wifi+home+network+tips', source: 'YouTube', lang: 'en' },
      { title: 'How-To Geek — Tech Guides', description: 'Best English tech guide website for fixing internet and device issues', type: 'website', url: 'https://www.howtogeek.com', source: 'How-To Geek', lang: 'en' },
    ]
  },
];

// ===== محرك البحث الذكي =====
export function findSolutions(query: string): { summary: string; solutions: Solution[]; matchedIn: 'arabic' | 'english' } | null {
  const normalize = (str: string) => str.toLowerCase()
    .replace(/[أإآا]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي');

  const q = normalize(query);
  let bestMatch: ProblemEntry | null = null;
  let bestScore = 0;
  let matchedIn: 'arabic' | 'english' = 'arabic';

  for (const entry of PROBLEMS_DB) {
    let score = 0;
    let source: 'arabic' | 'english' = 'arabic';

    // بحث بالعربية
    for (const kw of entry.keywords) {
      if (q.includes(normalize(kw))) score += kw.length * 2; // أولوية أعلى للعربي
    }

    // بحث بالإنجليزية إذا لم يجد نتيجة عربية
    if (score === 0) {
      for (const kw of entry.englishKeywords) {
        if (q.includes(kw.toLowerCase())) {
          score += kw.length;
          source = 'english';
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
      matchedIn = source;
    }
  }

  if (bestScore === 0) return null;
  return { summary: bestMatch!.summary, solutions: bestMatch!.solutions, matchedIn };
}

// فتح نافذة ترجمة Google لأي محتوى
export function openTranslation(text: string) {
  const encoded = encodeURIComponent(text);
  window.open(`https://translate.google.com/?sl=en&tl=ar&text=${encoded}&op=translate`, '_blank');
}

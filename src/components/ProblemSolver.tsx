import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Loader2, Globe, Youtube, FileText, Sparkles, ArrowLeft } from 'lucide-react';
import { solveProblem, type Solution, type SolverResponse } from '../lib/gemini';
import { toast } from 'sonner';

const EXAMPLES = [
  'كيفاش نتعلم البرمجة من الصفر؟',
  'عندي مشكل في النوم بالليل',
  'بغيت نبدا مشروع صغير بميزانية محدودة',
  'كيفاش نحسن مستواي في الإنجليزية؟',
  'عندي ألم في الظهر من الجلوس الطويل',
];

const TYPE_CONFIG = {
  website: {
    icon: Globe,
    label: 'موقع إلكتروني',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  youtube: {
    icon: Youtube,
    label: 'فيديو يوتيوب',
    color: 'from-red-500 to-pink-500',
    bg: 'bg-red-500/10 border-red-500/20',
    badge: 'bg-red-500/20 text-red-300',
  },
  article: {
    icon: FileText,
    label: 'مقال',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10 border-green-500/20',
    badge: 'bg-green-500/20 text-green-300',
  },
};

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const config = TYPE_CONFIG[solution.type];
  const Icon = config.icon;

  return (
    <motion.a
      href={solution.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`glass rounded-2xl p-5 card-hover cursor-pointer block border ${config.bg}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.badge}`}>
              {config.label}
            </span>
            <span className="text-xs text-white/40">{solution.source}</span>
          </div>
          <h3 className="text-white font-bold text-base mb-1 leading-snug">{solution.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{solution.description}</p>
        </div>
        <ArrowLeft className="w-4 h-4 text-white/30 flex-shrink-0 mt-1 rotate-180" />
      </div>
    </motion.a>
  );
}

export default function ProblemSolver() {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState<SolverResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSolve = async () => {
    if (!problem.trim()) {
      toast.error('اكتب مشكلتك أولاً!');
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const res = await solveProblem(problem);
      setResult(res);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'حدث خطأ غير متوقع';
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setProblem('');
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black gradient-text mb-2">حلّال المشاكل</h1>
          <p className="text-white/50 text-lg">اكتب مشكلتك وسنجد لك أفضل الحلول 🚀</p>
        </motion.div>

        {/* Input Section */}
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="glass rounded-2xl p-1">
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && e.ctrlKey && handleSolve()}
                  placeholder="مثلاً: كيفاش نتعلم البرمجة من الصفر؟"
                  className="w-full bg-transparent p-4 text-white placeholder:text-white/30 resize-none outline-none text-base min-h-[130px] leading-relaxed"
                  dir="auto"
                />
              </div>

              {/* Examples */}
              <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setProblem(ex)}
                    className="text-xs px-3 py-1.5 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {ex}
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSolve}
                disabled={isLoading}
                className="w-full py-4 rounded-2xl btn-primary text-white font-black text-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {isLoading ? (
                  <><Loader2 className="w-6 h-6 animate-spin" /> جاري البحث عن الحلول...</>
                ) : (
                  <><Search className="w-6 h-6" /> ابحث عن حل 🔍</>
                )}
              </motion.button>
              <p className="text-center text-white/30 text-xs">Ctrl + Enter للإرسال السريع</p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5"
            >
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-5 border border-indigo-500/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-indigo-300 font-bold">ملخص الحل</h2>
                </div>
                <p className="text-white/80 leading-relaxed text-base">{result.summary}</p>
              </motion.div>

              {/* Solutions */}
              <div className="space-y-3">
                {result.solutions.map((solution, i) => (
                  <SolutionCard key={i} solution={solution} index={i} />
                ))}
              </div>

              {/* Reset Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReset}
                className="w-full py-3 rounded-2xl glass text-white/70 hover:text-white font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Brain className="w-5 h-5" />
                مشكلة جديدة
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

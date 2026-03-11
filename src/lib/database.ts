export interface Solution {
  title: string;
  description: string;
  type: 'website' | 'youtube' | 'article';
  url: string;
  source: string;
}

export interface ProblemEntry {
  keywords: string[];
  summary: string;
  solutions: Solution[];
}

export const PROBLEMS_DB: ProblemEntry[] = [
  // ===== تعلم البرمجة =====
  {
    keywords: ['برمجة', 'بغيت نتعلم', 'كيفاش نتعلم', 'كود', 'تطوير', 'developer', 'programming', 'coding', 'مبتدئ'],
    summary: 'تعلم البرمجة يبدأ باختيار لغة مناسبة للمبتدئين مثل Python أو JavaScript. هناك موارد مجانية ممتازة باللغة العربية.',
    solutions: [
      { title: 'أكاديمية حسوب — تعلم البرمجة بالعربي', description: 'أفضل موقع عربي لتعلم البرمجة من الصفر بمحتوى احترافي', type: 'website', url: 'https://academy.hsoub.com', source: 'حسوب' },
      { title: 'Elzero Web School — دروس مجانية', description: 'قناة يوتيوب عربية متخصصة في تعليم البرمجة من الصفر', type: 'youtube', url: 'https://www.youtube.com/@ElzeroWebSchool', source: 'YouTube' },
      { title: 'تعلم البرمجة للمبتدئين', description: 'بحث يوتيوب شامل لكل دروس البرمجة بالعربية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تعلم+البرمجة+للمبتدئين+بالعربي', source: 'YouTube' },
      { title: 'freeCodeCamp بالعربي', description: 'موقع عالمي مجاني لتعلم البرمجة مع شهادات معترف بها', type: 'website', url: 'https://www.freecodecamp.org/arabic', source: 'freeCodeCamp' },
      { title: 'خارطة طريق المبرمج المبتدئ', description: 'مقال شامل يشرح كيف تبدأ رحلتك في البرمجة خطوة بخطوة', type: 'article', url: 'https://www.google.com/search?q=خارطة+طريق+تعلم+البرمجة+للمبتدئين', source: 'Google' },
      { title: 'مجتمع Stack Overflow بالعربي', description: 'أكبر مجتمع للمبرمجين للأسئلة والأجوبة التقنية', type: 'website', url: 'https://ar.stackoverflow.com', source: 'Stack Overflow' },
    ]
  },
  // ===== النوم =====
  {
    keywords: ['نوم', 'أرق', 'ما ننعس', 'صحيان', 'ما نقدرش ننام', 'نعاس', 'تعب', 'إرهاق', 'نعيس'],
    summary: 'مشاكل النوم شائعة جداً وغالباً سببها التوتر أو الشاشات قبل النوم. هناك حلول بسيطة وفعالة.',
    solutions: [
      { title: 'تقنيات النوم العميق والسريع', description: 'فيديو شامل يشرح أفضل الطرق للنوم بسرعة وجودة عالية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تنام+بسرعة+وبعمق', source: 'YouTube' },
      { title: 'مشاكل النوم وعلاجها', description: 'بحث فيديوهات متخصصة في علاج الأرق واضطرابات النوم', type: 'youtube', url: 'https://www.youtube.com/results?search_query=علاج+الأرق+واضطرابات+النوم', source: 'YouTube' },
      { title: 'WebMD بالعربي — الأرق', description: 'موقع طبي موثوق يشرح أسباب وعلاج مشاكل النوم', type: 'website', url: 'https://www.webteb.com/articles/أسباب-الأرق', source: 'WebTeb' },
      { title: 'تطبيق Calm للاسترخاء', description: 'أفضل تطبيق للتأمل والنوم العميق', type: 'website', url: 'https://www.calm.com', source: 'Calm' },
      { title: 'نصائح لتحسين جودة النوم', description: 'مقال طبي متخصص في أفضل العادات لنوم صحي', type: 'article', url: 'https://www.google.com/search?q=نصائح+لتحسين+جودة+النوم+طبياً', source: 'Google' },
      { title: 'تمارين التنفس للنوم', description: 'فيديو تعليمي لتقنية 4-7-8 للنوم خلال دقيقة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تمارين+تنفس+للنوم+السريع', source: 'YouTube' },
    ]
  },
  // ===== المال والأعمال =====
  {
    keywords: ['مشروع', 'بيزنس', 'ربح', 'فلوس', 'كاش', 'مال', 'أعمال', 'تجارة', 'بغيت نربح', 'ميزانية', 'استثمار', 'خسارة'],
    summary: 'بدء مشروع صغير يتطلب فكرة واضحة، تخطيط مالي، وتسويق ذكي. هناك موارد عربية ممتازة لمساعدتك.',
    solutions: [
      { title: 'ريادة الأعمال للمبتدئين', description: 'قناة عربية متخصصة في كيفية بدء المشاريع الصغيرة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تبدأ+مشروعك+الخاص+من+الصفر', source: 'YouTube' },
      { title: 'موقع رواد الأعمال', description: 'أكبر موقع عربي متخصص في ريادة الأعمال والمشاريع', type: 'website', url: 'https://www.raieda.com', source: 'رواد الأعمال' },
      { title: 'أفكار مشاريع بميزانية صغيرة', description: 'مقال يقدم أفضل أفكار المشاريع التي تبدأ بأقل من 1000 درهم', type: 'article', url: 'https://www.google.com/search?q=أفكار+مشاريع+صغيرة+بميزانية+محدودة+2024', source: 'Google' },
      { title: 'كورس إدارة المال الشخصي', description: 'تعلم كيف تدير أموالك وتوفر وتستثمر بذكاء', type: 'youtube', url: 'https://www.youtube.com/results?search_query=إدارة+المال+الشخصي+بالعربي', source: 'YouTube' },
      { title: 'Udemy — كورسات الأعمال', description: 'أفضل الكورسات العالمية في ريادة الأعمال والتسويق', type: 'website', url: 'https://www.udemy.com/courses/business/', source: 'Udemy' },
      { title: 'تجارب ريادة الأعمال العربية', description: 'قصص نجاح رواد أعمال عرب وكيف بدأوا من الصفر', type: 'article', url: 'https://www.google.com/search?q=قصص+نجاح+رواد+أعمال+عرب+من+الصفر', source: 'Google' },
    ]
  },
  // ===== اللغة الإنجليزية =====
  {
    keywords: ['إنجليزية', 'إنجليزي', 'لغة', 'english', 'تحسين', 'كلام', 'نطق', 'لفظ', 'مستواي', 'محادثة'],
    summary: 'تحسين اللغة الإنجليزية يحتاج إلى ممارسة يومية منتظمة عبر الاستماع والتحدث والقراءة.',
    solutions: [
      { title: 'English with Saber — قناة عربية', description: 'أفضل قناة عربية لتعلم الإنجليزية بطريقة ممتعة وسهلة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تعلم+الإنجليزية+بسرعة+للعرب', source: 'YouTube' },
      { title: 'تطبيق Duolingo', description: 'أشهر تطبيق في العالم لتعلم اللغات بطريقة ممتعة يومياً', type: 'website', url: 'https://www.duolingo.com', source: 'Duolingo' },
      { title: 'BBC Learning English', description: 'الموقع الرسمي لـ BBC لتعلم الإنجليزية مجاناً بمستويات مختلفة', type: 'website', url: 'https://www.bbc.co.uk/learningenglish', source: 'BBC' },
      { title: 'تحسين النطق الإنجليزي', description: 'دروس متخصصة في تحسين النطق والتحدث بثقة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تحسين+النطق+الإنجليزي+للعرب', source: 'YouTube' },
      { title: 'خطة تعلم الإنجليزية في 3 أشهر', description: 'مقال يشرح خطة محددة لتحسين مستواك بسرعة', type: 'article', url: 'https://www.google.com/search?q=خطة+تعلم+الإنجليزية+في+3+أشهر', source: 'Google' },
      { title: 'HelloTalk — تحدث مع ناطقين', description: 'تطبيق يربطك بناطقين باللغة الإنجليزية للتحادث مجاناً', type: 'website', url: 'https://www.hellotalk.com', source: 'HelloTalk' },
    ]
  },
  // ===== الصحة والرياضة =====
  {
    keywords: ['رياضة', 'تمارين', 'وزن', 'تخسيس', 'نحافة', 'جسم', 'صحة', 'رجيم', 'diet', 'gym', 'ظهر', 'ألم', 'بطن'],
    summary: 'الصحة الجيدة تأتي من التوازن بين التغذية السليمة والنشاط البدني المنتظم. ابدأ بخطوات صغيرة.',
    solutions: [
      { title: 'تمارين منزلية بدون معدات', description: 'دروس فيديو لأفضل التمارين التي تمارسها في البيت', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تمارين+منزلية+يومية+بدون+معدات', source: 'YouTube' },
      { title: 'نظام غذائي صحي للعرب', description: 'فيديوهات عن أفضل الأنظمة الغذائية المناسبة للأكل العربي', type: 'youtube', url: 'https://www.youtube.com/results?search_query=نظام+غذائي+صحي+رجيم+طبيعي', source: 'YouTube' },
      { title: 'موقع WebTeb الطبي', description: 'موقع طبي عربي موثوق لكل الأسئلة الصحية', type: 'website', url: 'https://www.webteb.com', source: 'WebTeb' },
      { title: 'تطبيق MyFitnessPal', description: 'أفضل تطبيق لتتبع السعرات الحرارية والنظام الغذائي', type: 'website', url: 'https://www.myfitnesspal.com', source: 'MyFitnessPal' },
      { title: 'علاج ألم الظهر من الجلوس', description: 'مقال طبي يشرح أسباب وعلاج آلام الظهر الناتجة عن الجلوس الطويل', type: 'article', url: 'https://www.google.com/search?q=علاج+ألم+الظهر+من+الجلوس+الطويل', source: 'Google' },
      { title: 'حساب مؤشر كتلة الجسم', description: 'احسب وزنك المثالي واعرف ما يناسبك من نظام غذائي', type: 'website', url: 'https://www.calculator.net/bmi-calculator.html', source: 'Calculator.net' },
    ]
  },
  // ===== التوتر والضغط النفسي =====
  {
    keywords: ['توتر', 'قلق', 'ضغط', 'stress', 'anxiety', 'خايف', 'مضغوط', 'محمول', 'ما عندي راحة', 'تفكير زياد', 'اكتئاب', 'حزين'],
    summary: 'التوتر والقلق من أكثر المشكلات شيوعاً. هناك تقنيات مجربة للتخلص منهما بشكل طبيعي.',
    solutions: [
      { title: 'تقنيات التخلص من التوتر', description: 'فيديوهات عملية لأفضل طرق إدارة التوتر والقلق اليومي', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تتخلص+من+التوتر+والقلق', source: 'YouTube' },
      { title: 'تأمل وتنفس لتهدئة الأعصاب', description: 'جلسات تأمل موجهة باللغة العربية لتهدئة العقل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تأمل+عربي+للاسترخاء+وتهدئة+الأعصاب', source: 'YouTube' },
      { title: 'موقع نفسي — الصحة النفسية', description: 'أول موقع عربي متخصص في الصحة النفسية والدعم', type: 'website', url: 'https://nafsee.net', source: 'نفسي' },
      { title: 'تطبيق Headspace', description: 'تطبيق عالمي للتأمل اليومي يساعد على التخلص من التوتر', type: 'website', url: 'https://www.headspace.com', source: 'Headspace' },
      { title: 'أسباب القلق وعلاجه طبياً', description: 'مقال شامل يشرح أسباب القلق وأفضل طرق علاجه', type: 'article', url: 'https://www.google.com/search?q=أسباب+القلق+وعلاجه+بدون+دواء', source: 'Google' },
      { title: 'كيف تفكر بإيجابية', description: 'فيديو تحفيزي عربي عن التفكير الإيجابي وتغيير المزاج', type: 'youtube', url: 'https://www.youtube.com/results?search_query=التفكير+الإيجابي+وإدارة+المشاعر', source: 'YouTube' },
    ]
  },
  // ===== الإنترنت والتقنية =====
  {
    keywords: ['واي فاي', 'انترنت', 'بطيء', 'wifi', 'إنترنت', 'اتصال', 'شبكة', 'هاتف', 'تلفون', 'كمبيوتر', 'لابتوب', 'بطيئ'],
    summary: 'مشاكل الإنترنت البطيء لها حلول عملية بسيطة يمكنك تجربتها في المنزل.',
    solutions: [
      { title: 'حلول الإنترنت البطيء', description: 'فيديو شامل لأفضل الحلول العملية لتسريع الإنترنت', type: 'youtube', url: 'https://www.youtube.com/results?search_query=حلول+الإنترنت+البطيء+في+المنزل', source: 'YouTube' },
      { title: 'موقع fast.com لقياس السرعة', description: 'اختبر سرعة إنترنتك الحقيقية الآن', type: 'website', url: 'https://fast.com', source: 'Netflix' },
      { title: 'تسريع الهاتف وإصلاح مشاكله', description: 'دروس لإصلاح مشاكل الهاتف الذكي وتسريعه', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تسريع+الهاتف+وإصلاح+المشاكل', source: 'YouTube' },
      { title: 'موقع Speedtest', description: 'أشهر موقع لقياس سرعة الإنترنت وتشخيص المشاكل', type: 'website', url: 'https://www.speedtest.net', source: 'Speedtest' },
      { title: 'إصلاح مشاكل الواي فاي', description: 'مقال تقني يشرح خطوات استكشاف أخطاء الشبكة وإصلاحها', type: 'article', url: 'https://www.google.com/search?q=كيفية+إصلاح+مشاكل+الواي+فاي+في+المنزل', source: 'Google' },
      { title: 'نصائح أمان الإنترنت', description: 'كيف تحمي نفسك من الاختراق والفيروسات أونلاين', type: 'article', url: 'https://www.google.com/search?q=نصائح+أمان+الإنترنت+للمبتدئين', source: 'Google' },
    ]
  },
  // ===== الطبخ والأكل =====
  {
    keywords: ['طبخ', 'أكل', 'وصفة', 'طاجين', 'كوزكوز', 'حريرة', 'بسطيلة', 'مطبخ', 'طعام', 'وجبة', 'عشاء', 'غداء'],
    summary: 'تعلم الطبخ ممتع ومفيد. هناك قنوات عربية رائعة تعلمك الوصفات خطوة بخطوة.',
    solutions: [
      { title: 'وصفات مغربية سهلة', description: 'أفضل قنوات الطبخ المغربي مع شرح واضح للمبتدئين', type: 'youtube', url: 'https://www.youtube.com/results?search_query=وصفات+مغربية+سهلة+للمبتدئين', source: 'YouTube' },
      { title: 'موقع كل يوم', description: 'أشهر موقع طبخ عربي بآلاف الوصفات المجربة', type: 'website', url: 'https://www.couscous.ma', source: 'Couscous.ma' },
      { title: 'قناة سيدتي للطبخ', description: 'قناة يوتيوب شاملة لكل الوصفات العربية والمغربية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=وصفات+طبخ+عربية+سهلة+سريعة', source: 'YouTube' },
      { title: 'موقع طبخي', description: 'موقع وصفات عربي شامل بتصنيفات واضحة', type: 'website', url: 'https://www.tabkhي.com', source: 'طبخي' },
      { title: 'نصائح الطبخ للمبتدئين', description: 'مقال يشرح أهم أسرار الطبخ الناجح للمبتدئين', type: 'article', url: 'https://www.google.com/search?q=نصائح+الطبخ+للمبتدئين+أسرار+المطبخ', source: 'Google' },
      { title: 'وصفات سريعة في 30 دقيقة', description: 'فيديوهات لأسرع الوجبات اللذيذة للأيام المشغولة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=وصفات+سريعة+30+دقيقة+لذيذة', source: 'YouTube' },
    ]
  },
  // ===== العمل والوظيفة =====
  {
    keywords: ['شغل', 'وظيفة', 'عمل', 'خدمة', 'CV', 'سيرة ذاتية', 'مقابلة', 'توظيف', 'بطالة', 'راتب', 'فريلانس', 'عمل حر'],
    summary: 'إيجاد العمل يتطلب سيرة ذاتية قوية وشبكة علاقات جيدة. هناك منصات عربية ودولية تساعدك.',
    solutions: [
      { title: 'كيف تكتب CV احترافي', description: 'دروس يوتيوب لكتابة سيرة ذاتية تجذب أصحاب العمل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تكتب+CV+احترافي+بالعربي', source: 'YouTube' },
      { title: 'موقع LinkedIn', description: 'أكبر منصة مهنية في العالم لإيجاد الوظائف وبناء الشبكة', type: 'website', url: 'https://www.linkedin.com', source: 'LinkedIn' },
      { title: 'موقع Bayt للوظائف العربية', description: 'أكبر موقع وظائف في الشرق الأوسط وشمال أفريقيا', type: 'website', url: 'https://www.bayt.com', source: 'Bayt' },
      { title: 'نصائح مقابلة العمل', description: 'فيديوهات تعلمك كيف تنجح في أي مقابلة عمل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=نصائح+مقابلة+العمل+وكيف+تنجح', source: 'YouTube' },
      { title: 'العمل الحر للعرب', description: 'دليل شامل لبدء العمل الحر وإيجاد العملاء عبر الإنترنت', type: 'article', url: 'https://www.google.com/search?q=دليل+العمل+الحر+للعرب+المبتدئين', source: 'Google' },
      { title: 'منصة مستقل للعمل الحر', description: 'أكبر منصة عربية للعمل الحر والمشاريع المستقلة', type: 'website', url: 'https://mostaql.com', source: 'مستقل' },
    ]
  },
  // ===== الدراسة والتعليم =====
  {
    keywords: ['دراسة', 'امتحان', 'باك', 'bac', 'جامعة', 'مذاكرة', 'حفظ', 'تركيز', 'فهم', 'دروس', 'مادة'],
    summary: 'النجاح في الدراسة يعتمد على التنظيم والفهم وليس الحفظ فقط. هناك تقنيات علمية تضاعف كفاءتك.',
    solutions: [
      { title: 'تقنيات المذاكرة الفعالة', description: 'أفضل طرق الدراسة العلمية لتحقيق نتائج أفضل', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تقنيات+المذاكرة+الفعالة+للطلاب', source: 'YouTube' },
      { title: 'موقع Khan Academy بالعربي', description: 'دروس مجانية في جميع المواد الدراسية لكل المستويات', type: 'website', url: 'https://ar.khanacademy.org', source: 'Khan Academy' },
      { title: 'تحسين التركيز والانتباه', description: 'فيديوهات علمية لكيفية تحسين التركيز أثناء الدراسة', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تحسن+تركيزك+في+الدراسة', source: 'YouTube' },
      { title: 'تقنية Pomodoro للدراسة', description: 'أشهر تقنية في العالم لإدارة الوقت أثناء الدراسة', type: 'article', url: 'https://www.google.com/search?q=تقنية+بومودورو+للدراسة+كيفية+التطبيق', source: 'Google' },
      { title: 'موقع Coursera التعليمي', description: 'أفضل كورسات من أكبر جامعات العالم مجاناً', type: 'website', url: 'https://www.coursera.org', source: 'Coursera' },
      { title: 'كيف تحفظ بسرعة وتذكر أكثر', description: 'تقنيات علمية مجربة لتحسين الذاكرة والحفظ السريع', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تحفظ+بسرعة+وتحسن+ذاكرتك', source: 'YouTube' },
    ]
  },
  // ===== العلاقات والزواج =====
  {
    keywords: ['زواج', 'علاقة', 'حب', 'خطوبة', 'عائلة', 'أهل', 'مشاكل عائلية', 'طلاق', 'أصدقاء', 'صداقة', 'وحدة'],
    summary: 'العلاقات الصحية تبنى على التواصل الصريح والاحترام المتبادل. هناك موارد تساعدك على تحسين علاقاتك.',
    solutions: [
      { title: 'تحسين العلاقات الأسرية', description: 'فيديوهات نفسية متخصصة في تحسين العلاقات العائلية', type: 'youtube', url: 'https://www.youtube.com/results?search_query=تحسين+العلاقات+الأسرية+والتواصل', source: 'YouTube' },
      { title: 'موقع زواجي', description: 'موقع عربي متخصص في الزواج والعلاقات الزوجية', type: 'website', url: 'https://www.zawajy.com', source: 'زواجي' },
      { title: 'الذكاء العاطفي في العلاقات', description: 'كيف تتعامل مع مشاكل العلاقات بذكاء عاطفي', type: 'youtube', url: 'https://www.youtube.com/results?search_query=الذكاء+العاطفي+في+العلاقات', source: 'YouTube' },
      { title: 'موقع نفسي للاستشارات', description: 'موقع عربي للاستشارات النفسية والعلاقاتية', type: 'website', url: 'https://nafsee.net', source: 'نفسي' },
      { title: 'كتب تحسين العلاقات', description: 'أفضل الكتب العربية والمترجمة في موضوع العلاقات الإنسانية', type: 'article', url: 'https://www.google.com/search?q=أفضل+كتب+تحسين+العلاقات+الإنسانية', source: 'Google' },
      { title: 'كيف تتعامل مع الخلافات', description: 'تقنيات عملية لحل الخلافات وتجنب الصراعات', type: 'youtube', url: 'https://www.youtube.com/results?search_query=كيف+تحل+الخلافات+وتتجنب+الصراعات', source: 'YouTube' },
    ]
  },
];

// ===== محرك البحث بالكلمات المفتاحية =====
export function findSolutions(query: string): { summary: string; solutions: Solution[] } | null {
  const normalizedQuery = query.toLowerCase()
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ةه]/g, 'ه')
    .replace(/[يى]/g, 'ي');

  let bestMatch: ProblemEntry | null = null;
  let bestScore = 0;

  for (const entry of PROBLEMS_DB) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword.toLowerCase()
        .replace(/[أإآا]/g, 'ا')
        .replace(/[ةه]/g, 'ه')
        .replace(/[يى]/g, 'ي');
      if (normalizedQuery.includes(normalizedKeyword)) {
        score += normalizedKeyword.length; // كلمات أطول = وزن أعلى
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestScore === 0) return null;
  return { summary: bestMatch!.summary, solutions: bestMatch!.solutions };
}

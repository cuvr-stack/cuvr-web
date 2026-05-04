export type Lang = "en" | "ar";

const t = {
  en: {
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      testimonials: "Testimonials",
      booking: "Booking",
      login: "Login",
      getStarted: "Get Started",
    },

    footer: {
      tagline:
        "CUVR Spatial Systems is a clinical-grade physical therapy with immersive virtual reality. Heal faster with spatial precision.",
      dhaLicensed: "DHA Licensed",
      explore: "Explore",
      services: "Services",
      visitContact: "Visit & Contact",
      resources: "Resources",
      home: "Home",
      bookSession: "Book a Session",
      support: "Support",
      neuroKinetic: "Neuro-Kinetic Sync",
      postTrauma: "Post-Trauma Elasticity",
      hyperPerformance: "Hyper-Performance Tuning",
      spatialProtocol: "Spatial Recovery Protocol",
      helpCenter: "Help Center",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      address: "Building 64, Block E\nDubai Healthcare City\nP.O. Box 505276, Dubai, UAE",
      hours: "Mon – Fri: 8:00 – 18:00 GST\nSat: 10:00 – 16:00 GST",
      copyright: "© {year} CUVR Spatial Systems · Beyond Physical",
      langLabel: "EN",
    },

    home: {
      badge: "Rehabilitation Reimagined",
      heroTitle1: "The Future of",
      heroHighlight: "Recovery",
      heroTitle2: "is Spatial",
      heroBody:
        "Experience a revolutionary blend of clinical physical therapy and immersive VR technology. Heal faster, stay motivated, and track every movement with surgical precision.",
      startJourney: "Start Your Journey",
      watchExperience: "Watch the Experience",

      futureBadge: "Future of Healing",
      whySpatialTitle: "Why Spatial Therapy?",
      whySpatialBody:
        "Beyond flat screens and basic exercises. CUVR creates a 360-degree ecosystem where movement is play, and progress is visceral.",
      neuralImmersionTitle: "Neural Immersion",
      neuralImmersionBody:
        "Engage your brain's proprioceptive pathways with environments designed to rewrite pain signals and accelerate coordination.",
      biometricsTitle: "Real-time Biometrics",
      biometricsBody:
        "Visualize your progress with spatial data overlays. See your range of motion, muscle engagement, and heart rate in your field of view.",
      gamifiedTitle: "Gamified Recovery",
      gamifiedBody:
        "Transform rehabilitation into a quest. Earn rewards, conquer challenges, and find your flow state in beautifully rendered VR worlds.",
      fasterRecovery: "Faster Recovery",
      userRetention: "User Retention",
      expertSupport: "Expert Support",

      methodologyBadge: "The Methodology",
      cuvrProtocol: "The CUVR Protocol",
      protocolActive: "Protocol Active",
      protocolStatus:
        "Real-time spatial mapping initialized. 98% tracking accuracy achieved.",
      phase1Title: "Phase 1: Calibrate",
      phase1Body:
        "Precision scanning of current mobility levels and pain thresholds to create a unique biomechanical baseline.",
      phase2Title: "Phase 2: Immerse",
      phase2Body:
        "Guided sessions within neural-optimized VR landscapes that encourage rhythmic movement and focused effort.",
      phase3Title: "Phase 3: Evolve",
      phase3Body:
        "Continuous adaptation of difficulty and environment complexity as your physical and neural pathways strengthen.",

      patientSuccess: "Patient Success",
      patientSuccessBody:
        "Real stories from the edge of sensory-enhanced recovery.",
      quote1:
        "I was told I'd never regain full mobility. Three months with CUVR and I'm back on the court. The visuals kept me coming back.",
      quote2:
        "CUVR turned my recovery into a game. The biofeedback data was so motivating for my surgeon too. Highly recommended.",
      quote3:
        "Being immersed in a calm VR forest while doing leg extensions made the difficult movements feel almost effortless.",
      proAthlete: "Pro Athlete",
      uxEngineer: "UX Engineer",
      retiredEducator: "Retired Educator",

      ctaTitle1: "Enter the",
      ctaHighlight: "Future",
      ctaBody:
        "Are you ready to transcend traditional physical therapy? Join the elite group of users defining the next generation of recovery.",
      emailPlaceholder: "Enter your email address",
      getEarlyAccess: "Get Early Access",
    },

    howItWorks: {
      pioneeringBadge: "Pioneering Clinical VR",
      scienceTitle: "The Science of",
      scienceHighlight: "Recovery",
      heroBody:
        "Experience physical therapy reimagined through immersive spatial computing. We combine clinical expertise with high-end VR gaming technology to accelerate your healing journey.",
      startJourney: "Start Your Journey",
      watchOverview: "Watch Overview",

      processFlow: "Process Flow",
      patientJourney: "The Patient Journey",
      journeyBody:
        "From your first touchpoint to your final milestone, our data-driven path ensures precision at every degree of motion.",
      spatialAssessmentTitle: "Spatial Assessment",
      spatialAssessmentBody:
        "Advanced 3D body mapping captures 50,000+ data points. Proprietary algorithms establish your baseline.",
      personalizedProtocolTitle: "Personalized Protocol",
      personalizedProtocolBody:
        "AI-generated routines tailored to your specific recovery goals, injury type, and mobility milestones.",
      immersiveSessionTitle: "Immersive Session",
      immersiveSessionBody:
        "Engagement-focused VR environments that turn your exercises into epic quests throughout your healing journey.",
      biometricAnalyticsTitle: "Biometric Analytics",
      biometricAnalyticsBody:
        "Real-time feedback loops ensure motion accuracy, muscle engagement, and cardio performance tracking.",

      spatialEcosystem: "Spatial Ecosystem",
      techTitle: "Next-Gen Interface for\nHuman Movement",
      subMillimeterTitle: "Sub-Millimeter Tracking",
      subMillimeterBody:
        "Precision sensors monitor every subtle movement with microsecond-level accuracy for biomechanical perfection.",
      hapticTitle: "Haptic Bio-Feedback",
      hapticBody:
        "Tactile sensory cues guide your body through the physical rehabilitation in perfect synchronization.",
      liveFeedbackTitle: "Live Session Feedback",
      liveFeedbackBody:
        "TFM Datasync Interface tracks all metrics in real-time for instant coaching adjustments.",
      activeTracking: "● Active Tracking: 99%",

      clinicalIntegrity: "Clinical Integrity",
      precisionTitle: "Clinical Precision in Every Pixel",
      precisionBody:
        "Our protocols are developed in collaboration with leading orthopedic experts. Every VR environment is calibrated to stimulate specific muscle groups and recovery pathways.",
      evidenceTitle: "Evidence Based",
      evidenceBody:
        "Protocols validated through clinical trials with leading physical therapy research institutions.",
      hipaaTitle: "HIPAA Secure",
      hipaaBody:
        "Enterprise-grade encryption ensures your personal data remains confidential and secure always.",
      dataAccuracy: "Data Accuracy",

      readyTitle: "Ready to Evolve?",
      readyBody:
        "Take the first step toward a faster, smarter, and more engaging recovery. Our clinical team is ready to meet you exactly where you are.",
      bookAssessment: "Book Your Assessment",
      contactSupport: "Contact Clinical Support",
    },

    services: {
      servicesBadge: "Services & Infrastructure",
      heroTitle1: "Spatial",
      heroHighlight: "Precision",
      heroTitle2: "Therapy.",
      heroBody:
        "Clinical-grade recovery, reimagined inside immersive spatial environments. We don't just treat symptoms — we reprogram movement in 3D space.",
      bookAssessment: "Book Assessment",
      watchDemo: "Watch Demo",
      fdaProtocols: "FDA-aligned protocols",
      hipaaSecure: "HIPAA secure",
      subLatency: "Sub-5ms latency",
      scroll: "Scroll",

      channelsTitle: "Precision Recovery Channels",
      channelsBody:
        "Clinical-grade recovery protocols deployed through our proprietary spatial computing framework.",
      channel01: "Channel 01",
      channel02: "Channel 02",
      channel03: "Channel 03",
      neuroTitle: "Neuro-Kinetic Sync",
      neuroBody:
        "Aligning neural pathways with physical execution through real-time biofeedback and spatial anchors.",
      postTraumaTitle: "Post-Trauma Elasticity",
      postTraumaBody:
        "Specialized protocols for regaining mobility and tissue resilience in a controlled, immersive environment.",
      hyperTitle: "Hyper-Performance Tuning",
      hyperBody:
        "Optimising peak performance metrics for elite athletes through high-fidelity spatial analysis.",
      exploreModality: "Explore Modality →",

      kineticBadge: "Neural Optimization",
      kineticTitle: "Kinetic Performance Modalities",
      kineticBody:
        "Foundational movement reprogramming designed for physical restoration and structural integrity.",
      cognitiveTitle: "Cognitive Rehabilitation",
      cognitiveBody:
        "Restoring cognitive function through gamified spatial challenges that bridge thought and action.",
      mentalHealthTitle: "Mental Health & Wellness",
      mentalHealthBody:
        "Immersive environments designed to reduce cortisol levels and facilitate deep neural relaxation.",
      adhdTitle: "ADHD & Focus Enhancement",
      adhdBody:
        "Strengthening attentional control through curated sensory feedback loops and spatial tasks.",

      backbone: "The Backbone",
      infraTitle: "Technological Infrastructure",
      lidarTitle: "LiDAR Bio-Mapping",
      lidarBody:
        "Millimeter-precise skeleton tracking that monitors joint alignment and weight distribution in a 360° volume.",
      neuralCloudTitle: "Neural Cloud Sync",
      neuralCloudBody:
        "Edge-computing infrastructure ensuring sub-5ms latency for perfectly synchronized haptic feedback.",
      biometricLedgerTitle: "Biometric Ledger",
      biometricLedgerBody:
        "Secure, high-integrity data vault tracking your recovery progress through thousands of session data points.",
      systemCore: "System Core: CUVR-1S",
      omniTitle: "Omni-Immersive\nFeedback System",
      omniBody:
        "Our flagship hardware integration utilizes ultrasonic haptics and spatial audio to provide real-time tactile cues for body positioning.",
      k4Eye: "4K per Eye",
      hz120: "120Hz Refresh",

      clinicalValidation: "Clinical Validation",
      excellenceTitle: "Excellence.",
      excellenceBody:
        "Our methodology isn't just advanced—it's validated. By merging spatial data with clinical science, we redefine the architecture of human recovery.",
      readClinical: "Read Clinical Paper",
      stat98Label:
        "Long-term tracking shows maintenance of ROM milestones post-treatment cycle.",
      stat40Label:
        "Spatial feedback drives movement adaptation, cutting clinical session significantly.",

      readyTitle: "Ready to",
      readyHighlight: "Evolve?",
      readyBody:
        "Join the next generation of recovery. Secure your spatial assessment slot today and experience the future of motion.",
      startOnboarding: "Start Onboarding",
      requestCallback: "Request Specialist Callback",
    },

    booking: {
      recoveryAwaits: "Your Recovery Awaits",
      heroTitle1: "Start Your",
      heroHighlight: "Recovery Journey",
      heroBody:
        "Experience physical therapy reimagined. Our clinical team will craft a personalized VR protocol tailored to your specific recovery goals.",
      bookAssessment: "Book Your Assessment",
      scheduleCall: "Schedule Call",

      consultationBadge: "Consultation",
      consultationTitle: "Request a Consultation",
      consultationBody:
        "Our clinical team will evaluate your specific recovery needs and create a customized VR therapy protocol designed for you.",
      clinicalPrecisionTitle: "Clinical Precision",
      clinicalPrecisionBody:
        "Expert physiotherapists design your unique recovery pathway.",
      assessmentTitle: "30-Minute Assessment",
      assessmentBody:
        "Quick evaluation to understand your recovery stage and goals.",
      bookFreeAssessment: "Book Your Free Assessment",

      whatToExpectBadge: "What to Expect",
      assessmentExperience: "Your Assessment Experience",
      assessmentExperienceBody:
        "Here's what happens during your personalized consultation and initial VR experience.",
      spatialMappingTitle: "Spatial Mapping",
      spatialMappingBody:
        "We map your body in 3D space with millimeter precision.",
      motionCaptureTitle: "Motion Capture",
      motionCaptureBody:
        "Real-time tracking of your movement patterns and progress.",
      customPlanTitle: "Custom Plan",
      customPlanBody:
        "Personalized therapy protocol built just for your recovery.",
      dataSyncTitle: "Data Synchronize",
      dataSyncBody: "All metrics integrated for complete progress tracking.",

      locationBadge: "Location",
      visitHub: "Visit Our Hub",
      locationLabel: "Location",
      locationAddress: "Aliyah By Azizi\n310\nHealthcare City, Dubai",
      hoursLabel: "Hours & Contact",
      hours:
        "Mon – Fri: 8:00 AM – 6:00 PM GST\nSat: 10:00 AM – 4:00 PM GST",
      callUs: "Call Us",
      emailUs: "Email Us",
      directions: "Directions",
    },

    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      reasonForVisit: "Reason for Visit",
      scheduleSession: "Schedule My Session",
      scheduling: "Scheduling…",
      requestReceived: "Request received",
      thankYouMessage:
        "Thanks, {name} — our clinical team will reach out within 2 business hours to confirm your consultation.",
      bookAnother: "Book another session →",
      responseTime:
        "Our clinical team typically responds within 2 business hours.",
      errorName: "Please enter your name.",
      errorEmail: "Please enter your email.",
      errorEmailInvalid: "Please enter a valid email address.",
      errorPhone: "Please enter a valid phone number.",
      reasons: [
        "General Physiotherapy Assessment",
        "Post-Surgical Recovery",
        "Chronic Pain Management",
        "Sports Performance",
        "Neurological Rehabilitation",
      ],
    },

    disclaimer: {
      /* ── Dismissible first-visit banner ── */
      bannerTitle: "Medical & Regulatory Notice",
      bannerBody:
        "CUVR services are regulated by the Dubai Health Authority (DHA). The information on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before beginning any rehabilitation programme. For medical emergencies call 998.",
      bannerAccept: "I Understand",
      bannerLearnMore: "Full Disclaimer",

      /* ── Footer regulatory strip ── */
      regulatoryTitle: "Regulatory & Compliance",
      licenseLabel: "DHA License",
      licenseNumber: "DHA-XXXXX",           // replace with real number
      nabidh: "NABIDH Integrated",
      pdpl: "UAE PDPL Compliant",
      hipaa: "HIPAA Aligned",
      emergencyLabel: "Medical Emergency (UAE)",
      emergencyNumber: "998",

      /* ── Medical disclaimer paragraph (footer) ── */
      medicalDisclaimer:
        "The content published on this website is intended for informational purposes only and must not be used as a substitute for professional medical advice, clinical diagnosis, or treatment. CUVR Spatial Systems is a Dubai Health Authority licensed clinic. All virtual reality rehabilitation programmes are designed and supervised by DHA-licensed physiotherapists. Treatment outcomes may vary between individuals. In the event of a medical emergency, please call the UAE emergency services on 998 immediately.",

      /* ── Data / privacy notice ── */
      dataNotice:
        "Patient health data is processed in accordance with the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and integrated with the Dubai Health Authority NABIDH platform. By using our services you consent to the collection and use of your health information as described in our Privacy Policy.",
    },
  },

  ar: {
    nav: {
      howItWorks: "كيف يعمل",
      services: "الخدمات",
      testimonials: "آراء المرضى",
      booking: "حجز موعد",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
    },

    footer: {
      tagline:
        "CUVR Spatial Systems عيادة مرخّصة من هيئة الصحة بدبي تجمع بين العلاج الطبيعي السريري وتقنية الواقع الافتراضي الغامرة. تعافَ بشكل أسرع بدقة مكانية.",
      dhaLicensed: "مرخّص من هيئة الصحة بدبي",
      explore: "استكشف",
      services: "الخدمات",
      visitContact: "زيارة وتواصل",
      resources: "الموارد",
      home: "الرئيسية",
      bookSession: "احجز جلسة",
      support: "الدعم",
      neuroKinetic: "المزامنة الكينيتيكية العصبية",
      postTrauma: "مرونة ما بعد الصدمة",
      hyperPerformance: "الضبط الفائق للأداء",
      spatialProtocol: "بروتوكول التعافي المكاني",
      helpCenter: "مركز المساعدة",
      contact: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      address:
        "المبنى 64، الجناح E\nمدينة دبي الطبية\nص.ب. 505276، دبي، الإمارات",
      hours:
        "الاثنين – الجمعة: 8:00 – 18:00 بتوقيت الخليج\nالسبت: 10:00 – 16:00 بتوقيت الخليج",
      copyright: "© {year} CUVR Spatial Systems · تجاوز الحدود الجسدية",
      langLabel: "AR",
    },

    home: {
      badge: "إعادة تصوّر التأهيل",
      heroTitle1: "مستقبل",
      heroHighlight: "التعافي",
      heroTitle2: "ثلاثي الأبعاد",
      heroBody:
        "استمتع بمزيج ثوري من العلاج الطبيعي السريري وتقنية الواقع الافتراضي الغامرة. تعافَ بشكل أسرع، وابقَ متحفزاً، وتتبّع كل حركة بدقة جراحية.",
      startJourney: "ابدأ رحلتك",
      watchExperience: "شاهد التجربة",

      futureBadge: "مستقبل الشفاء",
      whySpatialTitle: "لماذا العلاج الفضائي؟",
      whySpatialBody:
        "تجاوز الشاشات المسطحة والتمارين الأساسية. تُنشئ CUVR منظومة بيئية بزاوية 360 درجة حيث الحركة متعة والتقدم ملموس.",
      neuralImmersionTitle: "الانغماس العصبي",
      neuralImmersionBody:
        "نشّط مسارات الحس العميق في دماغك ببيئات مصممة لإعادة كتابة إشارات الألم وتسريع التنسيق.",
      biometricsTitle: "القياسات الحيوية الفورية",
      biometricsBody:
        "تخيّل تقدمك بتراكبات بيانات فضائية. شاهد نطاق حركتك وانخراط عضلاتك ومعدل ضربات قلبك في مجال رؤيتك.",
      gamifiedTitle: "التعافي على شكل لعبة",
      gamifiedBody:
        "حوّل إعادة التأهيل إلى مهمة. اكسب مكافآت، وتغلّب على التحديات، واجد حالة التدفق في عوالم الواقع الافتراضي المُصوَّرة بإتقان.",
      fasterRecovery: "تعافٍ أسرع",
      userRetention: "نسبة الاستمرارية",
      expertSupport: "دعم الخبراء",

      methodologyBadge: "المنهجية",
      cuvrProtocol: "بروتوكول CUVR",
      protocolActive: "البروتوكول نشط",
      protocolStatus:
        "تم تهيئة رسم الخرائط المكانية الفورية. دقة تتبع 98%.",
      phase1Title: "المرحلة 1: المعايرة",
      phase1Body:
        "مسح دقيق لمستويات الحركة الحالية والعتبات الحسية لإنشاء خط أساس بيوميكانيكي فريد.",
      phase2Title: "المرحلة 2: الانغماس",
      phase2Body:
        "جلسات موجّهة في بيئات واقع افتراضي محسّنة عصبياً تشجع على الحركة الإيقاعية والجهد المركّز.",
      phase3Title: "المرحلة 3: التطور",
      phase3Body:
        "تكيّف مستمر لصعوبة البيئة وتعقيدها مع تقوية مساراتك الجسدية والعصبية.",

      patientSuccess: "نجاحات المرضى",
      patientSuccessBody:
        "قصص حقيقية من الطرف الأمامي للتعافي المعزّز بالحواس.",
      quote1:
        "قيل لي أنني لن أستعيد حركتي الكاملة أبداً. بعد ثلاثة أشهر مع CUVR عدت إلى الملعب. المرئيات جعلتني أعود باستمرار.",
      quote2:
        "حوّلت CUVR تعافيي إلى لعبة. كانت بيانات التغذية الراجعة الحيوية محفّزة لجرّاحي أيضاً. أنصح بها بشدة.",
      quote3:
        "الانغماس في غابة الواقع الافتراضي الهادئة أثناء تمارين الساق جعل الحركات الصعبة تبدو سهلة تقريباً.",
      proAthlete: "رياضي محترف",
      uxEngineer: "مهندس تجربة المستخدم",
      retiredEducator: "مُعلّم متقاعد",

      ctaTitle1: "ادخل",
      ctaHighlight: "المستقبل",
      ctaBody:
        "هل أنت مستعد لتجاوز العلاج الطبيعي التقليدي؟ انضم إلى المجموعة النخبوية من المستخدمين الذين يصنعون الجيل القادم من التعافي.",
      emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
      getEarlyAccess: "احصل على الوصول المبكر",
    },

    howItWorks: {
      pioneeringBadge: "ريادة الواقع الافتراضي السريري",
      scienceTitle: "علم",
      scienceHighlight: "التعافي",
      heroBody:
        "استمتع بإعادة تصوّر العلاج الطبيعي عبر الحوسبة المكانية الغامرة. نجمع بين الخبرة السريرية وتقنية ألعاب الواقع الافتراضي المتطورة لتسريع رحلة شفائك.",
      startJourney: "ابدأ رحلتك",
      watchOverview: "شاهد النظرة العامة",

      processFlow: "تدفق العملية",
      patientJourney: "رحلة المريض",
      journeyBody:
        "من أول نقطة اتصال إلى الإنجاز الأخير، يضمن مسارنا المبني على البيانات الدقة في كل درجة من درجات الحركة.",
      spatialAssessmentTitle: "التقييم الفضائي",
      spatialAssessmentBody:
        "رسم خرائط جسم ثلاثية الأبعاد المتقدمة تلتقط أكثر من 50,000 نقطة بيانات. خوارزميات مملوكة تُنشئ خط أساسك.",
      personalizedProtocolTitle: "البروتوكول المخصص",
      personalizedProtocolBody:
        "روتين مُنشأ بالذكاء الاصطناعي مُصمَّم لأهداف تعافيك المحددة ونوع الإصابة وإنجازات الحركة.",
      immersiveSessionTitle: "الجلسة الغامرة",
      immersiveSessionBody:
        "بيئات الواقع الافتراضي المُركِّزة على المشاركة التي تحوّل تمارينك إلى مهام ملحمية طوال رحلة شفائك.",
      biometricAnalyticsTitle: "التحليلات الحيوية",
      biometricAnalyticsBody:
        "حلقات تغذية راجعة فورية تضمن دقة الحركة وانخراط العضلات وتتبع الأداء القلبي.",

      spatialEcosystem: "المنظومة المكانية",
      techTitle: "واجهة الجيل القادم\nللحركة البشرية",
      subMillimeterTitle: "تتبع دون الميليمتر",
      subMillimeterBody:
        "أجهزة استشعار دقيقة ترصد كل حركة طفيفة بدقة على مستوى الميكروثانية لكمال البيوميكانيكا.",
      hapticTitle: "التغذية الراجعة اللمسية الحيوية",
      hapticBody:
        "إشارات حسية لمسية توجّه جسمك خلال إعادة التأهيل الجسدي بتزامن مثالي.",
      liveFeedbackTitle: "التغذية الراجعة الفورية للجلسة",
      liveFeedbackBody:
        "تتبع واجهة TFM Datasync جميع المقاييس في الوقت الفعلي للتعديلات الفورية في التدريب.",
      activeTracking: "● التتبع النشط: 99%",

      clinicalIntegrity: "النزاهة السريرية",
      precisionTitle: "الدقة السريرية في كل بكسل",
      precisionBody:
        "تُطوَّر بروتوكولاتنا بالتعاون مع كبار خبراء العظام. كل بيئة واقع افتراضي مُعايَرة لتحفيز مجموعات عضلية محددة ومسارات التعافي.",
      evidenceTitle: "مبني على الأدلة",
      evidenceBody:
        "بروتوكولات مُتحقَّق منها عبر التجارب السريرية مع مؤسسات أبحاث العلاج الطبيعي الرائدة.",
      hipaaTitle: "آمن وفق HIPAA",
      hipaaBody:
        "تشفير من الدرجة المؤسسية يضمن سرية بياناتك الشخصية وأمانها دائماً.",
      dataAccuracy: "دقة البيانات",

      readyTitle: "مستعد للتطور؟",
      readyBody:
        "اتخذ الخطوة الأولى نحو تعافٍ أسرع وأذكى وأكثر إشراقاً. فريقنا السريري جاهز لمقابلتك أينما كنت.",
      bookAssessment: "احجز تقييمك",
      contactSupport: "تواصل مع الدعم السريري",
    },

    services: {
      servicesBadge: "الخدمات والبنية التحتية",
      heroTitle1: "العلاج",
      heroHighlight: "بالدقة",
      heroTitle2: "المكانية.",
      heroBody:
        "تعافٍ بمعايير سريرية، مُعاد تصوّره في بيئات مكانية غامرة. نحن لا نعالج الأعراض فحسب — بل نُعيد برمجة الحركة في الفضاء ثلاثي الأبعاد.",
      bookAssessment: "احجز التقييم",
      watchDemo: "شاهد العرض",
      fdaProtocols: "بروتوكولات متوافقة مع FDA",
      hipaaSecure: "آمن وفق HIPAA",
      subLatency: "كمون أقل من 5 مللي ثانية",
      scroll: "مرر للأسفل",

      channelsTitle: "قنوات التعافي الدقيق",
      channelsBody:
        "بروتوكولات تعافٍ سريرية مُنفَّذة عبر إطارنا المملوك للحوسبة المكانية.",
      channel01: "القناة 01",
      channel02: "القناة 02",
      channel03: "القناة 03",
      neuroTitle: "المزامنة الكينيتيكية العصبية",
      neuroBody:
        "محاذاة المسارات العصبية مع التنفيذ الجسدي عبر التغذية الراجعة الحيوية الفورية والمراسي المكانية.",
      postTraumaTitle: "مرونة ما بعد الصدمة",
      postTraumaBody:
        "بروتوكولات متخصصة لاستعادة الحركة ومرونة الأنسجة في بيئة غامرة ومضبوطة.",
      hyperTitle: "الضبط الفائق للأداء",
      hyperBody:
        "تحسين مقاييس الأداء الذروة للرياضيين النخبة عبر التحليل المكاني عالي الدقة.",
      exploreModality: "استكشف النمط ←",

      kineticBadge: "تحسين عصبي",
      kineticTitle: "أنماط الأداء الحركي",
      kineticBody:
        "إعادة برمجة حركية أساسية مصممة للتعافي الجسدي والسلامة الهيكلية.",
      cognitiveTitle: "التأهيل المعرفي",
      cognitiveBody:
        "استعادة الوظيفة المعرفية عبر تحديات مكانية مُلعَّبة تجسّر الفكر والفعل.",
      mentalHealthTitle: "الصحة النفسية والعافية",
      mentalHealthBody:
        "بيئات غامرة مصممة لخفض مستويات الكورتيزول وتيسير الاسترخاء العصبي العميق.",
      adhdTitle: "اضطراب التركيز وتعزيزه",
      adhdBody:
        "تقوية التحكم الانتباهي عبر حلقات تغذية راجعة حسية مُنتقاة ومهام مكانية.",

      backbone: "العمود الفقري",
      infraTitle: "البنية التحتية التكنولوجية",
      lidarTitle: "رسم الخرائط الحيوية بتقنية LiDAR",
      lidarBody:
        "تتبع هيكلي بدقة مليمترية يرصد محاذاة المفاصل وتوزيع الوزن في حجم 360 درجة.",
      neuralCloudTitle: "المزامنة السحابية العصبية",
      neuralCloudBody:
        "بنية تحتية حوسبية حافة تضمن كموناً أقل من 5 مللي ثانية لتغذية راجعة لمسية متزامنة تماماً.",
      biometricLedgerTitle: "سجل القياسات الحيوية",
      biometricLedgerBody:
        "مخزن بيانات آمن وعالي النزاهة يتتبع تقدم تعافيك عبر آلاف نقاط بيانات الجلسات.",
      systemCore: "نواة النظام: CUVR-1S",
      omniTitle: "نظام التغذية الراجعة\nالشامل الغامر",
      omniBody:
        "يستخدم تكاملنا الرائد للأجهزة اللمس فوق الصوتي والصوت المكاني لتوفير إشارات لمسية في الوقت الفعلي لتحديد موضع الجسم.",
      k4Eye: "4K لكل عين",
      hz120: "تحديث 120Hz",

      clinicalValidation: "التحقق السريري",
      excellenceTitle: "التميّز.",
      excellenceBody:
        "منهجيتنا ليست متطورة فحسب — بل هي مُتحقَّق منها. من خلال دمج البيانات المكانية مع العلوم السريرية، نُعيد تعريف هندسة التعافي البشري.",
      readClinical: "اقرأ الورقة السريرية",
      stat98Label:
        "تتبع طويل الأمد يُظهر الحفاظ على إنجازات نطاق الحركة بعد دورة العلاج.",
      stat40Label:
        "تدفع التغذية الراجعة المكانية تكيّف الحركة، مما يقلل الجلسات السريرية بشكل ملحوظ.",

      readyTitle: "مستعد",
      readyHighlight: "للتطور؟",
      readyBody:
        "انضم إلى الجيل القادم من التعافي. احجز مكانك في التقييم المكاني اليوم وعِش مستقبل الحركة.",
      startOnboarding: "ابدأ الانضمام",
      requestCallback: "اطلب مكالمة عودة من متخصص",
    },

    booking: {
      recoveryAwaits: "تعافيك في انتظارك",
      heroTitle1: "ابدأ",
      heroHighlight: "رحلة تعافيك",
      heroBody:
        "استمتع بإعادة تصوّر العلاج الطبيعي. سيضع فريقنا السريري بروتوكول واقع افتراضي مخصصاً مُصمَّماً لأهداف تعافيك المحددة.",
      bookAssessment: "احجز تقييمك",
      scheduleCall: "جدوّل مكالمة",

      consultationBadge: "الاستشارة",
      consultationTitle: "طلب استشارة",
      consultationBody:
        "سيقيّم فريقنا السريري احتياجات تعافيك المحددة ويُنشئ بروتوكول علاج واقع افتراضي مُخصَّصاً لك.",
      clinicalPrecisionTitle: "الدقة السريرية",
      clinicalPrecisionBody:
        "فيزيوثيرابيون خبراء يصمّمون مسار تعافيك الفريد.",
      assessmentTitle: "تقييم 30 دقيقة",
      assessmentBody:
        "تقييم سريع لفهم مرحلة تعافيك وأهدافك.",
      bookFreeAssessment: "احجز تقييمك المجاني",

      whatToExpectBadge: "ماذا تتوقع",
      assessmentExperience: "تجربة تقييمك",
      assessmentExperienceBody:
        "إليك ما يحدث خلال استشارتك المخصصة وتجربة الواقع الافتراضي الأولى.",
      spatialMappingTitle: "الرسم المكاني",
      spatialMappingBody:
        "نرسم خريطة جسمك في الفضاء ثلاثي الأبعاد بدقة مليمترية.",
      motionCaptureTitle: "التقاط الحركة",
      motionCaptureBody: "تتبع فوري لأنماط حركتك وتقدمك.",
      customPlanTitle: "خطة مخصصة",
      customPlanBody:
        "بروتوكول علاج مخصص مبني خصيصاً لتعافيك.",
      dataSyncTitle: "مزامنة البيانات",
      dataSyncBody: "جميع المقاييس مدمجة لتتبع تقدم كامل.",

      locationBadge: "الموقع",
      visitHub: "زيارة مركزنا",
      locationLabel: "الموقع",
      locationAddress: "أليا باي أزيزي\n310\nمدينة الرعاية الصحية، دبي",
      hoursLabel: "ساعات العمل والتواصل",
      hours:
        "الاثنين – الجمعة: 8:00 صباحاً – 6:00 مساءً بتوقيت الخليج\nالسبت: 10:00 صباحاً – 4:00 مساءً بتوقيت الخليج",
      callUs: "اتصل بنا",
      emailUs: "راسلنا",
      directions: "الاتجاهات",
    },

    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      reasonForVisit: "سبب الزيارة",
      scheduleSession: "جدوّل جلستي",
      scheduling: "جاري الجدولة…",
      requestReceived: "تم استلام الطلب",
      thankYouMessage:
        "شكراً لك، {name} — سيتواصل معك فريقنا السريري في غضون ساعتين من ساعات العمل لتأكيد موعدك.",
      bookAnother: "احجز جلسة أخرى →",
      responseTime:
        "يردّ فريقنا السريري عادةً في غضون ساعتين من ساعات العمل.",
      errorName: "يرجى إدخال اسمك.",
      errorEmail: "يرجى إدخال بريدك الإلكتروني.",
      errorEmailInvalid: "يرجى إدخال عنوان بريد إلكتروني صالح.",
      errorPhone: "يرجى إدخال رقم هاتف صالح.",
      reasons: [
        "تقييم العلاج الطبيعي العام",
        "التعافي بعد الجراحة",
        "إدارة الألم المزمن",
        "الأداء الرياضي",
        "التأهيل العصبي",
      ],
    },

    disclaimer: {
      /* ── Dismissible first-visit banner ── */
      bannerTitle: "إشعار طبي وتنظيمي",
      bannerBody:
        "تخضع خدمات CUVR لتنظيم هيئة الصحة بدبي (DHA). المعلومات الواردة على هذا الموقع هي لأغراض إعلامية عامة فحسب، ولا تُعدّ نصيحة طبية أو تشخيصاً أو علاجاً. استشر دائماً مختصاً صحياً مؤهلاً قبل البدء بأي برنامج تأهيلي. في حالات الطوارئ الطبية اتصل بـ 998.",
      bannerAccept: "فهمت",
      bannerLearnMore: "إخلاء المسؤولية الكامل",

      /* ── Footer regulatory strip ── */
      regulatoryTitle: "الامتثال التنظيمي",
      licenseLabel: "ترخيص هيئة الصحة بدبي",
      licenseNumber: "DHA-XXXXX",
      nabidh: "متكامل مع NABIDH",
      pdpl: "ملتزم بقانون PDPL الإماراتي",
      hipaa: "متوافق مع HIPAA",
      emergencyLabel: "طوارئ طبية (الإمارات)",
      emergencyNumber: "998",

      /* ── Medical disclaimer paragraph (footer) ── */
      medicalDisclaimer:
        "المحتوى المنشور على هذا الموقع لأغراض إعلامية فحسب، ولا ينبغي استخدامه بديلاً عن الاستشارة الطبية المتخصصة أو التشخيص السريري أو العلاج. CUVR Spatial Systems عيادة مرخّصة من هيئة الصحة بدبي. جميع برامج التأهيل بالواقع الافتراضي مصمَّمة ويُشرف عليها فيزيوثيرابيون مرخَّصون من هيئة الصحة بدبي. قد تتفاوت نتائج العلاج من شخص لآخر. في حالات الطوارئ الطبية، اتصل فوراً بخدمات الطوارئ الإماراتية على الرقم 998.",

      /* ── Data / privacy notice ── */
      dataNotice:
        "تُعالَج البيانات الصحية للمرضى وفق أحكام المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية (PDPL) وتُدمج مع منصة NABIDH التابعة لهيئة الصحة بدبي. باستخدامك لخدماتنا، فأنت توافق على جمع معلوماتك الصحية واستخدامها على النحو المبيَّن في سياسة الخصوصية.",
    },
  },
} as const;

export default t;

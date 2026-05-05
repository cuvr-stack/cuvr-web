export type Lang = "en" | "ar";

const t = {
  en: {
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      testimonials: "Testimonials",
      booking: "Request Demo",
      login: "Login",
      getStarted: "Get Started",
    },

    footer: {
      tagline:
        "CUVR Spatial Systems is a clinical-grade physical therapy with immersive virtual reality. Heal faster with spatial precision.",
      dhaLicensed: "DHA License Pending",
      explore: "Explore",
      services: "Services",
      visitContact: "Visit & Contact",
      resources: "Resources",
      home: "Home",
      bookSession: "Request a Demo",
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

      recoveryStack: "Recovery Stack",
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
      recoveryAwaits: "For Hospitals & Clinics",
      heroTitle1: "Bring Spatial Therapy",
      heroHighlight: "To Your Hospital",
      heroBody:
        "See how CUVR's clinical-grade VR rehabilitation platform integrates with your ward workflows. Request a live demo tailored to your department's needs.",
      bookAssessment: "Request a Demo",
      scheduleCall: "Schedule a Call",

      consultationBadge: "Hospital Demo",
      consultationTitle: "Request a Demo for Your Hospital",
      consultationBody:
        "Our team will walk you through the full CUVR platform — from patient onboarding to real-time biofeedback — and discuss integration with your existing clinical workflows.",
      clinicalPrecisionTitle: "Clinical Integration",
      clinicalPrecisionBody:
        "Seamlessly fits into existing hospital rehab and physiotherapy departments.",
      assessmentTitle: "60-Minute Live Demo",
      assessmentBody:
        "Full walkthrough of the platform with your clinical team on-site or remote.",
      bookFreeAssessment: "Request a Free Demo",

      whatToExpectBadge: "What to Expect",
      assessmentExperience: "Your Demo Experience",
      assessmentExperienceBody:
        "Here's what we cover during a live CUVR demo session with your hospital team.",
      spatialMappingTitle: "Platform Walkthrough",
      spatialMappingBody:
        "End-to-end demo of the VR therapy system and clinical dashboard.",
      motionCaptureTitle: "Live Patient Simulation",
      motionCaptureBody:
        "Real-time demonstration of motion tracking and biofeedback.",
      customPlanTitle: "Integration Planning",
      customPlanBody:
        "We map out how CUVR fits into your department's existing workflows.",
      dataSyncTitle: "Data & Reporting",
      dataSyncBody: "Overview of patient analytics, progress reports, and EHR compatibility.",

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
      email: "Work Email",
      phone: "Phone",
      reasonForVisit: "Hospital / Department Type",
      scheduleSession: "Request Demo",
      scheduling: "Sending…",
      requestReceived: "Demo request received!",
      thankYouMessage:
        "Thanks, {name} — our team will be in touch within 2 business hours to schedule your demo.",
      bookAnother: "Submit another request →",
      responseTime:
        "We typically respond within 2 business hours.",
      errorName: "Please enter your name.",
      errorEmail: "Please enter your work email.",
      errorEmailInvalid: "Please enter a valid email address.",
      errorPhone: "Please enter a valid phone number.",
      errorSending: "Something went wrong",
      errorSendingBody: "Please try again or email us directly at support@cuvr.ae",
      tryAgain: "Try again →",
      reasons: [
        "General Hospital — Physiotherapy Dept.",
        "Rehabilitation Centre",
        "Orthopaedic / Sports Medicine Clinic",
        "Neurology / Neuro-Rehab Unit",
        "Mental Health & Wellness Centre",
        "Corporate Wellness Programme",
        "Other",
      ],
    },

    disclaimer: {
      /* ── Dismissible first-visit banner ── */
      bannerTitle: "Regulatory Notice",
      bannerBody:
        "CUVR is a pre-launch medical technology platform currently in the process of obtaining Dubai Health Authority (DHA) licensing. The information on this website is for demonstration and informational purposes only and does not constitute medical advice, diagnosis, or treatment. Clinical deployment will commence upon full regulatory approval.",
      bannerAccept: "I Understand",
      bannerLearnMore: "Full Disclaimer",

      /* ── Footer regulatory strip ── */
      regulatoryTitle: "Regulatory & Compliance",
      licenseLabel: "DHA License",
      licenseNumber: "Pending",
      nabidh: "NABIDH Ready",
      pdpl: "UAE PDPL Aligned",
      hipaa: "HIPAA Aligned",
      emergencyLabel: "Medical Emergency (UAE)",
      emergencyNumber: "998",

      /* ── Medical disclaimer paragraph (footer) ── */
      medicalDisclaimer:
        "CUVR Spatial Systems is a pre-launch medical technology company currently pursuing Dubai Health Authority (DHA) licensing. No clinical services are being offered at this time. All content, demos, and materials on this website are for informational and evaluation purposes only and do not constitute medical advice, diagnosis, or treatment. Clinical operations will commence upon receipt of full regulatory approval from the DHA.",

      /* ── Data / privacy notice ── */
      dataNotice:
        "We are committed to handling all data in accordance with the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and international standards including HIPAA. Upon DHA licensing, patient health data will be integrated with the NABIDH platform. By using our website you consent to data use as described in our Privacy Policy.",
    },
  },

  ar: {
    nav: {
      howItWorks: "كيف يعمل",
      services: "الخدمات",
      testimonials: "آراء المرضى",
      booking: "طلب عرض توضيحي",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
    },

    footer: {
      tagline:
        "CUVR Spatial Systems عيادة مرخّصة من هيئة الصحة بدبي تجمع بين العلاج الطبيعي السريري وتقنية الواقع الافتراضي الغامرة. تعافَ بشكل أسرع بدقة مكانية.",
      dhaLicensed: "ترخيص DHA قيد الإنجاز",
      explore: "استكشف",
      services: "الخدمات",
      visitContact: "زيارة وتواصل",
      resources: "الموارد",
      home: "الرئيسية",
      bookSession: "طلب عرض توضيحي",
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

      recoveryStack: "مجموعة التعافي",
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
      recoveryAwaits: "للمستشفيات والعيادات",
      heroTitle1: "أدخل العلاج المكاني",
      heroHighlight: "إلى مستشفاك",
      heroBody:
        "اكتشف كيف تتكامل منصة CUVR السريرية للتأهيل بالواقع الافتراضي مع سير عمل جناحك. اطلب عرضاً توضيحياً مباشراً مُصمَّماً لاحتياجات قسمك.",
      bookAssessment: "طلب عرض توضيحي",
      scheduleCall: "جدوّل مكالمة",

      consultationBadge: "عرض توضيحي للمستشفى",
      consultationTitle: "طلب عرض توضيحي لمستشفاك",
      consultationBody:
        "سيطلعك فريقنا على منصة CUVR كاملةً — من إعداد المريض إلى التغذية الراجعة الحيوية الفورية — ويناقش التكامل مع سير عملك السريري الحالي.",
      clinicalPrecisionTitle: "التكامل السريري",
      clinicalPrecisionBody:
        "يندمج بسلاسة مع أقسام التأهيل والعلاج الطبيعي الموجودة في المستشفى.",
      assessmentTitle: "عرض مباشر لمدة 60 دقيقة",
      assessmentBody:
        "جولة كاملة في المنصة مع فريقك السريري حضورياً أو عن بُعد.",
      bookFreeAssessment: "طلب عرض توضيحي مجاني",

      whatToExpectBadge: "ماذا تتوقع",
      assessmentExperience: "تجربة العرض التوضيحي",
      assessmentExperienceBody:
        "إليك ما نغطيه خلال جلسة العرض التوضيحي المباشر مع فريق مستشفاك.",
      spatialMappingTitle: "جولة في المنصة",
      spatialMappingBody:
        "عرض شامل لنظام العلاج بالواقع الافتراضي ولوحة التحكم السريرية.",
      motionCaptureTitle: "محاكاة مريض مباشر",
      motionCaptureBody: "عرض فوري لتتبع الحركة والتغذية الراجعة الحيوية.",
      customPlanTitle: "تخطيط التكامل",
      customPlanBody:
        "نرسم معك كيفية دمج CUVR في سير عمل قسمك الحالي.",
      dataSyncTitle: "البيانات والتقارير",
      dataSyncBody: "نظرة عامة على تحليلات المرضى وتقارير التقدم وتوافق السجلات الطبية.",

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
      reasonForVisit: "نوع المستشفى / القسم",
      scheduleSession: "طلب عرض توضيحي",
      scheduling: "جاري الإرسال…",
      requestReceived: "تم استلام طلب العرض!",
      thankYouMessage:
        "شكراً لك، {name} — سيتواصل معك فريقنا في غضون ساعتين من ساعات العمل لجدولة عرضك التوضيحي.",
      bookAnother: "تقديم طلب آخر →",
      responseTime:
        "نردّ عادةً في غضون ساعتين من ساعات العمل.",
      errorName: "يرجى إدخال اسمك.",
      errorEmail: "يرجى إدخال بريدك الإلكتروني.",
      errorEmailInvalid: "يرجى إدخال عنوان بريد إلكتروني صالح.",
      errorPhone: "يرجى إدخال رقم هاتف صالح.",
      errorSending: "حدث خطأ ما",
      errorSendingBody: "يرجى المحاولة مرة أخرى أو مراسلتنا على support@cuvr.ae",
      tryAgain: "حاول مجدداً ←",
      reasons: [
        "مستشفى عام — قسم العلاج الطبيعي",
        "مركز تأهيل",
        "عيادة العظام / طب الرياضة",
        "وحدة طب الأعصاب / التأهيل العصبي",
        "مركز الصحة النفسية والعافية",
        "برنامج العافية المؤسسية",
        "أخرى",
      ],
    },

    disclaimer: {
      /* ── Dismissible first-visit banner ── */
      bannerTitle: "إشعار تنظيمي",
      bannerBody:
        "CUVR منصة تقنية طبية في مرحلة ما قبل الإطلاق، وهي حالياً في طور استكمال إجراءات الحصول على ترخيص هيئة الصحة بدبي (DHA). المعلومات الواردة على هذا الموقع لأغراض توضيحية وإعلامية فحسب، ولا تُعدّ نصيحة طبية أو تشخيصاً أو علاجاً. يبدأ النشر السريري عند الحصول على الموافقة التنظيمية الكاملة.",
      bannerAccept: "فهمت",
      bannerLearnMore: "إخلاء المسؤولية الكامل",

      /* ── Footer regulatory strip ── */
      regulatoryTitle: "الامتثال التنظيمي",
      licenseLabel: "ترخيص هيئة الصحة بدبي",
      licenseNumber: "قيد الإنجاز",
      nabidh: "جاهز لـ NABIDH",
      pdpl: "متوافق مع PDPL الإماراتي",
      hipaa: "متوافق مع HIPAA",
      emergencyLabel: "طوارئ طبية (الإمارات)",
      emergencyNumber: "998",

      /* ── Medical disclaimer paragraph (footer) ── */
      medicalDisclaimer:
        "CUVR Spatial Systems شركة تقنية طبية في مرحلة ما قبل الإطلاق، وهي حالياً في طور استكمال إجراءات الترخيص من هيئة الصحة بدبي (DHA). لا تُقدَّم أي خدمات سريرية في الوقت الحالي. جميع المحتويات والعروض التوضيحية والمواد الواردة على هذا الموقع لأغراض إعلامية وتقييمية فحسب، ولا تُعدّ نصيحة طبية أو تشخيصاً أو علاجاً. تبدأ العمليات السريرية فور الحصول على الموافقة التنظيمية الكاملة من هيئة الصحة بدبي.",

      /* ── Data / privacy notice ── */
      dataNotice:
        "نلتزم بمعالجة جميع البيانات وفق أحكام المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية (PDPL) والمعايير الدولية بما فيها HIPAA. عند الحصول على ترخيص DHA، ستُدمج البيانات الصحية للمرضى مع منصة NABIDH. باستخدامك لموقعنا، فأنت توافق على استخدام البيانات على النحو المبيَّن في سياسة الخصوصية.",
    },
  },
} as const;

export default t;

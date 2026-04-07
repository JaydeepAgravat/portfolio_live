// ─────────────────────────────────────────────────────────
// PERSONAL INFO

import { Images } from "../assets";

// ─────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Jaydeep Agravat",
  initials: Images.myPic,
  role: "React Native Developer",
  tagline:
    "Shipping production-grade React Native apps across Android, iOS, Tablet, Android TV, and Apple TV",
  resumeUrl:
    "https://drive.google.com/file/d/1XtcoggQcVtWFTkrNxeiV08hirI1U4Ybt/view",
};

// ─────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────
export const navItems = [
  { label: "About", id: "about" },
  { label: "Work Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
];

// ─────────────────────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/JaydeepAgravat",
  linkedin: "https://www.linkedin.com/in/jaydeep-agravat-0951aa334/",
  twitter: "https://x.com/AgravatJay71291",
  email: "jaydeepagravat94583@gmail.com",
};

// ─────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────
export const stats = [
  { number: "1.5+", label: "Years of Experience" },
  { number: "15+", label: "Projects Delivered" },
  { number: "5+", label: "Platforms (Android, iOS, Tablet, TV)" },
];

// ─────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Core Expertise",
    items: [
      { label: "React Native CLI", icon: "📱" },
      { label: "Expo", icon: "🚀" },
      { label: "React.js", icon: "⚛️" },
      { label: "TypeScript", icon: "🔷" },
      { label: "JavaScript", icon: "🟨" },
    ],
  },
  {
    category: "UI / Frontend Experience",
    items: [
      { label: "Responsive UI Design", icon: "🎨" },
      { label: "Theme Management (Light/Dark Mode)", icon: "🌗" },
      { label: "Internationalization (i18n)", icon: "🌍" },
    ],
  },
  {
    category: "State & Data Handling",
    items: [
      { label: "Redux (Global State Management)", icon: "⚡" },
      { label: "TanStack Query (Server State & Caching)", icon: "🔄" },
    ],
  },
  {
    category: "Backend Communication",
    items: [
      { label: "REST API Integration & Data Handling", icon: "🔗" },
      { label: "Authentication Systems (JWT, OTP, AWS Cognito)", icon: "🔐" },
    ],
  },
  {
    category: "Realtime & Cloud",
    items: [
      { label: "Firebase (Firestore, Realtime DB, FCM)", icon: "🔥" },
      {
        label: "Push Notifications (Foreground & Background Handling)",
        icon: "🔔",
      },
      { label: "Real-time Chat & Live Features", icon: "💬" },
    ],
  },
  {
    category: "Product Features",
    items: [
      { label: "In-App Purchases & Subscriptions", icon: "💰" },
      { label: "Role-Based Systems (Admin / User / Multi-role)", icon: "👥" },
    ],
  },
  {
    category: "Advanced Capabilities",
    items: [
      { label: "AI Integration (GPT-based Features)", icon: "🤖" },
      { label: "Google Fitness API Integration", icon: "🏃" },
    ],
  },
  {
    category: "Deployment & Delivery",
    items: [
      { label: "App Store & Play Store Deployment", icon: "📲" },
      { label: "Production Builds & Release Management", icon: "🚢" },
      { label: "Web App Deployment", icon: "🌐" },
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      { label: "Git & Version Control", icon: "🌿" },
      {
        label: "Debugging, Performance Optimization & Scalability",
        icon: "🛠️",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────
export const experience = [
  {
    role: "React Native Developer",
    company: "SilverSky Technology",
    companyUrl: "https://www.linkedin.com/company/silverskytechnology",
    period: "Sep 2024 – Present",
    duration: "1.5+ Years",
    description:
      "Led and delivered production apps from architecture to App Store/Play Store release across client and in-house products, with focus on performance, reliability, and polished user experience.",
    responsibilities: [
      "Architected full quote and invoice lifecycle in EaziQuote with VAT/tax/margin logic, PDF generation, and status management",
      "Integrated RevenueCat subscriptions, restore flow, and FCM notifications with deep-link routing",
      "Built E2E encrypted chat for BizzMatch with RSA key pairs and real-time Firestore sync",
      "Implemented 6-language i18n and full Arabic RTL support including mirrored layouts and translated Firebase errors",
      "Launched Android TV and Apple TV experiences for Art + Living with TV-optimized layouts",
      "Developed Supabase-powered challenge assignment logic and edge function workflows",
      "Performed major React Native migrations across multiple production apps and resolved Gradle/Xcode/IAP breaking changes",
      "Owned release workflows, signing, and deployments for Android and iOS production builds",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Supabase",
      "REST APIs",
      "RevenueCat",
      "Reanimated",
      "Vision Camera",
      "FCM Notifications",
      "React Web",
      "RN Migrations",
      "Deep Linking",
      "Internationalization (i18n)",
    ],
  },
];

// ─────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────
export const education = [
  {
    period: "Jul 2020 – Jul 2024",
    degree: "B.E. in Computer Engineering (CGPA: 8.66)",
    institution: "Gujarat Technological University, Rajkot, Gujarat",
  },
];

// ─────────────────────────────────────────────────────────
// FEATURED PROJECTS
// ─────────────────────────────────────────────────────────
export const featuredProjects = [
  {
    id: 1,
    name: "EaziQuote",
    tagline: "Quote & Invoice SaaS for Tradespeople",
    description:
      "A production-grade quote and invoice platform for the UK market with complete lifecycle management, premium subscriptions, and mobile + web support.",
    features: [
      "Line items, VAT/tax/margin, and totals automation",
      "PDF generation and quote/invoice status management",
      "RevenueCat subscription and restore flow",
      "FCM notifications with deep-link handling",
      "Guided onboarding and dark/light theme across large app surface",
    ],
    tech: [
      "React Native",
      "React Web",
      "TypeScript",
      "RevenueCat",
      "Redux",
      "FCM",
    ],
    type: "app",
    isLive: true,
    emoji: "📋",
    coverImage: Images.eaziQuote.cover,
    screenshots: [
      Images.eaziQuote.eq1,
      Images.eaziQuote.eq6,
      Images.eaziQuote.eq2,
      Images.eaziQuote.eq8,
      Images.eaziQuote.eq3,
      Images.eaziQuote.eq4,
      Images.eaziQuote.eq7,
      Images.eaziQuote.eq5,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/eaziquote/id6751271262",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.eaziquote",
  },

  {
    id: 2,
    name: "BizzMatch",
    tagline: "Encrypted Match & Chat Platform",
    description:
      "A social match platform with secure real-time communication, multilingual UX, and advanced media/identity flows.",
    features: [
      "E2E encrypted chat using RSA key pairs",
      "Deck swiper match flow with mutual filtering",
      "Vision Camera based one-face restriction",
      "Firestore optimistic real-time sync",
      "6-language support with Arabic RTL",
    ],
    tech: [
      "React Native",
      "Firebase",
      "Firestore",
      "TypeScript",
      "Vision Camera",
      "i18n + RTL",
    ],
    type: "app",
    isLive: true,
    emoji: "💬",
    coverImage: Images.bizzmatch.cover,
    screenshots: [
      Images.bizzmatch.bm1,
      Images.bizzmatch.bm2,
      Images.bizzmatch.bm3,
      Images.bizzmatch.bm4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/bizzmatch/id6741019063",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bizzmatchapp",
  },

  {
    id: 3,
    name: "FootRank",
    tagline: "Football Match Rating Platform",
    description:
      "A community driven platform where users can rate, review, and discover football matches across major leagues, helping fans identify the most exciting games.",
    features: [
      "Match rating and review system",
      "Top rated matches by day, month and season",
      "User generated reviews and feedback",
      "Guest and registered user support",
      "League coverage including EPL, La Liga, and more",
    ],
    tech: [
      "React Native",
      "Firebase",
      "Tanstack Query",
      "TypeScript",
      "Push Notifications (FCM)",
    ],
    type: "app",
    isLive: true,
    emoji: "⚽",
    coverImage: Images.footrank.cover,
    screenshots: [
      Images.footrank.fr1,
      Images.footrank.fr2,
      Images.footrank.fr3,
      Images.footrank.fr4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/foot-rank/id6749535330",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.footrank",
  },

  {
    id: 4,
    name: "Daily Micro Challenges",
    tagline: "Daily Challenge Habit App",
    description:
      "A Supabase-backed daily challenge app with automated assignment logic and robust fallback handling for continuous engagement.",
    features: [
      "Daily assignment from unused challenge pool",
      "Fallback logic for exhausted selections",
      "Edge Function powered completion flow",
      "Persistent challenge tracking and progress",
      "Reliable API-first challenge lifecycle",
    ],
    tech: [
      "React Native",
      "Supabase",
      "Supabase Edge Functions",
      "JavaScript",
      "REST APIs",
    ],
    type: "app",
    isLive: true,
    emoji: "✅",
    coverImage: Images.dailymicrochallenges.cover,
    screenshots: [
      Images.dailymicrochallenges.dmc1,
      Images.dailymicrochallenges.dmc2,
      Images.dailymicrochallenges.dmc3,
      Images.dailymicrochallenges.dmc4,
      Images.dailymicrochallenges.dmc5,
      Images.dailymicrochallenges.dmc6,
    ],
    appStoreUrl: "#",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.daily_micro_challenges",
    webUrl: "#",
  },

  {
    id: 5,
    name: "Art Living",
    tagline: "Mobile + TV Streaming Experience",
    description:
      "A media-focused React Native product delivered across mobile and TV platforms, including Android TV and Apple TV support.",
    features: [
      "Android TV and Apple TV app delivery",
      "TV-optimized navigation and layouts",
      "Bunny.net video streaming integration",
      "Parallel mobile and TV maintenance",
      "Platform-specific UI adaptation without regressions",
    ],
    tech: [
      "React Native",
      "Android TV",
      "Apple TV (tvOS)",
      "Bunny.net",
      "JavaScript",
    ],
    type: "app",
    isLive: true,
    emoji: "📺",
    coverImage: Images.artliving.cover,
    screenshots: [
      Images.artliving.al1,
      Images.artliving.al2,
      Images.artliving.al3,
      Images.artliving.al4,
      Images.artliving.al5,
      Images.artliving.al6,
      Images.artliving.al7,
    ],
    webUrl: "#",
  },

  {
    id: 6,
    name: "STD (Sexual Disease & Infections)",
    tagline: "Multilingual Health Education App",
    description:
      "A health-focused mobile app available in 25+ languages with broad user adoption and monetization through multiple ad formats.",
    features: [
      "25+ language localization support",
      "10K+ downloads with continued growth",
      "Google Ads integration across multiple formats",
      "Medical content presented in simple user-friendly flows",
      "Cross-platform app publishing and updates",
    ],
    tech: [
      "React Native",
      "Localization",
      "Google Ads",
      "JavaScript",
      "REST APIs",
    ],
    type: "app",
    isLive: true,
    emoji: "🩺",
    coverImage: Images.std.cover,
    screenshots: [
      Images.std.std1,
      Images.std.std2,
      Images.std.std3,
      Images.std.std4,
    ],
    appStoreUrl:
      "https://apps.apple.com/ca/app/sexual-disease-and-infections/id6747032382",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.stdi",
  },

  {
    id: 7,
    name: "Number Lookup : Find Caller",
    tagline: "Caller ID & Phone Number Lookup App",
    description:
      "A caller identification and number lookup app that helps users search names, phone numbers, and identify unknown callers with fast, flexible, and global search capabilities.",
    features: [
      "Caller ID and unknown number identification",
      "Name and number based lookup",
      "Fast global search experience",
      "Large scale usage with 100K+ downloads",
      "Cross-platform availability",
    ],
    tech: ["React Native", "Google Ads", "REST APIs", "JavaScript"],
    type: "app",
    isLive: true,
    emoji: "📞",
    coverImage: Images.numberbook.cover,
    screenshots: [
      Images.numberbook.nb1,
      Images.numberbook.nb2,
      Images.numberbook.nb3,
    ],
    appStoreUrl:
      "https://apps.apple.com/in/app/number-lookup-find-caller/id1613713244",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.number.lookup",
  },

  {
    id: 8,
    name: "Bodhi Medical Qigong",
    tagline: "Personalized Qigong Healing & Diagnosis App",
    description:
      "A guided qigong and moving meditation app that uses Traditional Chinese Medicine-based diagnostics to generate personalized exercise routines for daily mind-body healing.",
    features: [
      "Traditional Chinese Medicine-based diagnostics",
      "Personalized qigong healing routines",
      "Guided moving meditation sessions",
      "Daily mind-body wellness flow",
      "Cross-platform mobile experience",
    ],
    tech: ["React Native", "JavaScript", "REST APIs", "Health Domain"],
    type: "app",
    isLive: true,
    emoji: "🧘",
    coverImage: Images.bodhi.cover,
    screenshots: [
      Images.bodhi.b1,
      Images.bodhi.b2,
      Images.bodhi.b3,
      Images.bodhi.b4,
      Images.bodhi.b5,
    ],
    appStoreUrl:
      "https://apps.apple.com/in/app/bodhi-medical-qigong/id1496327997",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.bodhi",
  },

  {
    id: 9,
    name: "Tennispreneur Tennis Journal",
    tagline: "Tennis Performance & Mental Tracking App",
    description:
      "A private tennis journaling and performance tracking app that helps players reflect on matches, share insights with coaches, and improve mental resilience through structured feedback and analytics.",
    features: [
      "Private match and training journaling",
      "Coach sharing and feedback workflow",
      "Performance and mental reflection prompts",
      "Structured progress tracking",
      "Analytics-driven improvement insights",
    ],
    tech: ["React Native", "JavaScript", "Analytics", "REST APIs"],
    type: "app",
    isLive: true,
    emoji: "🎾",
    coverImage: Images.tennispreneur.cover,
    screenshots: [
      Images.tennispreneur.tp1,
      Images.tennispreneur.tp2,
      Images.tennispreneur.tp3,
      Images.tennispreneur.tp4,
      Images.tennispreneur.tp5,
      Images.tennispreneur.tp6,
      Images.tennispreneur.tp7,
      Images.tennispreneur.tp8,
    ],
    appStoreUrl:
      "https://apps.apple.com/in/app/tennispreneur-tennis-journal/id6475751909",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tennispreneur",
  },

  {
    id: 10,
    name: "5 Keys Communication",
    tagline: "Hearing Loss Communication Training App",
    description:
      "A guided learning app designed by audiology experts to help individuals with hearing loss improve communication skills through structured lessons, practical strategies, and real-world exercises.",
    features: [
      "Structured communication learning paths",
      "Audiology expert-designed lesson flow",
      "Real-world communication exercises",
      "Practical strategies for hearing loss support",
      "Cross-platform app experience",
    ],
    tech: ["React Native", "JavaScript", "Educational Content", "REST APIs"],
    type: "app",
    isLive: true,
    emoji: "🗣️",
    coverImage: Images.fivekeys.cover,
    screenshots: [
      Images.fivekeys.fk1,
      Images.fivekeys.fk2,
      Images.fivekeys.fk3,
      Images.fivekeys.fk4,
      Images.fivekeys.fk5,
      Images.fivekeys.fk6,
    ],
    appStoreUrl:
      "https://apps.apple.com/in/app/5-keys-communication/id1631815357",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.fivekeyscommunication",
  },

  {
    id: 11,
    name: "Joouly",
    tagline: "Smart LED Speaker Control App",
    description:
      "A companion app for Joouly Bluetooth speakers that lets users control LED colors, adjust brightness, and customize lighting effects for an enhanced audio-visual experience.",
    features: [
      "Bluetooth speaker connectivity and control",
      "Real-time LED color and brightness adjustment",
      "Custom lighting effect configuration",
      "Audio-visual ambiance personalization",
      "Cross-platform control experience",
    ],
    tech: ["React Native", "Bluetooth", "JavaScript", "Device Control"],
    type: "app",
    isLive: true,
    emoji: "💡",
    coverImage: Images.joouly.cover,
    screenshots: [
      Images.joouly.jl1,
      Images.joouly.jl2,
      Images.joouly.jl3,
      Images.joouly.jl4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/joouly/id1500177607",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.joouls.joouls",
  },

  {
    id: 12,
    name: "Moox",
    tagline: "LED Lighting Control Companion App",
    description:
      "A simple control app that allows users to adjust LED colors, brightness, and lighting settings for compatible devices, creating a personalized ambiance with ease.",
    features: [
      "Quick LED color and brightness controls",
      "Preset and manual lighting adjustments",
      "Simple companion workflow for compatible devices",
      "Low-friction personalized ambiance setup",
      "Cross-platform mobile availability",
    ],
    tech: ["React Native", "JavaScript", "Device Control", "UI/UX"],
    type: "app",
    isLive: true,
    emoji: "🔆",
    coverImage: Images.moox.cover,
    screenshots: [
      Images.moox.mx1,
      Images.moox.mx2,
      Images.moox.mx3,
      Images.moox.mx4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/moox/id1599558415",
    playStoreUrl: "https://play.google.com/store/apps/details?id=net.moox.moox",
  },

  {
    id: 13,
    name: "Ahir Matrimonial",
    tagline: "Verified Community Matrimony Platform",
    description:
      "A community-focused matrimonial app designed for Ahir samaj members to find verified life partners through trusted profiles, detailed biodata, and a secure approval process.",
    features: [
      "Community-specific verified profile discovery",
      "Detailed biodata and preference matching flow",
      "Trusted approval and moderation process",
      "Secure partner search and profile interactions",
      "Cross-platform matrimonial app delivery",
    ],
    tech: ["React Native", "JavaScript", "REST APIs", "Firebase"],
    type: "app",
    isLive: true,
    emoji: "💍",
    coverImage: Images.ahirmatrimonial.cover,
    screenshots: [
      Images.ahirmatrimonial.am1,
      Images.ahirmatrimonial.am2,
      Images.ahirmatrimonial.am3,
      Images.ahirmatrimonial.am4,
      Images.ahirmatrimonial.am5,
      Images.ahirmatrimonial.am6,
      Images.ahirmatrimonial.am7,
      Images.ahirmatrimonial.am8,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/ahir-matrimonial/id1589022694",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ahirmatrimonialapp",
  },
];

// ─────────────────────────────────────────────────────────
// OTHER PROJECTS
// ─────────────────────────────────────────────────────────
export const otherProjects = [
  {
    id: 7,
    name: "Vokalite",
    tagline: "Location-Based Social News App",
    description:
      "A social news app with location-aware feed personalization, custom media playback, deep linking, and flexible account modes.",
    highlights: [
      "Location-based content feed gating",
      "Custom video player implementation",
      "Notifee notification integration",
      "Deep linking and Redux custom hooks",
      "Anonymous browsing mode",
    ],
    tech: [
      "React Native",
      "Redux",
      "Firebase",
      "Notifee",
      "Google Places",
      "Custom Hooks",
    ],
    type: "app",
    isLive: false,
    status: "Client Project",
    emoji: "🗞️",
    color: "#14b8a6",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 8,
    name: "Daily Shepherd",
    tagline: "Offline-First Spiritual Wellness App",
    description:
      "A USA client project focused on scripture-first wellness with offline support, TTS audio, and personalized reading accessibility.",
    highlights: [
      "Offline-first content access and reading",
      "Scripture deep linking and navigation",
      "Text-to-speech audio with iOS-specific fixes",
      "Push notifications and Crashlytics monitoring",
      "Dynamic theme and adjustable font size sync",
    ],
    tech: [
      "React Native",
      "Firebase Crashlytics",
      "TTS",
      "Deep Linking",
      "Offline Storage",
      "Theme Management",
    ],
    type: "app",
    isLive: false,
    status: "In-House (Client)",
    emoji: "🙏",
    color: "#ec4899",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 9,
    name: "Snapshot",
    tagline: "AI Shopping Assistant App",
    description:
      "An AI-powered image recognition and shopping assistant that helps users identify products from photos and discover matching listings.",
    highlights: [
      "Apple and Google authentication flow",
      "Photo upload and camera-based product search",
      "Supabase-backed user history management",
      "Product matching from external commerce sources",
    ],
    tech: ["React Native", "Supabase", "AI Integration", "Python APIs"],
    type: "app",
    isLive: false,
    status: "In-House (Client)",
    emoji: "🛍️",
    color: "#0ea5e9",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 10,
    name: "Kaivee Healthcare",
    tagline: "Healthcare Services Booking App",
    description:
      "A healthcare-focused mobile app where I delivered the complete frontend UI for service discovery and booking experiences.",
    highlights: [
      "End-to-end UI implementation",
      "Service booking flow design",
      "Healthcare-oriented mobile experience",
      "Production-ready frontend delivery",
    ],
    tech: ["React Native", "JavaScript", "UI Engineering"],
    type: "app",
    isLive: false,
    status: "Client Project",
    emoji: "🏥",
    color: "#22c55e",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 11,
    name: "Nobl Card",
    tagline: "React Native Migration Project",
    description:
      "A migration-focused engagement where the app was upgraded from older React Native versions and transitioned from JavaScript to TypeScript.",
    highlights: [
      "React Native 0.72 to 0.75 migration",
      "JavaScript to TypeScript code migration",
      "Compatibility fixes for legacy dependencies",
      "Stability improvements for ongoing development",
    ],
    tech: ["React Native", "TypeScript", "Migration", "Refactoring"],
    type: "app",
    isLive: false,
    status: "Freelance Migration",
    emoji: "🧩",
    color: "#8b5cf6",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 12,
    name: "Room Flow",
    tagline: "Hotel Guest Request & Staff Task System",
    description:
      "A hospitality workflow app designed to streamline guest service requests and staff task management with realtime coordination.",
    highlights: [
      "Guest request and staff task workflow",
      "Realtime synchronization with Supabase",
      "Operational tracking for hotel teams",
      "End-to-end frontend implementation",
    ],
    tech: ["React Native", "Supabase", "Supabase Realtime", "JavaScript"],
    type: "app",
    isLive: false,
    status: "In-House (Client)",
    emoji: "🏨",
    color: "#f59e0b",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 13,
    name: "SC Simulation Flipkart",
    tagline: "Simulation App Crash Fix Project",
    description:
      "A simulation-focused React Native project where I diagnosed and resolved a production crash caused by API payload changes.",
    highlights: [
      "Crash root-cause analysis",
      "Payload compatibility fixes",
      "Stability validation after fix",
      "Production issue turnaround",
    ],
    tech: ["React Native", "API Debugging", "JavaScript", "QA"],
    type: "app",
    isLive: false,
    status: "In-House (Client)",
    emoji: "🛠️",
    color: "#ef4444",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 14,
    name: "SnapX",
    tagline: "No-Code AI Nutrition PWA",
    description:
      "A Glide-powered no-code AI product where I optimized dashboard UX, data presentation, and publishing workflows for production use.",
    highlights: [
      "Glide app structure and data setup",
      "Dashboard hierarchy and chart refinements",
      "UX improvements for nutrition insights",
      "Production publish and validation",
    ],
    tech: ["Glide", "No-Code", "PWA", "Product Design"],
    type: "app",
    isLive: true,
    status: "No-Code Product",
    emoji: "📈",
    color: "#06b6d4",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 15,
    name: "Veliyx",
    tagline: "Multi-Service Ride & Delivery Super App",
    description:
      "An ongoing super app project combining ride-hailing, parcel delivery, and food ordering with realtime map and tracking workflows.",
    highlights: [
      "Realtime rider and parcel map flows",
      "Polyline and routing implementation",
      "Bottom sheet architecture and gesture handling",
      "Cross-functional module delivery",
    ],
    tech: ["React Native", "React Native Maps", "Realtime Systems", "Firebase"],
    type: "app",
    isLive: false,
    status: "Ongoing",
    emoji: "🚕",
    color: "#3b82f6",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },

  {
    id: 16,
    name: "Patidar Matrimonial",
    tagline: "Community Matrimony Platform",
    description:
      "A matrimonial platform similar to Ahir Matrimonial with a distinct UI implementation tailored for a different community audience.",
    highlights: [
      "Community-specific matrimonial workflow",
      "Custom UI implementation",
      "Profile and matching experience",
      "React Native app delivery",
    ],
    tech: ["React Native", "JavaScript", "UI/UX", "Mobile Apps"],
    type: "app",
    isLive: false,
    status: "Ongoing",
    emoji: "💒",
    color: "#d946ef",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
];

// ─────────────────────────────────────────────────────────
// RESUME
// ─────────────────────────────────────────────────────────
export const resumeChips = [
  "React Native Developer",
  "1.5+ Years Experience",
  "15+ Production Apps",
  "Android • iOS • Tablet • TV",
];

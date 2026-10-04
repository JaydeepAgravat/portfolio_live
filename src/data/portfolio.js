// Single source of copy for the site. Figures come from the profile
// source-of-truth doc and the resume; do not add numbers that are not there.

const img = (dir, prefix, n, ext = "png") =>
  Array.from(
    { length: n },
    (_, i) => `/images/projects/${dir}/${prefix}${i + 1}.${ext}`,
  );

export const profile = {
  name: "Jaydeep Agravat",
  title: "React Native Engineer",
  headline: "React Native Engineer. Quick commerce: customer and rider apps.",
  pitch:
    "The only mobile engineer on a live quick-commerce app with 50K+ downloads. I rebuilt and launched its customer app, maintain its rider app, and own every release on Android and iOS.",
  location: "Gujarat, India",
  availability: "Open to remote or relocation",
  photo: "/images/profile.jpg",
  resumeUrl: "/Jaydeep_Agravat_React_Native_Engineer.pdf",
  email: "jaydeepagravat94583@gmail.com",
  links: {
    github: "https://github.com/JaydeepAgravat",
    linkedin: "https://www.linkedin.com/in/jaydeep-agravat-0951aa334/",
    x: "https://x.com/AgravatJay71291",
  },
};

export const navItems = [
  { label: "DiarchGo", id: "diarchgo" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  { value: "50K+", label: "downloads on the app I own" },
  { value: "11", label: "store releases in four months" },
  { value: "99.87%", label: "crash-free users" },
  { value: "17", label: "apps live on the Play Store and App Store" },
];

export const diarchgo = {
  company: "Diarch Group",
  role: "React Native Developer",
  period: "Jun 2026 – Present",
  place: "Remote",
  intro:
    "DiarchGo is a live quick-commerce delivery service with 50K+ downloads. I own both of its mobile apps, customer and rider, on Android and iOS.",
  apps: [
    {
      name: "DiarchGo customer app",
      icon: "/images/projects/diarchgo/icon-customer.webp",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.diarchgouser",
      appStoreUrl:
        "https://apps.apple.com/us/app/diarchgo-groceries-more/id6753003161",
      screenshots: img("diarchgo", "cust", 6, "jpg"),
    },
    {
      name: "DiarchGo rider app",
      icon: "/images/projects/diarchgo/icon-rider.webp",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.diarchgopartner",
      appStoreUrl:
        "https://apps.apple.com/in/app/diarchgo-delivery-partner/id6753061829",
      screenshots: img("diarchgo", "rider", 4, "webp"),
    },
  ],
  outcomes: [
    {
      title: "Only mobile engineer, every release",
      metrics: [
        { value: "11", label: "store releases in four months" },
        { value: "99.87%", label: "crash-free users" },
      ],
      body: "I own both apps on Android and iOS. The customer app holds 99.87% crash-free users (Google Play vitals, last 28 days). In the older app I hotfixed a crash on the cart screen and released the fix the same day, and fixed push notifications that were not reaching iOS customers or were arriving twice.",
    },
    {
      title: "Rebuilt and launched the customer app",
      metrics: [
        { value: "50+", label: "screens" },
        { from: "1,861", value: "4", label: "inline styles" },
      ],
      body: "Rebuilt from scratch in React Native 0.86 (New Architecture, Hermes) and strict TypeScript. Server data lives in TanStack Query, app state in 3 small Zustand stores, and a design system with light and dark themes replaced almost every inline style.",
    },
    {
      title: "Product lists that stay smooth",
      metrics: [
        { from: "7.7 s", value: "0.3 s", label: "JS blocking time" },
        { from: "20.8%", value: "6.1%", label: "dropped frames" },
        { from: "86", value: "0", label: "re-renders per product card" },
      ],
      body: "I built a small profiling tool, found why memoization was silently failing, and fixed it. Re-renders fell from 86 per product card to none across the same eight-swipe scroll test.",
      note: "Measured on the Order Again screen on an iPhone simulator, identical eight-swipe runs.",
    },
    {
      title: "A smaller Google Maps bill",
      metrics: [{ from: "₹80K", value: "₹25K", label: "a month, both apps" }],
      body: "Calls were repeating needlessly: distance re-fetched on every order update, address on every screen visit. I removed the duplicates and cached results on the device.",
    },
    {
      title: "First CI/CD pipeline, plus OTA updates",
      metrics: [{ value: "1 click", label: "from build to store testing" }],
      body: "GitHub Actions and Fastlane build, sign and ship to Play Store testing or TestFlight, then promote to production. I added over-the-air (OTA) updates with Stallion so urgent fixes do not wait for store review.",
    },
  ],
  more: [
    {
      title: "Checkout and live order tracking",
      body: "Razorpay with orders created and payments verified on the server, wallet and coupons; rider location in real time over socket.io. Fixed a bug that showed successful payments as failed and invited customers to pay twice.",
    },
    {
      title: "Lighter assets",
      body: "Cut bundled images and assets from 10.3 MB to 1.3 MB and the JS bundle from 9.1 MB to 6.9 MB against the old app, with SVG icons, compressed images and a pre-commit check that blocks raw images.",
    },
    {
      title: "One typed REST client",
      body: "A single Axios client for every API call: one error format, and an expired login renewed in the background before the request is retried. Audited the APIs with the backend team and documented 14 fixes for slow queries.",
    },
    {
      title: "Native Android code",
      body: "Wrote a Kotlin native module that reads the login OTP from SMS and fills it in automatically (Android SMS Retriever API).",
    },
    {
      title: "Rider app flows",
      body: "Built the return-pickup and exchange delivery flows in the rider app.",
    },
  ],
  stack: [
    "React Native 0.86",
    "New Architecture",
    "Hermes",
    "TypeScript",
    "TanStack Query",
    "Zustand",
    "GitHub Actions",
    "Fastlane",
    "Stallion OTA",
    "Razorpay",
    "socket.io",
    "Kotlin",
  ],
};

export const experience = [
  {
    company: "Diarch Group",
    role: "React Native Developer",
    period: "Jun 2026 – Present",
    place: "Remote",
    summary:
      "DiarchGo, a live quick-commerce delivery service with 50K+ downloads.",
    points: [
      "Own the customer and rider apps on Android and iOS as the only mobile engineer: 11 store releases in four months, 99.87% crash-free users.",
      "Rebuilt the customer app from scratch and launched it: React Native 0.86 (New Architecture, Hermes), strict TypeScript, TanStack Query and Zustand.",
      "Cut JS blocking time from 7.7 s to 0.3 s and dropped frames from 20.8% to 6.1% in product lists.",
      "Cut the Google Maps bill from ₹80K to ₹25K a month across both apps.",
      "Built the first CI/CD pipeline (GitHub Actions, Fastlane) and added OTA updates with Stallion.",
    ],
    anchor: "diarchgo",
  },
  {
    company: "SilverSky Technology",
    role: "React Native Developer",
    period: "Sep 2024 – May 2026",
    place: "Ahmedabad",
    summary:
      "Mobile app agency. Worked on 22 React Native apps for clients; 15 are live, including apps with 100K+ and 50K+ downloads.",
    points: [
      "Bizzmatch (business networking, 10K+ downloads): made the app ~20% smaller by removing unused media and replacing heavy libraries; built live face verification for profile photos (Vision Camera, ML Kit); added 6 languages, including right-to-left Arabic.",
      "Eaziquote (quotes and invoices for UK tradespeople): owned the mobile app end to end; added paid subscriptions (RevenueCat), push notifications with deep links and crash reporting (Firebase Crashlytics).",
      "Upgraded React Native on three live apps: Ahir Matrimonial (0.73 to 0.84, 50K+ downloads), 5 Keys Communication (0.68 to 0.81) and NoblCard (0.72 to 0.75).",
      "Got two apps approved after four store rejections by adding a guest mode that keeps the user's data after sign-up, switching to the Android Photo Picker, and adding search, bookmarks and medical sources.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "Bizzmatch",
    kind: "Business networking",
    badge: "10K+ downloads",
    cover: "/images/projects/bizzmatch/cover.jpg",
    screenshots: img("bizzmatch", "bm", 4),
    points: [
      "Made the app ~20% smaller by removing unused media and replacing heavy libraries.",
      "Built live face verification for profile photos with Vision Camera and ML Kit.",
      "Added 6 languages, including right-to-left Arabic.",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bizzmatchapp",
    appStoreUrl: "https://apps.apple.com/in/app/bizzmatch/id6741019063",
  },
  {
    name: "Eaziquote",
    kind: "Quotes and invoices for UK tradespeople",
    badge: "Owned end to end",
    cover: "/images/projects/eaziQuote/cover.jpg",
    screenshots: img("eaziQuote", "eq", 8),
    points: [
      "Owned the mobile app from first build to store release.",
      "Added paid subscriptions with RevenueCat.",
      "Added push notifications with deep links and crash reporting with Firebase Crashlytics.",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.eaziquote",
    appStoreUrl: "https://apps.apple.com/in/app/eaziquote/id6751271262",
  },
];

export const projects = [
  {
    name: "Ahir Matrimonial",
    kind: "Community matrimony · 50K+ downloads",
    note: "Upgraded React Native 0.73 to 0.84.",
    cover: "/images/projects/ahirmatrimonial/cover.jpg",
    screenshots: img("ahirmatrimonial", "am", 8),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ahirmatrimonialapp",
    appStoreUrl: "https://apps.apple.com/in/app/ahir-matrimonial/id1589022694",
  },
  {
    name: "5 Keys Communication",
    kind: "Communication training for hearing loss",
    note: "Upgraded React Native 0.68 to 0.81.",
    cover: "/images/projects/fivekeys/cover.jpg",
    screenshots: img("fivekeys", "fk", 6),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.fivekeyscommunication",
    appStoreUrl:
      "https://apps.apple.com/in/app/5-keys-communication/id1631815357",
  },
  {
    name: "Sexual Disease and Infections",
    kind: "Health education · 50K+ downloads",
    note: "Approved after store rejections: guest mode, Android Photo Picker, search, bookmarks and medical sources.",
    cover: "/images/projects/std/cover.jpg",
    screenshots: img("std", "std", 4),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.stdi",
    appStoreUrl:
      "https://apps.apple.com/ca/app/sexual-disease-and-infections/id6747032382",
  },
  {
    name: "Number Lookup: Find Caller",
    kind: "Caller ID and number lookup",
    cover: "/images/projects/numberbook/cover.jpg",
    screenshots: img("numberbook", "nb", 3),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.number.lookup",
    appStoreUrl:
      "https://apps.apple.com/in/app/number-lookup-find-caller/id1613713244",
  },
  {
    name: "Tennispreneur",
    kind: "Tennis journal and performance tracking",
    cover: "/images/projects/tennispreneur/cover.jpg",
    screenshots: img("tennispreneur", "tp", 8),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tennispreneur",
    appStoreUrl:
      "https://apps.apple.com/in/app/tennispreneur-tennis-journal/id6475751909",
  },
  {
    name: "Foot Rank",
    kind: "Football match ratings and reviews",
    cover: "/images/projects/footrank/cover.jpg",
    screenshots: img("footrank", "fr", 4),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.footrank",
    appStoreUrl: "https://apps.apple.com/in/app/foot-rank/id6749535330",
  },
  {
    name: "Bodhi",
    kind: "Guided medical qigong routines",
    cover: "/images/projects/bodhi/cover.jpg",
    screenshots: img("bodhi", "b", 5),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.bodhi",
    appStoreUrl:
      "https://apps.apple.com/in/app/bodhi-medical-qigong/id1496327997",
  },
  {
    name: "Joouly",
    kind: "Bluetooth LED speaker control",
    cover: "/images/projects/joouly/cover.jpg",
    screenshots: img("joouly", "jl", 4),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.joouls.joouls",
    appStoreUrl: "https://apps.apple.com/in/app/joouly/id1500177607",
  },
  {
    name: "Moox",
    kind: "LED lighting control",
    cover: "/images/projects/moox/cover.jpg",
    screenshots: img("moox", "mx", 4),
    playStoreUrl: "https://play.google.com/store/apps/details?id=net.moox.moox",
    appStoreUrl: "https://apps.apple.com/in/app/moox/id1599558415",
  },
  {
    name: "Daily Micro Challenges",
    kind: "Daily challenge habit app",
    cover: "/images/projects/dailymicrochallenges/cover.jpg",
    screenshots: img("dailymicrochallenges", "dmc", 6),
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.daily_micro_challenges",
  },
  {
    name: "Art Living",
    kind: "Streaming on mobile, Android TV and Apple TV",
    cover: "/images/projects/artliving/cover.jpg",
    screenshots: img("artliving", "al", 7),
  },
  {
    name: "Patidar Matrimonial",
    kind: "Community matrimony",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.patidarmatrimonial",
  },
];

export const skills = [
  {
    group: "Mobile",
    items: [
      "React Native (New Architecture, Hermes)",
      "TypeScript",
      "JavaScript",
      "React Navigation",
      "Reanimated",
      "FlashList",
    ],
  },
  {
    group: "Performance and debugging",
    items: [
      "Re-render profiling",
      "List and app-size optimization",
      "Firebase Crashlytics",
    ],
  },
  {
    group: "State management and data",
    items: [
      "Zustand",
      "Redux Toolkit",
      "TanStack Query (React Query)",
      "REST APIs",
      "Axios",
      "socket.io",
      "MMKV",
    ],
  },
  {
    group: "CI/CD and release",
    items: [
      "Git",
      "GitHub Actions",
      "Fastlane",
      "OTA updates (Stallion)",
      "Play Store and App Store releases",
    ],
  },
  {
    group: "Integrations",
    items: [
      "Razorpay",
      "RevenueCat",
      "Firebase push notifications (FCM)",
      "Notifee",
      "Deep links",
      "Google Maps Platform",
    ],
  },
];

export const education = {
  degree: "B.E. in Computer Engineering",
  school: "Gujarat Technological University",
  period: "2020 – 2024",
  detail: "CGPA 8.66",
};

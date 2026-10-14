# Ship, debug, explain: React Native interviews in 2026

A React Native developer preparing for 2026 interviews from India should put most of their effort into three things. The first is **JavaScript, TypeScript and React rendering fundamentals deep enough to write polyfills and predict re-renders**. The second is **timed machine coding of list, API and state screens, with follow-up extensions**. The third is **"ships to stores" production skills**: signing, EAS/Fastlane builds, OTA limits, crash triage and reading native build errors. New Architecture internals, Reanimated and mobile system design come after these for most people, and become central only at senior level. The evidence behind this is reasonably consistent. Performance optimisation appears in **23 of 26** fully read Indian React Native job descriptions, TypeScript in **19 of 26**, and store-release ownership in **14 of 26**. Among 13 detailed remote and international postings, release ownership was the most frequent requirement at **9 of 13**. In firsthand interview reports, a **machine-coding or live-build round appears in 8 of 11**, while dedicated DSA appears mostly as an online-assessment component. The ecosystem changed decisively between 2025 and 2026. The Legacy Architecture could not be enabled after React Native 0.82 (Oct 2025). Hermes V1 became the default in 0.84 (Feb 2026). Hosted CodePush died on 31 March 2025. The Strict TypeScript API became the default in 0.87 (Aug 2026). As a result, "bridge vs JSI" is now history to explain, not a setting to configure, and OTA questions now mean EAS Update or self-hosted alternatives. The hiring market itself is skewed toward experience: the 21-role remote sample contained **zero junior roles**, and US data shows entry-level postings at **4.5%** of software-development postings. That makes the India-based product-startup and agency market the realistic entry route for juniors. The evidence has real gaps, all detailed in section 10: firsthand reports from large Indian product companies (Swiggy, CRED, Razorpay, Meesho) are thin, no Reddit threads could be retrieved, and no 2025 job-description text survived on live boards, so year-on-year skill comparisons rest on ecosystem facts rather than posting data.

**How to read the evidence labels.** Claims are tagged as follows:

- **[E] Direct evidence:** primary documentation, fully read job postings, or measured survey and labour-market data. Sample caveats are noted where they apply.
- **[A] Community anecdote:** single-candidate interview reports, vendor or recruiter hiring guides, prep listicles and forum posts.
- **[S] Author's synthesis:** analytical conclusions drawn from the evidence. Every depth level, tier, example question (unless attributed to a report), exercise and timeline in this report is [S].

**Depth scale [S].** Each level adds to the one below it.

| Level | Name | Meaning |
|---|---|---|
| L0 | Skip | Not needed. |
| L1 | Awareness | Can define it, say when it matters, and recognise it in code. |
| L2 | Working | Can use it correctly in ordinary feature code without help. |
| L3 | Deep | Can explain the mechanism, debug failures in it, and choose between alternatives with stated trade-offs. |
| L4 | Expert | Can set team standards, debug at internals level and teach it. Reserved for one cell in this report. |

**Priority tiers [S].**

| Tier | Name | Meaning |
|---|---|---|
| Tier 1 | Core | Required or tested across most loops and job descriptions at that level. Weakness is disqualifying. |
| Tier 2 | Important | Frequent in mid or senior job descriptions and loops. |
| Tier 3 | Differentiator | Specific to a role or company type. It raises your odds but rarely gates an offer. |
| Tier 4 | Postpone | Niche, legacy-only or not yet stable. |

---

## 1. Executive summary: fundamentals get you through the loop, release ownership gets you the offer

The 2026 React Native interview is not a test of how many APIs a candidate can name. Across both the job-description evidence and the interview reports, two kinds of capability stand out.

The first is **fluency in fundamentals under time pressure**:
- JS polyfills;
- hooks behaviour;
- FlatList pagination with deduplication;
- recursive tree UIs.

The second is **end-to-end delivery ownership**:
- building and signing release binaries;
- operating EAS or Fastlane;
- understanding what OTA updates can and cannot change;
- diagnosing native build failures;
- talking credibly about crash-free rates and performance.

A recruiter guide summarises this as "framework familiarity gets interviews; delivery ownership gets offers" ([GoLance](https://golance.com/hiring/how-to-hire-react-native-developers)) [A]. The posting data supports it: store release appears in 54% of Indian and 9 of 13 remote job descriptions [E].

**Five conclusions frame everything that follows.**

**First, depth matters more than breadth in a narrow core [S].** React rendering and hooks are the one area where Level 3 depth is justified even for juniors. Product companies ask 0–2-year candidates how `useCallback` works internally ([Naukri Code360, CometChat Apr 2025](https://www.naukri.com/code360/interview-experiences/cometchat/cometchat-interview-experience-by-sopan-bhere-apr-2025-exp-0-2-years)) [A]. Interview guides also identify "React re-renders the component" as the classic weak answer ([techinterview.org](https://www.techinterview.org/post/3233474938/react-rendering-deep-dive-interview/)) [A].

**Second, the modern stack is assumed, not advertised [E + S].** Only 7 of 26 Indian job descriptions and 1 of 13 remote ones name Expo. Yet 86% of State of React Native 2025 respondents use Expo CLI, and EAS Update accounts for 80% of OTA usage ([State of RN 2025 architecture](https://results.stateofreactnative.com/en-US/react-native-architecture/)) [E]. Candidates should be fluent in Expo and EAS even when the job description does not mention them.

**Third, legacy knowledge has changed role [E + S].** It used to be configuration; it is now explanation. Since React Native 0.82, the Legacy Architecture cannot be enabled ([RN 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82)) [E]. Hosted CodePush shut down on 31 March 2025 ([Expo blog](https://expo.dev/blog/how-to-replace-app-center-and-codepush)) [E]. Bridge-versus-JSI is therefore an "explain why the New Architecture exists" question, and CodePush is a "how would you migrate off it" question.

**Fourth, DSA is a gate, not the main event, for most React Native roles [A].** It appears as easy-to-medium online-assessment problems at Indian product companies and agencies. Treat it as Tier 2. Raise it to Tier 1 only when targeting big tech or companies whose OA is HackerRank-heavy.

**Fifth, AI changes how interviews are run more than what they test [E + A + S].**

- **Interview format:** proctored online assessments, more live coding, and "explain every line" follow-ups. Meta piloted an AI-enabled coding round ([TechRadar](https://www.techradar.com/pro/meta-is-going-to-let-candidates-use-ai-in-job-interviews)) [E]. Google restored in-person rounds over cheating concerns ([Trak.in](https://trak.in/stories/google-brings-back-in-person-interviews-to-stop-ai-enabled-cheating/)) [A]. Indian campus hiring is moving to live follow-ups to expose AI reliance ([Ground News summary of TOI](https://ground.news/article/recruiters-deploy-ai-to-catch-ghost-coders)) [A].
- **Job descriptions:** only 2 of 26 Indian job descriptions name AI coding tools [E].
- **What is valued when AI is allowed:** a vendor survey found that where AI is permitted, leaders value candidates who catch and fix AI mistakes ([CoderPad 2026](https://coderpad.io/blog/hiring-developers/new-research-the-2026-state-of-tech-hiring-what-ai-means-for-developers-and-hiring-teams/)) [E, vendor].

The net effect is a higher bar on fundamentals, not a lower one.

**For India-based candidates, the market splits by seniority [E + S].**

- **Juniors (0–2 years):** compete mainly for Indian startup, agency and service roles. The Indian sample shows 0–2-year job descriptions asking for TypeScript (4 of 6), Redux (4 of 6) and store release (4 of 6), but none asking for Kotlin/Swift or the New Architecture [E].
- **Mid-level (2–5 years):** this band is where native modules, Kotlin/Swift, Fastlane, OTA and the newer state libraries concentrate [E]. This is the biggest step change in the market.
- **Remote international roles:** effectively a mid-to-senior market. The 21-role remote sample had no junior roles, and the India-eligible roles were mostly "India-only" postings from foreign companies or consultancies [E].

---

## 2. React Native hiring market in 2026 vs 2025: demand recovered at the senior end, and the job description became "ships to stores"

### Measured demand is flat-to-recovering overall, with React Native-specific series scarce

No India-specific, measured React Native demand series exists in the research [E].

**What exists for India is macro data.** Naukri JobSpeak shows white-collar hiring up 2% year on year in September 2026. AI/ML roles rose 20%, while IT/software services fell 4% ([Info Edge PDF via snippet](https://www.infoedge.in/pdfs/News_Events_pdfs/Naukri-Jobspeak-September-2026.pdf)) [E, snippet-level]. July 2026 showed +5% overall with AI/ML at +33% ([scanx summary](https://scanx.trade/stock-market-news/companies/info-edge-releases-july-2026-naukri-jobspeak-index-report/47287003)) [E, secondary]. JobSpeak does not break out mobile.

**Job-board counts are snapshots, not trends.** As of October 2026:
- Glassdoor shows "2,259 react native development jobs in India" ([Glassdoor](https://www.glassdoor.co.in/Job/india-react-native-development-jobs-SRCH_IL.0,5_IN115_KO6,30.htm));
- LinkedIn shows "2,000+" ([LinkedIn](https://in.linkedin.com/jobs/react-native-developer-jobs));
- Cutshort shows about 1,028 ([Cutshort](https://cutshort.io/jobs/react-native-jobs)) [E].

**A staffing vendor's "+28% YoY" React Native figure discloses no method** ([CompanyBench](https://companybench.com/blog/it-hiring-trends-india-2026)). Treat it as low confidence.

**The cleanest year-on-year count is from the UK, not India.** IT Jobs Watch counted React Native permanent ads in the six months to 14 October each year at **240 (2024), 138 (2025) and 208 (2026)**. Median salary rose from £72,250 to £77,500 to £80,000. Flutter fell from 49 to 39 to 23 over the same windows ([IT Jobs Watch RN](https://www.itjobswatch.co.uk/jobs/uk/react%20native.do); [Flutter](https://www.itjobswatch.co.uk/jobs/uk/flutter.do)) [E]. It is one market, but it is the only clean signal that React Native demand recovered in 2026 after a weak 2025.

**The seniority tilt is the clearest structural change.** Indeed Hiring Lab reports for the US:
- senior roles were **69.3%** of software-development postings in Q1 2026, and entry-level roles were **4.5%**, the lowest of any sector;
- across all US postings, senior postings were up 14.7% year on year and entry-level down 7.5% as of May 2026 ([Indeed Hiring Lab, 23 Jul 2026](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/)) [E, US];
- a separate Indeed post (excerpt only) attributes 71% of the May 2025–May 2026 increase in software postings to senior roles, and explicitly disclaims causation from AI tools ([Indeed Hiring Lab, 8 Jul 2026](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/)) [E, excerpt].

The remote React Native sample matches this pattern: 9 of 14 detailed roles were senior or staff, 5 were mid-level, and 0 were junior [E]. No India-specific measurement of junior tightening was found.

### Company type determines the stack you are tested on

| Company type (India) | What the job descriptions emphasise [E] | Interview pattern [A] | Implication [S] |
|---|---|---|---|
| **Early and growth startups** (13 of 26 in the sample) | Expo in 5/13; TS in 10/13; full-stack Node in 3/13; deep-native media, health and fintech startups want Kotlin/Swift (4/13) | Practical builds, take-homes, project deep-dives; DSA often skipped ([Medium analysis of 50 postings](https://medium.com/@codegrey/is-dsa-still-required-for-software-engineering-interviews-i-read-50-job-postings-to-find-out-f1f5f2e1cc0c)) [A] | Expo/EAS fluency and a shipped app matter most; be ready for Node if the role says "full-stack mobile" |
| **Scaled product companies** (Zepto, Swiggy, FanCode-style; only 3 job descriptions read) | Broad lists: Redux/Zustand, native modules, GraphQL, CI/CD, CodePush/OTA (Jio Tesseract); Vested asks 3+ years of native | Multi-round loops: OA (DSA + JS), JS polyfill round, web-React machine coding, design round, HM/culture ([FanCode](https://medium.com/mighty-ghost-hack/interview-experience-with-fancode-for-a-react-native-developer-role-dca760fd781b); [Zepto](https://anilpeddireddy.medium.com/zepto-software-engineer-ii-react-native-interview-experience-63d6a039f087); [Swiggy FE](https://leetcode.com/discuss/post/6334442/swiggy-sde-1-frontend-interview-experience/)) [A] | The heaviest JS/React and machine-coding prep; expect web React components even for React Native roles |
| **Large tech / MNC / GCC** (PhonePe, Boeing, BFSI MNC) | TS 3/3, Redux 3/3, CI/CD 3/3, named test tools 2/3, Expo 0/3; brownfield native + React Native coexistence | Few firsthand reports; big-tech loops keep DSA ([LeetCode Discuss, 74 interviews](https://leetcode.com/discuss/post/8446005/)) [A] | Redux Toolkit, testing discipline, CI/CD and brownfield integration; more DSA |
| **Service firms / IT** (Accenture, Quanteon, Knobee) | Ranges from minimal (Accenture: "React Native, JS, REST, Git") to release-ops roles (Knobee: signing, keystores, store consoles) | One online coding round plus hooks Q&A; small builds such as FlatList pagination or a todo app ([Accenture](https://www.naukri.com/code360/interview-experiences/accenture/accenture-interview-experience-application-developer-may-2024-exp-0-2-years-2)) [A] | Fundamentals and one clean small build; lower salary bands (₹2.4–7L in the sample) |
| **Agencies building client apps** (Big Rattle, Codal, Zoftify) | The most concrete tooling lists: Expo + CLI, RTK/Zustand, React Query, Fastlane, GitHub Actions/Bitrise, Jest + Detox, Sentry, payment SDKs, TurboModules | Take-homes with "explain your choices" reviews ([SafeStreets take-home](https://github.com/SSDevelopment/takeHomeAssessment-reactNativeEngineer)) [E, company-published] | Breadth across libraries plus delivery speed; a portfolio of shipped client-style apps |

### Seniority bands differ by kind, not just amount

The Indian sample [E] shows a clear progression.

**0–2 years (n=6)**
- TS 4/6, Redux 4/6, React web 4/6, store release 4/6.
- Kotlin/Swift 0/6 and New Architecture 0/6.
- One junior role was almost entirely store-release operations: signing, provisioning profiles, keystores and store consoles ([Knobee](https://cutshort.io/job/Front-end-developer-Noida-Bengaluru-Bangalore-Knobee-Social-India-Private-Limited-0r0IA5Cq)).

**2–5 years (n=12)**
- Native modules 5/12, Kotlin/Swift 5/12, Fastlane 4/12, OTA 4/12, push 6/12.
- New Architecture 3/12 and Zustand 4/12.
- This is where the native and release-tooling requirements appear.

**5+ years (n=7)**
- Architecture, system design, leadership or mentoring in 7/7.
- CI/CD in 5/7.

The remote sample follows the same pattern [E]. Mid-level asks centre on shipping React Native with TypeScript, REST, native plugins, testing and Git. Senior asks add architecture ownership, code-standards leadership, release/CI ownership, performance at scale and native fluency (Zeller, Berlitz, VALCE, Xsolla).

### The 2026 expectation profile, skill by skill

**Expo [E].**
- Officially, it is the default path for new apps.
- In practice, 86.18% of State of RN 2025 respondents use Expo CLI, 82% start with create-expo-app, EAS Build is used by 68.2%, and EAS Update by 80.24% of OTA users ([architecture](https://results.stateofreactnative.com/en-US/react-native-architecture/); [build & publish](https://results.stateofreactnative.com/en-US/build-and-publish/)).
- In job descriptions, Expo appears in only 27% of Indian and 1 of 13 remote postings, and in none of the six large-tech or scaled-product Indian postings.

The gap reflects brownfield and enterprise codebases and the fact that Expo is assumed context [S].

**TypeScript [E].**
- Named in 73% of Indian job descriptions (3/3 large tech) and 8 of 13 remote.
- 676 of 928 survey respondents write 100% TypeScript ([dev tools](https://results.stateofreactnative.com/en-US/dev-tools/)).
- React Native 0.87 made the Strict TypeScript API the default, so deep imports into `react-native/Libraries/*` are type errors ([RN 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87)).

Plain-JS candidates are now at a visible disadvantage [S].

**Native [E].**
- 21 of 26 Indian job descriptions mention some native-platform skill, at three tiers:
  - IDE/tooling familiarity (7);
  - writing native modules in Kotlin/Swift (10);
  - substantial native feature work (a minority: fintech, media, device startups and native-to-React Native migrations).
- Remote postings mention native in 8 of 13 (required in 4).
- Survey practice: Expo Modules API 53%, Nitro Modules 34.7%, Turbo Native Modules 24.1% used in the last year. 47.1% do native debugging ([State of RN 2025](https://results.stateofreactnative.com/en-US/react-native-architecture/); [debugging](https://results.stateofreactnative.com/en-US/debugging-and-profiling/)).

**CI/CD and release [E].**
- CI/CD appears in 46% of Indian and 8 of 13 remote job descriptions. In UK React Native ads it co-occurs at 25.48% ([IT Jobs Watch](https://www.itjobswatch.co.uk/jobs/uk/react%20native.do)).
- Store release appears in 54% of Indian and 9 of 13 remote job descriptions.
- Survey: GitHub Actions 61.9%, Fastlane 47.1%; manual Xcode (60.3%) and Android Studio (55.9%) builds are still common.

**Testing [E].**
- Indian job descriptions under-specify it: only 6 of 26 name a tool (Jest 6, Detox 4, Maestro 1, RNTL 1).
- Remote postings mention testing in 8 of 13 and require it in 7.
- Survey practice: Jest 77.2%, RN Testing Library 59.2%, **Maestro 45.74% ahead of Detox 25.55%** ([testing & monitoring](https://results.stateofreactnative.com/en-US/testing-and-monitoring/)).

**System design [E + A].**
- All seven 5+-year Indian job descriptions ask for architecture or system design.
- Guides describe mobile system design as a senior-only round of 45–60 minutes ([ByteByteGo](https://bytebytego.com/courses/mobile-system-design-interview/introduction); [DEV 56 Qs](https://dev.to/asscher/56-react-native-interview-questions-junior-to-senior-2026-234e)) [A].
- The only firsthand confirmation is FanCode's "design round", whose content is unknown.

**Full-stack [E].**
- Node/backend appears in 4–5 of 26 Indian job descriptions, mostly startups (superkalam pairs React Native with NestJS/Postgres/Redis; TopGrep; Boeing prefers Node/Express).
- Remote postings mention React web, Node or full-stack breadth in 7 of 13.

### AI tools changed evaluation format and job-description language, slowly

**In job descriptions [E].**
- **India:** 2 of 26 name tools.
  - A BFSI MNC's senior role prefers "daily use of AI coding assistants (Copilot, Cursor, Claude)" ([Cutshort](https://cutshort.io/job/Sr-Mobile-Developer-ReactNative-Delhi-Gurugram-Noida-Ghaziabad-Faridabad-Infinium-Associate-OUeIolR0)).
  - A junior Hyderabad role requires familiarity with Claude, Cursor, Copilot or ChatGPT ([Quanteon](https://cutshort.io/job/React-Native-Developer-Hyderabad-Quanteon-Solutions-dkqX7KBx)).
  - Building AI/LLM features into the app is more common, at 6 of 26.
- **Remote:** 3 of 13 expect AI tools in the workflow. Two October 2026 senior roles require them by name: Berlitz names Claude Code ([Arc](https://arc.dev/remote-jobs/j/berlitz-senior-software-engineer-mobile-react-native-m-f-d-pqfze7wxhe)), and VALCE names Claude Code, Cursor and Copilot ([Built In](https://builtin.com/job/mobile-engineer-ios-or-android-react-native-ai/11598589)).
- **Developer practice:** only 33 of 930 State of RN 2025 respondents report 0% AI-generated code ([dev tools](https://results.stateofreactnative.com/en-US/dev-tools/)).

**In interviews**, the evidence points two ways [E/A].
- Some companies allow AI in a controlled round. Meta piloted an AI-enabled coding round ([YourStory](https://yourstory.com/ai-story/meta-ai-job-interviews-hiring-pilot-2025)), and HackerRank sells AI-assisted interview environments ([HackerRank KB](https://hackerrank-knowledge-base.help.usepylon.com/articles/5821380141)).
- Others restore in-person rounds or require no-AI declarations. Amazon requires such a declaration ([TechCrunch](https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/)).
- **India:** the only evidence is media reports of AI proctoring and live follow-ups in campus hiring. No Indian product company has published an AI interview policy [gap].

**The practical upshot [S].** Expect to defend every line of take-home code. Be able to say how you use AI assistants and how you verify their output. Practise spotting the bugs AI-generated React Native code typically contains: missing effect cleanup, stale closures, unstable list keys, tokens stored in AsyncStorage, and removed APIs such as `InteractionManager`.

---

## 3. Real interview formats: nine rounds, what each actually tests, and what separates weak from strong

**Sample basis [A].** Eleven firsthand reports were found, about five clearly dated 2025–2026. Across them:

| Round type | Reports mentioning it |
|---|---|
| Machine coding or live build | 8 |
| DSA or algorithm component | 5 |
| Design round | 2 |
| Firsthand take-home | 1 |
| JS-polyfill round | 1 |

Two companies also publish their take-homes. **No firsthand report described a dedicated debugging round or a dedicated native build/deploy round.** Those two rounds are described from job-description evidence and interview guides, and are marked accordingly.

### 3.1 JavaScript and TypeScript fundamentals: polyfills, not definitions

| Aspect | Detail |
|---|---|
| **What it evaluates** | Whether you understand the language runtime well enough to build primitives, and whether you can type real-world data. |
| **Evidence** | FanCode's React Native "problem-solving" round was 60 minutes to write three polyfills: array flatten-to-depth, `setInterval`/`clearInterval`, and `Promise.allSettled` ([Medium](https://medium.com/mighty-ghost-hack/interview-experience-with-fancode-for-a-react-native-developer-role-dca760fd781b)) [A]. Swiggy's frontend OA had 2 JavaScript questions next to 2 DSA problems ([LeetCode Discuss](https://leetcode.com/discuss/post/6334442/swiggy-sde-1-frontend-interview-experience/)) [A]. |
| **Topics [S]** | Closures and scope; `this` binding; prototypes; event loop with microtasks vs macrotasks; promises (`all`, `allSettled`, `race`, `any`); async/await error handling; debounce/throttle; deep clone and flatten; timers. TypeScript: generics, union/discriminated-union narrowing, `unknown` vs `any`, utility types, typing component props, hooks and navigation params. |
| **Depth** | L2 for juniors; L3 for mid/senior and for juniors targeting product companies [S]. |
| **Weak vs strong [S]** | Weak: recites "a closure is a function with access to its outer scope" and cannot write `allSettled`. Strong: writes `allSettled` that preserves input order, wraps non-promise values with `Promise.resolve`, and returns `{status, value/reason}`. Also explains why `.then` callbacks run before a `setTimeout(0)`, and types an API response as a discriminated union so loading, error and success states cannot be confused. |
| **Practice [S]** | Write from memory, timed at 15 minutes each: `Promise.all`, `allSettled`, `race`, debounce, throttle, `flat(depth)`, deep clone, `setInterval` built on `setTimeout`, an event emitter, memoize. Then do 20 output-prediction puzzles on the event loop. |
| **By seniority [S]** | Juniors get more output-prediction and polyfills. Seniors get fewer puzzles and more type design (a typed API client, typed navigation). |
| **By company type [A/S]** | Indian product companies use dedicated polyfill rounds. Service firms ask Q&A. International agencies fold it into a Codility section (Callstack). |

### 3.2 React and hooks: predict the re-render, then justify the fix

| Aspect | Detail |
|---|---|
| **What it evaluates** | A mental model of rendering. Can you predict what re-renders, why, and what fixing it costs? |
| **Evidence** | CometChat (0–2 years, Apr 2025) asked how `useCallback` works internally, when to use or avoid it, and the same for `useMemo` and `useEffect` ([Naukri Code360](https://www.naukri.com/code360/interview-experiences/cometchat/cometchat-interview-experience-by-sopan-bhere-apr-2025-exp-0-2-years)) [A]. BlackWins asked about the Virtual DOM and reconciliation, then a stopwatch build ([GfG](https://www.geeksforgeeks.org/interview-experiences/blackwins-technologies-interview-experience-reactjs-react-native-developer-full-time/)) [A]. Guides flag "React re-renders the component" as the weak answer; interviewers probe batching, async state and host-view updates ([techinterview.org](https://www.techinterview.org/post/3233474938/react-rendering-deep-dive-interview/)) [A]. React Compiler 1.0 has been stable since 7 Oct 2025 and is enabled in the Expo SDK 54 template ([react.dev](https://react.dev/blog/2025/10/07/react-compiler-1); [Expo SDK 54](https://expo.dev/changelog/sdk-54)) [E]. A guide notes interviews are shifting from memo trivia toward what the compiler optimises ([SecondTalent](https://www.secondtalent.com/interview-guide/react-native-developer-interview/)) [A]. |
| **Topics [S]** | Render vs commit; state batching; referential equality; `useEffect` dependency semantics and cleanup; stale closures; `useRef` for mutable values; keys and identity; Context re-render fan-out; custom hooks; `React.memo`/`useMemo`/`useCallback` and what React Compiler automates; controlled vs uncontrolled inputs; error boundaries; React 19 being shipped in React Native (0.78 shipped React 19 and 0.83 shipped 19.2: [RN 0.78](https://reactnative.dev/blog/2025/02/19/react-native-0.78), [RN 0.83](https://reactnative.dev/blog/2025/12/10/react-native-0.83)). The individual React 19.2 API details were not verified in this research; check react.dev. |
| **Depth** | L3 at all levels [S]. This is the one area where juniors need mechanism-level answers. |
| **Weak vs strong [S]** | Weak: "wrap everything in useCallback for performance." Strong: "`useCallback` returns the same function reference across renders until its dependencies change. That only helps if a child compares props (memo) or the function is an effect dependency. Otherwise it adds cost. With React Compiler on, I'd let it memoise and check with the Profiler rather than hand-memoising." |
| **Practice [S]** | Build a list where one item's toggle re-renders all 500 rows, then fix it three ways (memoised row, state colocation, compiler) and measure each with the Profiler. Write `useDebounce`, `usePrevious`, `useFetch` with abort, and a `useAsyncStorage` that keeps multiple consumers in sync (the Zepto prompt). |
| **By seniority [S]** | Juniors: explain hooks and fix obvious re-renders. Mid: diagnose with the Profiler and choose between Context, a store and colocation. Senior: state architecture for a team, concurrency features (`startTransition`/`useDeferredValue` now behave consistently in React Native: [RN 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82)), and compiler adoption. |
| **By company type [A/S]** | Product companies run deep theory plus live coding. Service firms ask definitional Q&A. International agencies probe rendering in depth (Callstack reviewers mention it: [Glassdoor](https://www.glassdoor.com.br/Entrevista/Callstack-Entrevista-E1546632-RVW98329515.htm)). |

### 3.3 React Native concepts: threads, lists, platform differences and storage

| Aspect | Detail |
|---|---|
| **What it evaluates** | Whether you think like a mobile engineer, not a web developer using React Native as a renderer. |
| **Evidence** | Zepto's SDE-II round 1 covered performance, bundle size and native module integration, plus a custom AsyncStorage-sync hook ([Medium](https://anilpeddireddy.medium.com/zepto-software-engineer-ii-react-native-interview-experience-63d6a039f087)) [A]. Recruiter guides list a "web-only mindset" and "knowing only Expo or only bare" as red flags ([GoLance](https://golance.com/hiring/how-to-hire-react-native-developers); [RemoteCrew](https://www.remotecrew.io/blog/hire-react-native-developers)) [A]. |
| **Topics [S, grounded in E]** | JS thread vs UI/main thread; FlatList props (`keyExtractor`, `getItemLayout`, `windowSize`, `onEndReachedThreshold`, `removeClippedSubviews`); FlashList v2 (New Architecture only, no size estimates: [Shopify](https://shopify.engineering/flashlist-v2)) [E]; Flexbox defaults in React Native (column direction); `Platform` and platform files; permissions; keyboard handling; safe areas (`<SafeAreaView>` deprecated in favour of `react-native-safe-area-context`: [Expo SDK 54](https://expo.dev/changelog/sdk-54)) [E]; edge-to-edge on Android 15/16 ([RN 0.86](https://reactnative.dev/blog/2026/06/11/react-native-0.86)) [E]; AsyncStorage vs secure storage; app lifecycle (`AppState`); images. |
| **Depth** | Junior L2, mid L3, senior L3 [S]. |
| **Weak vs strong [S]** | Weak: "FlatList is a virtualized ScrollView." Strong: explains windowing and blanking, why inline `renderItem` closures and unstable keys cause row re-renders, when `getItemLayout` is possible, and when to move to FlashList. Mentions Discord's finding that FlashList blanked on low-end Android, which pushed them back to an in-house list ([Discord](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app)) [E] as evidence that list choice is device-dependent. |
| **Practice [S]** | Build an image feed of 1,000 rows on a low-end Android device or emulator. Measure blank areas and JS FPS. Fix it, then document the fix. |
| **By seniority [S]** | Junior: correct component use. Mid: perf, storage and platform trade-offs. Senior: bundle/startup strategy and when to go native. |
| **By company type [S]** | Consumer product companies (quick commerce, fintech, media) push list and startup performance. Agencies push breadth (payments, maps, push). |

### 3.4 Machine coding and live coding: the most common round, and follow-ups decide it

| Aspect | Detail |
|---|---|
| **What it evaluates** | Whether you can produce a working, reasonably structured feature under a time limit, and extend it when the interviewer changes requirements. |
| **Evidence (recurring prompts) [A]** | Nested folder/file explorer with expand/collapse, plus discussion of virtualising a large tree (Zepto; Swiggy, as a web React component). FlatList pagination with threshold and empty/loading states ([Accenture](https://www.naukri.com/code360/interview-experiences/accenture/accenture-interview-experience-application-developer-may-2024-exp-0-2-years-2)), with a dedup follow-up across pages ([internship report](https://medium.com/@saurowankhade/react-native-internship-interview-experience-d3cff58504c4)). Stopwatch (BlackWins). Todo (Zettaprime). Weather screen with input, navigation, API call inside a custom hook, long-press selection and dynamic styles ([JS in Plain English, Jul 2025](https://javascript.plainenglish.io/my-react-native-coding-interview-experience-weather-app-challenge-760c5ed5b4b5?gi=72065e1588d8)). Expandable section list plus login page (Callstack Codility). Cursor tracking with optimisation (Swiggy web). Company-published: a 4-hour Expo dice-roller take-home reviewed for the reasoning behind choices ([SafeStreets](https://github.com/SSDevelopment/takeHomeAssessment-reactNativeEngineer)) [E]; a 2–4-hour homework ([Left Field Labs](https://github.com/leftfieldlabs/rn-interview-homework)) [E]. |
| **Topics [S]** | Component decomposition; state placement; recursive components; pagination with dedup; debounced search; forms with validation; timers with correct cleanup; loading, empty and error states; a typed API layer; basic styling without a UI library. |
| **Depth** | Junior L2 (finish a small build completely), mid L3 (handle scale/perf follow-ups), senior L3 (also structure, testability and narrated trade-offs) [S]. |
| **Weak vs strong [S]** | Weak: gets the happy path working in 40 minutes with no error state, keys from array index, a global store for a simple form (one guide reports rejections for exactly this: [Cloudvyn](https://www.cloudvyn.com/blog/react-interview-questions-every-javascript-developer-fails)) [A], and freezes when asked to dedup. Strong: states assumptions, builds a vertical slice first, handles states, keys by stable ID, dedups with a `Map`/`Set` keyed on ID, narrates the cost of each choice, and proposes virtualisation and cursor pagination when asked about scale. |
| **Practice [S]** | Twelve timed builds (60–90 minutes each): folder tree (React Native and web), paginated list with dedup and pull-to-refresh, debounced search with request cancellation, stopwatch/timer, todo with persistence, weather app with a custom hook, OTP/login form with validation, image grid with detail screen, chat screen with optimistic send, star rating/carousel, infinite feed with like toggle, and the multi-consumer AsyncStorage-sync hook. Record yourself and review the follow-ups you could not answer. |
| **By seniority [S]** | Juniors get smaller scope. Seniors get vaguer specs and are judged on structure and extensibility. |
| **By company type [A/S]** | Indian product companies often run web React machine coding even for React Native roles. Service firms ask for a single small build. Agencies use take-homes plus a review. |

### 3.5 DSA: an online-assessment gate at easy-to-medium difficulty

| Aspect | Detail |
|---|---|
| **What it evaluates** | Baseline problem-solving and coding hygiene. Mostly a filter. |
| **Evidence [A]** | Gupio (0–2 years, Sep 2025): a single online round with one medium problem ([Naukri Code360](https://www.naukri.com/code360/interview-experiences/gupio/gupio-interview-experience-by-sopan-bhere-sep-2025-exp-0-2-years)). Swiggy frontend: 2 DSA problems in the OA plus a LeetCode easy problem. Callstack: Codility with an algorithm section. Pre-Series-B startups mostly skip DSA, and about a third of mid-size companies mix one DSA round with one practical round ([Medium, 50 postings](https://medium.com/@codegrey/is-dsa-still-required-for-software-engineering-interviews-i-read-50-job-postings-to-find-out-f1f5f2e1cc0c)). Mobile roles at big tech favour LeetCode medium ([The New Stack](https://thenewstack.io/how-to-prepare-for-big-tech-interviews-as-an-ios-engineer/)). Two Indian job descriptions name DSA (Talentojcom associate role, Vested Finance) [E]. |
| **Topics [S]** | Arrays and strings, hash maps/sets, two pointers, sliding window, stacks/queues, trees and BFS/DFS (folder trees are trees), sorting, binary search, basic recursion. DP and advanced graphs only for big tech. |
| **Depth** | L2 at all levels; L3 if targeting big tech or GCCs with HackerRank OAs [S]. |
| **Weak vs strong [S]** | Weak: brute force with no complexity stated. Strong: states the brute force and its complexity, then optimises with a hash map, and tests edge cases aloud. |
| **Practice [S]** | About 80–120 easy/medium problems clustered by pattern, plus 3–4 timed mock OAs. |
| **By seniority [S]** | The level stays roughly constant. Seniors face it less outside big tech. |
| **By company type [A]** | Big tech and some product companies keep it. Startups rarely use it. Service firms use an OA. |

### 3.6 Debugging: rarely its own round, always embedded

| Aspect | Detail |
|---|---|
| **What it evaluates** | Whether you can find root causes systematically across JS, native and build layers. |
| **Evidence** | No dedicated debugging round appears in any firsthand React Native report [gap]. Guides say strong debugging answers cite device logs and native build output ([Hyring](https://hyring.com/jobseeker-toolkit/interview-questions/technical/react-native)) [A]. CoderPad reports "debugging AI-generated code" as a growing assessment scenario ([CoderPad 2026](https://coderpad.io/blog/hiring-developers/new-research-the-2026-state-of-tech-hiring-what-ai-means-for-developers-and-hiring-teams/)) [E, vendor]. Debugging is the top developer pain point in State of RN 2025 free-text responses (22 mentions), and React Native DevTools is used by 95.1% while Flipper has fallen to 0.3% ([debugging & profiling](https://results.stateofreactnative.com/en-US/debugging-and-profiling/)) [E]. React Native 0.82 made uncaught promise rejections raise `console.error` ([RN 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82)) [E]. |
| **Topics [S]** | React Native DevTools (console, sources, Profiler); reading red-box and LogBox output; Metro errors; source maps; `adb logcat` and Xcode console; Gradle and CocoaPods failures; Sentry stack traces; network inspection; reproducing on a release build. |
| **Depth** | Junior L2, mid L3, senior L3 [S]. |
| **Weak vs strong [S]** | Weak: "I'd add console.logs and Google the error." Strong: "Reproduce on a release build first, because dev and release differ in Hermes bytecode, minification and `__DEV__` checks. Check whether the crash is JS or native from the Sentry/Crashlytics trace. If it's native, read logcat or the Xcode crash log and symbolicate. Then bisect recent dependency upgrades." |
| **Practice [S]** | Break a working app on purpose: missing effect cleanup, wrong key, infinite effect loop, unhandled promise, missing Android permission, duplicate native dependency, Pod version mismatch. Practise diagnosing each from the symptom alone. |
| **By seniority [S]** | Seniors are expected to cover native crash symbolication and upgrade regressions. |
| **By company type [S]** | Large companies with brownfield apps lean on native debugging. Startups lean on Sentry triage. |

### 3.7 Mobile system design: a senior round about the client, not the backend

| Aspect | Detail |
|---|---|
| **What it evaluates** | Architecture judgement under mobile constraints: unreliable network, battery, memory, store-gated releases. |
| **Evidence** | Typically 45–60 minutes with open prompts such as "design a pagination library" ([ByteByteGo](https://bytebytego.com/courses/mobile-system-design-interview/introduction); [DesignGurus](https://www.designgurus.io/answers/detail/how-do-you-prepare-for-a-mobile-system-design-interview)) [A]. Expected answer patterns ([ProAndroidDev](https://proandroiddev.com/a-simple-framework-for-mobile-system-design-interviews-89f6f4134b84); [DesignGurus](https://www.designgurus.io/blog/mobile-system-design-interview-questions)) [A]: local DB as source of truth; cursor pagination; a pending-write queue with client-generated IDs; image request cancellation and decoding at view size; push treated as unreliable; feature flags, staged rollouts and kill switches because mobile releases cannot be rolled back. Prep content suggests WhatsApp/Instagram-style prompts ([DEV Handbook](https://dev.to/amitkumar13/react-native-interview-handbook-part-5-of-5-senior-system-design-5jb)) [A]. No firsthand 2025–2026 report quotes a specific mobile design prompt [gap]. |
| **Topics [S]** | Requirements and non-functional constraints; module boundaries; data layer (cache, DB, sync, conflict resolution); networking (auth refresh, retries, offline queue); pagination; media pipeline; push and deep links; observability; release safety (flags, staged rollout, OTA policy); security (token storage, pinning). |
| **Depth** | Junior L1, mid L2, senior L3 [S]. |
| **Weak vs strong [S]** | Weak: draws a backend (load balancer, microservices) and says "use Redux." Strong: starts from screens and constraints, makes local storage the source of truth, specifies the cursor format and the dedup and retry semantics, explains what happens offline and on reinstall, and adds crash and performance metrics plus a staged-rollout plan. |
| **Practice [S]** | Five designs, written up in about 45 minutes each: offline-first chat, paginated social feed with media, food-delivery order tracking, a trading watchlist on WebSockets, and the image-cache/pagination library itself. |
| **By seniority [S]** | Mid-level may get a lighter "how would you structure this feature" version. Senior and staff are judged on modularity and team fit. |
| **By company type [S]** | Scaled product companies and big tech run it. Startups fold it into project discussion. |

### 3.8 Native build and deploy: tested through discussion, demanded by job descriptions

| Aspect | Detail |
|---|---|
| **What it evaluates** | Whether you can get a binary to users safely and fix the build when it breaks. |
| **Evidence** | Release ownership is the most consistent theme in remote postings (9/13) and appears in 54% of Indian job descriptions [E]. Recruiter guides ask candidates for CI configuration and evidence of automated releases (EAS, Bitrise, Fastlane, GitHub Actions) ([RemoteCrew](https://www.remotecrew.io/blog/hire-react-native-developers)) [A]. Shopify assigns build, release, distribution and React Native upgrades to experienced native engineers ([Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify)) [E]. No firsthand report describes a standalone build round [gap]. |
| **Topics [S]** | Android keystores, signing configs and build variants; iOS certificates, provisioning profiles and entitlements; versionCode/buildNumber; TestFlight and Play internal/closed tracks; staged rollout; EAS Build/Submit/Update and Workflows; Fastlane lanes; OTA vs binary boundary; store policy deadlines (target API 36 by 31 Aug 2026 with extensions to 1 Nov 2026: [Android](https://developer.android.com/google/play/requirements/target-sdk); Xcode 26 / iOS 26 SDK uploads: [Apple](https://developer.apple.com/news/upcoming-requirements/)) [E]. |
| **Depth** | Junior L2 for basic signed builds, mid L3, senior L3 [S]. |
| **Weak vs strong [S]** | Weak: "I run `eas build` and it works." Strong: explains what EAS is doing with credentials, why a native dependency change cannot ship via OTA, how runtime versions protect OTA compatibility, and how they would roll out in stages and halt a bad release. |
| **Practice [S]** | Take one app through: local release builds on both platforms, then EAS Build in GitHub Actions, then an internal testing track and TestFlight, then an OTA update, then a deliberate native change that requires a new binary. |
| **By seniority [S]** | Junior: produce and submit a build. Mid: operate and debug the pipeline. Senior: design it and set policy. |
| **By company type [E/S]** | Startups and agencies expect a one-person pipeline. Large companies have release teams, but still ask for CI/CD (3/3 large-tech job descriptions). |

### 3.9 Project discussion and behavioural: authorship is now being tested

| Aspect | Detail |
|---|---|
| **What it evaluates** | Real ownership, trade-off reasoning, collaboration, and, increasingly, whether you actually wrote what you are presenting. |
| **Evidence** | SafeStreets reviews "why you chose one option over another" in a follow-up interview [E]. Recruiter guides flag vague project histories ("built the screens") and never touching native tooling as red flags ([GoLance](https://golance.com/hiring/how-to-hire-react-native-developers); [RemoteCrew](https://www.remotecrew.io/blog/hire-react-native-developers)) [A]. Indian campus hiring uses live follow-ups to expose AI reliance ([Ground News](https://ground.news/article/recruiters-deploy-ai-to-catch-ghost-coders)) [A]. FanCode ran two leadership/culture rounds after four technical rounds [A]. |
| **Topics [S]** | One flagship project explained end to end (architecture, hardest bug, a metric you moved, what you'd redo); conflict and feedback stories; ownership of an incident; how you use AI tools and verify their output; mentoring (senior). |
| **Depth** | Junior L2, mid L3, senior L3 [S]. |
| **Weak vs strong [S]** | Weak: a feature list with no numbers and "we" throughout. Strong: "I owned the checkout screen. Cold-start-to-interactive was 3.1 seconds on a Redmi device. I profiled with DevTools, deferred two SDK inits and replaced a list. It went to 1.9 seconds and I verified it in Sentry performance." Only use numbers you actually measured. |
| **Practice [S]** | Write STAR stories for six prompts. Rehearse a 3-minute and a 10-minute walkthrough of your best project, and have someone interrupt with "why not X?" |
| **By seniority [S]** | Seniors are asked about influence, standards, mentoring and incidents. |
| **By company type [S]** | MNCs and GCCs run structured behavioural rounds. Startups probe founder-style ownership. |

---

## 4. Topic-priority matrix: fourteen areas plus DSA and behavioural, with Level 4 used once

All levels and tiers below are [S], grounded in the evidence cited in the justification column.

**Level 4 is assigned in exactly one cell: senior performance.** That area combines near-universal job-description demand (88% of Indian job descriptions) with company practice that sets explicit service-level objectives. Shopify's targets are P75 screen loads under 500 ms and crash-free sessions above 99.9% ([Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify)) [E]. Discord's native rewrites ([Discord](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app)) [E] show how far senior performance work can go.

Renderer internals of the kind Margelo did for Discord ([Margelo](https://margelo.com/blog/margelo-discord-react-native-performance)) [E] are staff or consultancy territory. They are not a hiring bar.

### 4.1 Summary matrix

| Area | Junior | Mid | Senior | Tier | Evidence-based justification |
|---|---|---|---|---|---|
| **A. JavaScript** | L2 (L3 on async and polyfills for product companies) | L3 | L3 | 1 | Polyfill round (FanCode) and JS questions in OAs (Swiggy) [A]; every React Native job description assumes JS [E] |
| **B. TypeScript** | L2 | L2 | L3 | 1 | 73% of Indian job descriptions, 8/13 remote [E]; 73% of survey respondents write 100% TS [E]; Strict TS API is the default in 0.87 [E] |
| **C. React (rendering and hooks)** | L3 | L3 | L3 | 1 | Hooks-internals questions at 0–2 years (CometChat) [A]; rendering probes at Callstack [A]; React Compiler 1.0 changes how memoisation questions are asked [E] |
| **D. React Native fundamentals** | L2 | L3 | L3 | 1 | Lists, storage and perf discussion at Zepto [A]; FlatList prompts at Accenture and the internship report [A]; "mobile developer first" guidance [A] |
| **E. React Native architecture (JSI/Fabric/TurboModules/Codegen/Hermes; legacy bridge)** | L1 | L2 | L3 | 2 | New Architecture in 5/26 Indian (0/6 junior) and 1/13 remote job descriptions [E]; senior guides expect JSI/Fabric explanations [A]; legacy cannot be enabled since 0.82 [E] |
| **F. Navigation (React Navigation, Expo Router, deep/universal/app links)** | L2 | L2 | L3 | 2 | React Navigation v6+ named in job descriptions (BFSI MNC, Big Rattle); deep links named in Big Rattle, Sketch Brahma and Digital Forms [E]; Expo Router decoupled from React Navigation in SDK 56 [E] |
| **G. State and server state** | L2 | L3 | L3 | 1 | Redux in 42% of Indian job descriptions, Zustand 19%, React Query 8% [E]; Redux and React Navigation advised for juniors (Gupio) [A] |
| **H. API and networking** | L2 | L3 | L3 | 1 | REST in nearly all junior job descriptions; WebSockets in 3/26; GraphQL in 3/26 Indian and 1/13 remote [E]; the weather-app live build used an API hook [A] |
| **I. Performance** | L2 | L3 | **L4** | 1 | 23/26 Indian job descriptions [E]; Zepto perf discussion [A]; Shopify SLOs and Discord work [E] |
| **J. Native Android/iOS** | L1 | L2 | L3 | 2 (Tier 1 at native-heavy startups and fintech) | 21/26 Indian job descriptions mention some native skill; 10 ask for native modules [E]; 8/13 remote [E]; ~60% of survey respondents still build manually in Xcode or Android Studio [E] |
| **K. Testing and code quality** | L2 | L2 | L3 | 2 | Named tools in only 6/26 Indian job descriptions, but testing in 8/13 remote (required in 7) [E]; Jest 77%, RNTL 59%, Maestro 46% [E] |
| **L. Production engineering (OTA/EAS/Fastlane/store release/monitoring)** | L2 (build and submit) | L3 | L3 | 1 (from mid level) | Store release in 54% of Indian and 9/13 remote job descriptions [E]; EAS Update 80% of OTA usage, Sentry 80.6% [E]; CodePush retired [E] |
| **M. Mobile system design** | L1 | L2 | L3 | 2 (Tier 1 for senior) | Architecture or system design in 7/7 Indian 5+-year job descriptions [E]; senior-only round per guides [A] |
| **N. Coding / machine coding** | L2 | L3 | L3 | 1 | Machine coding or a live build in 8/11 firsthand reports [A]; company take-homes published [E] |
| **DSA** | L2 | L2 | L2 (L3 for big tech) | 2 (Tier 1 for big tech) | OA component in 5/11 reports, easy-to-medium [A]; startups skip it [A] |
| **Behavioural / project discussion** | L2 | L3 | L3 | 1 | Explain-your-choices reviews [E]; red-flag lists [A]; AI-authorship follow-ups [A] |

### 4.2 Legacy vs modern relevance inside area E

| Concept | Status as of Oct 2026 [E] | Interview relevance [S] |
|---|---|---|
| Bridge (async, batched, serialised messages) | Legacy Architecture frozen in 0.80 (Jun 2025); cannot be enabled from 0.82 (Oct 2025); `CatalystInstanceImpl` removed in 0.85 ([RN 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82); [RN 0.85](https://reactnative.dev/blog/2026/04/07/react-native-0.85)) | L1–L2: explain it only as the reason the New Architecture exists, and as context for old apps stuck below 0.82 |
| JSI | Foundation of the only architecture | L2 mid, L3 senior: direct C++ bindings that make synchronous calls possible |
| Fabric | The renderer; DOM-like ref APIs since 0.82 | L2 mid, L3 senior: C++ shadow tree, concurrent React support, synchronous layout reads |
| TurboModules / Codegen | Always on; `useTurboModules` flag removed in 0.87 ([RN 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87)) | L2 mid, L3 senior: lazy, type-safe modules generated from TS specs |
| Expo Modules API / Nitro | Expo Modules used by 53% and Nitro by 34.7% of respondents in the last year [E]; Expo Modules 2.0 in beta (SDK 58) | Mid: write one simple module. Senior: choose between the options |
| Hermes | Hermes V1 default from 0.84 (Feb 2026) and Expo SDK 56 ([RN 0.84](https://reactnative.dev/blog/2026/02/11/react-native-0.84)) | L2: bytecode precompilation, startup benefits, debugging; no engine internals needed |
| Interop layers / upgrading libraries that are not New-Architecture-ready | Still relevant for brownfield apps | Senior L2–L3: upgrade strategy |

### 4.3 Example questions, competence tasks and common mistakes by area

Example questions are [S] unless a report is cited. They are written at the depth shown in the matrix.

| Area | Example interview questions at target depth | Practical competence task | Common mistakes [S unless cited] |
|---|---|---|---|
| A. JavaScript | "Implement `Promise.allSettled`" (FanCode [A]); "Implement `setInterval` with `setTimeout` and a working `clearInterval`" (FanCode [A]); "Predict the log order: sync, `setTimeout`, `Promise.then`, `queueMicrotask`"; "Write debounce with leading/trailing options" | Write 10 polyfills from memory, each passing your own tests within 15 minutes | Forgetting to preserve result order; not handling non-promise inputs; confusing micro- and macrotasks; `this` lost in callbacks |
| B. TypeScript | "Type a generic `useFetch<T>` that returns a discriminated union"; "Type React Navigation params so `navigate('Detail')` without an id fails"; "`unknown` vs `any` for an API response, and how you narrow it" | Convert a JS React Native app to strict TS with zero `any`, including navigation and API types | Using `as` casts to silence errors; `any` at API boundaries; no runtime validation of server data |
| C. React | "How does `useCallback` work internally, and when should you avoid it?" (CometChat [A]); "This child re-renders on every keystroke. Why? Show three fixes"; "What does React Compiler change about manual memoisation?" | Profile and fix an over-rendering 500-row list; write a custom hook with correct cleanup and an abort | Memoising everything; missing effect dependencies; stale closures in intervals; index keys |
| D. React Native fundamentals | "Implement a FlatList with a pagination threshold and empty/loading states" (Accenture [A]); "Why does my list blank on fast scroll on Android?"; "How do you handle the keyboard and safe areas on edge-to-edge Android 15+?" | Ship a 1,000-row image feed that stays smooth on a low-end Android device | Treating React Native like the web DOM; `ScrollView` for long lists; deprecated `SafeAreaView` |
| E. Architecture | Senior: "Walk through a tap that updates text: which threads and which layers?"; "Why couldn't the old bridge do synchronous layout reads?"; Mid: "What does Codegen generate and why?" | Write and explain a small TurboModule or Expo Module with a typed spec | Describing the bridge as current; claiming a React Native 1.0 exists (none announced as of 0.87 [E]); reciting acronyms without the problem each one solves |
| F. Navigation | "Typed stack + tabs with an auth gate"; "How does Expo Router map files to routes, and where do layouts go?"; "Configure `myapp://order/42` plus a universal/app link to the same screen. What is needed on the server side?" | Add deep links and universal/app links (including the `apple-app-site-association` and `assetlinks.json` files) to a demo app and test them cold and warm | Forgetting the cold-start link path; untyped params; studying React Navigation 8 alpha APIs as if they were stable |
| G. State and server state | "Build a custom AsyncStorage hook that keeps the same key in sync across consumers" (Zepto [A]); "When does server state belong in TanStack Query rather than Redux?"; "Context vs Zustand vs Redux Toolkit for this app" | Refactor a Redux-for-everything app so server state lives in a query cache and only UI state stays in a store | Putting fetched data in global stores with manual loading flags; a global store for one form [A, Cloudvyn] |
| H. API and networking | "Implement token refresh with a single in-flight refresh and request replay"; "Cancel stale search requests"; "Paginate with a cursor and dedup across pages" (internship dedup follow-up [A]) | Build a typed API client with retry/backoff, abort, refresh and offline error states | Race conditions in refresh; no timeout; storing tokens in plain AsyncStorage |
| I. Performance | "App startup is 4 seconds on low-end Android. How do you investigate?"; "JS FPS drops while animating. What moves off the JS thread?"; Senior: "Set a performance budget and enforce it in CI" | Before/after case study: measure TTI and frame drops, fix, re-measure, write it up | Optimising without measuring; ignoring release-build differences; blaming React Native without profiling |
| J. Native Android/iOS | "Gradle build fails after adding a library. Walk me through it"; "Add a permission and entitlement for camera on both platforms"; "Expose a native battery API to JS" | Write one Expo Module in Kotlin and Swift; fix three induced build failures (Gradle, Pods, signing) | Never opening Xcode or Android Studio; editing generated native folders in a CNG project (SDK 57 `prebuild` regenerates them by default [E]) |
| K. Testing | "Test a login form with RNTL, including the error path"; "How do you mock a native module and navigation in Jest?"; "Write a Maestro flow for checkout" | Jest + RNTL suite for one feature plus one Maestro E2E flow running in CI | Testing implementation details; snapshot-only tests; no E2E at all |
| L. Production engineering | "What can an OTA update change, and what can it not?"; "How do runtime versions prevent incompatible updates?"; "Migrate an app off CodePush"; "Design a staged rollout with a kill switch" | Pipeline: GitHub Actions → EAS Build → internal track/TestFlight → EAS Update → Sentry release tracking | Shipping a native change via OTA; no rollback plan; credentials committed to the repo |
| M. Mobile system design | "Design offline-first chat"; "Design a pagination/image-cache library" (ByteByteGo-style [A]); "Design order tracking for a delivery app" | Five written designs, each with a data flow diagram, failure modes and a rollout plan | Designing the backend instead of the client; no offline story; ignoring observability |
| N. Machine coding | Folder tree with expand/collapse plus large-tree perf (Zepto [A]); weather screen with hook, navigation and long-press (Jul 2025 report [A]); stopwatch (BlackWins [A]) | Twelve timed builds of 60–90 minutes, each extended by one follow-up | No error/empty states; running out of time on styling; no narration |
| DSA | "Two-sum-style hash map problem"; "Level-order traversal of a folder tree"; "Longest substring without repeats" | 80–120 problems by pattern plus timed OAs | Grinding hard DP for startup roles; not stating complexity |
| Behavioural | "Tell me about a production bug you owned"; "Why did you pick Zustand here?" (SafeStreets-style [E]); "How do you use AI tools, and how do you check their output?" | Six STAR stories plus a 3-minute and a 10-minute project walkthrough | Vague "we built"; invented metrics; denying AI use, or being unable to explain AI-written code |

---

## 5. Detailed syllabus: what to learn now, later or only for legacy, and the traps tutorials set

### 5.1 Topic-by-topic syllabus [S, grounded in cited E]

| Area | Study now (core) | Study later or deeper | Legacy-only: know it exists |
|---|---|---|---|
| A. JavaScript | Closures, scope, hoisting, `this`; prototypes; event loop and microtasks; promises and combinators; async/await errors; array/object methods; immutability; debounce/throttle; polyfills | Generators, iterators, WeakMap/WeakRef, memory leaks in closures | `var`-era patterns |
| B. TypeScript | Props/state/hook typing; generics; unions and narrowing; discriminated unions for async state; utility types; typed navigation; strict mode; avoiding deep imports (type errors in 0.87 [E]) | Conditional/mapped types; runtime schema validation (e.g., zod, which was not covered in this research); Codegen spec typing | Flow |
| C. React | Rendering and reconciliation; keys; hooks and their rules; effect cleanup; custom hooks; Context; memoisation and React Compiler 1.0 [E]; error boundaries | Concurrent features (`startTransition`, `useDeferredValue`; reliable in React Native since 0.82 [E]); Suspense; React 19.x APIs (verify specifics at react.dev) | Class lifecycles (still found in older code) |
| D. React Native fundamentals | Core components; Flexbox differences; FlatList/SectionList tuning; FlashList v2 [E]; Pressable; Platform API; permissions; keyboard; safe area context; edge-to-edge [E]; images; AppState; storage | Reanimated 4 with worklets (New Architecture only [E]); Gesture Handler; accessibility | `Touchable*` root export and `InteractionManager` (removed in 0.87 [E]); `StyleSheet.absoluteFillObject` (removed in 0.85 [E]) |
| E. Architecture | One-paragraph explanations of JSI, Fabric, TurboModules, Codegen, bridgeless, Hermes V1 [E]; threading model (background, see [architecture docs](https://reactnative.dev/architecture/landing-page)) | Writing TurboModules or Nitro; interop layers; upgrade strategy; RN 0.85 shared Animation Backend (experimental [E]) | Bridge internals, `NativeModules` legacy API, Paper renderer |
| F. Navigation | React Navigation 7 stacks/tabs/modals; typed params; Expo Router file routing and layouts; auth flows; deep links (cold and warm) | Universal links and Android App Links with server files; Expo Router native tabs and data loaders (stable in SDK 58 beta [E]) | React Navigation ≤5 APIs |
| G. State | `useState`/`useReducer`/Context; Redux Toolkit (42% of Indian job descriptions [E]); Zustand; TanStack Query for server state; persistence | Optimistic updates, normalisation, offline queues | Classic Redux with `connect` and hand-written reducers (read-only skill) |
| H. Networking | fetch/axios; abort and timeouts; error taxonomy; token refresh; pagination (cursor vs offset); WebSockets basics; image caching | GraphQL clients (3/26 Indian, 1/13 remote [E]); `expo/fetch` streaming (global fetch in SDK 56 [E]); LLM streaming UI | — |
| I. Performance | React DevTools Profiler; JS vs UI thread; list tuning; memoisation strategy; image sizing; startup (defer init, Hermes); animations off the JS thread | Native profiling (Instruments, Android Studio profiler); Flashlight; memory leaks; performance budgets in CI | Flipper (0.3% usage [E]) |
| J. Native | Project structure; Gradle and CocoaPods basics; signing; permissions and entitlements; reading logcat and Xcode logs; CNG/prebuild and config plugins | Kotlin/Swift native modules via Expo Modules or TurboModules; native UI components; SPM (experimental in 0.87 [E]) | Objective-C bridging macros |
| K. Testing | Jest (preset moved to `@react-native/jest-preset` in 0.85 [E]); RNTL; mocking modules and navigation; Maestro basics | E2E in CI; Detox (named in 4 Indian job descriptions [E]); Storybook; perf-regression tests | Enzyme |
| L. Production | Release builds; signing; TestFlight/Play tracks; EAS Build/Submit/Update; OTA limits and runtime versions; Sentry/Crashlytics; versioning; store policy deadlines [E] | Fastlane lanes; EAS Workflows; staged rollouts; feature flags; hot-updater/self-hosted OTA [E]; bytecode diffing (on by default in SDK 56 [E]) | CodePush and App Center (retired 31 Mar 2025 [E]): know how to migrate off |
| M. System design | Offline-first data flow; pagination; caching; auth; push; release safety | Sync and conflict resolution; modularisation and monorepos; observability SLOs | — |
| N. Machine coding | The twelve recurring prompts in section 3.4 | Take-home polish: README, tests, trade-off notes | — |
| DSA | Arrays, hash maps, strings, two pointers, sliding window, stacks, trees/BFS/DFS | DP and graphs (big tech only) | — |
| Behavioural | Project narrative; STAR stories; AI-usage honesty | Leadership and mentoring stories (senior) | — |

### 5.2 Preparation traps: what tutorials over-hype vs what is actually tested

| Over-hyped in tutorials and listicles | What the evidence shows is tested or required | Evidence |
|---|---|---|
| Memorising 100-question React Native listicles | Timed builds with follow-up extensions (8/11 reports) | [A] interview reports |
| Deep JSI/Fabric internals for juniors | New Architecture appears in 0/6 junior Indian job descriptions; no firsthand report quotes a JSI question | [E] job descriptions; [A] gap |
| "Bridge vs JSI" as a current configuration choice | Legacy cannot be enabled since 0.82; it is a history question | [E] RN 0.82 |
| CodePush setup tutorials | Hosted CodePush is dead; EAS Update holds 80% of OTA usage; migration is the relevant skill | [E] Expo blog; State of RN |
| Flipper debugging guides | React Native DevTools at 95.1%, Flipper at 0.3% | [E] State of RN 2025 |
| `useMemo`/`useCallback` on everything | React Compiler 1.0 is stable and in the Expo template; guides call memo trivia a red flag | [E] react.dev; [A] SecondTalent, GoLance |
| "Redux is dead, just learn Zustand" | Redux is in 42% of Indian job descriptions and 3/3 large-tech ones; Zustand is in 19% | [E] job descriptions |
| "Expo vs bare" debates | Expo CLI used by 86%; interviews are more likely to probe CNG, config plugins and EAS | [E] State of RN; [S] |
| Detox-first E2E | Maestro (45.7%) is ahead of Detox (25.6%) in practice, but Indian job descriptions name Detox 4× vs Maestro 1×. Learn Maestro for practice and recognise Detox | [E] both |
| Hard LeetCode (DP, graphs) for every role | Easy-to-medium online assessments; startups skip DSA | [A] |
| Animations-heavy showcase apps | Recruiters ask for shipped store apps and release ownership | [E] job descriptions (14/26 store release) |
| React Navigation 8 alpha APIs | Still alpha (8.0.0-alpha.58, 29 Sep 2026) | [E] GitHub releases |
| Studying `InteractionManager`, `Touchable*` and similar | Removed in 0.87 | [E] RN 0.87 |
| Tool-specific AI knowledge (MCP servers, agent CLIs) | Job descriptions and surveys value catching and fixing AI mistakes and explaining code | [E] CoderPad (vendor); [S] |

---

## 6. Job-description analysis: 26 Indian and 14 remote postings converge on "TypeScript, performance and store release"

### 6.1 Method, sample and limitations

**India sample [E].**
- **Size:** 26 postings, each with the full job-description text read.
- **Sources:** Cutshort (17), Wellfound (7), Accenture careers (1), Builtin Bengaluru (1).
- **Inclusion rule:** React Native is the title or the main duty, and a readable job description exists.
- **Date range:** April to October 2026. Three postings fall outside that range: two are undated (PhonePe, Accenture) and one Boeing role closed on 28 February 2026.
- **Dates:** Wellfound shows relative dates, which were converted to approximate months (marked ~). Where Cutshort's listing page and job page disagreed, the job page was used.
- **Skill flags:**
  - Only explicit mentions count, whether required or preferred.
  - "App store release" counts only when submission, store deployment or staged rollout is named.
  - "AI coding tools" counts only when a tool is named.
- **Supplementary postings:** about eight more, known only from snippets (Swiggy, Groww, Myntra, Instawork, Deloitte), are excluded from all counts.

**Limitations of the India sample.**
- **Board skew:** Cutshort and Wellfound lean toward startups and Bengaluru; 13 of 26 postings are startups.
- **Big Indian product companies are thin:** no full job description was retrieved from Swiggy, CRED, Razorpay, Zepto, Meesho, Groww, Flipkart or Dream11 (403 errors or closed listings).
- **Service companies are thin:** none from TCS, Infosys, Wipro or Cognizant. Naukri and LinkedIn job descriptions could not be fetched.
- **Small subgroups:** seniority bands of n=6 and n=7, and company-type groups of n=3, are too small for confident percentages.

**Remote/international sample [E].**
- **Gathered:** 14 October 2026 from Himalayas, Arc.dev, Built In, Lever and an HN "Who is hiring" mirror.
- **Size:** 14 postings read in full (skill counts use n=13, because Nagarro lists no skills), plus 7 known only from snippets.
- **Biases:** skewed to aggregator-listed small and mid-size companies and consultancies. "Open" status is unverified for some.
- **Big-tech gap:** no India-eligible React Native role at Shopify, Coinbase, Discord, Microsoft, Amazon, Meta, Expo, Callstack, Software Mansion, Infinite Red, Bluesky or Klarna could be confirmed.

**What neither sample can show.** Both samples are directional, not statistically representative. **No 2025 job-description text was retrievable**, so the 2025 vs 2026 comparison in 6.6 relies on ecosystem facts and labour-market data, not on posting-to-posting comparison.

### 6.2 India postings (core sample, n=26)

Type: S = startup, P = growth/scaled product, Svc = service/agency, L = large tech/MNC. Salaries are shown only where the posting displayed them. (p) = preferred.

| # | Company — role (type) | Location / arrangement | Exp (yrs) | Required skills (key) | Preferred skills | Responsibilities (key) | Posted | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | GOSUPER EDTECH — Senior RN Developer (S) | Bengaluru / not stated | 3–5 (₹8–15L) | RN, JS, TS, Expo APIs, EAS builds, OTA | — | App architecture; perf; EAS builds, OTA, releases; mentor | 12 Oct 2026 | [Cutshort](https://cutshort.io/job/Senior-React-Native-Developer-Bengaluru-Bangalore-GOSUPER-EDTECH-yKcgyIiR) |
| 2 | superkalam (YC W23) — Fullstack Mobile Engineer (S) | Bengaluru / NS, in-person interviews | 1–4 (₹15–35L + ESOP) | RN, TS, Node.js, NestJS, PostgreSQL, Redis, push, perf | Native bridges/widgets, GenAI/RAG, Python | Backend + mobile features; deployments; AI tooling | 5 Oct 2026 | [Cutshort](https://cutshort.io/job/Fullstack-Mobile-Engineer-React-Native-NodeJS-Bengaluru-Bangalore-superkalam-pkgHbFfX) |
| 3 | AI-native ERP (via Scaling Theory) — Hardcore RN/Mobile Engineer (S) | Remote | 7–18 on card, 5+ in text (₹55–99L + ESOP) | RN, Expo, TS, EAS, CI/CD, store release, native foundation, unit + E2E pipelines | — | Own release lifecycle; Figma-to-code; offline sync; real-time AI features | 21 Sep 2026 | [Cutshort](https://cutshort.io/job/Hardcore-React-Native-Mobile-Engineer-Scaling-Theory-3px8gNgs) |
| 4 | BFSI MNC (via Infinium) — Sr. Mobile Developer RN (L) | Delhi NCR / NS | 4–8 (₹15–20L) | RN, JS/TS, RTK/Zustand/Jotai, React Navigation v6+, native modules, Fastlane/GitHub Actions/Bitrise, cert pinning, biometrics | New Architecture; daily Copilot/Cursor/Claude; LLM on mobile; SEBI compliance | Investor apps; KYC/UPI; tests; startup/memory perf; TestFlight/Play beta, OTA | 14 Aug 2026 | [Cutshort](https://cutshort.io/job/Sr-Mobile-Developer-ReactNative-Delhi-Gurugram-Noida-Ghaziabad-Faridabad-Infinium-Associate-OUeIolR0) |
| 5 | AbleCredit — Mobile AppDev SDE 3 (S) | Bengaluru / NS | 5–10 | Production mobile (Kotlin/Swift/Flutter/RN); offline-first; crash/perf debugging; release engineering, staged rollout | Native modules, mobile CI/CD, automated tests, security | E2E feature design; camera/audio/location; startup and crash rate; mentor | 29 Sep 2026 | [Cutshort](https://cutshort.io/job/Mobile-AppDev-SDE-3-Bengaluru-Bangalore-AbleCredit-ztkDqCZw) |
| 6 | Quanteon Solutions — Junior RN Developer (Svc) | Hyderabad / NS | 1–2 (₹4–7L) | RN, JS/TS, hooks, navigation, state, REST; Android Studio/Xcode; AI tools (Claude, Cursor, Copilot, ChatGPT) | Git, basic CI/CD, store deployment | Cross-platform apps; GenAI features; AI-assisted coding/debugging | 9 Oct 2026 | [Cutshort](https://cutshort.io/job/React-Native-Developer-Hyderabad-Quanteon-Solutions-dkqX7KBx) |
| 7 | Sleep startup (via Talentojcom) — Associate SDE RN (S) | Bengaluru / NS | 0–2 (₹0.1–8L as listed) | RN, JS, TS, React, state, navigation, REST/auth, Git, DSA/OOP | Expo or CLI, Redux/Zustand, Node/Go, Postgres/Mongo/Firebase, AWS, store deployment | Features; APIs; testing, debugging, perf | 3 Aug 2026 | [Cutshort](https://cutshort.io/job/Associate-oftware-Development-Engineer-Bengaluru-Bangalore-Talentojcom-c4nlt1zJ) |
| 8 | PGAGI — SDE Intern RN (S) | Remote | 0.6–1, intern (₹2–3L) | RN, React.js, JS/TS, Redux/Context, REST, Git, Android Studio/Xcode, Jest, Gradle/Metro | Portfolio with Play Store/GitHub links | Apps; APIs; code reviews; unit tests | 28 Sep 2026 | [Cutshort](https://cutshort.io/job/SDE-Intern-React-Native-PGAGI-2ARnMb5d) |
| 9 | FOXO — SDE II Mobile RN (S) | Bengaluru / onsite | 3–5 | JS/TS, Expo + EAS Build/Submit/Update, native modules (Kotlin or Swift), perf profiling, shipped consumer app | BLE/maps/camera; GitHub Actions/Fastlane; Jest/Detox/Maestro; LLM features | Features to store; native integrations; startup/render perf; OTA hotfixes | ~Oct 2026 | [Wellfound](https://wellfound.com/jobs/4824482-sde-ii-mobile-react-native) |
| 10 | Vested Finance — SE Mobile RN/Flutter (P) | Ahmedabad/Mumbai/Gandhinagar / remote | 3+ native, 1+ RN/Flutter (₹25–30L) | RN or Flutter, Gradle, Android Studio, Xcode, event-driven architecture, DSA | Backend, fintech | Investing app; architecture docs; mentor | ~Jul 2026 | [Wellfound](https://wellfound.com/jobs/4417481-software-engineer-mobile-react-native-flutter) |
| 11 | Codal — Senior SE RN (Svc) | Ahmedabad / onsite | 5–8+ | RN, TS, RTK/Saga, Swift/SwiftUI, Kotlin, TurboModules/JSI/Fabric, Expo builds/OTA, store publishing | Next/Nuxt, serverless, monorepos | Native features; signing/provisioning; mentor | ~Aug 2026 | [Wellfound](https://wellfound.com/jobs/4463632-senior-software-engineer-react-native) |
| 12 | cardboard.ai — RN Engineer (S) | Bengaluru / NS | Not stated | RN, TS, Expo, New Architecture, Reanimated, Gesture Handler, native code, crash logs, JS/UI thread profiling | AVFoundation, MediaCodec, Skia, on-device ML | 60fps media UI; background uploads; native modules | ~Oct 2026 | [Wellfound](https://wellfound.com/jobs/4803708-react-native-engineer) |
| 13 | RecordBook (YC) — RN Developer (S) | Bengaluru / onsite (conflicting) | 1 (₹8–12L) | React.js, RN, ES6+, Xcode/Gradle, Redux, Git | TS, testing, mobile security | Build/maintain; perf; code reviews | ~Sep 2026 | [Wellfound](https://wellfound.com/jobs/3020981-react-native-developer) |
| 14 | Trend Reversal — Mobile Dev SDUI/RN/Kotlin/Swift (S) | Noida / onsite + WFH flex | 2+ (₹5–25L + equity) | SDUI, RN, solid Kotlin and Swift, REST/WebSockets | SDUI at scale | Native features; push; secure storage; store deploys | ~May 2026 | [Wellfound](https://wellfound.com/jobs/4144571-mobile-app-developer-server-driven-ui-react-native-kotlin-swift) |
| 15 | PhonePe — SE React Native (L) | Bengaluru / hybrid | 4–7 | JS/TS, REST, Xcode/Android Studio, Redux/MobX/Context, Jest/Detox/Appium, CI/CD, perf/memory | — | Hybrid work with native teams; speed; code reviews | Not shown | [rezeume mirror](https://rezeume.com/jobs/phonepe/1000000000001903) |
| 16 | NeoGenCode — RN SDE 3, C2H (Svc) | Bengaluru / hybrid | 8–14 (₹35–48L) | RN architecture, TS, GraphQL, platform knowledge, perf, a11y, CI/CD, TDD/BDD, system design | — | Founding team migrating native apps to RN | 14 Aug 2026 | [Cutshort](https://cutshort.io/job/React-Native-SDE-3-Bengaluru-Bangalore-NeoGenCode-Technologies-Pvt-Ltd-Dfn6pWZy) |
| 17 | Jio Tesseract — RN Developer (P) | Navi Mumbai / NS | 3–13 (₹7–45L) | RN, JS/TS, Redux/Zustand/MobX, native modules (Kotlin/Swift), REST/GraphQL/WebSockets, CI/CD, store deployment | CodePush/OTA, Nx/Turborepo, WCAG, AR, New Architecture | Native/hardware SDKs; real-time UI; startup/bundle perf | 10 Apr 2026 | [Cutshort](https://cutshort.io/job/React-Native-Developer-Navi-Mumbai-Jio-Tesseract-uDTIXZox) |
| 18 | Big Rattle — Senior RN Developer (Svc) | Mumbai / remote (conflicting) | 4–7 (₹10–15L) | RN CLI + Expo, TS, React Navigation v6+, Swift/Kotlin basics, payments, push, deep links, RTK/Zustand, React Query, MMKV, Fastlane, GitHub Actions/Bitrise, Jest + Detox, Sentry | New Architecture, RN Web, Nx, WCAG | E-commerce apps; TTI/60fps; offline-first; CI/CD; mentor | 4 May 2026 | [Cutshort](https://cutshort.io/job/Senior-React-Native-Developer-Big-Rattle-Technologies-QWXg5Be3) |
| 19 | Amura Health — Mobile Lead RN (P) | Chennai / onsite | 7–14 (₹40–70L) | RN + native lifecycles, AWS, mobile CI/CD, BLE, chat/video SDKs, FHIR/HL7, security | — | Architecture and CI/CD; release management and feature-flag rollouts; observability | 9 Jun 2026 | [Cutshort](https://cutshort.io/job/Mobile-Application-Lead-React-Native-Chennai-Amura-Health-aK3qiR1w) |
| 20 | RockED — Staff Mobile Developer (S) | Bengaluru / hybrid | 5–10 | JS/TS, scaling RN on both stores, system design, offline-first, design systems, security | (AI tools encouraged) | Lead RN architecture; perf/reliability; team building | 23 Jul 2026 | [Cutshort](https://cutshort.io/job/Staff-Mobile-Application-Developer-Bengaluru-Bangalore-RockED-8fPkLTUb) |
| 21 | Qurilo — RN Developer (S) | Delhi NCR / NS | 1–3 (₹2.5–3.5L) | RN, JS, React.js, REST, Redux, native modules | — | APIs/native modules; perf; end-to-end store deployment | 24 Apr 2026 | [Cutshort](https://cutshort.io/job/React-Native-Developer-Delhi-Gurugram-Noida-Ghaziabad-Faridabad-Qurilo-Technologies-LLC-D1WcobZs) |
| 22 | Sketch Brahma (via 1HResource) — RN Engineer, trading (Svc) | Bengaluru/Hyd/Noida / NS | 4–8 (₹5–14L) | RN with Play Store apps, TS, RN internals, WebSockets, WebView bridge, Redux/Zustand, FCM, deep links, native crash analysis, Jest/Detox | Kotlin bridge modules, charting, SDUI, feature flags | Android trading app; real-time lists; device matrix; mentor | 20 May 2026 | [Cutshort](https://cutshort.io/job/React-Native-Engineer-4-yrs-Bangalore-Bengaluru-Bangalore-Hyderabad-Noida-1HResource-Solutions-QpmxoBBb) |
| 23 | TopGrep Tech — RN Full Stack (S) | Bengaluru / NS | 2–3 (₹4–8L) | RN, JS/TS, React.js, Node.js APIs, Mongo/MySQL/Postgres, store deployment | — | Mobile + backend; DB; perf | 21 May 2026 | [Cutshort](https://cutshort.io/job/Job-Description-React-Native-Full-Stack-Developer-Bengaluru-Bangalore-TopGrep-Tech-Private-Limited-b56hFu6d) |
| 24 | Knobee Social — RN app-deployment role (Svc) | Noida / onsite | 1–1.5 (₹2.4–3L) | RN, JS, App Store Connect, Play Console, signing/provisioning/keystores, Xcode, Android Studio, Firebase, App Center | CI/CD, AI tools | Release builds; submissions; versioning; store rejections | 14 Jul 2026 | [Cutshort](https://cutshort.io/job/Front-end-developer-Noida-Bengaluru-Bangalore-Knobee-Social-India-Private-Limited-0r0IA5Cq) |
| 25 | Accenture — App Developer (Sr Analyst) RN (Svc) | Bengaluru / office | 2–5, min 3 RN | React Native, JS, REST, Git | "Mobile app frameworks" | Design/build apps; SME; documentation | Not shown | [Accenture](https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5116534-S1895365_en) |
| 26 | Boeing India — Exp. SE, RN Developer (L) | Bengaluru / onsite | 9+ | RN, JS/TS, Redux, REST, Jest + RNTL, native modules (Kotlin/Swift), Azure, store deploys, SQL/Mongo, CI/CD | React web, Node/Express, Docker | SAFe delivery; architecture; tech debt; mentor | Closed 28 Feb 2026 | [Builtin Bengaluru](https://builtinbengaluru.in/job/experienced-software-engineer-reactnative-developer/8569932) |

**Arrangement.**
- **Onsite:** 7.
- **Hybrid:** 3.
- **Remote:** 4.
- **Not stated:** 12.

**Cities.**
- **Bengaluru:** 14.
- **Delhi NCR:** 4.
- **Ahmedabad:** 2.
- **Mumbai:** 2.
- **Hyderabad:** 1.
- **Chennai:** 1.

### 6.3 India skill frequency (n=26, required + preferred, explicit mentions)

| Skill | Count | % |
|---|---|---|
| Performance optimisation / profiling | 23 | 88% |
| TypeScript | 19 | 73% |
| App Store / Play release named | 14 | 54% |
| CI/CD | 12 | 46% |
| Redux / Redux Toolkit | 11 | 42% |
| Native modules / bridging | 10 | 38% |
| Kotlin and/or Swift named | 9 | 35% |
| React web / React.js | 8 | 31% |
| Expo | 7 | 27% |
| Push notifications | 7 | 27% |
| Named test tools (Jest 6, Detox 4, Maestro 1, RNTL 1) | 6 | 23% |
| Building AI/LLM features into the app | 6 | 23% |
| Zustand | 5 | 19% |
| New Architecture (JSI/TurboModules/Fabric) | 5 | 19% |
| OTA updates (CodePush named only once) | 5 | 19% |
| Node.js / backend | 4 (5 with generic "backend") | 15% |
| Fastlane | 4 | 15% |
| Firebase (incl. FCM/Crashlytics) | 4 | 15% |
| Any AI-tool usage expectation | 4 | 15% |
| EAS | 3 | 12% |
| GraphQL | 3 | 12% |
| TanStack / React Query | 2 | 8% |
| Named AI coding tools | 2 | 8% |

Other recurring themes:
- **Mentoring / code reviews:** 9 postings.
- **Mobile security:** 7.
- **Offline-first:** 5.
- **Accessibility:** 4.
- **WebSockets:** 3.

**Interpretation [S].**
- **Performance and TypeScript are table stakes.**
- **"Ships to stores" (54%) is a stronger hiring signal than any single library.**
- **Redux remains the state default in India.** Zustand and React Query mostly appear as "Redux or X" alternatives.
- **Testing is under-specified.** It is required in practice but rarely named.
- **Expo is not a majority requirement**, and appears in no large-tech or scaled-product posting. That fits brownfield codebases.

### 6.4 Remote and international postings (detailed sample, n=14)

| # | Company — role | Arrangement / India eligibility | Exp | Required (key) | Preferred (key) | Responsibilities (key) | Posted | Source |
|---|---|---|---|---|---|---|---|---|
| D1 | Zeller (AU fintech) — Senior RN Engineer | Remote, **India only** | Senior | RN; native iOS/Android incl. store release; TS + GraphQL; strong testing | CI/CD, AWS; payments | Lead features; architecture and quality standards; perf | 22 Jul 2026 | [Himalayas](https://himalayas.app/companies/zeller/jobs/senior-react-native-engineer) |
| D2 | Tarteel AI — Senior Mobile Engineer (RN) | Remote, all countries incl. India; US Eastern overlap ≈5:30–9:30pm IST | 5+ mobile, 1+ RN | JS, React, RN, architecture, CI/CD, feature flags/A-B | Swift/Kotlin, KMP, SQL | Features; animations; perf/scalability | 3 Oct 2026 | [Himalayas](https://himalayas.app/companies/tarteel-ai/jobs/senior-mobile-engineer-react-native) |
| D3 | Wahed — RN Engineer | Remote, **India only** | 2+ | JS/TS, RN, Xcode/Gradle, REST + offline storage, Detox + Jest, dependency debugging | Swift/Kotlin, published store app | UI; native APIs; perf; unit tests; migrate features to RN | 13 Sep 2026 | [Himalayas](https://himalayas.app/companies/wahed/jobs/react-native-engineer) |
| D4 | BigBinary — RN Engineer | Remote, **India only** | 1+ production RN | RN, Git/GitHub, English, problem solving | — | Clean code; deploy; reviews; perf | 10 Aug 2026 | [Himalayas](https://himalayas.app/companies/bigbinary/jobs/react-native-engineer) |
| D5 | Parqet (DE) — Mobile Engineer RN | Remote, EU work permit, so effectively not India | Senior | RN + TS, automated testing, store publishing, financial data viz | — | Co-own apps (team of 2) | 8 Oct 2026 | [Himalayas](https://himalayas.app/companies/parqet-fintech-gmbh/jobs/mobile-engineer-react-native) |
| D6 | Berlitz — Senior SE Mobile/RN | Remote within Germany only | 5+ | RN or native, Clean Arch/MVVM, testing, release ownership, **AI coding tools daily** | Expo managed + New Architecture, signing, design systems | Expo features; EAS Build via GitHub Actions; store submission | ~9 Oct 2026 | [Arc](https://arc.dev/remote-jobs/j/berlitz-senior-software-engineer-mobile-react-native-m-f-d-pqfze7wxhe) |
| D7 | Owner.com — Senior SWE, Mobile Platform | Remote US/Canada only | 4+ | Strong TS, store distribution/build pipelines, CI/CD, release reliability, certificates/provisioning | React Native | Mobile DX and CI/CD; release guardrails; AI automations | ~13 Oct 2026 | [Arc](https://arc.dev/remote-jobs/j/owner-com-senior-software-engineer-mobile-platform-guest-app-remote-canada-pqpenygcv6) |
| D8 | VALCE (recruiter) — Mobile Engineer iOS/Android + RN + AI | Remote, Mexico only | 7+ | Native Swift or Kotlin; recent RN; store publishing; testing, CI/CD; **AI tools in production** | Internal tooling; e-commerce checkout | RN + native features; daily AI codegen/refactor/tests | ~9 Oct 2026 | [Built In](https://builtin.com/job/mobile-engineer-ios-or-android-react-native-ai/11598589) |
| D9 | Nagarro — Staff Engineer, Mobile (RN) | Remote, **India only** | Senior/Staff | Not itemised | — | Generic | 1 Oct 2026 | [Himalayas](https://himalayas.app/companies/nagarro/jobs/staff-engineer-mobile-developer-react-native) |
| D10 | Xsolla — Senior SE (RN) | Montreal / remote; eligibility not stated | 5+ | RN + JS/TS, architecture and state, shipped apps, E2E testing, perf | Native modules in Swift/Kotlin | Web↔RN sharing; Nx/Turborepo; E2E (Detox/Maestro/Appium) in CI; mentor | Not shown | [Lever](https://jobs.lever.co/xsolla/2a094b06-bf3b-456a-a136-27c4545cfe00) |
| D11 | Wing Assistant — RN Developer | Remote, Bangladesh/India/Philippines | 2 | RN, Express + React, SQL/Mongo, AWS/Vercel, 2FA, Context/RTK | Meta API approval | MVP build; deployments; code + DB | 13 Jul 2026 | [Himalayas](https://himalayas.app/companies/wing-assistant/jobs/react-native-developer) |
| D12 | Digital Forms (PL) — Mobile Developer RN | Remote, all countries | 5+ | RN from scratch, store releases, deep links + push, REST at scale, perf, analytics, unit/component tests | Streaming/AI features, E2E, feature flags, Node/Next | Architect app; push/deep-link layer; releases | 6 Oct 2026 | [Himalayas](https://himalayas.app/companies/digitalforms/jobs/mobile-developer-react-native) |
| D13 | Zoftify — RN Developer | Remote, AU/CA/DE/**IN**/UK/US | 2+ (1+ RN) | RN + TS, REST, apps from scratch, native plugins (camera, push, maps) | Native, CI/CD (App Center, Bitrise), store distribution | Client apps; Figma implementation | 30 Jul 2026 | [Himalayas](https://himalayas.app/companies/zoftify-travel-software-development/jobs/react-native-developer) |
| D14 | Cloud SynApps — Mobile Dev (RN) + Salesforce | Remote, **India only**, contractor, US Eastern hours | 4+ mobile, 3+ RN | RN, JS/TS, native build/sign/debug, store publishing, Salesforce Apex/OAuth2, CI/CD | Appium, OWASP MASVS | Own app; certificates; dependency upgrades; incident RCA | 2 Oct 2026 | [Himalayas](https://himalayas.app/companies/cloud-synapps-inc/jobs/mobile-developer-react-native-salesforce) |

**Remote skill frequency (n=13) [E]:**

| Skill | Count |
|---|---|
| Store release ownership | 9 (required in 7) |
| TypeScript | 8 |
| Native iOS/Android or Swift/Kotlin | 8 (required in 4) |
| Testing | 8 (required in 7) |
| CI/CD | 8 |
| React web / Node / full-stack breadth | 7 |
| Performance | 5 |
| Named state management | 3 |
| AI coding tools in workflow | 3 (named in 2) |
| Feature flags | 2 |
| Expo/EAS | 1 |
| New Architecture | 1 |
| GraphQL | 1 |
| OTA | 0 |

**UK corroboration [E].** Across 208 UK React Native ads, co-occurring skills were React 44.23%, TypeScript 29.81%, CI/CD 25.48%, GraphQL 17.31%, Swift 9.62% and Kotlin 7.21% ([IT Jobs Watch](https://www.itjobswatch.co.uk/jobs/uk/react%20native.do)).

**Eligibility for India-based applicants [E].**
- Only 9 of the 21 roles (detailed plus partial) were clearly open to India-based applicants.
- Five of those are India-only roles from foreign companies or consultancies: Zeller, Wahed, BigBinary, Nagarro and Cloud SynApps.
- "Anywhere" roles often require US-timezone overlap, as with Tarteel.
- No junior roles appeared.

**Interpretation [S].**
- **Remote employers describe a release-owning, tested, native-literate engineer.** They also assume Expo and the New Architecture rather than listing them.
- **India-based juniors should treat remote work as a 2–4-year goal.** The way in is shipped store apps.

### 6.5 Supplementary India big-company signals (not counted; snippet-level)

These are known only from search snippets, are closed or undated, and are not counted [E-snippet]:

| Company | Role | Requirement signal | Source |
|---|---|---|---|
| Swiggy | RN Developer | Order-lifecycle features, offline-first caching, push | [Instahyre](https://www.instahyre.com/job-441417-react-native-developer-at-swiggy-bangalore/) |
| Swiggy | SDE I RN | Android app development experience | [startup.jobs](https://startup.jobs/software-dev-engineer-i-react-native-mobile-swiggy_in-1818075) |
| Myntra | RN Developer, 5–8 yrs | Required iOS experience | [Instahyre](https://www.instahyre.com/job-323602-react-native-developer-at-myntra-3-bangalore/) |
| Groww | SDE 3 RN, 5–7 yrs, INR 30–52 lakh | Cross-platform architecture and mentoring | [JobLeads](https://www.jobleads.com/in/job/sde-3-react-native-credit--bengaluru--e07e20e43ace6c555fd3a8237c3bab287) |

Glassdoor snippets for Expo-specific Indian roles mention expo-router, Zustand, TanStack Query and EAS, plus "at least one app live on both stores" ([Glassdoor](https://www.glassdoor.co.in/Job/india-react-native-expo-jobs-SRCH_IL.0,5_IN115_KO6,23.htm)). These are unverified.

The signal is consistent with the core sample: **native platform experience is valued at Indian consumer-scale companies.**

### 6.6 2025 vs 2026: confirmed ecosystem changes vs hiring-trend claims

**Confirmed ecosystem changes (dated, cited) [E]**

| Area | Change and date | Source | What it does to interview prep [S] |
|---|---|---|---|
| **New Architecture** | 23 Oct 2024: default in 0.76.<br>12 Jun 2025: Legacy Architecture frozen in 0.80.<br>8 Oct 2025: legacy cannot be enabled in 0.82; 0.81 and SDK 54 were the last versions supporting it.<br>25 Feb 2026: Expo SDK 55 removed legacy.<br>Apr 2026: `CatalystInstanceImpl` removed in 0.85.<br>11 Aug 2026: `useTurboModules` flag removed in 0.87.<br>State of RN 2025 reports "80% adoption"; Expo reports ~83% of SDK 54 EAS builds on the New Architecture as of Jan 2026. | [RN 0.76](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture); [RN 0.80](https://reactnative.dev/blog/2025/06/12/react-native-0.80); [RN 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82); [Expo SDK 55](https://expo.dev/changelog/sdk-55); [RN 0.85](https://reactnative.dev/blog/2026/04/07/react-native-0.85); [RN 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87); [State of RN](https://results.stateofreactnative.com/en-US/); [Expo docs](https://docs.expo.dev/guides/new-architecture/) | Explain the New Architecture as the only architecture. Treat the bridge as history. Know library compatibility as an upgrade concern. |
| **JS engine** | 11 Feb 2026: Hermes V1 default in 0.84.<br>21 May 2026: Hermes V1 default in Expo SDK 56, with Reanimated regressions fixed in SDK 57.<br>Precompiled iOS binaries on by default in 0.84. | [RN 0.84](https://reactnative.dev/blog/2026/02/11/react-native-0.84); [Expo SDK 56](https://expo.dev/changelog/sdk-56) | Know Hermes at a working level; JSC is not the default answer. |
| **Expo** | 10 Sep 2025: SDK 54 was the last with legacy support and enabled React Compiler in the template.<br>SDK 56: Expo Router no longer depends on React Navigation; new projects ship AGENTS.md/CLAUDE.md.<br>30 Jun 2026: SDK 57 `prebuild` regenerates native folders by default.<br>15 Sep 2026: SDK 58 beta on RN 0.88 RC.<br>Expo CLI used by 86%. | [SDK 54](https://expo.dev/changelog/sdk-54); [SDK 56](https://expo.dev/changelog/sdk-56); [SDK 57](https://expo.dev/changelog/sdk-57); [SDK 58 beta](https://expo.dev/changelog/sdk-58-beta); [State of RN](https://results.stateofreactnative.com/en-US/react-native-architecture/) | CNG, config plugins, Expo Router and EAS are the default stack. React Navigation knowledge matters most for non-Router and brownfield apps. |
| **TypeScript** | Jun 2025: Strict TS API opt-in in 0.80.<br>Aug 2026: default in 0.87; deep imports become type errors, with the opt-out lasting through 0.88. | [Stable JS API post](https://reactnative.dev/blog/2025/06/12/moving-towards-a-stable-javascript-api); [RN 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87) | TS fluency is baseline. |
| **Testing** | 7 Apr 2026: Jest preset moved to `@react-native/jest-preset` in 0.85.<br>24 Jun 2026: EAS Maestro testing insights.<br>Survey: Maestro 45.7% vs Detox 25.6%. | [RN 0.85](https://reactnative.dev/blog/2026/04/07/react-native-0.85); [Expo changelog](https://expo.dev/changelog); [State of RN](https://results.stateofreactnative.com/en-US/testing-and-monitoring/) | Learn Jest + RNTL + Maestro. |
| **OTA / release management** | 31 Mar 2025: App Center and hosted CodePush shut down.<br>20 May 2025: CodePush server repo archived (secondary source).<br>EAS Update is used by 80.24% of OTA users.<br>Alternatives: hot-updater and Codemagic.<br>Expo SDK 55: bytecode diffing opt-in; SDK 56: on by default. | [Expo blog](https://expo.dev/blog/how-to-replace-app-center-and-codepush); [Codemagic](https://blog.codemagic.io/react-native-ota-tools-in-2026/); [State of RN](https://results.stateofreactnative.com/en-US/react-native-architecture/) | OTA questions now mean EAS Update, runtime versions and migrating off CodePush. One Indian job description (Jio Tesseract) still names CodePush. |
| **Performance / debugging** | Oct 2024: React Native DevTools introduced in 0.76.<br>31 Jul 2025: FlashList v2 production-ready.<br>Reanimated 4 stable, New Architecture only.<br>7 Oct 2025: React Compiler 1.0.<br>0.85: experimental shared Animation Backend.<br>0.87: Metro source maps ~2× faster; `InteractionManager` removed.<br>Flipper at 0.3% usage. | [RN 0.76](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture); [Shopify](https://shopify.engineering/flashlist-v2); [Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/guides/migration-from-3.x/); [React Compiler](https://react.dev/blog/2025/10/07/react-compiler-1); [RN 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87); [State of RN](https://results.stateofreactnative.com/en-US/debugging-and-profiling/) | Profile with DevTools. Know FlashList v2 and Reanimated 4. Understand what the compiler does. |
| **Store policy** | Google Play: target API 36 for new apps and updates by 31 Aug 2026 (extension to 1 Nov 2026). 16 KB page size: Google's current doc blocks non-compliant updates from 1 Feb 2027; earlier coverage cited 1 Nov 2025 (conflict). Apple: Xcode 26 / iOS 26 SDK uploads from 28 Apr 2026 (secondary source for the date). | [Android target SDK](https://developer.android.com/google/play/requirements/target-sdk); [Page sizes](https://developer.android.com/guide/practices/page-sizes); [Apple](https://developer.apple.com/news/upcoming-requirements/) | "Upgrade an old React Native app to meet store rules" is a realistic task and question. |
| **AI-assisted development** | Expo SDK 55 (Feb 2026): MCP server with EAS tools and `expo/skills`.<br>26 May 2026: MCP on the Free plan.<br>SDK 56: AGENTS.md/CLAUDE.md in templates.<br>20 Jul 2026: Expo Agent wound down.<br>13 Aug 2026: Claude desktop connector.<br>SDK 58 beta: `@expo/agent-cli`. | [Expo SDK 55](https://expo.dev/changelog/sdk-55); [Expo changelog](https://expo.dev/changelog); [Expo Agent wind-down](https://expo.dev/changelog/expo-agent-ending-the-closed-beta-and-winding-the-project-down) | AI tooling is part of the default Expo workflow. Interview value lies in verification, not tool trivia. |
| **Coding assessments** | 2025: Meta pilots an AI-enabled coding round.<br>Apr 2025: Amazon no-unauthorized-tools declaration reported.<br>2025: Google commits to at least one in-person round; Cisco and McKinsey reintroduce onsite rounds (Aug 2025).<br>11 Mar 2026: CoderPad reports "debugging AI-generated code" as a growing scenario. | [TechRadar](https://www.techradar.com/pro/meta-is-going-to-let-candidates-use-ai-in-job-interviews); [TechCrunch](https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/); [Trak.in](https://trak.in/stories/google-brings-back-in-person-interviews-to-stop-ai-enabled-cheating/); [OECD.AI](https://oecd.ai/en/incidents/2025-08-12-0f22); [CoderPad](https://coderpad.io/blog/hiring-developers/new-research-the-2026-state-of-tech-hiring-what-ai-means-for-developers-and-hiring-teams/) | Practise live coding without AI. Be ready to explain everything you submit. |

**Hiring-trend claims, with evidence strength**

| Claim | Evidence | Strength |
|---|---|---|
| React Native demand recovered in 2026 vs 2025 | UK ads 138 → 208 (6 months to 14 Oct) [E]. India: no React Native series; a vendor claims +28% with no method. | Moderate for the UK; **unsupported for India** |
| The market tilted toward seniority | US software postings: 69.3% senior, 4.5% entry (Q1 2026) [E]. Remote React Native sample: 0 junior roles [E]. | Strong for the US and remote; **no India measurement** |
| Expo/EAS and AI-tool expectations are rising in Indian job descriptions | Within 2026: Expo 1/7 in Apr–Jun vs 6/16 in Jul–Oct; named AI tools 0/7 vs 2/16 [E]. | **Weak:** tiny, biased groups; hypothesis only |
| AI tools are becoming a stated requirement | 2 of 13 remote postings (both Oct 2026, both senior, Western) [E]. 2 of 26 Indian postings [E]. | Emerging; no 2025 baseline |
| Interviews are shifting from memo trivia to understanding the compiler | One hiring guide [A]. | Weak |
| Flutter is losing ground to React Native | UK Flutter ads 49 → 39 → 23 [E]. Stack Overflow 2025 has no valid comparison [E]. | UK-only |
| Junior hiring in India tightened | Viral post of 12,000 applicants and 0 hires [A]; TOI reports of proctoring [A]. | Anecdotal |

---

## 7. Six-phase preparation roadmap: depth-first, with exit criteria instead of calendar dates

Everything in this section is [S], built from the matrix in section 4.

**Two design principles apply throughout.**
- **Each phase ends on a demonstrable competence, not a list of things read.** Many candidates fail not because they lack topics but because they cannot produce under time pressure or explain a follow-up.
- **Phases overlap.** Run DSA practice (about 30 minutes a day) and one machine-coding build per week from Phase 2 onward.

### Phase 1: Core foundations (JavaScript, TypeScript, DSA baseline)

| Item | Content |
|---|---|
| Topics | Closures, `this`, prototypes, event loop, promises and combinators, async errors, array/object manipulation; TS generics, unions, narrowing, utility types; DSA patterns (hash map, two pointers, sliding window, stack, tree traversal) |
| Depth | L3 for JS async and closures; L2 for TS; L2 for DSA |
| Prerequisites | Basic programming |
| Coding exercises | 10 polyfills (`all`, `allSettled`, `race`, debounce, throttle, `flat(depth)`, deep clone, `setInterval` via `setTimeout`, event emitter, memoize); a typed `fetchJson<T>` with a discriminated-union result; 40 easy and 20 medium problems |
| Practice questions | "Predict this output (mixed sync/micro/macro)"; "Why does this `for` loop with `var` and `setTimeout` print 3,3,3?"; "Type a function that returns different shapes based on a status field" |
| Completion criterion | Write any of the 10 polyfills from a blank file in under 15 minutes with your own tests, and solve an unseen LeetCode easy in under 15 minutes with complexity stated |
| Common failure reasons | Reading explanations instead of writing code; skipping TS because "the job description says JS"; grinding hard DSA before mastering easy patterns |

### Phase 2: React and React Native fundamentals

| Item | Content |
|---|---|
| Topics | Rendering and reconciliation; hooks and cleanup; custom hooks; Context; React Compiler basics; core React Native components; Flexbox; FlatList; Platform; permissions; keyboard; safe area and edge-to-edge; navigation (React Navigation 7 and Expo Router); AsyncStorage and secure storage; Expo project setup |
| Depth | L3 React; L2 React Native fundamentals; L2 navigation |
| Prerequisites | Phase 1 JS |
| Coding exercises | Todo with persistence; stopwatch with correct interval cleanup; typed stack + tabs app with auth gate; paginated FlatList with pull-to-refresh; custom `useAsyncStorage` that syncs across consumers |
| Practice questions | "How does `useCallback` work and when should you avoid it?"; "Why does this effect run twice / loop forever?"; "How does Expo Router map files to screens?" |
| Completion criterion | Build the todo, the stopwatch and the paginated list from scratch in Expo, each in 60 minutes or less, with loading, empty and error states, and explain every re-render with the Profiler open |
| Common failure reasons | Copying tutorial code without understanding effects; memoising by reflex; never testing on a real Android device |

### Phase 3: Intermediate implementation and debugging

| Item | Content |
|---|---|
| Topics | Networking (abort, retry, token refresh, cursor pagination, dedup); TanStack Query plus Redux Toolkit or Zustand; forms and validation; deep links (cold and warm); push notification basics; debugging with React Native DevTools, logcat and Xcode console; Sentry |
| Depth | L3 networking and state (mid target); L2 debugging moving to L3 |
| Prerequisites | Phase 2 |
| Coding exercises | Typed API client with refresh-token queue; debounced search with cancellation; infinite feed with dedup and optimistic like; the weather-app prompt (input, navigation, API hook, long-press, dynamic styles); "break and fix" drills (7 induced bugs) |
| Practice questions | "Two requests return 401 at once. How many refreshes happen?"; "Where should server data live?"; "The app crashes only in release builds. What is your first step?" |
| Completion criterion | Complete 6 of the 12 machine-coding prompts within time and handle at least one follow-up extension each. Diagnose all 7 induced bugs from symptoms alone. |
| Common failure reasons | Putting server state in Redux with manual flags; never reproducing on a release build; ignoring error paths |

### Phase 4: Performance, architecture and native

| Item | Content |
|---|---|
| Topics | Profiling (DevTools Profiler, JS vs UI thread); list performance (FlatList tuning, FlashList v2); images; startup (Hermes V1, deferred init); Reanimated 4 basics; New Architecture concepts (JSI, Fabric, TurboModules, Codegen, bridgeless) and why the bridge was replaced; Gradle/CocoaPods/Xcode basics; signing; CNG/prebuild and config plugins; one Expo Module in Kotlin and Swift |
| Depth | L3 performance (L4 target only for seniors); L2 architecture for mid, L3 for senior; L2 native for mid |
| Prerequisites | Phase 3 |
| Coding exercises | 1,000-row image feed optimised on a low-end Android with before/after numbers; a gesture-driven animation on the UI thread; an Expo Module exposing a native API; fix three induced native build failures |
| Practice questions | "Walk me through what happens between a tap and a text update"; "Why can't an OTA update add a native module?"; "Startup takes 4 seconds. Investigate." |
| Completion criterion | A written one-page performance case study with measured before/after numbers. A 2-minute explanation of the New Architecture that names the problem each piece solves. A working native module on both platforms. |
| Common failure reasons | Memorising acronyms; optimising without measuring; avoiding Xcode and Android Studio entirely |

### Phase 5: Testing, production and mobile system design

| Item | Content |
|---|---|
| Topics | Jest + RNTL (mocking native modules and navigation); one Maestro flow; CI with GitHub Actions; EAS Build/Submit/Update; runtime versions; staged rollout; feature flags; Sentry releases and source maps; store tracks; store policy deadlines; mobile system design framework (constraints, data layer, offline, pagination, media, push, release safety, observability) |
| Depth | L2 testing (L3 for senior); L3 production for mid and senior; L2 system design for mid, L3 for senior |
| Prerequisites | Phase 4 |
| Coding exercises | Add a test suite and Maestro flow to your flagship app; full pipeline (PR → CI tests → EAS Build → internal track/TestFlight → OTA update); simulate a CodePush-to-EAS migration plan; write 5 system designs |
| Practice questions | "What can OTA change?"; "How do you stop a bad release?"; "Design offline-first chat"; "Design an image-cache/pagination library" |
| Completion criterion | Your flagship app has green CI, a release on at least one store track (internal testing or TestFlight is acceptable), and a documented OTA. You can deliver a 45-minute design with a diagram covering offline and release safety. |
| Common failure reasons | Treating testing as optional because job descriptions don't name tools; designing backends in mobile design rounds; never shipping a real binary |

### Phase 6: Interview practice and revision

| Item | Content |
|---|---|
| Topics | Timed machine coding; mock OAs; polyfill drills; project narrative; STAR stories; AI-usage narrative; company-specific prep (web React components for Indian product companies, DSA for big tech, take-home polish for agencies) |
| Depth | Consolidation; no new topics |
| Prerequisites | Phases 1–5 at least partially complete |
| Coding exercises | 2–3 timed machine-coding mocks per week with an interviewer injecting follow-ups; 2 mock OAs; one take-home completed in 4 hours with a README covering trade-offs (SafeStreets format) |
| Practice questions | Your own project's "why not X?" questions; behavioural prompts; rapid-fire JS/React concept recall |
| Completion criterion | The readiness assessment in section 8 at "interview-ready" on every row relevant to your target level |
| Common failure reasons | Endless studying without mocks; not rehearsing follow-ups; inventing metrics; being unable to explain AI-written take-home code |

### Timeline alternatives by current proficiency [S; these are planning estimates, not evidence-based durations]

| Starting point | Where to start | Emphasis | Indicative duration at ~15–20 hrs/week |
|---|---|---|---|
| Fresher / career switcher, weak JS | Phase 1 in full | JS depth, then React; aim for 0–2-year roles at startups, agencies and service firms | ~5–7 months to junior-ready |
| Web React developer, new to React Native | Phase 1 review → Phase 2 (React Native parts) | Mobile mindset, lists, native build, store release | ~3–4 months to junior/mid-ready |
| 1–2 years of React Native, tutorial-level | Diagnose with section 8, usually Phase 3 | Debugging, networking, state, a shipped app | ~2–3 months to mid-ready |
| 2–5 years of React Native, never touched native or release | Phase 4 → 5 | Native modules, signing, EAS/Fastlane, testing, performance case study | ~6–10 weeks |
| 5+ years, targeting senior or remote | Section 8 diagnosis → Phases 4–6 | System design, New Architecture depth, release policy, leadership stories | ~4–8 weeks of focused prep |
| Targeting big tech | Add DSA to L3 alongside the above | LeetCode medium fluency | Add ~6–10 weeks of DSA |

---

## 8. Practical readiness assessment: eight tasks that expose real gaps

**Rules.** Do these without AI assistance and without references, except official docs where noted. Time-box each task. All tasks are [S]. Several mirror reported prompts, as cited.

| # | Area | Task | Time box | What it reveals |
|---|---|---|---|---|
| 1 | JS/TS | Implement `Promise.allSettled` and a typed `debounce<T extends (...args) => void>` with cancel; write 5 tests each. Then predict the output of a 10-line event-loop snippet. | 40 min | Async mechanics and type fluency (FanCode-style [A]) |
| 2 | Hooks/rendering | Given a 300-row list where toggling one row re-renders all rows and an effect leaks an interval: find both problems with the Profiler and fix them. Explain what React Compiler would and would not fix. | 45 min | Mechanistic rendering model |
| 3 | React Native implementation | Build a two-screen Expo app: a paginated list (cursor API mock) with dedup, pull-to-refresh and empty/error states, plus a detail screen reached through a typed route and a deep link. | 90 min | Machine-coding fluency (Accenture, internship and weather-app prompts [A]) |
| 4 | API/state | Add token refresh with a single in-flight refresh and request replay. Cache list data in TanStack Query and keep the auth token in secure storage. Write the "two parallel 401s" test. | 60 min | Networking and state architecture |
| 5 | Performance/debugging | On a low-end Android device or emulator, record JS FPS and startup for an image feed. Make two changes and re-measure. Separately, diagnose a crash that occurs only in the release build. | 60 min | Measure-first habit; release vs debug awareness |
| 6 | Native/builds/releases | From a clean clone: produce signed release builds for Android (keystore) and iOS (or EAS-managed credentials), add a camera permission on both platforms, and fix one induced Gradle or Pod error. Then ship a JS-only fix via EAS Update and explain why a native change could not go that way. | 2–3 hrs | Delivery ownership (54% of Indian and 9/13 remote job descriptions [E]) |
| 7 | Coding | One unseen LeetCode medium (hash map or tree) in 30 minutes, plus a recursive folder-tree component with expand/collapse in 45 minutes (Zepto/Swiggy [A]). | 75 min | OA and machine-coding readiness |
| 8 | Project explanation | Record a 10-minute walkthrough of your best project. Have someone ask 5 "why not X?" questions and one "show me where this happens in code". | 20 min | Authorship and trade-off reasoning |

**Rubric**

| Dimension | Beginner | Developing | Interview-ready | Strong candidate |
|---|---|---|---|---|
| JS/TS (task 1) | Cannot finish without references | Finishes with bugs in edge cases (order, non-promises) | Correct, tested, within time; explains micro vs macrotasks | Also discusses typing trade-offs and API ergonomics |
| Hooks/rendering (2) | Guesses; adds memo everywhere | Finds one issue; fixes it without measuring | Finds both with the Profiler; explains referential equality and cleanup | Chooses between colocation, memo and compiler; explains concurrency implications |
| React Native implementation (3) | Happy path only, over time | Works, but missing states or dedup; index keys | Complete within time; stable keys; handles one live follow-up | Clean structure, typed routes, tests for the dedup logic; proposes scale changes unprompted |
| API/state (4) | Tokens in AsyncStorage; refresh races | Refresh works serially only | Single-flight refresh; query cache; secure storage | Adds retry/backoff, offline queueing and a reasoned cache invalidation strategy |
| Performance/debugging (5) | Changes things without measuring | Measures once, unclear attribution | Before/after numbers; correct release-only diagnosis | Identifies JS vs UI thread vs native cause; proposes a performance budget |
| Native/builds/releases (6) | Has never produced a signed build | Builds with EAS only; cannot explain credentials | Signed builds on both platforms; fixes the induced error; explains the OTA vs binary boundary | Pipeline in CI, staged rollout and rollback plan, runtime-version policy |
| Coding (7) | Brute force only, or no solution | Correct but slow; no complexity | Optimal or near-optimal in time; complexity stated; tree component works | Clean code, edge cases tested aloud, virtualisation discussed for large trees |
| Project explanation (8) | Feature list, "we did" | Some decisions explained, few specifics | Clear ownership, real metrics, honest trade-offs, can locate code | Discusses alternatives rejected, incident learnings and how AI was used and verified |

**Target bars by level.**
- **Junior:** interview-ready on tasks 1, 2, 3, 7 and 8, and at least developing on 4–6.
- **Mid-level:** interview-ready on all eight.
- **Senior:** strong on 2, 5, 6 and 8, plus a passing system-design mock.

---

## 9. Final recommendations

### 9.1 The 20 highest-priority topics [S]

| # | Topic | Tier |
|---|---|---|
| 1 | JS core: closures, `this`, event loop, promises, polyfills | 1 |
| 2 | TypeScript for props, hooks, navigation and API types | 1 |
| 3 | React rendering model: what re-renders and why | 1 |
| 4 | Hooks: effects, cleanup, stale closures, custom hooks; what React Compiler automates | 1 |
| 5 | FlatList/FlashList: pagination, keys, dedup, tuning | 1 |
| 6 | Timed machine coding of list + API + state screens with follow-ups | 1 |
| 7 | Networking: abort, retry, token refresh, cursor pagination | 1 |
| 8 | Server state (TanStack Query) vs client state (Redux Toolkit, Zustand) | 1 |
| 9 | Performance diagnosis: Profiler, JS vs UI thread, startup, images | 1 |
| 10 | Store release: signing, provisioning, keystores, tracks, versioning | 1 |
| 11 | Expo workflow: CNG/prebuild, config plugins, EAS Build/Submit/Update | 1 |
| 12 | OTA limits, runtime versions, CodePush migration | 1–2 |
| 13 | Navigation: React Navigation 7 and Expo Router; typed params; auth flows | 2 |
| 14 | Native build literacy: Gradle, CocoaPods/Xcode, permissions, native logs | 2 |
| 15 | Persistence and secure storage | 2 |
| 16 | Testing: Jest + RNTL; one Maestro flow | 2 |
| 17 | New Architecture concepts at explanation level | 2 |
| 18 | Deep/universal/app links and push basics | 2 |
| 19 | DSA easy-to-medium patterns | 2 |
| 20 | Project narrative and trade-off explanation, including AI-usage honesty | 1 |

### 9.2 The 10 topics deserving the greatest depth (L3)

1. JS async and closures
2. React rendering and hooks
3. Lists and pagination
4. Machine coding under time pressure
5. Performance diagnosis (up to L4 for seniors)
6. Networking and server state
7. TypeScript at API boundaries
8. Release pipeline and OTA boundaries
9. Native build debugging
10. Your own project's trade-offs

**Seniors** should swap item 9 for **mobile system design** if their native depth is already proven.

### 9.3 Ten topics to study at a basic level first (L1–L2)

1. New Architecture internals beyond the one-paragraph explanation
2. Writing TurboModules or Nitro modules (start with an Expo Module)
3. Reanimated 4 worklets
4. Maestro and Detox beyond one flow
5. GraphQL clients
6. Universal/App Links server configuration
7. Mobile security (certificate pinning, root detection, biometrics)
8. Accessibility
9. Monorepos (Nx/Turborepo)
10. Feature flags and A/B testing

### 9.4 Ten topics to postpone

1. Legacy bridge and `NativeModules` internals beyond the "why it was replaced" story
2. CodePush setup (learn migration instead)
3. Flipper
4. React Navigation 8 alpha APIs
5. Expo Router SSR/streaming and `generateMetadata` (web-focused)
6. Expo Modules 2.0 beta and the experimental Rust bundler
7. Swift Package Manager for React Native (experimental in 0.87)
8. Skia, AR and on-device ML (unless the target role names them, as cardboard.ai and Jio Tesseract do)
9. Kotlin Multiplatform
10. Hard DP and graph DSA (unless targeting big tech)

### 9.5 Most valuable portfolio projects

**1. A shipped app with a real release pipeline.** An Expo app that reaches at least one store track, with GitHub Actions → EAS Build → submission → EAS Update and Sentry. This answers the most frequent requirement in both samples [E].
- PGAGI asks for a "portfolio with Play Store/GitHub links".
- FOXO asks for a "shipped consumer app on stores".
- Snippets of Expo roles ask for "at least one app live on both stores" (unverified).

**2. An offline-capable feed or chat.** Cursor pagination, dedup, optimistic updates, image caching and a written design doc. This mirrors both the system-design patterns and the recurring machine-coding prompts.

**3. A native module.** An Expo Module in Kotlin and Swift wrapping one device capability. This proves the native-module tier that 10 of 26 Indian job descriptions ask for.

**4. A performance case study.** A short write-up with measured before/after numbers on a low-end Android device, the format companies such as Shopify and Discord use publicly.

**5. For full-stack-leaning Indian startups:** a small Node API behind the app.

### 9.6 Most common skill gaps [A + S]

The guides and job descriptions point to these gaps [A]:
- naming APIs without explaining mechanisms (memo, re-renders);
- a web-only mindset;
- never touching native tooling or signing;
- vague project ownership ("built the screens");
- outdated memoisation trivia;
- over-engineered state in live coding.

The author's synthesis adds three more [S]:
- no tests;
- no measured performance work;
- inability to explain take-home code that AI helped write.

### 9.7 When to stop studying a topic and move on [S]

**Use exit criteria, not coverage.** A topic is done when you can complete its competence task from section 4.3 twice, on different days, within the time box and without references, and can answer two "why" follow-ups aloud. At that point, move on and schedule a 15-minute spaced review after one week and again after three weeks.

**Cap each topic's first pass at a fixed budget.**
- Roughly one week for a Tier 1 topic.
- Two to three days for Tier 2.
- One day for Tier 3.

When the budget runs out, record what is missing and move on. Return only if a mock interview exposes it.

**Two signals mean you should go deeper, not wider:**
- failing interviewer follow-ups such as "now dedup" or "now 10,000 nodes";
- being unable to debug your own code.

**One signal means you are over-studying:** reading a third tutorial on a topic whose competence task you already pass.

**Stop all new-topic study once section 8 shows interview-ready** for your target level. From then on, only do mocks and revision.

### 9.8 What a job-ready React Native developer in 2026 can do independently [S]

A job-ready React Native developer in 2026 can work through the whole cycle without help:

1. Take a Figma screen and an API contract and build a typed, tested feature in an Expo or bare React Native app, with correct loading, error and empty states, stable list rendering and sensible state placement.
2. Explain every re-render in that feature and prove performance with a profiler on a real low-end Android device.
3. Diagnose a crash from a Sentry trace or `adb logcat` and tell a JS failure from a native one.
4. Fix a broken Gradle or CocoaPods build.
5. Add a permission or a small native module.
6. Produce signed builds for both platforms and push them through CI to TestFlight and a Play testing track.
7. Ship a JS-only fix over the air while knowing exactly why a native change cannot ship that way.
8. Explain the New Architecture in two minutes, as the only architecture since 0.82.
9. Explain why the codebase uses Redux Toolkit, Zustand or TanStack Query.
10. Talk about how AI assistance was used and checked.

At senior level, the same person can do four more things:

1. Design an offline-first feature end to end.
2. Set performance and crash-free targets.
3. Own React Native upgrades through store-policy deadlines.
4. Define a staged-rollout and kill-switch policy.

---

## 10. Sources and research limitations

### 10.1 Sources (grouped; dates as published or as observed on 14 Oct 2026)

**Primary ecosystem documentation [E]**

React Native releases:
- [RN 0.76 release, 23 Oct 2024](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture)
- [New Architecture is here, 23 Oct 2024](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)
- [RN 0.77, 21 Jan 2025](https://reactnative.dev/blog/2025/01/21/version-0.77)
- [RN 0.78, 19 Feb 2025](https://reactnative.dev/blog/2025/02/19/react-native-0.78)
- [RN 0.79, 8 Apr 2025](https://reactnative.dev/blog/2025/04/08/react-native-0.79)
- [RN 0.80, 12 Jun 2025](https://reactnative.dev/blog/2025/06/12/react-native-0.80)
- [Stable JS API, 12 Jun 2025](https://reactnative.dev/blog/2025/06/12/moving-towards-a-stable-javascript-api)
- [RN 0.81, 12 Aug 2025](https://reactnative.dev/blog/2025/08/12/react-native-0.81)
- [RN 0.82, 8 Oct 2025](https://reactnative.dev/blog/2025/10/08/react-native-0.82)
- [RN 0.83, 10 Dec 2025](https://reactnative.dev/blog/2025/12/10/react-native-0.83)
- [RN 0.84, 11 Feb 2026](https://reactnative.dev/blog/2026/02/11/react-native-0.84)
- [RN 0.85, 7 Apr 2026](https://reactnative.dev/blog/2026/04/07/react-native-0.85)
- [RN 0.86, 11 Jun 2026](https://reactnative.dev/blog/2026/06/11/react-native-0.86)
- [RN 0.87, 11 Aug 2026](https://reactnative.dev/blog/2026/08/11/react-native-0.87)
- [Architecture overview (further reading)](https://reactnative.dev/architecture/landing-page)

Expo:
- [Expo SDK 54, 10 Sep 2025](https://expo.dev/changelog/sdk-54)
- [SDK 55, 25 Feb 2026](https://expo.dev/changelog/sdk-55)
- [SDK 56, 21 May 2026](https://expo.dev/changelog/sdk-56)
- [SDK 57, 30 Jun 2026](https://expo.dev/changelog/sdk-57)
- [SDK 58 beta, 15 Sep 2026](https://expo.dev/changelog/sdk-58-beta)
- [Expo changelog (2026 entries)](https://expo.dev/changelog)
- [Expo Agent wind-down, 20 Jul 2026](https://expo.dev/changelog/expo-agent-ending-the-closed-beta-and-winding-the-project-down)
- [Replace App Center and CodePush](https://expo.dev/blog/how-to-replace-app-center-and-codepush)
- [Expo New Architecture guide](https://docs.expo.dev/guides/new-architecture/)

Other libraries and platforms:
- [React Compiler v1.0, 7 Oct 2025](https://react.dev/blog/2025/10/07/react-compiler-1)
- [Reanimated 4 migration guide](https://docs.swmansion.com/react-native-reanimated/docs/guides/migration-from-3.x/)
- [FlashList v2, 31 Jul 2025](https://shopify.engineering/flashlist-v2)
- [React Navigation 8 alpha, 19 Dec 2025](https://reactnavigation.org/blog/2025/12/19/react-navigation-8.0-alpha/)
- [React Navigation releases](https://github.com/react-navigation/react-navigation/releases)
- [Android target SDK](https://developer.android.com/google/play/requirements/target-sdk)
- [Android 16 KB page sizes](https://developer.android.com/guide/practices/page-sizes)
- [Apple upcoming requirements](https://developer.apple.com/news/upcoming-requirements/)
- [Codemagic OTA tools 2026](https://blog.codemagic.io/react-native-ota-tools-in-2026/)

**Surveys and labour-market data [E]**
- [State of React Native 2025 results](https://results.stateofreactnative.com/en-US/), with its architecture, build & publish, testing & monitoring, debugging & profiling, dev tools and demographics pages (fielded Dec 2025–Jan 2026)
- [DevClass on the prior State of RN edition, 4 Mar 2025](https://devclass.com/2025/03/04/react-native-survey-shows-rocky-path-for-new-architecture)
- [Stack Overflow 2025 Technology](https://survey.stackoverflow.co/2025/technology)
- [IT Jobs Watch: React Native](https://www.itjobswatch.co.uk/jobs/uk/react%20native.do) and [Flutter](https://www.itjobswatch.co.uk/jobs/uk/flutter.do) (to 14 Oct 2026)
- [Indeed Hiring Lab, 23 Jul 2026](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/)
- [Indeed Hiring Lab, 8 Jul 2026](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/)
- [Naukri JobSpeak Sep 2026](https://www.infoedge.in/pdfs/News_Events_pdfs/Naukri-Jobspeak-September-2026.pdf)
- [CoderPad State of Tech Hiring 2026, 11 Mar 2026](https://coderpad.io/blog/hiring-developers/new-research-the-2026-state-of-tech-hiring-what-ai-means-for-developers-and-hiring-teams/) (vendor)
- [Karat 2025 highlights](https://karat.com/resource/2025-ai-workforce-transformation-highlights/) (vendor)
- [CompanyBench](https://companybench.com/blog/it-hiring-trends-india-2026) (vendor, low confidence)

**Company engineering practice [E]**
- [Shopify: five years of React Native, 13 Jan 2025](https://shopify.engineering/five-years-of-react-native-at-shopify)
- [Shopify performance](https://shopify.engineering/improving-shopify-app-s-performance)
- [Discord mobile performance, 5 Mar 2025](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app)
- [Margelo × Discord, Apr 2026](https://margelo.com/blog/margelo-discord-react-native-performance)
- [SafeStreets take-home](https://github.com/SSDevelopment/takeHomeAssessment-reactNativeEngineer)
- [Left Field Labs homework](https://github.com/leftfieldlabs/rn-interview-homework)

**Job postings [E]:** all 26 Indian and 14 remote postings are linked in the tables in sections 6.2 and 6.4.

**Interview reports [A]**
- [FanCode (~Dec 2024)](https://medium.com/mighty-ghost-hack/interview-experience-with-fancode-for-a-react-native-developer-role-dca760fd781b)
- [Zepto SDE-II](https://anilpeddireddy.medium.com/zepto-software-engineer-ii-react-native-interview-experience-63d6a039f087)
- [Swiggy SDE-1 FE (Dec 2024)](https://leetcode.com/discuss/post/6334442/swiggy-sde-1-frontend-interview-experience/)
- [Gupio (Sep 2025)](https://www.naukri.com/code360/interview-experiences/gupio/gupio-interview-experience-by-sopan-bhere-sep-2025-exp-0-2-years)
- [CometChat (Apr 2025)](https://www.naukri.com/code360/interview-experiences/cometchat/cometchat-interview-experience-by-sopan-bhere-apr-2025-exp-0-2-years)
- [Accenture (May 2024)](https://www.naukri.com/code360/interview-experiences/accenture/accenture-interview-experience-application-developer-may-2024-exp-0-2-years-2)
- [BlackWins](https://www.geeksforgeeks.org/interview-experiences/blackwins-technologies-interview-experience-reactjs-react-native-developer-full-time/)
- [Zettaprime](https://www.geeksforgeeks.org/zettaprime-technologies-interview-experience-for-react-developer/)
- [Weather-app live build (Jul 2025)](https://javascript.plainenglish.io/my-react-native-coding-interview-experience-weather-app-challenge-760c5ed5b4b5?gi=72065e1588d8)
- [React Native internship (Mar 2025)](https://medium.com/@saurowankhade/react-native-internship-interview-experience-d3cff58504c4)
- [Callstack on Glassdoor](https://www.glassdoor.com.br/Entrevista/Callstack-Entrevista-E1546632-RVW95650569.htm)
- [Razorpay machine coding](https://leetcode.com/discuss/interview-experience/4824582/Razorpay-or-SDE2-or-Machine-Coding-Round-or-Reject/)

**Guides and commentary [A]**
- [GoLance](https://golance.com/hiring/how-to-hire-react-native-developers)
- [RemoteCrew](https://www.remotecrew.io/blog/hire-react-native-developers)
- [SecondTalent](https://www.secondtalent.com/interview-guide/react-native-developer-interview/)
- [Wisemonk](https://www.wisemonk.io/blogs/a-comprehensive-guide-to-interviewing-react-native-developers)
- [Hyring](https://hyring.com/jobseeker-toolkit/interview-questions/technical/react-native)
- [techinterview.org](https://www.techinterview.org/post/3233474938/react-rendering-deep-dive-interview/)
- [Cloudvyn](https://www.cloudvyn.com/blog/react-interview-questions-every-javascript-developer-fails)
- [DEV: 56 questions (2026)](https://dev.to/asscher/56-react-native-interview-questions-junior-to-senior-2026-234e)
- [DEV Handbook part 5](https://dev.to/amitkumar13/react-native-interview-handbook-part-5-of-5-senior-system-design-5jb)
- [ByteByteGo Mobile System Design](https://bytebytego.com/courses/mobile-system-design-interview/introduction)
- [ProAndroidDev framework](https://proandroiddev.com/a-simple-framework-for-mobile-system-design-interviews-89f6f4134b84)
- [DesignGurus](https://www.designgurus.io/blog/mobile-system-design-interview-questions)
- [LeetCode Discuss: 74 interviews](https://leetcode.com/discuss/post/8446005/)
- [Medium: 50 postings](https://medium.com/@codegrey/is-dsa-still-required-for-software-engineering-interviews-i-read-50-job-postings-to-find-out-f1f5f2e1cc0c)
- [The New Stack](https://thenewstack.io/how-to-prepare-for-big-tech-interviews-as-an-ios-engineer/)
- [TechRadar on Meta AI interviews](https://www.techradar.com/pro/meta-is-going-to-let-candidates-use-ai-in-job-interviews)
- [Trak.in on Google](https://trak.in/stories/google-brings-back-in-person-interviews-to-stop-ai-enabled-cheating/)
- [TechCrunch, Apr 2025](https://techcrunch.com/2025/04/21/columbia-student-suspended-over-interview-cheating-tool-raises-5-3m-to-cheat-on-everything/)
- [Ground News summary of TOI, Jul 2026](https://ground.news/article/recruiters-deploy-ai-to-catch-ghost-coders)
- [People Matters](https://www.peoplematters.in/news/recruitment/12000-applied-450-interviewed-0-hired-indias-tech-hiring-crisis-where-ai-cant-help-46000)

### 10.2 Research limitations

**Firsthand interview evidence is thin.**
- Only 11 firsthand React Native or adjacent reports were found, about five clearly dated 2025–2026.
- Several came from search snippets because Medium and Naukri pages returned 403.
- No Reddit threads (r/reactnative, r/developersIndia) could be retrieved at all.
- No 2025–2026 React Native interview reports exist for Meesho, CRED, Razorpay, PhonePe, Groww, Flipkart or the large IT service companies.
- No report described a dedicated debugging or native build round.
- No report quoted a specific mobile system-design prompt.
- No report mentioned an AI-allowed round.

The descriptions of those rounds rely on job-description frequency and on vendor and recruiter guides.

**Job-description evidence is biased and has no 2025 baseline.**
- The Indian sample skews toward Bengaluru startups on Cutshort and Wellfound.
- Large Indian product companies and service companies are barely represented.
- No 2025 job-description text was retrievable, so any 2025 vs 2026 skill comparison is impossible from postings. The within-2026 split is a hypothesis, not a trend.

**Survey data has caveats.**
- State of React Native 2025 is self-selected and skews experienced (median 8 years).
- Its respondent count is reported inconsistently: the About page states 3,501 for the Dec 2025–Jan 2026 fielding, while the demographics page shows 1,524 and per-question samples are about 650–940. This report therefore cites per-question denominators.
- State-management results could not be extracted.

**Several items could not be verified, and are excluded or flagged.**
- React 19.2 API specifics.
- Library versions for TanStack Query, Zustand, Redux Toolkit, MMKV and RNTL.
- The Apple deadline date, which comes from secondary coverage.
- The 16 KB page-size date conflict (Nov 2025 in earlier coverage vs 1 Feb 2027 in Google's current doc).
- Karat figures not shown on its highlights page.

**No salary analysis was attempted.** Only salaries displayed in postings are reported.

**All depth levels, tiers, example questions (unless attributed), exercises, rubrics and timelines are the author's synthesis.** They are not measured findings.

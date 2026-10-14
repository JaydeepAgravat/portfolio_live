// Turns the React Native research report (Markdown) into a static page at
// /research/react-native-2026/, served from public/ by Vite and the host.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { Marked } from "marked";

const source = "reports/React Native interview prep 2026.md";
const outDir = "public/research/react-native-2026";

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60)
    .replace(/-+$/, "");

const toc = [];
const marked = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens);
      const id = slug(html);
      if (depth === 2) toc.push({ id, html });
      return `<h${depth} id="${id}">${html}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:/.test(href);
      const t = title ? ` title="${title}"` : "";
      return external
        ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
        : `<a href="${href}"${t}>${text}</a>`;
    },
  },
});

// Wide tables scroll inside their own box, not the page; the contents list
// goes just before the first section.
const html = marked
  .parse(readFileSync(source, "utf8"))
  .replaceAll("<table>", '<div class="table-wrap"><table>')
  .replaceAll("</table>", "</table></div>");
const tocHtml = `<nav class="toc" aria-label="Contents"><p>Contents</p><ol>${toc
  .map((h) => `<li><a href="#${h.id}">${h.html}</a></li>`)
  .join("")}</ol></nav>`;
const firstSection = html.indexOf("<h2");
const body = html.slice(0, firstSection) + tocHtml + html.slice(firstSection);

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Native Interviews 2026 | Jaydeep Agravat</title>
  <meta name="description" content="Research on the 2026 React Native job market and interviews: real job descriptions, interview rounds, topic depth by seniority, and a preparation roadmap." />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <meta name="color-scheme" content="light dark" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <script>
    (function () {
      var t = null;
      try { t = localStorage.getItem("theme"); } catch (e) {}
      if (t !== "light" && t !== "dark") {
        t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      document.documentElement.dataset.theme = t;
    })();
  </script>
  <style>
    :root {
      --bg: #faf8f4; --surface: #ffffff; --text: #1b1a17; --muted: #66625a;
      --line: #e4dfd5; --accent: #b4441f; --code: #f1ede5;
      --serif: "Instrument Serif", "Iowan Old Style", Georgia, serif;
      --sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    :root[data-theme="dark"] {
      --bg: #131210; --surface: #1c1a17; --text: #f0ece4; --muted: #a39d92;
      --line: #2e2b26; --accent: #f08a5d; --code: #24211d;
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme]) {
        --bg: #131210; --surface: #1c1a17; --text: #f0ece4; --muted: #a39d92;
        --line: #2e2b26; --accent: #f08a5d; --code: #24211d;
      }
    }
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
    body {
      margin: 0; background: var(--bg); color: var(--text);
      font: 16px/1.7 var(--sans); -webkit-font-smoothing: antialiased;
    }
    .bar {
      position: sticky; top: 0; z-index: 2; background: var(--bg);
      border-bottom: 1px solid var(--line);
    }
    .bar .wrap { display: flex; justify-content: space-between; align-items: center; padding-block: 14px; }
    .bar a { color: var(--muted); text-decoration: none; font-size: 0.9rem; }
    .bar a:hover { color: var(--text); }
    .wrap { max-width: 820px; margin: 0 auto; padding-inline: clamp(16px, 4vw, 40px); }
    article { padding-block: 40px 96px; }
    h1, h2, h3, h4 { line-height: 1.25; }
    h1 { font: 400 clamp(2rem, 6vw, 3.2rem)/1.1 var(--serif); margin: 0 0 24px; }
    h2 { font: 400 clamp(1.5rem, 4vw, 2rem)/1.2 var(--serif); margin: 64px 0 16px; padding-top: 24px; border-top: 1px solid var(--line); }
    h3 { font-size: 1.15rem; margin: 40px 0 12px; }
    h4 { font-size: 1rem; margin: 28px 0 8px; }
    h1, h2, h3, h4 { scroll-margin-top: 72px; }
    p, ul, ol { margin: 0 0 16px; }
    li { margin-bottom: 6px; }
    a { color: var(--accent); text-underline-offset: 3px; overflow-wrap: anywhere; }
    code { font: 0.86em ui-monospace, SFMono-Regular, Menlo, monospace; background: var(--code); padding: 1px 5px; border-radius: 4px; }
    pre { background: var(--code); padding: 14px; border-radius: 8px; overflow-x: auto; }
    pre code { padding: 0; }
    hr { border: 0; border-top: 1px solid var(--line); margin: 40px 0; }
    blockquote { margin: 0 0 16px; padding-left: 16px; border-left: 3px solid var(--line); color: var(--muted); }
    .table-wrap { overflow-x: auto; margin: 0 0 24px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
    table { border-collapse: collapse; width: 100%; font-size: 0.86rem; line-height: 1.5; }
    th, td { text-align: left; vertical-align: top; padding: 9px 12px; border-bottom: 1px solid var(--line); min-width: 120px; }
    th { font-weight: 600; background: var(--code); }
    tr:last-child td { border-bottom: 0; }
    .toc { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 18px 22px; margin: 0 0 40px; }
    .toc p { margin: 0 0 8px; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
    .toc ol { margin: 0; padding-left: 20px; font-size: 0.92rem; }
    .toc a { color: var(--text); text-decoration: none; }
    .toc a:hover { color: var(--accent); }
  </style>
</head>
<body>
  <header class="bar">
    <div class="wrap">
      <a href="/">&larr; Jaydeep Agravat</a>
      <a href="#top">Top</a>
    </div>
  </header>
  <main class="wrap">
    <article id="top">
      ${body}
    </article>
  </main>
</body>
</html>
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/index.html`, page);
console.log(`research: wrote ${outDir}/index.html`);

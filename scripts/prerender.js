// Renders the app to static HTML and writes it into dist/index.html, so the
// page has real content for crawlers and readers without JavaScript.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { render } from "../dist-ssr/entry-server.js";

const file = "dist/index.html";
const placeholder = '<div id="root"></div>';
const html = readFileSync(file, "utf8");

if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in ${file}`);
}

writeFileSync(file, html.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync("dist-ssr", { recursive: true, force: true });
console.log("prerender: wrote static HTML into dist/index.html");

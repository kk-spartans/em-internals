import { readFileSync, writeFileSync } from "fs";
import { inlineSource } from "inline-source";

// Read original HTML
let html = readFileSync("./out/index.html", "utf8");

// Fix Next.js <img> paths like /_next/image?url=%2Ffile.svg&w=384&q=75
html = html.replace(
  /\/_next\/image\?url=([^&"]+)[^"]*/g,
  (match, p1) => decodeURIComponent(p1)
);

// Inline everything
const inlined = await inlineSource(html, {
  compress: true,
  rootpath: "./out",
  attribute: false,
  ignore: ["none"],
});

writeFileSync("./out/single.html", inlined);
console.log("✅ Created out/single.html");


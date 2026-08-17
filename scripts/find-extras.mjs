import { readFileSync } from "node:fs";

const avr = new Set(
  readFileSync("C:/Users/canbi/AppData/Local/Temp/opencode/avrupadis/avrupadis_tr_slugs.txt", "utf8")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean)
);

const services = readFileSync("src/lib/services.ts", "utf8");
const districts = readFileSync("src/lib/districts.ts", "utf8");
const posts = readFileSync("src/lib/posts.ts", "utf8");

const svcSlugs = [...services.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const distSlugs = [...districts.matchAll(/d\(\s*"([^"]+)"/g)].map((m) => m[1]);
const postSlugs = [...posts.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const extra = {};
extra.services = svcSlugs.filter((s) => !avr.has(s)).sort();
extra.districts = distSlugs.filter((s) => !avr.has(s)).sort();
extra.posts = postSlugs.filter((s) => !avr.has(s)).sort();

console.log("avrupadis seti:", avr.size);
console.log("Fazla service:", extra.services.length);
for (const s of extra.services) console.log("  svc:", s);
console.log("Fazla district:", extra.districts.length);
for (const s of extra.districts) console.log("  dist:", s);
console.log("Fazla post:", extra.posts.length);
for (const s of extra.posts) console.log("  post:", s);

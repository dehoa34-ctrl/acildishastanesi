import { readFileSync } from "node:fs";

const FILES = ["src/lib/services.ts", "src/lib/service-content.ts", "src/lib/posts.ts"];
const BAD = /\uFFFD|Ã§|Ã¶|Ã¼|ÅŸ|ÄŸ|Ä±|Ãœ|Ã–|Ã‡/;

let issues = 0;
for (const f of FILES) {
  const c = readFileSync(f, "utf8");
  const repl = (c.match(/\uFFFD/g) || []).length;
  const other = c.match(BAD);
  if (repl > 0 || other) {
    issues++;
    console.log(`${f}: U+FFFD=${repl}  diğer mojibake örneği=${other ? other[0] : "yok"}`);
  } else {
    console.log(`${f}: TEMİZ`);
  }
}
console.log(issues ? `\n⚠ ${issues} dosyada mojibake bulundu` : "\n✓ Mojibake yok");

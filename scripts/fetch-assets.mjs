// Downloads every image and PDF the site references from the WordPress uploads folder
// into public/media/, so the site can stop hot-linking WordPress.
// Usage: npm run build && npm run fetch-assets  → then set NEXT_PUBLIC_MEDIA_BASE=/media and rebuild.
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { join, dirname } from "node:path";

const SOURCE = process.env.MEDIA_SOURCE || "https://projectprc.org/wp-content/uploads";
const OUT = join(process.cwd(), "public", "media");
const roots = [join(process.cwd(), ".next", "server", "app")];

async function walk(dir, files = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, files);
    else if (/\.(html|rsc|body|meta|json)$/.test(e.name)) files.push(p);
  }
  return files;
}

const found = new Set();
const re = /wp-content\/uploads\/(\d{4}\/\d{2}\/[^"'\s)\\&?]+?\.(?:jpe?g|png|webp|svg|pdf))/gi;
for (const r of roots) {
  for (const f of await walk(r)) {
    const text = decodeURIComponent((await readFile(f, "utf8")).replace(/%(?![0-9A-F]{2})/gi, "%25"));
    for (const m of text.matchAll(re)) found.add(m[1]);
  }
}
console.log(`Found ${found.size} files to localize`);
let ok = 0, skipped = 0, failed = 0;
for (const path of found) {
  const dest = join(OUT, path);
  try { await stat(dest); skipped++; continue; } catch {}
  try {
    const res = await fetch(`${SOURCE}/${path}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    failed++;
    console.warn(`  ✗ ${path}: ${e.message}`);
  }
}
console.log(`Downloaded ${ok}, already present ${skipped}, failed ${failed}. Now set NEXT_PUBLIC_MEDIA_BASE=/media`);

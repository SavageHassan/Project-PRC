"""Turn the Next.js static export (out/) into a self-contained click-through preview (preview-dist/).

- every internal link becomes relative and points at an index.html file
- the Next.js runtime is removed and replaced by scripts/preview/site.js (same interactions, plain JS)
- CSS and fonts move to assets/ (the host reserves names starting with "_")
- a slim banner says this is a preview
"""
import os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "out")
DIST = os.path.join(ROOT, "preview-dist")
MEDIA = sys.argv[1] if len(sys.argv) > 1 else None  # folder holding media/YYYY/MM/files

shutil.rmtree(DIST, ignore_errors=True)
os.makedirs(os.path.join(DIST, "assets"))

# --- CSS + fonts ------------------------------------------------------------
css_map = {}
for dirpath, _, files in os.walk(os.path.join(OUT, "_next")):
    for f in files:
        full = os.path.join(dirpath, f)
        rel_url = "/" + os.path.relpath(full, OUT).replace(os.sep, "/")
        if f.endswith(".woff2"):
            shutil.copy(full, os.path.join(DIST, "assets", f))
        elif f.endswith(".css"):
            css = open(full, encoding="utf8").read()
            css = re.sub(r"url\(([\"']?)[^)\"']*/([^/)\"']+\.woff2)\1\)", r"url(\2)", css)
            name = f"site-{len(css_map)}.css"
            open(os.path.join(DIST, "assets", name), "w", encoding="utf8").write(css)
            css_map[rel_url] = name
shutil.copy(os.path.join(ROOT, "scripts", "preview", "site.js"), os.path.join(DIST, "assets", "site.js"))

# --- static root files --------------------------------------------------------
for f in os.listdir(OUT):
    p = os.path.join(OUT, f)
    if os.path.isfile(p) and not f.endswith((".html", ".txt", ".xml")):
        shutil.copy(p, os.path.join(DIST, f))

BANNER = ('<div class="preview-banner" role="note"><strong>Preview of the new projectprc.org.</strong> '
          'Photos and content are Project PRC&#8217;s own. HubSpot forms and the donation form load only on the live site.</div>')

def rewrite(html: str, depth: int) -> str:
    rel = "../" * depth
    # drop the Next.js runtime: external chunks, inline flight data, script preloads
    html = re.sub(r'<script[^>]*src="/_next/[^"]*"[^>]*>\s*</script>', "", html)
    html = re.sub(r"<script>(?:(?!</script>).)*?(?:__next_f|__NEXT|self\.__next)(?:(?!</script>).)*?</script>", "", html, flags=re.S)
    html = re.sub(r'<script id="_R_">.*?</script>', "", html, flags=re.S)
    html = re.sub(r'<link[^>]+rel="(?:preload|modulepreload)"[^>]+as="script"[^>]*/?>', "", html)
    html = re.sub(r'<link[^>]+as="script"[^>]+rel="(?:preload|modulepreload)"[^>]*/?>', "", html)
    html = re.sub(r'<link[^>]+href="/_next/static/media/[^"]+\.woff2"[^>]*/?>', "", html)
    # stylesheets
    def css_sub(m):
        name = css_map.get(m.group(1))
        return f'href="{rel}assets/{name}"' if name else m.group(0)
    html = re.sub(r'href="(/_next/[^"]+\.css)"', css_sub, html)
    html = re.sub(r'<link[^>]+href="/_next/[^"]*"[^>]*/?>', "", html)
    # internal page links → relative index.html
    def link_sub(m):
        attr, path, frag = m.group(1), m.group(2), m.group(3) or ""
        if path.startswith(("media/", "logo")) or re.search(r"\.[a-z0-9]{2,5}$", path):
            return f'{attr}="{rel}{path}{frag}"'
        page = (path.rstrip("/") + "/index.html") if path else "index.html"
        return f'{attr}="{rel}{page}{frag}"'
    html = re.sub(r'\b(href|src)="/(?!/)([^"#?]*)(#[^"]*)?"', link_sub, html)
    html = html.replace("<body>", "<body>" + BANNER, 1)
    html = html.replace("</body>", f'<script src="{rel}assets/site.js" defer></script></body>', 1)
    return html

pages = 0
for dirpath, _, files in os.walk(OUT):
    if os.sep + "_next" in dirpath + os.sep:
        continue
    for f in files:
        if not f.endswith(".html"):
            continue
        src = os.path.join(dirpath, f)
        relpath = os.path.relpath(src, OUT)
        if f != "index.html" or relpath.startswith(("_not-found", "404" + os.sep)):
            continue
        depth = relpath.count(os.sep)
        out_path = os.path.join(DIST, relpath)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        open(out_path, "w", encoding="utf8").write(rewrite(open(src, encoding="utf8").read(), depth))
        pages += 1

if MEDIA:
    shutil.copytree(os.path.join(MEDIA, "media"), os.path.join(DIST, "media"))

left = []
for dirpath, _, files in os.walk(DIST):
    for f in files:
        if f.endswith(".html"):
            t = open(os.path.join(dirpath, f), encoding="utf8").read()
            left += [(f, m) for m in re.findall(r'(?:href|src)="/(?!/)[^"]*"', t)]
            left += [(f, "_next ref") for _ in re.findall(r"/_next/", t)][:1]
print(f"pages={pages} css={list(css_map.values())} leftover_absolute={left[:10]}")

/* Project PRC — preview interactions.
   The production site runs these as React components. This file re-creates the same behaviour
   on the static preview pages (which can't load the Next.js runtime). */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var hover = window.matchMedia && window.matchMedia("(hover: hover)").matches;

  /* ---------- header: scroll state, dropdowns, mobile menu, mobile donate bar ---------- */
  var header = $(".site-header");
  var give = $(".mobile-give");
  var mobile = $("#mobile-nav");
  var toggle = $(".menu-toggle");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.setAttribute("data-scrolled", y > 8 ? "true" : "false");
    if (give) {
      var show = y > 640 && !(mobile && mobile.getAttribute("data-open") === "true");
      give.setAttribute("data-show", show ? "true" : "false");
      give.setAttribute("aria-hidden", show ? "false" : "true");
      $$("a", give).forEach(function (a) { a.tabIndex = show ? 0 : -1; });
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var triggers = $$(".site-nav__trigger");
  function setPanel(btn, open) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) {
      panel.setAttribute("data-open", open ? "true" : "false");
      $$("a", panel).forEach(function (a) { a.tabIndex = open ? 0 : -1; });
    }
  }
  function closeAll(except) { triggers.forEach(function (t) { if (t !== except) setPanel(t, false); }); }
  triggers.forEach(function (btn) {
    var item = btn.closest(".site-nav__item");
    var timer;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      // with a mouse, hovering already opened it: a click keeps it open instead of closing it
      var open = hover ? true : btn.getAttribute("aria-expanded") !== "true";
      closeAll(btn);
      setPanel(btn, open);
    });
    if (hover && item) {
      item.addEventListener("mouseenter", function () { clearTimeout(timer); closeAll(btn); setPanel(btn, true); });
      item.addEventListener("mouseleave", function () { timer = setTimeout(function () { setPanel(btn, false); }, 160); });
    }
  });
  document.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest(".site-nav")) closeAll(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeAll(); setMobile(false); }
  });

  function setMobile(open) {
    if (!mobile || !toggle) return;
    mobile.setAttribute("data-open", open ? "true" : "false");
    mobile.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) mobile.removeAttribute("inert"); else mobile.setAttribute("inert", "");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    onScroll();
  }
  if (toggle) toggle.addEventListener("click", function () { setMobile(toggle.getAttribute("aria-expanded") !== "true"); });

  /* ---------- tabs ---------- */
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) { if (on) panel.removeAttribute("hidden"); else panel.setAttribute("hidden", ""); }
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i); });
      t.addEventListener("keydown", function (e) {
        var n = i;
        if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") n = 0;
        else if (e.key === "End") n = tabs.length - 1;
        else return;
        e.preventDefault();
        select(n, true);
      });
    });
  });

  /* ---------- eviction cost estimator (same arithmetic as the React version) ---------- */
  var est = $(".estimator");
  if (est) {
    var units = $("#est-units"), ev = $("#est-ev");
    var outs = $$("output", est);
    var strong = $$(".estimator__result strong", est);
    var fmt = function (n) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); };
    var update = function () {
      var u = +units.value, e = +ev.value;
      outs[0].textContent = u;
      outs[1].textContent = e;
      strong[0].textContent = fmt(e * 3500) + " – " + fmt(e * 10000);
      strong[1].textContent = fmt(3500 + 3.5 * u * 12);
    };
    units.addEventListener("input", update);
    ev.addEventListener("input", update);
  }

  /* ---------- gallery lightbox ---------- */
  $$(".gallery").forEach(function (gallery) {
    var buttons = $$(".gallery__btn", gallery);
    var imgs = buttons.map(function (b) { var i = $("img", b); return { src: i.getAttribute("src"), alt: (b.getAttribute("aria-label") || "").replace(/^Open photo \d+ of \d+: /, "") }; });
    var box = null, index = 0, last = null;
    function render() {
      $("img", box).src = imgs[index].src;
      $("img", box).alt = imgs[index].alt;
      $(".lightbox__count", box).textContent = (index + 1) + " / " + imgs.length;
      box.setAttribute("aria-label", imgs[index].alt + ", photo " + (index + 1) + " of " + imgs.length);
    }
    function close() { if (!box) return; box.remove(); box = null; document.body.style.overflow = ""; document.removeEventListener("keydown", keys); if (last) last.focus(); }
    function step(d) { index = (index + d + imgs.length) % imgs.length; render(); }
    function keys(e) { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }
    buttons.forEach(function (b, i) {
      b.addEventListener("click", function () {
        last = b; index = i;
        box = document.createElement("div");
        box.className = "lightbox";
        box.setAttribute("role", "dialog");
        box.setAttribute("aria-modal", "true");
        box.innerHTML = '<img alt=""><button type="button" class="lightbox__close" aria-label="Close">×</button>' +
          '<button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Previous photo">‹</button>' +
          '<button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Next photo">›</button><p class="lightbox__count"></p>';
        document.body.appendChild(box);
        render();
        $(".lightbox__close", box).addEventListener("click", close);
        $(".lightbox__nav--prev", box).addEventListener("click", function () { step(-1); });
        $(".lightbox__nav--next", box).addEventListener("click", function () { step(1); });
        box.addEventListener("click", function (e) { if (e.target === box) close(); });
        document.addEventListener("keydown", keys);
        document.body.style.overflow = "hidden";
        $(".lightbox__close", box).focus();
      });
    });
  });

  /* ---------- forms: switched off in the preview, said plainly ---------- */
  $$("form.form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var note = $(".form__status", form);
      if (!note) {
        note = document.createElement("p");
        note.className = "form__status form__status--error";
        note.setAttribute("role", "alert");
        var btn = $('button[type="submit"]', form);
        btn.parentNode.parentNode.insertBefore(note, btn.parentNode);
      }
      note.textContent = "Nothing was sent: forms are switched off in this preview. On the live site this form goes straight to the Project PRC team.";
    });
  });
})();

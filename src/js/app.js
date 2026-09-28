/**
 * Cambium UI — mode switcher, Simple/Advanced depth, offline SW registration.
 */
(function () {
  "use strict";

  const DEPTH_KEY = "cambium:depth";
  const MODE_KEY = "cambium:mode";
  const DEFAULT_MODE = "maple-sap";
  const DEFAULT_DEPTH = "simple";

  const content = window.CAMBIUM_CONTENT;
  if (!content) {
    console.error("CAMBIUM_CONTENT missing — load content.js first");
    return;
  }

  const els = {
    title: document.getElementById("panel-title"),
    latin: document.getElementById("panel-latin"),
    body: document.getElementById("panel-body"),
    sources: document.getElementById("sources-list"),
    modeButtons: document.querySelectorAll("[data-mode]"),
    depthButtons: document.querySelectorAll("[data-depth]"),
  };

  function readStored(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function writeStored(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* private mode */
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setDepth(depth) {
    const next = depth === "advanced" ? "advanced" : "simple";
    document.body.dataset.depth = next;
    writeStored(DEPTH_KEY, next);
    els.depthButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.depth === next));
    });
  }

  function renderMode(modeId) {
    const mode = content.modes[modeId] || content.modes[DEFAULT_MODE];
    const id = content.modes[modeId] ? modeId : DEFAULT_MODE;
    writeStored(MODE_KEY, id);

    els.modeButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.mode === id));
    });

    els.title.textContent = mode.title;
    els.latin.textContent = mode.latin;
    document.getElementById("panel-label").textContent =
      mode.group === "maple" ? "Sugar maple" : "Fruit tree";

    const simpleHtml = mode.simple
      .map(
        (p) =>
          `<p class="mt-0 mb-3 leading-relaxed text-ink-soft max-w-[62ch]">${escapeHtml(p)}</p>`
      )
      .join("");
    const advHtml = mode.advanced
      .map(
        (p) =>
          `<p class="adv-only mt-0 mb-3 leading-relaxed text-ink-soft max-w-[62ch] border-l-2 border-teal/40 pl-3">${escapeHtml(p)}</p>`
      )
      .join("");

    els.body.innerHTML =
      simpleHtml +
      `<div class="adv-only mt-4 mb-2 font-mono text-[0.68rem] uppercase tracking-wider text-teal-deep">Advanced physiology</div>` +
      advHtml;
  }

  function renderSources() {
    els.sources.innerHTML = content.sources
      .map((s) => {
        const link = s.href
          ? `<a class="text-teal-deep underline underline-offset-2 hover:text-teal" href="${escapeHtml(s.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.text)}</a>`
          : escapeHtml(s.text);
        return `<li class="mb-2 leading-snug text-ink-soft text-[0.9rem]">${link}</li>`;
      })
      .join("");
  }

  els.modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => renderMode(btn.dataset.mode));
  });
  els.depthButtons.forEach((btn) => {
    btn.addEventListener("click", () => setDepth(btn.dataset.depth));
  });

  setDepth(readStored(DEPTH_KEY, DEFAULT_DEPTH));
  renderMode(readStored(MODE_KEY, DEFAULT_MODE));
  renderSources();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        /* ignore on file:// */
      });
    });
  }
})();

// =========================================================
// V.I.D.A.S — script principal (tema, menus, navegação)
// =========================================================

(function () {
  /* ---------- TEMA (claro/escuro) ---------- */
  function getInitialTheme() {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  }

  function applyTheme(isDark) {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");

    document.querySelectorAll(".switch").forEach((el) => el.classList.toggle("on", isDark));
    document.querySelectorAll(".theme-icon").forEach((el) => {
      el.textContent = isDark ? "🌙" : "☀️";
    });

    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  let isDark = getInitialTheme();
  applyTheme(isDark);

  // Acompanha mudanças na preferência do sistema
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      isDark = e.matches;
      applyTheme(isDark);
    });
  }

  function toggleTheme() {
    isDark = !isDark;
    applyTheme(isDark);
  }

  /* ---------- MENU DE CONFIGURAÇÕES (engrenagem) ---------- */
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsMenu = document.querySelector(".settings-menu");

  if (settingsBtn && settingsMenu) {
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      settingsMenu.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) && e.target !== settingsBtn) {
        settingsMenu.classList.remove("open");
      }
    });
  }

  const themeToggleRow = document.querySelector(".theme-toggle-row");
  if (themeToggleRow) {
    themeToggleRow.addEventListener("click", toggleTheme);
  }

  /* ---------- MENU MOBILE ---------- */
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".nav-mobile-menu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && e.target !== mobileToggle && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove("open");
        mobileToggle.classList.remove("open");
      }
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileToggle.classList.remove("open");
      })
    );
  }

  /* ---------- LINK ATIVO NA NAVEGAÇÃO ---------- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-desktop a, .nav-mobile-menu a, .footer-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---------- ANO NO RODAPÉ ---------- */
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- SCROLL AO TOPO EM CADA CARREGAMENTO ---------- */
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
})();

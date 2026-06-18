// =========================================================
// V.I.D.A.S — script principal (tema, navegação, menus)
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
    document.documentElement.classList.toggle("dark", isDark);
    document.querySelectorAll(".theme-icon").forEach((el) => {
      el.textContent = isDark ? "🌙" : "☀️";
    });
    document.querySelectorAll(".theme-btn").forEach((el) => {
      el.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
    });
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  let isDark = getInitialTheme();
  applyTheme(isDark);

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      isDark = e.matches;
      applyTheme(isDark);
    });
  }

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      isDark = !isDark;
      applyTheme(isDark);
    });
  });

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
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
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

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
})();

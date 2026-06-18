// =========================================================
// V.I.D.A.S — interações específicas de página
// =========================================================

(function () {
  /* ---------- FAQ (accordion) ---------- */
  document.querySelectorAll(".faq-item .faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });

  /* ---------- GALERIA DE FOTOS (accordion de eventos) ---------- */
  document.querySelectorAll(".event-card .event-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".event-card");
      const icon = btn.querySelector(".toggle-icon");
      card.classList.toggle("open");
      if (icon) icon.textContent = card.classList.contains("open") ? "−" : "+";
    });
  });

  /* ---------- COPIAR CHAVE PIX ---------- */
  const copyBtn = document.getElementById("copy-pix-btn");
  const toast = document.getElementById("toast");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const key = "11982002485";
      try {
        await navigator.clipboard.writeText(key);
      } catch {
        // fallback para navegadores sem suporte à Clipboard API
        const temp = document.createElement("textarea");
        temp.value = key;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      if (toast) {
        toast.textContent = "Chave PIX copiada!";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
      }
    });
  }
})();

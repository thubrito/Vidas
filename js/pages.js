// =========================================================
// V.I.D.A.S — interações específicas de página
// =========================================================

(function () {
  /* ---------- FAQ (accordion) ---------- */
  document.querySelectorAll(".faq-item .faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".faq-item").classList.toggle("open");
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

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const key = "11982002485";
      try {
        await navigator.clipboard.writeText(key);
      } catch {
        const temp = document.createElement("textarea");
        temp.value = key;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      showToast("Chave PIX copiada! 💛");
    });
  }

  /* ---------- FORMULÁRIO DE CONTATO (envia pelo WhatsApp) ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const message = document.getElementById("cf-message").value.trim();

      const text = encodeURIComponent(
        `Olá! Meu nome é ${name || "Visitante"}.\n\n${message}`
      );
      window.open(`https://wa.me/5511982002485?text=${text}`, "_blank");
      showToast("Abrindo o WhatsApp... 💬");
    });
  }
})();
/* =========================================
   main.js
   - WhatsApp CTA injection (data-wa)
   - Mobile hamburger menu (menuBtn / navList)
   ========================================= */
(function () {
  "use strict";

  const WHATSAPP_IMMEDIATE = "60166262464";
  const WHATSAPP_PREPLAN  = "60166262464";

  function wa(phone, msg){
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
  }

  function setWhatsApp(){
    document.querySelectorAll("[data-wa='immediate']").forEach(a => {
      a.href = wa(WHATSAPP_IMMEDIATE, "我需要即時喪禮服務，請聯絡我。");
      a.target = "_blank";
      a.rel = "noopener";
    });

    document.querySelectorAll("[data-wa='preplan']").forEach(a => {
      a.href = wa(WHATSAPP_PREPLAN, "我想了解預先規劃與配套內容。");
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  function setupMenu(){
    const btn  = document.getElementById("menuBtn");
    const list = document.getElementById("navList");
    if (!btn || !list) return;

    const open  = () => { list.classList.add("open");  btn.setAttribute("aria-expanded","true"); };
    const close = () => { list.classList.remove("open");btn.setAttribute("aria-expanded","false"); };

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      list.classList.contains("open") ? close() : open();
    });

    list.addEventListener("click", (e) => {
      if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === "a") close();
    });

    document.addEventListener("click", (e) => {
      if (!list.classList.contains("open")) return;
      if (btn.contains(e.target) || list.contains(e.target)) return;
      close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setWhatsApp();
    setupMenu();
  });
})();

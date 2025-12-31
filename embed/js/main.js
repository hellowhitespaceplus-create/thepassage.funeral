const WHATSAPP_IMMEDIATE = "60166262464";
const WHATSAPP_PREPLAN = "60166262464";

function wa(phone, msg){
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-wa='immediate']").forEach(a=>{
    a.href = wa(WHATSAPP_IMMEDIATE,"我需要即時喪禮服務，請聯絡我。");
    a.target="_blank";
  });
  document.querySelectorAll("[data-wa='preplan']").forEach(a=>{
    a.href = wa(WHATSAPP_PREPLAN,"我想了解預先規劃與配套內容。");
    a.target="_blank";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const list = document.getElementById("navList");
  if(!btn || !list) return;

  btn.addEventListener("click", e => {
    e.stopPropagation();
    list.classList.toggle("open");
  });

  document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const list = document.getElementById("navList");
  if (!btn || !list) return;

  // 點「選單」：開 / 關
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();          // ⬅️ 關鍵 1：不要往上冒泡
    list.classList.toggle("open");
  });

  // 點選單本身：不要關
  list.addEventListener("click", e => {
    e.stopPropagation();          // ⬅️ 關鍵 2：選單內點擊不關
  });

  // 點其他地方：才關
  document.addEventListener("click", () => {
    list.classList.remove("open");
  });
});

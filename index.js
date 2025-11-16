// scroll top
function scrollToTop() {
  // 取得目標元素
  const targetElement = document.getElementById("Top-section");

  if (targetElement) {
    // 滾動到該元素距離頁面頂部的位置
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth", // 平滑滾動
    });
  }
}

// 綁定事件監聽器（假設您的按鈕 ID 是 'scrollButton'）
document
  .getElementById("Logo")
  .addEventListener("click", function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

//scroll service
document.querySelectorAll(".scroll-link").forEach((link) => {
  const handler = function (e) {
    e.preventDefault(); // 阻止預設行為

    // ... (您的滾動邏輯不變) ...
    const targetId = this.getAttribute("data-target");
    const target = document.getElementById(targetId);

    const navHeight = document.querySelector(".navbar").offsetHeight;

    const position = target.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  // 監聽 click 事件
  link.addEventListener("click", handler);
  // 考慮在觸控設備上監聽 touchstart (可選，但有時有效)
  link.addEventListener("touchstart", handler);
});

//bannner slide
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 8000);

document.getElementById("callButton").addEventListener("click", function () {
  // 將手機號碼放在這裡
  const phoneNumber = "+886910927877";

  // 導向到 tel: 連結
  window.location.href = `tel:${phoneNumber}`;
});

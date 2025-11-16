// scroll top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//scroll service
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("data-target");
    const target = document.getElementById(targetId);

    const navHeight = document.querySelector(".navbar").offsetHeight;

    const position = target.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

//bannner slide
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 8000);

// Logo
// 取得圖片元素
const logoImage = document.getElementById("logoImage");

// 定義不同螢幕尺寸的圖片路徑
const desktopSrc = "/img/Logo_easego.png";
const mobileSrc = "/img/Logo_Image-EN.png"; // 假設這是您的小螢幕圖片

// 定義 Media Query 條件 (與您的 CSS 保持一致)
const mediaQuery = window.matchMedia("(max-width: 992px)");

/**
 * 根據 Media Query 的狀態來切換圖片 src
 * @param {MediaQueryListEvent} e - matchMedia 傳遞的事件物件
 */
function handleImageChange(e) {
  if (e.matches) {
    // 當螢幕寬度 <= 992px 時 (小螢幕)
    if (logoImage.src.indexOf(mobileSrc) === -1) {
      // 避免重複設定，只有當路徑不是手機版時才更新
      logoImage.src = mobileSrc;
      console.log("切換為手機版 Logo");
    }
  } else {
    // 當螢幕寬度 > 992px 時 (寬螢幕)
    if (logoImage.src.indexOf(desktopSrc) === -1) {
      // 避免重複設定，只有當路徑不是桌面版時才更新
      logoImage.src = desktopSrc;
      console.log("切換為桌面版 Logo");
    }
  }
}

// 1. 監聽 Media Query 狀態的變化
// 當螢幕跨越 992px 界線時，會觸發 handleImageChange
mediaQuery.addListener(handleImageChange);

// 2. 頁面載入時，立即執行一次以設定初始狀態
// 傳遞一個模擬的事件物件，確保 handleImageChange 能正確執行
handleImageChange(mediaQuery);

document.getElementById("callButton").addEventListener("click", function () {
  // 將手機號碼放在這裡
  const phoneNumber = "+886910927877";

  // 導向到 tel: 連結
  window.location.href = `tel:${phoneNumber}`;
});

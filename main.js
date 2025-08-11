const showSitenavBtn = document.querySelector(".header__search-btn");
const overlay = document.querySelector(".mobile-sitenav-overlay");
const sitenav = document.querySelector(".mobile-sitenav");
const closeBtn = document.querySelector(".mobile-sitenav button");

showSitenavBtn.addEventListener("click", function () {
  overlay.style.transform = "translateX(0)";
  sitenav.style.transform = "translateX(0)";
});

overlay.addEventListener("click", function (e) {
  overlay.style.transform = "translateX(100%)";
  sitenav.style.transform = "translateX(100%)";
});

closeBtn.addEventListener("click", function (e) {
  overlay.style.transform = "translateX(100%)";
  sitenav.style.transform = "translateX(100%)";
});

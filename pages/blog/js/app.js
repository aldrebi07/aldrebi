const hambrgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");

hambrgerBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  setTimeout(() => {
    if (menu.classList.contains("flex")) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    }
  }, 9000);
});

// const mode = document.getElementById("mode");
// const themeBtn = document.getElementById("theme-btn");
// themeBtn.addEventListener("click", () => {
//   mode.classList.toggle("dark");
//   mode.classList.toggle("light");
// });

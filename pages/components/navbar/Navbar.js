document.getElementById(
  "navbar"
).innerHTML = `      <nav id="navbar" class="fixed top-0 left-0 w-full z-50 bg-white">
<aside
  class="flex flex-row justify-between max-w-screen-md mx-auto p-8 text-gray-600"
>
  <button id="hamburger-btn" class="md:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
      />
    </svg>
  </button>
  <div class="hidden md:flex flex-row space-x-2 transition-all">
    <a
      href=" /"
      class="font-bold text-black hover:bg-gray-200 py-1 px-2 rounded-md"
      >Home</a
    >
    <a
      href="/pages/contact/"
      class="hover:bg-gray-200 py-1 px-2 rounded-md"
      >Contact</a
    >
    <a
      href="/pages/blog/"
      class="hover:bg-gray-200 py-1 px-4 rounded-md"
      >Blog</a
    >
    <a
      href="/pages/services/"
      class="hover:bg-gray-200 py-1 px-2 rounded-md"
      >Services</a
    >
    <a
      href="/pages/about/"
      class="hover:bg-gray-200 py-1 px-2 rounded-md"
      >About</a
    >
  </div>
  <button id="theme-btn" class="bg-gray-300 px-2 py-1 rounded-lg">
    <i class="fa-brands fa-github"></i>
  </button>
</aside>
</nav>
<div
id="mobile-menu"
class="hidden flex-col space-y-4 justify-center items-center md:hidden w-32 top-[100px] left-1 p-20 absolute bg-white"
>
<a href=" /" class="hover:bg-gray-300 text-black px-3 py-2 rounded-lg"
  >Home</a
>
<a href="/pages/contact/" class="hover:bg-gray-300 px-1 py-2 rounded-lg"
  >Contact</a
>
<a href="/pages/blog/" class="hover:bg-gray-300 px-4 py-2 rounded-lg"
  >Blog</a
>
<a
  href="/pages/services/"
  class="hover:bg-gray-300 px-1 py-2 rounded-lg"
  >Services</a
>
<a href="/pages/about/" class="hover:bg-gray-300 px-3 py-2 rounded-lg"
  >About</a
>
</div>`;

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

let linksSet = document.querySelectorAll('a[href^="#"]');
linksSet.forEach((link) => {
  link.onclick = function (i) {
    i.preventDefault();

    let href = document.querySelector(this.hash);
    href.scrollIntoView({
      behavior: "smooth",
      duration: "3s",
    });
  };
});

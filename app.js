const hamburger = document.getElementById("menu-icon");
const mobileNav = document.getElementById("mobileNav");
const darkBody = document.getElementById("darkBody");
const closeIcon = document.getElementById("close-icon");
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  if (darkBody.classList.contains("hidden")) {
    darkBody.classList.remove("hidden");
  }
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  if (darkBody.classList.contains("hidden")) {
    darkBody.classList.remove("hidden");
  } else {
    darkBody.classList.add("hidden");
  }
});

const button = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  nav.classList.toggle("active");
})
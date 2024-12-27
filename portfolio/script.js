let btn = document.querySelector(".togglebtn");
let icon = document.querySelector("i");
let display = document.querySelector(".menu");

btn.onclick = () => {
  display.classList.toggle("open");
  let isOpen = display.classList.contains("open");
  icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

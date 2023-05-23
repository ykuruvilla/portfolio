document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let list = document.querySelector("ul");
const menu = document.getElementById("menu");
const navBarHandler = (e) => {
  e.target.name === "menu"
    ? ((e.target.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.target.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
};

menu.addEventListener("click", navBarHandler);

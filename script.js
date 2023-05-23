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

const generateEmail = () => {
  const emailEl = document.getElementById("my-email");
  const username = "yasha.kuruvilla.dev";
  const domain = "gmail.com";
  const emailAddress = `${username}@${domain}`;
  emailEl.innerHTML =
    '<a href="mailto:' + emailAddress + '">' + emailAddress + "</a>";
};

generateEmail();

const formNameError = document.getElementById("name-error");
const formEmailFormatError = document.getElementById("email-format-error");
const formEmailLengthError = document.getElementById("email-length-error");
const formMessageError = document.getElementById("message-error");

const validateEmail = (email) => {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

let formisValid;
const validateForm = (name, email, message) => {
  formNameError.classList.add("invisible");
  formEmailLengthError.classList.add("invisible");
  formEmailFormatError.classList.add("hidden");
  formMessageError.classList.add("invisible");

  if (name.trim() === "") {
    formisValid = false;
    formNameError.classList.remove("invisible");
  }
  if (email.trim() === "") {
    formisValid = false;
    formEmailLengthError.classList.remove("invisible");
  }

  if (!validateEmail(email) && email.trim() !== "") {
    formisValid = false;
    formEmailFormatError.classList.remove("hidden");
  }
  if (message.trim() === "") {
    formisValid = false;
    formMessageError.classList.remove("invisible");
  }
};

const formEl = document.getElementById("contact-form");
const submitButtonEl = document.getElementById("submit");

const handleFormSubmit = (e) => {
  e.preventDefault();
  formisValid = true;
  const name = e.target.name.value;
  const _replyto = e.target._replyto.value;
  const message = e.target.message.value;

  validateForm(name, _replyto, message);
  if (formisValid) {
    axios
      .post("https://formspree.io/f/xayzzejy", { name, _replyto, message })
      .then((_res) => {
        submitButtonEl.textContent = "Message sent!";
        formEl.reset();
        setTimeout(() => {
          submitButtonEl.textContent = "Submit";
        }, 3000);
      })
      .catch((err) => {
        alert("Oops! Something went wrong");
      });
  }
};

formEl.addEventListener("submit", handleFormSubmit);

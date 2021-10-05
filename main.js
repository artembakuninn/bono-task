document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const form = document.getElementById("form");

  const regExpName = /^[a-z0-9_-]{3,16}$/;
  const regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  const regExpPass =
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$ /;

  const validateElem = (elem) => {
    if (elem.name === "email") {
      if (!regExpEmail.test(elem.value)) {
        elem.nextElementSibling.textContent = "Введите имя пользователя";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }
    if (elem.name == "username") {
    }
    if (elem.name == "userlastname") {
    }
    if (elem.name == "password") {
    }
    if (elem.name == "confirm") {
    }
  };

  for (let elem of form.elements) {
    if (elem.tagName !== "BUTTON") {
      elem.addEventListener("blur", () => {
        validateElem(elem);
      });
    }
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    for (let elem of form.elements) {
      if (elem.tagName !== "BUTTON") {
        if (elem.value === "") {
          elem.nextElementSibling.textContent = "Данное поле не заполнено";
        } else {
          elem.nextElementSibling.textContent = "";
        }
      }
    }
  });
});

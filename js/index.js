// element
const email = document.querySelector("#email");
const small = document.querySelector("#small");
const error = document.querySelector("#error");
const submit = document.querySelector(".sub-button");
const form = document.querySelector("#form");

const emailCheck = function (email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email.value
  );
};

const checkEmail = function (event) {
  event.preventDefault();
  if (email.value == "" || emailCheck(email.value)) {
    error.style.visibility = "visible";
    small.style.display = "block";
    small.style.visibility = "visible";
    email.style.border = "1px solid hsl(0, 93%, 68%)";
    event.preventDefault();
  } else {
    email.value = "";
    error.style.visibility = "hidden";
    small.style.display = "none";
    small.style.visibility = "hidden";
    email.style.border = "1px solid hsl(0, 36%, 70%)";
  }
};

form.addEventListener("submit", checkEmail);

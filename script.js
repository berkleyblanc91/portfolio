/* Variables */
const form = document.querySelector("#contact-form");
const errorsList = document.querySelector("#errors");

/* Event Listener */
form.addEventListener("submit", validateForm);

/* Function */
function validateForm(event) {
  event.preventDefault();
  errorsList.innerHTML = "";

  /* Name Validation */
  let fullName = document.querySelector("#full-name").value;
  if (fullName.length <= 1 || fullName.length === 0) {
    addError("Your name must be more than 1 character");
  }

  /* Email Validation */
  let emailAddress = document.querySelector("#email-address").value;
  if (emailAddress.length <= 1) {
    addError("Your name must be more than 1 character");
  }

  /* Phone Number Validation */
  let phoneNumberValid =
    document.querySelector("#phone-area-code").value.length === 3 &&
    document.querySelector("#phone-prefix").value.length === 3 &&
    document.querySelector("#phone-line-number").value.length === 4;
  if (!phoneNumberValid) {
    addError("Please provide a valid 10 digit number");
  }

  /* Comments Validation */
  let commentSection = document.querySelector("#comment-section").value;
  if (commentSection.length < 25) {
    addError("Comments must be at least 25 characters");
  }
}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (event.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});

const previousButton = document.querySelector("#previous");
const continueButton = document.querySelector("#continue");
const submitButton = document.querySelector("#submit");
const stepNumbers = document.querySelectorAll(".stepNumber")
const steps = document.querySelectorAll(".step")
let currentStep = 0;

continueButton.addEventListener("click", (event) => {
  event.preventDefault();
  steps[currentStep].classList.add("hidden");
  stepNumbers[currentStep].classList.remove("active");
  steps[currentStep + 1].classList.remove("hidden");
  stepNumbers[currentStep + 1].classList.add("active");
  currentStep += 1;
  updatePagination();
});

previousButton.addEventListener("click", (event) => {
  event.preventDefault();
  steps[currentStep].classList.add("hidden");
  stepNumbers[currentStep].classList.remove("active");
  steps[currentStep - 1].classList.remove("hidden");
  stepNumbers[currentStep - 1].classList.add("active");
  currentStep -= 1;
  continueButton.removeAttribute("disabled");
  updatePagination();
});

function updatePagination() {
  if (currentStep === stepNumbers.length - 1) {
    continueButton.classList.add("hidden");
    previousButton.classList.remove("hidden");
    submitButton.classList.remove("hidden");
  } else if (currentStep == 0) {
    continueButton.classList.remove("hidden");
    previousButton.classList.add("hidden");
    submitButton.classList.add("hidden");
  } else {
    continueButton.classList.remove("hidden");
    previousButton.classList.remove("hidden");
    submitButton.classList.add("hidden");
  }
};
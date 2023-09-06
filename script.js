const button = document.querySelectorAll(".btn-front");
const submit = document.querySelector(".submit");
const rateResult = document.querySelector(".result-back");
const rateFront = document.querySelector(".result-front");
const rateNumber = document.querySelector(".rate");

submit.addEventListener("click", function () {
  if (rateNumber.innerHTML) {
    rateFront.classList.add("hidden");
    rateResult.classList.remove("hidden");
  }
});

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const number = e.target.dataset.key;
    rateNumber.innerHTML = number;
  });
});

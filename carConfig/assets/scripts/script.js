/* Model variables */
let modelRadios = document.querySelectorAll(".model-radio");
let modelPriceDisplay = document.querySelector(".model-price");
let modelPrice = 0;
/* Model color */
let colorPriceDisplay = document.querySelector(".color-price");
let modelColors = document.querySelectorAll(".model-color");
let colorPrice = 0;
/*Model Motor */
let motorPriceDisplay = document.querySelector(".motor-price");
let modelMotors = document.querySelectorAll(".model-motor");
let motorPrice = 0;
/*Model Option */
let optionPriceDisplay = document.querySelector(".option-price");
let modelOptions = document.querySelectorAll(".model-option");
let optionsPrice = 0;
/* Model global*/
let carPriceDisplay = document.querySelector(".car-price");

/* Model event */
modelRadios.forEach(function (modelRadio) {
  modelRadio.addEventListener("click", function () {
    modelPrice = modelRadio.value;
    modelPriceDisplay.innerText = modelPrice + "€";
    globalPrice();
  });
});
modelColors.forEach(function (modelColor) {
  modelColor.addEventListener("click", function () {
    colorPrice = modelColor.value;
    colorPriceDisplay.innerText = colorPrice + "€";
    globalPrice();
  });
});
modelMotors.forEach(function (modelMotor) {
  modelMotor.addEventListener("click", function () {
    motorPrice = modelMotor.value;
    motorPriceDisplay.innerText = motorPrice + "€";
    globalPrice();
  });
});
modelOptions.forEach(function (modelOption) {
  modelOption.addEventListener("click", function () {
    let optionPrice = modelOption.value;
    if (modelOption.checked) {
      optionsPrice += parseFloat(optionPrice);
    } else {
      optionsPrice -= parseFloat(optionPrice);
    }
    optionPriceDisplay.innerText = optionPrice + "€";
    globalPrice();
  });
});
/*Prix global de la voiture */
function globalPrice() {
  carPriceDisplay.innerText =
    parseInt(modelPrice) +
    parseInt(colorPrice) +
    parseInt(motorPrice) +
    parseInt(optionsPrice) +
    "€";
}

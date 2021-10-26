const suprqMean = 3.93;
const usabilityMean = 4.06;
const trustMean = 3.8;
const loyaltyMean = 3.91;
const appearanceMean = 3.88;

const suprqSD = 0.29;
const usabilitySD = 0.29;
const trustSD = 0.52;
const loyaltySD = 0.46;
const appearanceSD = 0.25;










  const input = document.querySelector("#formGroupExampleInput");
  const log = document.getElementById("#suprq");

  input.addEventListener("change", updateValue);

  function updateValue(e) {
    suprq.textContent = (e.target.value - suprqMean) / suprqSD;
  }









/*
{
  const input = document.querySelector("#formGroupExampleInput1");
  const log = document.getElementById("#usability");

  input.addEventListener("change", updateValue);

  function updateValue(e) {
    usability.textContent = (e.target.value - usabilityMean) / usabilitySD;
  }
}

{
  const input = document.querySelector("#formGroupExampleInput2");
  const log = document.getElementById("#trust");

  input.addEventListener("change", updateValue);

  function updateValue(e) {
    trust.textContent = (e.target.value - trustMean) / trustSD;
  }
}

{
  const input = document.querySelector("#formGroupExampleInput3");
  const log = document.getElementById("#loyalty");

  input.addEventListener("change", updateValue);

  function updateValue(e) {
    loyalty.textContent = (e.target.value - loyaltyMean) / loyaltySD;
  }
}

{
  const input = document.querySelector("#formGroupExampleInput4");
  const log = document.getElementById("#appearance");

  input.addEventListener("change", updateValue);

  function updateValue(e) {
    appearance.textContent = (e.target.value - appearanceMean) / appearanceSD;
  }
}
*/
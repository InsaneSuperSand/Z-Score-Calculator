/*const v = {
  suprqMean: 3.93,
  usabilityMean: 4.06,
  trustMean: 3.8,
  loyaltyMean: 3.91,
  appearanceMean: 3.88,
  suprqSD: 0.29,
  usabilitySD: 0.29,
  trustSD: 0.52,
  loyaltySD: 0.46,
  appearanceSD: 0.25,
};

const tt = ["suprq", "usability", "trust", "loyalty", "appearance"];
tt.map((t) => {
  {
    document.querySelector(`#${t}Input`).addEventListener("change", (e) => {
      document.getElementById(`${t}`).textContent =
        (e.target.value - v[`${t}Mean`]) / v[`${t}SD`];
    });
  }
});
*/

function suprqCalculate() {
  const suprqMean = 3.93;
  const suprqSD = 0.29;
  let suprqInput1 = document.querySelector("#suprqInput").value;
  let calculateSpurq = (suprqInput1 - suprqMean) / suprqSD;
  let round = calculateSpurq.toFixed(2);
  document.getElementById("suprq").innerHTML = round;

  let calculateSuprqPer = (suprqMean + suprqSD) * round;
  document.getElementById("suprqPercentile").innerHTML = calculateSuprqPer;
}
function usabilityCalculate() {
  const usabilityMean = 4.06;
  const usabilitySD = 0.29;
  let usabilityInput1 = document.querySelector("#usabilityInput").value;
  let calculateUsability = (usabilityInput1 - usabilityMean) / usabilitySD;
  let round = calculateUsability.toFixed(2);
  document.getElementById("usability").innerHTML = round;
}
function trustCalculate() {
  const trustMean = 3.8;
  const trustSD = 0.52;
  let trustInput1 = document.querySelector("#trustInput").value;
  let calculateTrust = (trustInput1 - trustMean) / trustSD;
  let round = calculateTrust.toFixed(2);
  document.getElementById("trust").innerHTML = round;
}
function loyaltyCalculate() {
  const loyaltyMean = 3.91;
  const loyaltySD = 0.46;
  let loyaltyInput1 = document.querySelector("#loyaltyInput").value;
  let calculateLoyalty = (loyaltyInput1 - loyaltyMean) / loyaltySD;
  let round = calculateLoyalty.toFixed(2);
  document.getElementById("loyalty").innerHTML = round;
}
function appearanceCalculate() {
  const appearanceMean = 3.88;
  const appearanceSD = 0.25;
  let appearanceInput1 = document.querySelector("#appearanceInput").value;
  let calculateAppearance = (appearanceInput1 - appearanceMean) / appearanceSD;
  let round = calculateAppearance.toFixed(2);
  document.getElementById("appearance").innerHTML = round;
}

function countValue() {
  suprqCalculate();
  usabilityCalculate();
  trustCalculate();
  loyaltyCalculate();
  appearanceCalculate();
}
/*

function countValue() {
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

  let suprqInput1 = document.querySelector("#suprqInput").value;
  let usabilityInput1 = document.querySelector("#usabilityInput").value;
  let trustInput1 = document.querySelector("#trustInput").value;
  let loyaltyInput1 = document.querySelector("#loyaltyInput").value;
  let appearanceInput1 = document.querySelector("#appearanceInput").value;

 document.getElementById("suprq").innerHTML =
    (suprqInput1 - suprqMean) / suprqSD;
  document.getElementById("usability").innerHTML =
    (usabilityInput1 - usabilityMean) / usabilitySD;
  document.getElementById("trust").innerHTML =
    (trustInput1 - trustMean) / trustSD;
  document.getElementById("loyalty").innerHTML =
    (loyaltyInput1 - loyaltyMean) / loyaltySD;
  document.getElementById("appearance").innerHTML =
    (appearanceInput1 - appearanceMean) / appearanceSD;
}
*/
function clearValueTable() {
  document.getElementById("suprq").innerHTML = "";
  document.getElementById("usability").innerHTML = "";
  document.getElementById("trust").innerHTML = "";
  document.getElementById("loyalty").innerHTML = "";
  document.getElementById("appearance").innerHTML = "";
}

function clearValueInput() {
  document.getElementById("suprqInput").value = "";
  document.getElementById("usabilityInput").value = "";
  document.getElementById("trustInput").value = "";
  document.getElementById("loyaltyInput").value = "";
  document.getElementById("appearanceInput").value = "";
}
function showTable() {
  var x = document.getElementById("table");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

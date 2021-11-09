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

  let suprqInput = document.querySelector("suprqInput");
  let usabilityInput = document.querySelector("usabilityInput");
  let trustInput = document.querySelector("trustInput");
  let loyaltyInput = document.querySelector("loyaltyInput");
  let appearanceInput = document.querySelector("appearanceInput");


  
  document.getElementById("suprq").innerHTML =
    (suprqInput - suprqMean) / suprqSD;
  document.getElementById("usability").innerHTML = "";
  document.getElementById("trust").innerHTML = "";
  document.getElementById("loyalty").innerHTML = "";
  document.getElementById("appearance").innerHTML = "";
}

function clearValue() {
  document.getElementById("suprqInput").value = "";
  document.getElementById("usabilityInput").value = "";
  document.getElementById("trustInput").value = "";
  document.getElementById("loyaltyInput").value = "";
  document.getElementById("appearanceInput").value = "";
  document.getElementById("suprq").innerHTML = "";
  document.getElementById("usability").innerHTML = "";
  document.getElementById("trust").innerHTML = "";
  document.getElementById("loyalty").innerHTML = "";
  document.getElementById("appearance").innerHTML = "";
}

function showTable() {
  var x = document.getElementById("table");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

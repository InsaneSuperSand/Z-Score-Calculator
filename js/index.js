const v = {
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

const marsForm = document.getElementById("mars-form");
marsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const camera = event.target.camera.value;
  const solInput = event.target.solInput.value;
  location.href = `${location.origin}${location.pathname}?sol=${solInput}&camera=${camera}`;
});

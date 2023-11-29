function generateCountry(event) {
  event.preventDefault();
  let travelElement = document.querySelector("#travel");

  new Typewriter("#travel", {
    strings: "Italy, England",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let travelFormElement = document.querySelector("#travel-generate-form");
travelFormElement.addEventListener("submit", generateCountry);

function displayCountry(response) {
  console.log("country generatated");

  new Typewriter("#travel", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateCountry(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "be4f04372f126ocaa2t8a5df316fc3ab";
  let context =
    "You are a very active person and want to travel to different country and practice the most popular sport in that country. Make sure to get the user country.";
  let prompt = `User instructions: Please generate witch is the most popular sport in this country ${instructionsInput.value} . Please give a short answer about the popular sport.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let travelElement = document.querySelector("#travel");
  travelElement.classList.remove("hidden");
  travelElement.innerHTML = `<div class="blink"> ⚽️ Generating the most popular Sport in ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayCountry);
}

let travelFormElement = document.querySelector("#travel-generate-form");
travelFormElement.addEventListener("submit", generateCountry);

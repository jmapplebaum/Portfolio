function displayFortune(response) {
  new Typewriter("#fortune", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateFortune(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "5b4802f40a5b2aoe7a3t7b824a662fdf";
  let prompt = `What is my luck regarding ${userInput.value}?`;
  let context =
    "You are a fortune teller who delivers fortunes in only two or three sentences. Not all fortunes are positive.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fortuneElement = document.querySelector("#fortune");
  fortuneElement.classList.remove("hidden");
  fortuneElement.innerHTML = `<div class="blink">⏳ Looking into your future...</div>`;

  axios.get(url).then(displayFortune);
}

let formElement = document.querySelector("#fortune-input");
formElement.addEventListener("submit", generateFortune);

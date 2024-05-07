const jokeEl = document.querySelector(".joke");
const btnEl = document.querySelector(".btn");

const API_KEY = `RdOL0paNoIJSraOxfkzStw==hKX0QDFhb7fpJ0t8`;
const API_URL = `https://api.api-ninjas.com/v1/jokes?limit=1`;

const options = {
  method: "GET",
  headers: { "X-Api-Key": API_KEY },
};

async function generateRandomJoke() {
  try {
    jokeEl.innerHTML = "Fetching joke....";
    btnEl.innerHTML = "Loading...";
    btnEl.disabled = true;
    btnEl.style.background = "lightgray";
    btnEl.style.color = "black";
    const response = await fetch(API_URL, options);
    const data = await response.json();
    console.log(data[0].joke);
    jokeEl.innerHTML = data[0].joke;
    btnEl.innerHTML = "Tell me a joke";
    btnEl.disabled = false;
    btnEl.style.background = "darkgreen";
    btnEl.style.color = "white";
  } catch (error) {
    console.log(error);
    jokeEl.innerHTML = "An error happened.Try again later";
    btnEl.innerHTML = "Tell me a joke";
    btnEl.disabled = false;
    btnEl.style.background = "darkgreen";
    btnEl.style.color = "white";
  }
}

btnEl.addEventListener("click", () => {
  generateRandomJoke();
});

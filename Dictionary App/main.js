const input = document.getElementById("input");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");
const meaningContainer = document.querySelector(".meaning-container");
const infoText = document.querySelector("#info-text");

async function getWords(word) {
  try {
    infoText.style.display="block"
    infoText.innerText="Searching for word..."
    meaningContainer.style.display = "none";
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    if(data.title){
        infoText.style.display="none"
        meaningContainer.style.display = "block";
        title.innerText = `${word}`;
        meaning.innerHTML = "No word found. Please try again";
        audio.style.display="none"
    }else{
        infoText.style.display="none"
        meaningContainer.style.display = "block";
        title.innerText = data[0].word;
        meaning.innerText = data[0].meanings[0].definitions[0].definition;
        audio.src = data[0].phonetics[0].audio;
    }
    
  } catch (error) {
    console.log(error);
    infoText.innerText="You are offline. Please try agin later"
  }
}

input.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    getWords(e.target.value);
  }
});

const container = document.querySelector(".container");


function generateRandomColor(){
    const characters=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexcode="#";
    for(let i=0;i<6;i++){
        const randomNumber=Math.floor(Math.random()*characters.length)
        hexcode+=characters[randomNumber]
    }

    return hexcode;
}

function createElements() {
  for (let i = 0; i < 30; i++) {
    const randomColorEl = document.createElement("div");
    randomColorEl.classList.add("color-container");
    const randomColorCode=generateRandomColor()
     randomColorEl.textContent = randomColorCode;
     randomColorEl.style.background=`${randomColorCode}`
     container.appendChild(randomColorEl);
  }
}

createElements();

const textareaEl = document.querySelector("#textarea");
const totalCounter = document.querySelector("#total-counter");
const remainingCounter = document.querySelector("#remaining-counter");

function updateCounter() {
  const inputValue = textareaEl.value;
  let inputLength = 0;
  for (let i = 0; i < inputValue.length; i++) {
    if (
      inputValue[i] !== " " &&
      inputValue[i] !== "\n" &&
      inputValue[i] !== "\t" &&
      ![".", ",", "!"].includes(inputValue[i])
    ) {
      inputLength++;
    }
  }
  totalCounter.textContent = inputLength;
  remainingCounter.textContent =
    textareaEl.getAttribute("maxlength") - inputLength;
}

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

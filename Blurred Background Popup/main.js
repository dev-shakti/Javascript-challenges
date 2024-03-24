const btn=document.querySelector(".btn")
const mainContainer=document.querySelector(".main-container")
const popupContainer=document.querySelector(".popup-container")
const closeIcon=document.querySelector(".popup-container .fa-times")

btn.addEventListener("click", () => {
    mainContainer.classList.add("active")
    popupContainer.classList.remove("active")
})

closeIcon.addEventListener("click", () => {
    mainContainer.classList.remove("active")
     popupContainer.classList.add("active")
})
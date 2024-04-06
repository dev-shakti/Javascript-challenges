const buttonEl=document.querySelector(".btn")
console.log(buttonEl)
const trailerContainerEl=document.querySelector(".trailer-container")
const closeIcon=document.querySelector(".trailer-container .fa-times")
const video=document.querySelector("video")

buttonEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active")
})

closeIcon.addEventListener("click", () => {
    trailerContainerEl.classList.add("active")
    video.pause()
    video.currentTime=0
})
const searchIconEl=document.getElementById("search");
console.log(searchIconEl)
const containerEl=document.querySelector(".search-bar-container");

searchIconEl.addEventListener("click", () => {
    console.log("clicked")
    containerEl.classList.toggle("active")
})
const imageContainerEl=document.querySelector(".image-container");
const buttonEl=document.querySelector(".btn");



buttonEl.addEventListener("click", () => {
    addNewImages()
    
   
})

function addNewImages(){
    const length=10;
    buttonEl.innerHTML="Loading"
    for(let i=0;i<length;i++){
      const randomNumber=Math.floor(Math.random()*2000)
       const imageEl=document.createElement("img")
    imageEl.src=`https://picsum.photos/300/300?random=${randomNumber}`
   
    imageContainerEl.append(imageEl)
    buttonEl.innerHTML="Load more"
    }
}
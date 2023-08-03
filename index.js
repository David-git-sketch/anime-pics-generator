const btnEl= document.getElementById("getpic")
const animeNameEl= document.querySelector(".anime-name")

const animeContainerEl = document.querySelector(".anime-container");

const animePicEl= document.querySelector(".anime-pic")

const apiUrl= "https://api.catboys.com/img"

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText="Updating...";
        animePicEl.src="spinner.svg";
        const response= await fetch(apiUrl)
        const data= await response.json()
        
        btnEl.disabled=false;
        btnEl.innerText="Get Pic";

        animeContainerEl.style.display="block"
        animePicEl.src= data.url;
        animeNameEl.innerText=data.artist;
        

    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened, please try again";
    }
})

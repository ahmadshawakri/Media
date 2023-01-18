const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')
console.log(id);

document.addEventListener("DOMContentLoaded", async ()=> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    const albumInfo = await response.json()

    const container = document.getElementsByClassName("photos-container");
    const albumTitle = document.createElement("h1");
    albumTitle.innerHTML = albumInfo.title;
    container[0].appendChild(albumTitle);
    console.log(albumInfo.title);
    loadPhotos()

})

async function loadPhotos(){
    const photosCont = document.getElementsByClassName("photos-container");
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    const photos = await res.json();
    const photosDiv = document.createElement("div")
    photos.forEach(element => {

        //ELements Creation
        const section = document.createElement("section");
        const title = document.createElement("h3");
        const image = document.createElement("img");

        // Set Attributes
        photosDiv.setAttribute("class", "photos")
        title.innerHTML = element.title;
        image.src = element.url;

        //Append Elements
        section.append(title, image);
        photosDiv.appendChild(section)
        photosCont[0].appendChild(photosDiv);
    });
}




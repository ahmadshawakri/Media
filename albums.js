const user = JSON.parse(localStorage.user);

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`);
    const albums = await response.json();
    await albums.forEach(album => {
        loadAlbum(album)
    })
})

async function loadAlbum(album){
    const albumsContainer = document.getElementsByClassName("albums-container");

    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
    const albumPhotos = await response.json()

    // Elements Creation
    const section = document.createElement("section")
    const albumTitle = document.createElement("h2")
    const albumDemo = document.createElement("div")
    const image1 = document.createElement("img")
    const image2 = document.createElement("img")
    const image3 = document.createElement("img")
    const vertical = document.createElement("hr")

    // Set inner HTML for Title
    albumTitle.innerHTML = album.title

    // Set attribute
    section.setAttribute("id", `album${album.id}`)
    albumDemo.setAttribute("class", "image-container")
    albumTitle.setAttribute("id", `${album.id}`)
    albumTitle.setAttribute("onclick", "gotoPhotos(this)")
    image1.setAttribute("src", `${albumPhotos[0].url}`)
    image2.setAttribute("src", `${albumPhotos[1].url}`)
    image3.setAttribute("src", `${albumPhotos[2].url}`)

    // Appends
    albumDemo.append(image1, image2, image3)
    section.append(albumTitle, albumDemo)
    albumsContainer[0].appendChild(section)
    albumsContainer[0].appendChild(vertical)
    
}


function gotoPhotos(element){
    window.location.href = `./photos.html?id=${element.id}`
}
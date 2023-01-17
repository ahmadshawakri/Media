const user = JSON.parse(localStorage.user);

document.addEventListener("DOMContentLoaded", () => {
    getAlbums();
})

function getAlbums(){
    // const postsContainer = document.getElementsByClassName("posts-container");
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            loadAlbums(element)
        });
         
        // data.forEach(element => {
        //     let section = document.createElement("section")
        //     section.setAttribute("id", `post${element.id}`)
        //     section.innerHTML = `<div class="names"><h3>${user.name}</h3> <h5>@${user.username}</h5></div> <p id="${element.id}" onclick = "commentLoad(this)">${element.body}</p> 
        //     <hr style="width: 90%; color: #ACACAC;"> <input type="text" name="comment" placeholder="Add Comment..." onkeydown="addComm(this)"> <hr style="width: 100%;">`
        //     postsContainer[0].appendChild(section)
        // });
    });
}

function loadAlbums(data){
    const albumsContainer = document.getElementsByClassName("albums-container");

    fetch(`https://jsonplaceholder.typicode.com/albums/${data.id}/photos`)
    .then(response => response.json())
    .then(photos => {
        // console.log(photos)
        // console.log(photos.slice(0, 3))

        // Elements Creation
        const section = document.createElement("section")
        const albumTitle = document.createElement("h2")
        const albumDemo = document.createElement("div")
        const image1 = document.createElement("img")
        const image2 = document.createElement("img")
        const image3 = document.createElement("img")
        const vertical = document.createElement("hr")

        // Set inner HTML for Title
        albumTitle.innerHTML = data.title

        // Set attribute
        section.setAttribute("id", `album${data.id}`)
        albumDemo.setAttribute("class", "image-container")
        image1.setAttribute("src", `${photos[0].url}`)
        image2.setAttribute("src", `${photos[1].url}`)
        image3.setAttribute("src", `${photos[2].url}`)

        // Appends
        albumDemo.append(image1, image2, image3)
        section.append(albumTitle, albumDemo)
        albumsContainer[0].appendChild(section)
        albumsContainer[0].appendChild(vertical)
    })
}
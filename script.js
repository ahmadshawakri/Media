async function login(){
    let userEmail = document.getElementById("email").value;
    let errorMsg = document.getElementById("error");

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    
    const loggedUser = await users.find(user => user.email === userEmail);

    try{
        if(loggedUser === undefined){
            throw "Invalid Email Address"
        }
        else{
            errorMsg.style.display = "none"
            localStorage.user = JSON.stringify(loggedUser)
            window.location.href = "./albums.html"
        }
    }
    catch(err){
        errorMsg.innerHTML = err
        errorMsg.style.display = "flex"
    }
    
}
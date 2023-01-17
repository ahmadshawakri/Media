function checkEmail(){
    let user_email = document.getElementById("email").value;
    let errorMsg = document.getElementById("error");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        const user = data.find(item => item.email === user_email)
        try{
            if(user === undefined){
                throw "Invalid Email Address"
            }
            else{
                errorMsg.style.display = "none"
                localStorage.user = JSON.stringify(user)
                window.location.href = "./album/index.html"
            }
        }
        catch(err){
            errorMsg.innerHTML = err
            errorMsg.style.display = "flex"
        }
    });
}
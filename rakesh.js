function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "rakesh" && password == "raki")
     {     
        alert("Login successful");
        window.location.replace("fetch.html")
    } 
    else 
    {
        alert("Login failed. Please check your username and password.");
    }
}


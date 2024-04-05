window.addEventListener("load", () => { 
    if (localStorage.getItem("userinfo")) {
        window.location.href = "./html/home.html"
    }
 })
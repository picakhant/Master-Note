window.addEventListener("load", () => {
  if (localStorage.getItem("userinfo")) {
    window.location.href = "./html/home.html";
  }
});

const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", () => {
  alert("Login doesn't work, Please Sign Up");
});

window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
  }
});

//username, email, password
const userInfo = JSON.parse(localStorage.getItem("userinfo"));

const bodyTag = document.getElementById("ptg");

// create element for profile
const nameTag = document.createElement("h3"); //<h1></h1>
const emailTag = document.createElement("h3");

nameTag.classList.add("h3");
emailTag.classList.add("h3");

nameTag.textContent = "Full Name - " + userInfo.username; //<h1>Name</h1>
emailTag.textContent = "Email Address - " + userInfo.email;

bodyTag.append(nameTag, emailTag);

window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
  }
});

//username, email, password
const userInfo = JSON.parse(localStorage.getItem("userinfo"));

const bodyTag = document.body;

// create element for profile
const nameTag = document.createElement("h1"); //<h1></h1>
const emailTag = document.createElement("h1");

nameTag.textContent = userInfo.username; //<h1>Name</h1>
emailTag.textContent = userInfo.email;

bodyTag.append(nameTag, emailTag);

console.log(userInfo.username);

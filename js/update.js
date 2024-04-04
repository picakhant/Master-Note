window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
  }
});

//username, email, password
const userInfo = JSON.parse(localStorage.getItem("userinfo"));

const nameInp = document.getElementsByTagName("input")[0];
const emailInp = document.getElementsByTagName("input")[1];

nameInp.value = userInfo.username;
emailInp.value = userInfo.email;

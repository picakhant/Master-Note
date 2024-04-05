window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
  }
});

//username, email, password
const userInfo = JSON.parse(localStorage.getItem("userinfo"));

const nameInp = document.getElementsByTagName("input")[0];
const emailInp = document.getElementsByTagName("input")[1];
const passwordInp = document.getElementsByTagName("input")[2];

nameInp.value = userInfo.username;
emailInp.value = userInfo.email;

const updateBtn = document.getElementsByTagName("button")[0];

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = JSON.parse(localStorage.getItem("userinfo"));

  if (
    nameInp.value === "" ||
    emailInp.value === "" ||
    passwordInp.value === ""
  ) {
    alert("Fill all field");
    return;
  }

  userData.username = nameInp.value;
  userData.email = emailInp.value;
  userData.password = passwordInp.value;

  localStorage.setItem("userinfo", JSON.stringify(userData));
  window.location.href = "../html/profile.html";
});

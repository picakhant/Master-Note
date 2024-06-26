const nameInp = document.getElementsByTagName("input")[0];

const emailInp = document.getElementsByTagName("input")[1];

const passwordInp = document.getElementsByTagName("input")[2];

const retypePasswordInp = document.getElementsByTagName("input")[3];

const submitBtn = document.getElementsByTagName("button")[0];

const user = {};
/**
 * 
 {
    username: "mg mg",
    email: "abc@gmial.com"
    pass: "laskjdfkla"
 }
 */

const handleUserData = (username, email, password) => {
  //add data to object
  user.username = username;
  user.email = email;
  user.password = password;

  //convert user obj to JSON
  const userJSON_Data = JSON.stringify(user);
  localStorage.setItem("userinfo", userJSON_Data);

  //change address window address
  window.location.href = "../html/home.html";
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //input values
  const username = nameInp.value;
  const email = emailInp.value;
  const password = passwordInp.value;
  const confirmPassword = retypePasswordInp.value;

  //check form
  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Fill all field");
  } else if (password !== confirmPassword) {
    alert("Password doesn't match!");
  } else if (password.length < 4) {
    alert("Password must be at least 4 character!");
  } else {
    handleUserData(username, email, password);
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("userinfo")) {
    window.location.href = "../html/home.html";
  }
});

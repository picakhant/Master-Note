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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("user is ", user);

  //input values
  const username = nameInp.value;
  const email = emailInp.value;
  const password = passwordInp.value;
  const confirmPassword = retypePasswordInp.value;

  //add data to object
  user.username = username;
  user.email = email;
  user.password = password;

  //convert user obj to JSON
  const userJSON_Data = JSON.stringify(user);
  localStorage.setItem("userinfo", userJSON_Data);
});

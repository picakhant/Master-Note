const navbarToggle = document.getElementsByTagName("i")[0];
const navbarOffcanvas = document.getElementsByClassName("menu-offcanvas")[0];
const navbarOffcanvasClose = document.getElementById("menu-offcanvas-close");

navbarToggle.addEventListener("click", () => {
  navbarOffcanvas.style.display = "block";
});

navbarOffcanvasClose.addEventListener("click", () => {
  navbarOffcanvas.style.display = "none";
});

window.addEventListener("load", () => {
  if (localStorage.getItem("userinfo")) {
    return;
  } else {
    window.location.href = "../html/signup.html";
  }
});

/**
 * title, Body, date, modified-date, edit, delete
 */

const array = ['a', 'b', 'c', 'd', 'e']




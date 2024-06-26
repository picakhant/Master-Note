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

const saveBtn = document.getElementById("saveBtn");
const titleInp = document.getElementsByTagName("input")[0];
const bodyInp = document.getElementsByTagName("textarea")[0];

// Note Array
let notes = [];

window.addEventListener("load", () => {
  if (localStorage.getItem("notes")) {
    const previousData = JSON.parse(localStorage.getItem("notes"));
    notes = [...previousData];
  }
});

// Date Format
const formatDate = (date) => {
  const d = new Date(date);

  // Extracting date components
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = String(d.getFullYear()).slice(2); // Extracting last two digits of the year

  // Combining components into desired format
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

// Generate ID
const generateRandomId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //get user input
  const title = titleInp.value;
  const body = bodyInp.value;

  if (title === "" || body === "") {
    alert("FIll all fields");
    return;
  }

  if (title.length > 3000) {
    alert("Title is in limited!");
    return;
  }

  if (body.length > 200000) {
    alert("Body is in limited!");
    return;
  }

  // creat note object
  const noteObj = {
    id: generateRandomId(8),
    title: title,
    body: body,
    createdAt: formatDate(Date.now()),
  };

  // add note obj to note arrar
  notes.unshift(noteObj);

  const noteArrayToJSON = JSON.stringify(notes);

  localStorage.setItem("notes", noteArrayToJSON);

  titleInp.value = "";
  bodyInp.value = "";

  alert(`${title} is successfully saved`);
  window.location.href = "../html/notes.html";
});

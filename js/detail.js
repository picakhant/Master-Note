const urlParam = new URLSearchParams(window.location.search);

const id = urlParam.get("id");

const notes = JSON.parse(localStorage.getItem("notes"));

const userChoiceNote = notes.filter((item) => {
  return id == item.id;
});

const container = document.getElementsByClassName("container")[0];

const header = document.createElement("h1");
const textBody = document.createElement("p");

const btnContainer = document.createElement("div");
const deleteBtn = document.createElement("button");
const updateBtn = document.createElement("button");

const deleteAlert = document.getElementsByClassName("delete-alert")[0];
const cancelBtn = document.getElementsByClassName("cancel")[0];
const okBtn = document.getElementsByClassName("ok")[0];

deleteBtn.textContent = "Delete";
deleteBtn.classList.add("btn-secondary")
updateBtn.textContent = "Update";
updateBtn.classList.add("btn-primary")

btnContainer.append(updateBtn, deleteBtn);
btnContainer.style.display = "flex"
btnContainer.style.gap = "10px"

header.textContent = userChoiceNote[0].title;
textBody.textContent = userChoiceNote[0].body;
textBody.style.textAlign = "justify"

container.append(header, btnContainer, textBody);

deleteBtn.addEventListener("click", () => {
  deleteAlert.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  deleteAlert.style.display = "none";
});

okBtn.addEventListener("click", () => {
  const updatedNote = notes.filter((item) => id != item.id);
  localStorage.setItem("notes", JSON.stringify(updatedNote));
  window.location.href = "../html/notes.html";
});

updateBtn.addEventListener("click", () => {
  window.location.href = `../html/update.html?update_id=${id}`;
});

const urlParams = new URLSearchParams(window.location.search);

const noteID = urlParams.get("update_id");

const notes = JSON.parse(localStorage.getItem("notes"));

const updateNote = notes.filter((item) => noteID == item.id);

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

const titleTag = document.getElementsByTagName("input")[0];
const bodyTag = document.getElementsByTagName("textarea")[0];
const updateBtn = document.getElementsByTagName("button")[0];

titleTag.value = updateNote[0].title;
bodyTag.value = updateNote[0].body;

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //   update target note
  updateNote[0].title = titleTag.value;
  updateNote[0].body = bodyTag.value;
  updateNote[0].createdAt = formatDate(Date.now());

  //   remove old note
  const removeOldNote = notes.filter((item) => updateNote[0].id != item.id);

  // add update note to array
  removeOldNote.unshift(updateNote[0]);

  //   store datadocument
  localStorage.setItem("notes", JSON.stringify(removeOldNote));

  window.location.href = "../html/notes.html";
});

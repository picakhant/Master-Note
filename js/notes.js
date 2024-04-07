window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
    return;
  }
});

// [{note1}, {not2}]

//get all notes
const notesData = JSON.parse(localStorage.getItem("notes"));
const noteCount = document.getElementById("note-count");

if (notesData !== null) {
  const noteCountText = notesData.length > 1 ? " notes" : " note";
  noteCount.textContent = notesData.length + noteCountText;

  const noteContainer = document.getElementById("notes-container");

  for (let i = 0; i < notesData.length; i++) {
    const listNote = document.createElement("div");
    listNote.classList.add("list-note");

    listNote.innerHTML = `
    <h1>${notesData[i].title}</h1>
    <h3>${notesData[i].createdAt}</h3>
    <p>${notesData[i].body}</p>
    
  `;
    noteContainer.append(listNote);
  }
} else {
  noteCount.textContent = " 0";
}

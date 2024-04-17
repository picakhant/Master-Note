window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
    window.location.href = "../html/signup.html";
    return;
  }
});

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
    <div class="note-header">
       <h3 class="note-title">${notesData[i].title}</h3>
       <p class="note-date">${notesData[i].createdAt}</p>
    </div>
    <p class="note-body">${notesData[i].body.substr(0, 201)}...</p>    
  `;

    const readMoreBtn = document.createElement("a");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.style.textDecoration = "underline"
    readMoreBtn.style.color = "blue"
    readMoreBtn.style.cursor = "pointer"

    readMoreBtn.addEventListener("click", () => {
      window.location.href = `../html/detail.html?id=${notesData[i].id}`;
    });

    listNote.append(readMoreBtn);
    noteContainer.append(listNote);
  }
} else {
  noteCount.textContent = " 0";
}

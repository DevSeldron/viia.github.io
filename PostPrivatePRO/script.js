document.addEventListener("DOMContentLoaded", function () {
  const contentArea = document.querySelector(".content");
  const placeNoteButton = document.getElementById("placeNoteButton");
  const notesContainer = document.getElementById("notesContainer");
  const boldButton = document.getElementById("boldButton");
  const italicButton = document.getElementById("italicButton");
  const underlineButton = document.getElementById("underlineButton");
  const colorPicker = document.getElementById("colorPicker");
  const correctPassword = "PostPrivately";
  const mainContent = document.querySelector(".main-content");

  // Load notes from localStorage
  loadNotes();

  // Event listeners
  placeNoteButton.addEventListener("click", () => {
    const noteContent = contentArea.innerHTML.trim();
    if (noteContent !== "" && noteContent !== "<p>Start typing your note here...</p>") {
      const noteTitle = prompt("Enter a title for your note:");
      if (noteTitle) {
        const noteDate = new Date().toLocaleString();
        const note = { title: noteTitle, content: noteContent, date: noteDate };
        addNoteToLocalStorage(note);
        addNoteToContainer(note);
        contentArea.innerHTML = "<p>Start typing your note here...</p>";
      }
    }
  });

  boldButton.addEventListener("click", () => {
    document.execCommand("bold", false, null);
  });

  italicButton.addEventListener("click", () => {
    document.execCommand("italic", false, null);
  });

  underlineButton.addEventListener("click", () => {
    document.execCommand("underline", false, null);
  });

  colorPicker.addEventListener("change", () => {
    document.execCommand("foreColor", false, colorPicker.value);
  });

  // Load notes from localStorage and display them
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.reverse(); // Reverse the order to show newest notes at the top
    notes.forEach(note => {
      addNoteToContainer(note);
    });
  }

  // Add a note to localStorage
  function addNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.unshift(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  // Add a note to the container
  function addNoteToContainer(note) {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note", "d-flex", "flex-column", "align-items-start", "mb-3", "p-3", "border", "border-secondary", "rounded");
    noteElement.innerHTML = `
      <h4>${note.title}</h4>
      <p>${note.content}</p>
      <small>${note.date}</small>
      <button class="btn btn-danger btn-sm mt-2 delete-button">Delete</button>`;
    notesContainer.insertBefore(noteElement, notesContainer.firstChild);
    setupDeleteButtons();
  }

  // Set up delete buttons for each note
  function setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
      button.addEventListener("click", () => {
        const noteElement = button.closest(".note");
        const noteTitle = noteElement.querySelector("h4").textContent;
        removeNoteFromLocalStorage(noteTitle);
        noteElement.remove();
      });
    });
  }

  // Remove a note from localStorage
  function removeNoteFromLocalStorage(noteTitle) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.filter(note => note.title !== noteTitle);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  if (localStorage.getItem("hasEnteredPassword")) {
    mainContent.style.display = "block";
    placeNoteButton.disabled = false;
    loadNotes();
  } else {
    mainContent.style.display = "none";
    placeNoteButton.disabled = true;

    const passwordPrompt = prompt("Enter the password to access the website:");

    if (passwordPrompt === correctPassword) {
      localStorage.setItem("hasEnteredPassword", "true");
      mainContent.style.display = "block";
      placeNoteButton.disabled = false;
      loadNotes();
    } else {
      alert("Incorrect password. You don't have access.");
    }
  }
});

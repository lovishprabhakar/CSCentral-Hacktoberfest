console.log("notefy.js loaded");
showNotes();
// If user adds a note add it to the local storage 

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
   let addTxt = document.getElementById("addTxt");
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
   }
   notesObj.push(addTxt.value);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   addTxt.value = "";
   console.log(notesObj);
   showNotes();
   });

// Function to show elements from local storage

function showNotes() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
   }
   let notesList = "";
   notesObj.forEach(function (element, index) {
      notesList += `
         <div class="noteCard my-2 mx-2 card" style="width: 17rem;">
            <div class="card-body">
               <h5 class="card-title">Note ${index + 1}</h5>
               <p class="card-text">${element}</p>
               <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
         </div>
      `;
   });
   let notesElm = document.getElementById("notes");
   if (notesObj.length != 0) {
      notesElm.innerHTML = notesList;
   } else {
      notesElm.innerHTML = `<p class="mx-4">Nothing to show! Use "Add a Note" section above to add notes.<p>`;
   }
}

// Function to delete a note

function deleteNode(index) {
   console.log("I am deleting", index);
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
   }
   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();
}

// Search for notes

let search = document.getElementById("searchTxt");

search.addEventListener("input", function () {
   let inputVal = search.value.toLowerCase();
   console.log("Input event fired!", inputVal);
   let noteCards = document.getElementsByClassName("noteCard");
   Array.from(noteCards).forEach(function (element) {
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if (cardTxt.includes(inputVal)) {
         element.style.display = "block";
      } else {
         element.style.display = "none";
      }
   });
});

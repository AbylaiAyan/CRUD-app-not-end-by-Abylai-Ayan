
let wbookName = document.getElementById('bookName');

let wauthor = document.getElementById('fullAuthorFS');
let wyearofpublish = document.getElementById('yearofpublish');

let wbookPrice = document.getElementById('bookPrice');
let wbookdates = [];

let toident = id => document.getElementById(id);
let wform = document.forms['form'];

let wbtn = document.getElementById('btn');
let wtbody = document.getElementById('tbodys');

function checker() {
       item = true;
       if (document.getElementById("bookName").value == "") {
          item = false;
          document.getElementById("vError").classList.remove("o-hide");
       }
       else { item = true;
              if (!document.getElementById("vError").classList.contains("to-hide"))
              document.getElementById("vError").classList.add("to-hide");
       }  return item;
     }


function Book(bookName, bookAuthor, bookYear, bookPrice  ) {
      this.bookName = bookName;
      this.bookAuthor = bookAuthor;
      this.bookYear = bookYear;
      this.bookPrice = bookPrice;
    }

function deleteData(element) {
    if (!element.target.classList.contains("deleteButton")) return;
    element.target.closest("tr").remove();
}

    wtbody.addEventListener("click", deleteData);


    wbtn.onclick = function() {
      if (checker()) {
        let bookName = wbookName.value;
        let bookAuthor = wauthor.value;
        let bookYear = wyearofpublish.value;
        let bookPrice = wbookPrice.value;

        const newBook = new Book(bookName, bookAuthor, bookYear, bookPrice);
        wform.reset();
        wbookdates.push(newBook);

        let td;
        let tr = document.createElement('tr');
        toident('tbodys').appendChild(tr);
        td = document.createElement('td');tr.appendChild(td);  td.textContent = wbookdates.length;
        td = document.createElement('td');tr.appendChild(td);  td.textContent = newBook.bookName;
        td = document.createElement('td');tr.appendChild(td);  td.textContent = newBook.bookAuthor;
        td = document.createElement('td');tr.appendChild(td);  td.textContent = newBook.bookYear;
        td = document.createElement('td');tr.appendChild(td);  td.textContent = newBook.bookPrice;
        td = document.createElement('td');tr.appendChild(td);  td.innerHTML = `<button class="deleteButton btn btn-danger">Delete</button> <button class="updateButton btn btn-success">Update</button>`;
      }
    }

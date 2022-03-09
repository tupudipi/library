const library = document.getElementById("library");
const newBookBtn = document.getElementById("newBookBtn");
const newBookModal = document.getElementById("newBookModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const addBookBtn = document.getElementById("addBookBtn");
const newBookTitle = document.getElementById("bookTitle");
const newBookAuthor = document.getElementById("bookAuthor");
const newBookPages = document.getElementById("bookPages");
const newBookRead = document.getElementById("bookRead");
let libraryArray = [];

newBookBtn.addEventListener("click", ()=>{
    newBookModal.style.display = "flex";
});

modalCloseBtn.addEventListener("click", () =>{
    newBookModal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == newBookModal) {
        newBookModal.style.display = "none";
    }
  }

addBookBtn.addEventListener("click", addNewBook);

function addNewBook(){
    let book = new Book(newBookTitle.value, newBookAuthor.value, +newBookPages.value, newBookRead.checked);
    book.addToLibrary();
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    addToLibrary() {
        libraryArray.push(this);
        displayAllBooks();
    }
    changeRead() {
        this.read = !this.read;
        displayAllBooks();
    }
}

// let book1 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
// book1.addToLibrary();

// let book2 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
// book2.addToLibrary();

function displayAllBooks() {
    library.innerHTML = "";
    libraryArray.forEach((book, index) => {
        let bookToBeAdded = document.createElement('div');
        bookToBeAdded.id = `book${index}`;
        bookToBeAdded.className = 'book';
        bookToBeAdded.dataset.index = index;

        let title = document.createElement('p')
            title.id = 'title';
            title.textContent = book.title;
            bookToBeAdded.appendChild(title);

        let author = document.createElement('p')
            author.id = 'author';
            author.textContent = 'by ' + book.author;
            bookToBeAdded.appendChild(author);

        let pages = document.createElement('p')
            pages.id = 'pages';
            pages.textContent = book.pages + ' pages long';
            bookToBeAdded.appendChild(pages);

        let read = document.createElement('p')
            read.id = 'read';
            if (book.read)
                read.textContent = 'read';
            else
                read.textContent = 'not read yet';
            bookToBeAdded.appendChild(read);
        
        library.appendChild(bookToBeAdded);
    });
}

displayAllBooks();

// libraryArray.splice(2, 1); //delete at index 2 



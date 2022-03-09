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
    let OK=1;
    if(!newBookTitle.value){
        alert("Please enter a book title.");
        newBookTitle.focus();
        OK=0;
    }
    if(OK==1 && !newBookAuthor.value){
        alert("Please enter a book author.");
        newBookAuthor.focus();
        OK=0;
    }
    if(OK==1 && !newBookPages.value){
        alert("Please enter the length of the book, in pages.");
        newBookPages.focus();
        OK=0;
    }
    if(OK==1 && isNaN(newBookPages.value)){
        alert("Please enter the number of pages as a integer.");
        newBookPages.focus();
        OK=0;
    }
    if(OK==1){
        let book = new Book(newBookTitle.value, newBookAuthor.value, +newBookPages.value, newBookRead.checked);
        book.addToLibrary();
        newBookTitle.value = "";
        newBookAuthor.value = "";
        newBookPages.value = "";
        newBookRead.value = false;
    }
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

let book1 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
book1.addToLibrary();

let book2 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
book2.addToLibrary();

let book3 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
book1.addToLibrary();

let book4 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
book2.addToLibrary();

let book5 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
book1.addToLibrary();

let book6 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
book2.addToLibrary();

let book7 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
book1.addToLibrary();

let book8 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
book2.addToLibrary();

function deleteBook(){
    libraryArray.splice(this.dataset.index, 1);
    displayAllBooks();
}

function displayAllBooks() {
    library.innerHTML = "";
    libraryArray.forEach((book, index) => {
        let bookToBeAdded = document.createElement('div');
        bookToBeAdded.id = `book${index}`;
        bookToBeAdded.className = 'book';
        bookToBeAdded.dataset.index = index;

        let title = document.createElement('p')
            title.className = `title`;
            title.textContent = book.title;
            bookToBeAdded.appendChild(title);

        let author = document.createElement('p')
            author.className = `author`;
            author.textContent = 'by ' + book.author;
            bookToBeAdded.appendChild(author);

        let pages = document.createElement('p')
            pages.className = `pages`;
            pages.textContent = book.pages + ' pages long';
            bookToBeAdded.appendChild(pages);

        let read = document.createElement('p')
            read.className = `read`;
            if (book.read)
                read.textContent = 'read';
            else
                read.textContent = 'not read yet';
            bookToBeAdded.appendChild(read);

        let deleteBookBtn = document.createElement('button')
            deleteBookBtn.className = `deleteBookBtn`;
            deleteBookBtn.dataset.index = index;
            deleteBookBtn.textContent = `Delete this book`;
            deleteBookBtn.addEventListener("click", deleteBook);
            bookToBeAdded.appendChild(deleteBookBtn);
        
        library.appendChild(bookToBeAdded);
    });
}

displayAllBooks();





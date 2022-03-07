let library = document.getElementById("library");

let libraryArray = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    addToLibrary() {
        libraryArray.push(this);
    }
    changeRead() {
        this.read = !this.read;
    }
}

let book1 = new Book('The Hobbit', 'JRR Tolkien', 310, false);
book1.addToLibrary();

let book2 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
book2.addToLibrary();

// let book3 = new Book('Slaughterhouse 5', 'Kurt Vonnegut', 192, true);
// book3.addToLibrary();

console.log(libraryArray)

function displayAllBooks() {
    libraryArray.forEach((book, index) => {
        let bookToBeAdded = document.createElement('div');
        bookToBeAdded.id = 'book';
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

// libraryArray.splice(2, 1); //delete at index 2 
displayAllBooks();


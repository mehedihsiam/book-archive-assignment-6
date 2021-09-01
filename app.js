const errorMessege = document.getElementById('error-messege')
errorMessege.style.display = 'none';

const didNotFind = document.getElementById('did-not-find')
didNotFind.style.display = 'none';

const loadBooks = () => {
    const searchInput = document.getElementById('saerch-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data))
        .catch(error => displayError(error))
};


const displayError = () => {
    const errorMessege = document.getElementById('error-messege')
    errorMessege.style.display = 'block'
}
const displayBooks = (booksContainer) => {
    const commonContainer = document.getElementById('common-container');

    // result total print
    const totalResult = document.createElement('div');
    totalResult.innerHTML = `
    <small>Total <span class="text-danger">${booksContainer.numFound}</span> results found</small>
    `
    if (booksContainer.numFound === 0) {
        const didNotFind = document.getElementById('did-not-find')
        didNotFind.style.display = 'block';
    };


    // find books object
    const books = booksContainer.docs;

    // create book container
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('row');
    //loop on books
    books.forEach(book => {

        const bookBox = document.createElement('div');
        bookBox.classList.add('text-center', 'col-md-4', 'g-5');
        bookBox.innerHTML = `
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid">
        <h5 class="text-center mt-3">${book.title.slice(0, 25)}</h5>
        <p class="text-danger">Author: ${book.author_name}</p>
        <p>Publisher: ${book.publisher_facet}</p>
        <small class="d-block">First Published: ${book.first_publish_year}</small>
        `
        bookContainer.appendChild(bookBox);
    });
    commonContainer.textContent = '';
    commonContainer.appendChild(totalResult);
    commonContainer.appendChild(bookContainer);



    // result print

}
const loadBooks = () => {
    const searchInput = document.getElementById('saerch-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data))
}
// loadBooks();

const displayBooks = (books) => {
    const commonContainer = document.getElementById('common-container');
    commonContainer.innerHTML = `
    <small>Total <span class="text-danger">${books.numFound}</span> results found</small>
    `
}
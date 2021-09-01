const loadBooks = () => {
    const searchInput = document.getElementById('saerch-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
// loadBooks();
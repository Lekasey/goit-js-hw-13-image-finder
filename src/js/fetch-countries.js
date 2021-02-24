function fetchCoutries (searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
    return fetch(url)
    .then(response => response.json())
    .catch(error => {
        if (inputValue === '') {
            return
        }
        console.log(error)
    })
}

export default fetchCoutries
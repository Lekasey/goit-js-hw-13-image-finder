const apiKey = '20410166-62a7784bd988192fa85965390'

function fetchImage (searchQuery, page = 1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`
    
    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => hits)
}

export default fetchImage
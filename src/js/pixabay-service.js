const apiKey = '20410166-62a7784bd988192fa85965390'


export default {
    searchQuery: '',
    page: 1,
    fetchImage () {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    
    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => {  
            this.page += 1;
            return hits
        })
    },
    resetPage() {
        this.page = 1
    },
    get query () {
        return this.searchQuery;
    },
    set query (value) {
        this.searchQuery = value;
    }
}
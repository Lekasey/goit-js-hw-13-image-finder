const apiKey = '20410166-62a7784bd988192fa85965390'


export default {
    searchQuery: '',
    page: 1,
    scrollPos: 0,
    fetchImage () {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    
    if (!this.query) {
        return
    }

    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => {  
            this.incrementPage();

            return hits
        })
    },
    incrementPage() {
        this.page += 1;
    },
    resetStats() {
        this.scrollPos = 0
        this.page = 1
    },
    get query () {
        return this.searchQuery;
    },
    set query (value) {
        this.searchQuery = value;
    }
}
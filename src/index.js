import styles from './css/styles.css'
import resTpl from './templates/match.hbs'
import refs from './js/refs'
import * as basicLightbox from 'basiclightbox'
import largeTpl from './templates/large.hbs'
var _ = require('lodash')


const key = '20410166-62a7784bd988192fa85965390'
let pageNumber = 1

refs.form.addEventListener('input', _.debounce(searchImage, 500))
// refs.btn.addEventListener('click', nextPage)

function searchImage (event) {
    const inputValue = event.target.value
    if (!inputValue) {
        return
    }

    fetchImage(inputValue)
}

function fetchImage (queryRequest) {
    let query = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${queryRequest}&page=${pageNumber}&per_page=12&key=${key}`
    return fetch(query)
        .then(res => res.json())
        .then(({ hits }) => hits)
        .then(data => updateMarkup(data))
        // .then(refs.galleryItem.addEventListener('click', fullScreenImage))
        .catch(error => console.log(error))
}

// function fullScreenImage (event) {
//     basicLightbox.create(`<img width="1400" height="900" src=${largeTpl}`).show()
// }

function updateMarkup (hits) {
    const markup = resTpl(hits)
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}

// function nextPage () {
//     pageNumber += 1;
//     fetchImage(pageNumber)
// }
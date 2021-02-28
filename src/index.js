import styles from './css/styles.css'
import resultTpl from './templates/match.hbs'
import refs from './js/refs'
// import * as basicLightbox from 'basiclightbox'
// import largeTpl from './templates/large.hbs'
var _ = require('lodash')
// import fetchImage from './js/fetch-image'
import updateMarkup from './js/updateMarkup'
import pixabayService from './js/pixabay-service'



refs.form.addEventListener('input', _.debounce(searchImage, 500))
refs.form.addEventListener('submit', (event) => event.preventDefault())
// refs.btn.addEventListener('click', nextPage)

function searchImage (event) {
    event.preventDefault();
    pixabayService.query = event.target.value
    if (!pixabayService.query) {
        return
    }
    refs.gallery.innerHTML = ''
    refs.form.reset();
    pixabayService.resetPage();
    pixabayService.fetchImage().then(images => updateMarkup(images));
}

refs.loadMoreBtn.addEventListener('click', () => {
    pixabayService.fetchImage().then(images => updateMarkup(images));
})
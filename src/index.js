import styles from './css/styles.css'
import resultTpl from './templates/match.hbs'
import refs from './js/refs'
import * as basicLightbox from 'basiclightbox'
const _ = require('lodash')
import updateMarkup from './js/updateMarkup'
import pixabayService from './js/pixabay-service'
import clearGallery from './js/clear-gallery'
import loadMoreBtn from './js/loadMoreBtn'

refs.form.addEventListener('input', _.debounce(searchImage, 500))
refs.form.addEventListener('submit', (event) => event.preventDefault())

loadMoreBtn.refs.node.addEventListener('click', () => {
    pixabayService.scrollPos = document.documentElement.offsetHeight - 40;
    fetchImage()
})


function searchImage (event) {
    
    event.preventDefault();
    pixabayService.query = event.target.value
   
    clearGallery()
    pixabayService.resetStats();
    fetchImage()
    refs.form.reset();
}

function fetchImage (){
    loadMoreBtn.disable()
    
    pixabayService
    .fetchImage()
    .then(images => {
        updateMarkup(images),
        loadMoreBtn.show(),
        loadMoreBtn.enable(),
        window.scrollTo({
            top: pixabayService.scrollPos,
            behavior: 'smooth'
        })    
    })
}

// refs.gallery.addEventListener('click', onGalleryItemClick)
// function onGalleryItemClick(event) {
//     // event.preventDefault()
//     // if(event.target.nodeName !== 'IMG') {
//     //     return
//     // };
//     // console.log('img clicked');
    
//     basicLightbox.create(`
//     <div class="modal">
//         <img src="${event.target.dataset.source}>
//     </div>
//     `).show()
     
// }




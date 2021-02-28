import refs from './refs';
import resultsTpl from '../templates/match.hbs'


function updateMarkup (images) {
    const markup = resultsTpl(images)
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}

export default updateMarkup
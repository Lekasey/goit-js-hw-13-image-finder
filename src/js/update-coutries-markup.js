import resultsTpl from '../templates/searchResults.hbs';
import matchTpl from '../templates/match.hbs'
import refs from './refs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults, notice, info, error } from '@pnotify/core'
defaults.mouseReset = false;
defaults.delay = 3000;

function updateCountriesMarkup (countries) {
    if (countries.status === 404) {
        error({
            text: 'Sorry, nothing found'
        })
        return
    } 
    else if (countries.length > 10) {
        notice({
            title: 'Too many maches found.',
            text: 'Specify your request.'
        })
        return
    }
    else if (countries.length <= 10 && countries.length > 1) {
        info({
            title: 'Too many results.',
            text: "Please, specify your request."
          });
        const markup = resultsTpl(countries)
        refs.resultsContainer.insertAdjacentHTML('beforeend', markup)
        return
    }
    else if (countries.length = 1) {
        const markup = matchTpl(countries)
        refs.resultsContainer.insertAdjacentHTML('beforeend', markup)
        return
    }  
}
export default updateCountriesMarkup
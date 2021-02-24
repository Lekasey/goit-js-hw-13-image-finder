import refs from './refs';
import fetchCoutries from './fetch-countries';
import updateCoutriesMarkup from './update-coutries-markup';
var _ = require('lodash');



refs.searchBar.addEventListener('input', _.debounce(queryResult,500))
refs.searchBar.addEventListener('submit', event => {
    event.preventDefault()
})

function queryResult (event) {
    event.preventDefault();
    const inputValue = event.target.value;
    
    refs.resultsContainer.innerHTML = ''
    fetchCoutries(inputValue).then(updateCoutriesMarkup).catch(error => {
        if (inputValue === null) {
            return
        }
        refs.resultsContainer.innerHTML = ''
    })

}


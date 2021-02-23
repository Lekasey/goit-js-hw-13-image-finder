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
    const input = event.target;
    const inputValue = input.value;
    
    refs.resultsContainer.innerHTML = ''
    fetchCoutries(inputValue).then(updateCoutriesMarkup).catch(error => {
        refs.resultsContainer.innerHTML = ''
    })

}


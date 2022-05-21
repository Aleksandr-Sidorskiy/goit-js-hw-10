import '../css/styles.css';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('country-info');

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input' , )

fetch('https://restcountries.com/v3.1/name/ukraine')
    .then(responce => {
        return responce.json();
    })
    .then(name => {
        console.log(name);
    })
    .catch(error => {
        console.log(error);
    })
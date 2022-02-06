import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const button = document.querySelector('.hamburger--js');

button.addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('navigation--open');
})

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const date = document.querySelector('.date');

date.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

fetch('https://api.github.com/users/tomekgasowski/repos?sort=created&direction=asc')
    .then(resp => resp.json())
    .then(resp => {

    })
    .catch(error => {
        console.log("no nie, no po prostu nie");
    });
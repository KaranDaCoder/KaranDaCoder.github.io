import {bollywood_movies_2003} from './Bollywood_2003Parser.js';
import {bollywood_movies_2004} from './Bollywood_2004Parser.js';
import {bollywood_movies_2005} from './Bollywood_2005Parser.js';
import {bollywood_movies_2006} from './Bollywood_2006Parser.js';
import {bollywood_movies_2007} from './Bollywood_2007Parser.js';


//locators here:
let movie_2003 = document.getElementById('id2003');
let movie_2004 = document.getElementById('id2004');
let movie_2005 = document.getElementById('id2005');
let movie_2006 = document.getElementById('id2006');
let movie_2007 = document.getElementById('id2007');

let movie_array = [];
let formatted_movie_array = [];

movie_2003.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2003;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})

movie_2004.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2004;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})

movie_2005.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2005;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})


movie_2006.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2006;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})

movie_2007.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2007;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})

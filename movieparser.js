import {bollywood_movies_2003} from '.Bollywood_2003Parser.js';
import {bollywood_movies_2007} from '.Bollywood_2007Parser.js';


//locators here:
let movie_2003 = document.getElementById('id2003');
let movie_2007 = document.getElementById('id2007');
let movie_array = [];
let formatted_movie_array = [];

movie_2003.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2003;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})

movie_2007.addEventListener('click' , function() {
    sessionStorage.clear();
    console.log("Clearing local storage now.")
    movie_array = bollywood_movies_2007;
    sessionStorage.setItem("movie_store", JSON.stringify(movie_array));
})




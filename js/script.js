"use strict";

let numberOfFilms;

let personalMovieDB = {
        count: +"",
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");
personalMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");

console.log(personalMovieDB);
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

for (let i = 0; i < 2; i++) {
    const filmName = prompt('Один из последних просмотренных фильмов?', ''),
          userRate = prompt('На сколько оцените его?', '');
    if (filmName != null && userRate != null && filmName != '' && userRate != '' && filmName.length < 50) {
        personalMovieDB.movies[filmName] = userRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count <= 0) {
    console.log("Произошла ошибка");
} else if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (10 <= personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
}

console.log(personalMovieDB);
import data from './data.js';

let weatherEvents = data.weatherEvents;
let currentWeather = data.currentWeather;

let randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let randomWeather = weatherEvents[randomNum(0,weatherEvents.length -1 )];
let randomCurrent = currentWeather[randomNum(0, currentWeather.length - 1)]
let randomTemp = randomNum(-20, 120);

console.log(`Current tempature is ${randomTemp} F. dang its ${randomCurrent}. Expect ${randomWeather} soon`)

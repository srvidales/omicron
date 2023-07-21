import {functionA, fetchPerson, fetchPlanet} from "./api-1.js";
import functionB from './api-2.js';

console.log('Hello, world!');

functionA();
functionB();
fetchPerson(1).then(function () { console.log('Got a person!')});
fetchPlanet(1).then(function () { console.log('Got a planet!')});

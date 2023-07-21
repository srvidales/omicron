import {functionA, fetchPerson, fetchPlanet} from "./api-1.js";
import functionB from './api-2.js';

console.log('Hello, world!');

functionA();
functionB();

let people = [];
let planets = [];

async function getPeople() {
    for (let i = 0; i < 10; i++) {
        const person = await fetchPerson(i + 1);
        people.push(person);
    }
}

async function getPlanets() {
    for (let i = 0; i < 10; i++) {
        const planet = await fetchPlanet(i + 1);
        planets.push(planet);
    }
}

await getPeople();
await getPlanets();

console.log(people);
console.log(planets);

// Step 1 - Introduction
// Step 2 - Pick universe - Multiple universes in version 2?
// Step 3 - Select characters in that universe
// Step 4 - Select locations/planets in selected universe
// Step 5 - Plot twists? Number of critical points?
// Step 6 - Generate story
// Step 7 - Play through choices (Save Story)
// Step 8 - Story finishes. Success/Failure.
// Step 9 - Results (Save Results)


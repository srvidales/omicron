import * as intro from './intro.js';
import * as character from './character.js';
import * as location from './location.js';
import * as path from './path.js';
import * as playthrough from './playthrough.js';

// Step 1 - Introduction
// Step 2 - Select story difficulty
// Step 3 - Select your character out of a predefined set of characters
// Step 4 - Select your location out of a predefined set of locations
// Step 5 - Select your path (light/dark)
// Step 6 - Playthrough generated story
// Step 7 - Finale (Success/Failure)

const steps = ['intro', 'path', 'character', 'location', 'playthrough'];
const modules = [intro, path, character, location, playthrough];

const Path = {
    Light: 'light',
    Dark: 'dark',
};

let currentStep = 0;

let settings = { character: { name: null }, location: { name: null } };

const nextStep = function () {
    console.log(currentStep)
    const bannerImg = $('#banner-img');

    let div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    if (currentStep < steps.length - 1) {
        currentStep++
    } else {
        currentStep = 0;
    }
    bannerImg.attr('src', `/assets/img/banner/${steps[currentStep]}-banner.png`)
    div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');

    const foo = character;

    console.log('module=', modules[currentStep]);

    if (typeof modules[currentStep].doStep === 'function') {
        modules[currentStep].doStep()
    }

}

$(function () {

    let currentStep = 0;

    const loadAllSteps = function () {
        $('#intro-div').load('./assets/html/intro.html', intro.initIntroStep)
        $('#path-div').load('./assets/html/path.html', path.initPathStep)
        $('#character-div').load('./assets/html/character.html', character.initCharacterStep)
        $('#location-div').load('./assets/html/location.html', location.initLocationsStep)
        $('#playthrough-div').load('./assets/html/playthrough.html', playthrough.initPlaythroughStep)
    }

    const startApp = function () {
        console.log('loadAllSteps')
        loadAllSteps()
    }

    startApp();
})

export {Path, settings, currentStep, nextStep};

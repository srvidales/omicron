import * as intro from './intro.js';
import * as difficulty from './difficulty.js';
import * as character from './character.js';
import * as location from './location.js';
import * as path from './path.js';
import * as playthrough from './playthrough.js';
import * as finale from './finale.js';

// Step 1 - Introduction
// Step 2 - Select story difficulty
// Step 3 - Select your character out of a predefined set of characters
// Step 4 - Select your location out of a predefined set of locations
// Step 5 - Select your path (light/dark)
// Step 6 - Playthrough generated story
// Step 7 - Finale (Success/Failure)

const steps = ['intro', 'difficulty', 'character',
    'location', 'path', 'playthrough', 'finale'];

const Difficulty = {
    Easy: 'easy',
    Hard: 'hard',
};

const Path = {
    Light: 'light',
    Dark: 'dark',
};

class StoryNode {
    constructor(data) {
        this.data = {
            storyFragment: data.storyFragment,
            leftChoice: data.leftChoice,
            rightChoice: data.rightChoice
        };
        this.leftNode = null;
        this.rightNode = null;
    }
}

let data = {
    storyFragment: "Once upon a time...",
    leftChoice: "Go left",
    rightChoice: "Go right",
};

const root = new StoryNode(data);
console.log(root);

let currentStep = 0;

let settings = {};

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
}

$(function () {

    const steps = ['intro', 'universe', 'characters',
        'locations', 'settings', 'playthrough', 'finale', 'score']

    let currentStep = 0;

    const loadAllSteps = function () {
        $('#intro-div').load('./assets/html/intro.html', intro.initIntroStep)
        $('#difficulty-div').load('./assets/html/difficulty.html', difficulty.initDifficultyStep)
        $('#character-div').load('./assets/html/character.html', character.initCharacterStep)
        $('#location-div').load('./assets/html/location.html', location.initLocationsStep)
        $('#path-div').load('./assets/html/path.html', path.initPathStep)
        $('#playthrough-div').load('./assets/html/playthrough.html', playthrough.initPlaythroughStep)
        $('#finale-div').load('./assets/html/finale.html', finale.initFinaleStep)
    }

    const startApp = function () {
        console.log('loadAllSteps')
        loadAllSteps()
    }

    startApp();
})

export {Difficulty, Path, settings, currentStep, nextStep};

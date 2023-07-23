import * as intro from './intro.js';
import * as universe from './universe.js';
import * as character from './character.js';
import * as location from './location.js';
import * as settings from './settings.js';
import * as playthrough from './playthrough.js';
import * as finale from './finale.js';
import * as score from './score.js';

// Step 1 - Introduction
// Step 2 - Pick universe - Multiple universes in version 2?
// Step 3 - Select characters in that universe
// Step 4 - Select locations/planets in selected universe
// Step 5 - Plot twists? Number of critical points?
// Step 6 - Generate story
// Step 7 - Play through choices (Save Story)
// Step 8 - Story finishes. Success/Failure.
// Step 9 - Results (Save Results)

const steps = ['intro', 'universe', 'character',
    'location', 'settings', 'playthrough', 'finale', 'score']

let currentStep = 0;

const nextStep = function () {
    console.log(currentStep)

    let div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    if (currentStep < steps.length - 1) {
        currentStep++
    } else {
        currentStep = 0;
    }
    div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
}

$(function () {

    const steps = ['intro', 'universe', 'characters',
        'locations', 'settings', 'playthrough', 'finale', 'score']

    let currentStep = 0;

    const loadAllSteps = function () {
        $('#intro-div').load('./assets/html/intro.html', intro.initIntroStep)
        $('#universe-div').load('./assets/html/universe.html', universe.initUniverseStep)
        $('#character-div').load('./assets/html/character.html', character.initCharacterStep)
        $('#location-div').load('./assets/html/location.html', location.initLocationsStep)
        $('#settings-div').load('./assets/html/settings.html', settings.initSettingsStep)
        $('#playthrough-div').load('./assets/html/playthrough.html', playthrough.initPlaythroughStep)
        $('#finale-div').load('./assets/html/finale.html', finale.initFinaleStep)
        $('#score-div').load('./assets/html/score.html', score.initScoreStep)
    }

    const startApp = function () {
        console.log('loadAllSteps')
        loadAllSteps()
    }

    startApp();
})

export { currentStep, nextStep };

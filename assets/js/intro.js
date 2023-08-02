import {goToStep, nextStep, settings} from './app.js';

const initIntroStep = function () {
    console.log('Done loading Intro step.')
    $('#start-btn').on('click', startButtonHandler);
}

const startButtonHandler = function () {

    if(settings.character.path === null) {
        nextStep();
        // var activeEl = $(".is-active")
        // activeEl.toggleClass('is-active')
        // $("#navitems").children().eq(1).toggleClass('is-active')
    } else if (settings.character.name === null) {
        goToStep(2);
    } else if (settings.location.name === null) {
        goToStep(3);
    } else {
        goToStep(4);
    }

}

export { initIntroStep };



import {goToStep, nextStep, settings} from './app.js';

const initLoadStoryStep = function () {
    console.log('Done loading Load Story step.')
    $('#new-story-btn').on('click', continueButtonHandler);
    $('#load-story-btn').on('click', continueButtonHandler);

}

const continueButtonHandler = function (event) {

    if(event.target.id === 'new-story-btn') {
        settings.character.name = null;
        settings.character.path = null;
        settings.location.name = null;
        localStorage.setItem('settings', JSON.stringify(settings));
        nextStep();
    } else {
        if(settings.character.path == null) {
            goToStep(2);
        } else if (settings.character.name == null) {
            goToStep(3);
        } else if (settings.location.name == null) {
            goToStep(4);
        } else {
            goToStep(5);
        }
    }


}

export { initLoadStoryStep };

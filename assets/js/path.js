import {nextStep, settings, Path} from './app.js';

const initPathStep = function () {
    console.log('Done loading Path step.')
    $('#light-side-btn').on('click', pathButtonHandler);
    $('#dark-side-btn').on('click', pathButtonHandler);
}

const pathButtonHandler = function(event) {

    if (event.target.id === 'light-side-btn') {
        settings.character['path'] = Path.Light;
    } else {
        settings.character['path'] = Path.Dark;
    }
    localStorage.setItem('settings', JSON.stringify(settings));

    nextStep()
}

export {initPathStep};

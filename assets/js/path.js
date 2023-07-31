import {nextStep, settings, Path} from './app.js';

const initPathStep = function () {
    console.log('Done loading Path step.')
    $('#light-side-btn').on('click', foo);
    $('#dark-side-btn').on('click', foo);
}

const foo = function(event) {

    if (event.target.id === 'light-side-btn') {
        settings.character['path'] = Path.Light;
    } else {
        settings.character['path'] = Path.Dark;
    }

    nextStep()
}

export {initPathStep};

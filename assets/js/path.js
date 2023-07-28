import {nextStep, settings, Path} from './app.js';

const initPathStep = function () {
    console.log('Done loading Path step.')
    $('#light-side-btn').on('click', nextStep);
    $('#dark-side-btn').on('click', nextStep);

    settings['path'] = Path.Dark;
}

export {initPathStep};

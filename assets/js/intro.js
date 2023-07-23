import { nextStep } from './app.js';

const initIntroStep = function () {
    console.log('Done loading Intro step.')
    $('#start-btn').on('click', nextStep);
}

export { initIntroStep };

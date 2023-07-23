import {nextStep} from './app.js';

const initScoreStep = function () {
    console.log('Done loading Score step.')
    $('#score-div #continue-btn').on('click', nextStep)
}

export {initScoreStep};

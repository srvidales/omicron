import {nextStep} from './app.js';

const initDifficultyStep = function () {
    console.log('Done loading Difficulty step.')
    $('#easy-diff-btn').on('click', nextStep)
    $('#hard-diff-btn').on('click', nextStep)
}

export {initDifficultyStep};

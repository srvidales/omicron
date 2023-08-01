import {Difficulty, nextStep, settings} from './app.js';

const initDifficultyStep = function () {
    console.log('Done loading Difficulty step.')
    $('#easy-diff-btn').on('click', nextStep)
    $('#hard-diff-btn').on('click', nextStep)

    settings['difficulty'] = Difficulty.Easy;
    localStorage.setItem('settings', JSON.stringify(settings));
    console.log(settings);
}

export {initDifficultyStep};

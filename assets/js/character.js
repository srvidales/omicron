import {nextStep} from './app.js';

const initCharacterStep = function () {
    console.log('Done loading Character step.')
    $('#character-div #continue-btn').on('click', nextStep)
}

export {initCharacterStep}

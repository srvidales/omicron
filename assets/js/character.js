import {settings, nextStep} from './app.js';

const initCharacterStep = function () {
    console.log('Done loading Character step.')
    $('#character-div #continue-btn').on('click', nextStep)

    settings['character'] = 1;
    console.log(settings);
}

export {initCharacterStep}

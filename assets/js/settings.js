import {nextStep} from './app.js';

const initSettingsStep = function () {
    console.log('Done loading Settings step.')
    $('#settings-div #continue-btn').on('click', nextStep)
}

export {initSettingsStep};

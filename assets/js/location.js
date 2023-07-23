import {nextStep} from './app.js';

const initLocationsStep = function () {
    console.log('Done loading Location step.')
    $('#location-div #continue-btn').on('click', nextStep)
}

export {initLocationsStep};

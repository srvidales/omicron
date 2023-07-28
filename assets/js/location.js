import {nextStep, settings} from './app.js';

const initLocationsStep = function () {
    console.log('Done loading Location step.')
    $('#location-div #continue-btn').on('click', nextStep)

    settings['location'] = 1;
    console.log(settings);
}

export {initLocationsStep};

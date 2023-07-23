import {nextStep} from './app.js';

const initUniverseStep = function () {
    console.log('Done loading Universe step.')
    $('#universe-div #continue-btn').on('click', nextStep)
}

export {initUniverseStep};

import {nextStep} from './app.js';

const initFinaleStep = function () {
    console.log('Done loading Finale step.')
    $('#finale-div #continue-btn').on('click', nextStep)
}

export {initFinaleStep};

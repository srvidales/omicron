import { nextStep } from './app.js';
const initPlaythroughStep = function () {
    console.log('Done loading Playthrough step.')
    $('#playthrough-div #choice-1').on('click', handleChoice)
    $('#playthrough-div #choice-2').on('click', handleChoice)
}

const handleChoice = function () {
    console.log('Choice made.')
    nextStep()
}

export {initPlaythroughStep};

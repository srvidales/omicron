import { nextStep } from './app.js';

const initLoadStoryStep = function () {
    console.log('Done loading Load Story step.')
    $('#new-story-btn').on('click', nextStep);
    $('#load-story-btn').on('click', nextStep);

}

export { initLoadStoryStep };

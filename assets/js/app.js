import * as intro from './intro.js';
import * as loadStory from './loadstory.js';
import * as character from './character.js';
import * as location from './location.js';
import * as path from './path.js';
import * as playthrough from './playthrough.js';

const steps = ['intro', 'path', 'character', 'location', 'playthrough'];
const modules = [intro, path, character, location, playthrough];

const Path = {
    Light: 'light',
    Dark: 'dark',
};

let currentStep = 0;

let settings;

const nextStep = function () {
    console.log('Before switch: ', steps[currentStep])
    const bannerImg = $('#banner-img');
    const navItems = $('nav ul').children();

    navItems[currentStep].classList.toggle('is-active')

    let div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    if (currentStep < steps.length - 1) {
        currentStep++
    } else {
        currentStep = 0;
    }

    console.log('After switch: ', steps[currentStep])
    navItems[currentStep].classList.toggle('is-active')

    bannerImg.attr('src', `assets/img/banner/${steps[currentStep]}-banner.png`)
    div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');

    if (typeof modules[currentStep].doStep === 'function') {
        modules[currentStep].doStep()
    }

}

const goToStep = function (index) {
    const bannerImg = $('#banner-img');
    const navItems = $('nav ul').children();

    let div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    navItems[currentStep].classList.toggle('is-active')

    currentStep = index;

    bannerImg.attr('src', `assets/img/banner/${steps[currentStep]}-banner.png`)
    div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    navItems[currentStep].classList.toggle('is-active')

    if (typeof modules[currentStep].doStep === 'function') {
        modules[currentStep].doStep()
    }
}

const loadSettings = function() {
    settings = JSON.parse(localStorage.getItem('settings'));
}

const initSettings = function() {
    settings = { character: { path: null, name: null }, location: { name: null } };
}

$(function () {

    let currentStep = 0;

    const loadAllSteps = function () {
        $('#intro-div').load('assets/html/intro.html', intro.initIntroStep)
        $('#loadstory-div').load('assets/html/loadstory.html', loadStory.initLoadStoryStep)
        $('#path-div').load('assets/html/path.html', path.initPathStep)
        $('#character-div').load('assets/html/character.html', character.initCharacterStep)
        $('#location-div').load('assets/html/location.html', location.initLocationsStep)
        $('#playthrough-div').load('assets/html/playthrough.html', playthrough.initPlaythroughStep)
    }

    const startApp = function () {
        console.log('loadAllSteps')
        loadAllSteps()
    }

    loadSettings();

    if (settings == null) {
        initSettings();
        localStorage.setItem('settings', JSON.stringify(settings));
    }

    startApp();
})

export {Path, settings, currentStep, nextStep, goToStep, initSettings, loadSettings};

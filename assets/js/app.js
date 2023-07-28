import * as intro from './intro.js';
import * as difficulty from './difficulty.js';
import * as character from './character.js';
import * as location from './location.js';
import * as path from './path.js';
import * as playthrough from './playthrough.js';
import * as finale from './finale.js';

// Step 1 - Introduction
// Step 2 - Select story difficulty
// Step 3 - Select your character out of a predefined set of characters
// Step 4 - Select your location out of a predefined set of locations
// Step 5 - Select your path (light/dark)
// Step 6 - Playthrough generated story
// Step 7 - Finale (Success/Failure)

const steps = ['intro', 'difficulty', 'character',
    'location', 'path', 'playthrough', 'finale'];

const Difficulty = {
    Easy: 'easy',
    Hard: 'hard',
};

const Path = {
    Light: 'light',
    Dark: 'dark',
};

class StoryNode {
    constructor(data) {
        this.data = {
            storyFragment: data.storyFragment,
            leftChoice: data.leftChoice,
            rightChoice: data.rightChoice
        };
        this.leftNode = null;
        this.rightNode = null;
    }
}

// const story = {
//     fragment1: {
//         text: "story fragment",
//         choices: [
//             {
//                 text: "choice A text",
//                 goto: 1,
//             }, {
//                 text: "Choice B text",
//                 goto: 2,
//             }
//         ]
//     },
// }

const story = {
    fragment1: {
        text: "As the Millennium Falcon glides through space, Han Solo receives a distress signal from an unknown planet. Do you:\n\n1. Investigate the distress signal, hoping for a potential reward.\n2. Ignore the signal and continue on your original course.",
        choices: [
            {
                text: "Investigate the distress signal, hoping for a potential reward.",
                goto: "fragment2",
            }, {
                text: "Ignore the signal and continue on your original course.",
                goto: "failure1",
            }
        ]
    },
    fragment2: {
        text: "Upon landing on the mysterious planet, you encounter a group of hostile scavengers. Do you:\n\n1. Use diplomacy to negotiate with the scavengers.\n2. Draw your blaster and fight your way out.",
        choices: [
            {
                text: "Use diplomacy to negotiate with the scavengers.",
                goto: "fragment3",
            }, {
                text: "Draw your blaster and fight your way out.",
                goto: "fragment4",
            }
        ]
    },
    fragment3: {
        text: "Your diplomacy skills pay off, and the scavengers agree to talk. They warn you about a nearby cave where an ancient artifact is hidden. Do you:\n\n1. Take the artifact and sell it to the highest bidder.\n2. Leave the artifact and continue your journey.",
        choices: [
            {
                text: "Take the artifact and sell it to the highest bidder.",
                goto: "success1",
            }, {
                text: "Leave the artifact and continue your journey.",
                goto: "fragment5",
            }
        ]
    },
    fragment4: {
        text: "You draw your blaster and engage in a fierce battle with the scavengers. After defeating them, you decide to:\n\n1. Take the scavenger's loot and search for more valuable items.\n2. Leave the planet immediately to avoid further trouble.",
        choices: [
            {
                text: "Take the scavenger's loot and search for more valuable items.",
                goto: "success2",
            }, {
                text: "Leave the planet immediately to avoid further trouble.",
                goto: "fragment5",
            }
        ]
    },
    fragment5: {
        text: "While traveling to a nearby spaceport, you receive an urgent transmission from Princess Leia. She needs your help to retrieve important Rebel information. Do you:\n\n1. Answer the call and assist Princess Leia with her mission.\n2. Ignore the call and avoid any potential trouble.",
        choices: [
            {
                text: "Answer the call and assist Princess Leia with her mission.",
                goto: "fragment6",
            }, {
                text: "Ignore the call and avoid any potential trouble.",
                goto: "failure2",
            }
        ]
    },
    fragment6: {
        text: "Princess Leia informs you about a high-stakes sabacc game on the nearby planet. She believes important intel is at stake. Do you:\n\n1. Join the game to win big credits.\n2. Decline the offer and remain focused on your original mission.",
        choices: [
            {
                text: "Join the game to win big credits.",
                goto: "fragment7",
            }, {
                text: "Decline the offer and remain focused on your original mission.",
                goto: "fragment8",
            }
        ]
    },
    fragment7: {
        text: "During the sabacc game, you suspect foul play from one of the players. Do you:\n\n1. Confront the suspicious player openly.\n2. Investigate discreetly to gather evidence first.",
        choices: [
            {
                text: "Confront the suspicious player openly.",
                goto: "fragment9",
            }, {
                text: "Investigate discreetly to gather evidence first.",
                goto: "fragment10",
            }
        ]
    },
    fragment8: {
        text: "You choose to focus on your mission, but the nagging feeling of missing out on the sabacc game lingers. You continue your journey to:\n\n1. A nearby Rebel outpost to gather intelligence.\n2. A notorious smuggler's den to find information about a valuable artifact.",
        choices: [
            {
                text: "A nearby Rebel outpost to gather intelligence.",
                goto: "fragment11",
            }, {
                text: "A notorious smuggler's den to find information about a valuable artifact.",
                goto: "fragment12",
            }
        ]
    },
    fragment9: {
        text: "Your confrontation at the sabacc table draws attention, and a heated dispute ensues. As tensions rise, you decide to:\n\n1. Settle the dispute with a thrilling sabacc duel.\n2. Expose the cheater to the other players and let them decide his fate.",
        choices: [
            {
                text: "Settle the dispute with a thrilling sabacc duel.",
                goto: "success3",
            }, {
                text: "Expose the cheater to the other players and let them decide his fate.",
                goto: "fragment13",
            }
        ]
    },
    fragment10: {
        text: "You discreetly gather evidence and expose the cheater at the sabacc table. The other players applaud your fair play. Now you must decide:\n\n1. Return to your original mission.\n2. Stay and enjoy the game, hoping for more lucrative opportunities.",
        choices: [
            {
                text: "Return to your original mission.",
                goto: "fragment5",
            }, {
                text: "Stay and enjoy the game, hoping for more lucrative opportunities.",
                goto: "success4",
            }
        ]
    },
    fragment11: {
        text: "While at the Rebel outpost, you receive intelligence about a secret Imperial weapon being developed nearby. Do you:\n\n1. Lead a daring mission to destroy the weapon.\n2. Leave the mission to the Rebel forces.",
        choices: [
            {
                text: "Lead a daring mission to destroy the weapon.",
                goto: "success5",
            }, {
                text: "Leave the mission to the Rebel forces.",
                goto: "fragment14",
            }
        ]
    },
    fragment12: {
        text: "At the smuggler's den, you encounter an old rival from your smuggling days. Do you:\n\n1. Settle the score with a thrilling dogfight.\n2. Put aside past grudges and try to negotiate a truce.",
        choices: [
            {
                text: "Settle the score with a thrilling dogfight.",
                goto: "success6",
            }, {
                text: "Put aside past grudges and try to negotiate a truce.",
                goto: "fragment15",
            }
        ]
    },
    fragment13: {
        text: "Exposing the cheater gains you the trust of the other players. They offer you a chance to join their smuggling operation. Do you:\n\n1. Accept the offer and become a partner in their lucrative enterprise.\n2. Politely decline the offer and continue on your journey.",
        choices: [
            {
                text: "Accept the offer and become a partner in their lucrative enterprise.",
                goto: "success7",
            }, {
                text:




let data = {
    storyFragment: "Once upon a time...",
    leftChoice: "Go left",
    rightChoice: "Go right",
};

const root = new StoryNode(data);
console.log(root);

let currentStep = 0;

let settings = {};

const nextStep = function () {
    console.log(currentStep)
    const bannerImg = $('#banner-img');

    let div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
    if (currentStep < steps.length - 1) {
        currentStep++
    } else {
        currentStep = 0;
    }
    bannerImg.attr('src', `/assets/img/banner/${steps[currentStep]}-banner.png`)
    div = `#${steps[currentStep]}-div`
    $(div).toggleClass('is-hidden');
}

$(function () {

    const steps = ['intro', 'universe', 'characters',
        'locations', 'settings', 'playthrough', 'finale', 'score']

    let currentStep = 0;

    const loadAllSteps = function () {
        $('#intro-div').load('./assets/html/intro.html', intro.initIntroStep)
        $('#difficulty-div').load('./assets/html/difficulty.html', difficulty.initDifficultyStep)
        $('#character-div').load('./assets/html/character.html', character.initCharacterStep)
        $('#location-div').load('./assets/html/location.html', location.initLocationsStep)
        $('#path-div').load('./assets/html/path.html', path.initPathStep)
        $('#playthrough-div').load('./assets/html/playthrough.html', playthrough.initPlaythroughStep)
        $('#finale-div').load('./assets/html/finale.html', finale.initFinaleStep)
    }

    const startApp = function () {
        console.log('loadAllSteps')
        loadAllSteps()
    }

    startApp();
})

export {Difficulty, Path, settings, currentStep, nextStep};

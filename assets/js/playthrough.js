import {initSettings, loadSettings, nextStep, settings} from './app.js';

let chat;

const initPlaythroughStep = function () {
    console.log('Done loading Playthrough step.')
    $('#returntointro-btn').on('click', returnButtonHandler)
}

const doStep = function () {
    const modal = $('#main-modal');
    $('#modal-txt').text('Loading chapter titles...');
    modal.toggle('is-active');

    console.log(settings)

    if (localStorage.getItem('debug') != null) {
        settings.character.name = 'Luke Skywalker';
        settings.location.name = 'Tatooine';
    }

    chat = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": "Pretend you are a sci-fi writer. " +
                    "Generate 10 chapter names for a Star Wars novel with " + settings.character.name +
                    " as the main protagonist. Include " + settings.location.name + " as one of the locations. " +
                    "Add 5 light-side supporting characters. " +
                    "Add 5 dark-side supporting characters." +
                    "Return chapter names array using JSON using key 'chapterNames'."
            }
        ],
        "temperature": 0.7
    };

    talk().then(function (data) {
        const message = data.choices[0].message
        console.log('message.content', message.content);
        const chapterNames = JSON.parse(message.content);
        chat.messages.push(message);
        console.log('data', data);
        console.log(chapterNames);
        addChapterButtons(chapterNames);
        modal.toggle('is-active');
    })

}

const returnButtonHandler = function () {
    console.log('Clear and restart.');
    const div = $('#chapter-buttons-div');
    div.empty();
    const titleHeading = $('#title-heading');
    titleHeading.text('Click chapter button.');
    const storyTextArea = $('#title-paragraph');
    storyTextArea.text('');
    initSettings();
    localStorage.setItem('settings', JSON.stringify(settings));
    nextStep();
}

const talk = async function () {
    const url = 'https://openai.inoutport.com/v1/chat/completions';
    const chatString = JSON.stringify(chat);
    console.log(chatString);
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: chatString,
    });
    return response.json();
}

const clickEventHandler = function (event) {
    const loadingText = 'Loading chapter data...';
    console.log(event.target);

    const modal = $('#main-modal');
    $('#modal-txt').text(loadingText);
    const titleHeading = $('#title-heading');
    titleHeading.text(loadingText);
    modal.toggle('is-active');

    event.target.disabled = true;
    const storyTextArea = $('#title-paragraph');
    storyTextArea.text('Loading...');
    const index = event.target.id.split('-')[1];
    chat.messages.push(
        {
            "role": "user",
            "content": "Write chapter " + index + ". Don't summarize chapter at the end. Return prose. " +
                "Don't add chapter number and title to the output."
        }
    );
    talk().then(function (data) {
        console.log(data);
        titleHeading.text(event.target.textContent);
        const content = data.choices[0].message.content
            .replace(/\n/g, '<br />');
        console.log(content);
        storyTextArea.html(content)
        event.target.disabled = false;
        chat.messages.pop();
        console.log(chat);
        modal.toggle('is-active');
    });

}

const addChapterButtons = function (content) {
    const div = $('#chapter-buttons-div');
    const chapterNames = content.chapterNames;

    for (let i = 0; i < chapterNames.length; i++) {
        const button = $(`<button class="chapter-btn button is-light" id="chapter-${i + 1}">${chapterNames[i]}</button>`);
        div.append(button);
        button.on('click', clickEventHandler);
    }

}

export {initPlaythroughStep, doStep};

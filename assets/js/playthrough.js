import {nextStep, settings} from './app.js';

let chat;

const initPlaythroughStep = function () {
    console.log('Done loading Playthrough step.')
    $('#playthrough-div #choice-1').on('click', handleChoice)
    $('#playthrough-div #choice-2').on('click', handleChoice)
}

const doWork = function () {
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
                "content": "Generate 10 chapter names for a Star Wars novel with " + settings.character.name +
                    " as the main protagonist. Include " + settings.location.name + " as one of the locations. " +
                    "Return chapterNames array using JSON."
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
    })
}

const handleChoice = function () {
    console.log('Choice made.')
    nextStep()
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
    console.log(event.target);
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
        const content = data.choices[0].message.content
            .replace(/\n/g, '<br />');
        console.log(content);
        storyTextArea.html(content)
        event.target.disabled = false;
        chat.messages.pop();
        console.log(chat);
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

export {initPlaythroughStep, doWork};

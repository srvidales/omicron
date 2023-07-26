import {nextStep} from './app.js';

const initCharacterStep = function () {
    console.log('Done loading Character step.')
    $('#character-div #continue-btn').on('click', nextStep)

    var randomCharacterBtn = document.getElementById("add-character-btn");
    randomCharacterBtn.addEventListener('click',genRandomCharacter);
}


var nextbtn = document.getElementById("continue-btn");

function genRandomCharacter(){
    var number = ['1','2','3','4','5','6','7','8','9','10'];
    var ranNumber = number[Math.floor(Math.random() *number.length)];
    console.log(ranNumber)

    var requestUrl ='https://swapi.dev/api/people/'+ ranNumber;
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)

    })

};


export {initCharacterStep}

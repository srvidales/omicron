import {nextStep} from './app.js';

const initCharacterStep = function () {
    console.log('Done loading Character step.')
    $('#character-div #continue-btn').on('click', nextStep)
}

export {initCharacterStep}

var randomCharacterBtn = document.getElementById("add-character-btn");
var nextbtn = document.getElementById("continue-btn");
console.log(randomCharacterBtn);

function genRandomCharacter(){
    var number = ['1','2','3','4','5','6','7','8','9','10'];
    var ranNumber = number[Math.floor(Math.random() *number.length)];
     
    
    var requestUrl ='https://swapi.dev/api/people/'+ ranNumber;
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)

    })
    
};

randomCharacterBtn.addEventListener('click',genRandomCharacter);
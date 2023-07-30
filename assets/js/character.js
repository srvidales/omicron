import { nextStep } from "./app.js";

const initCharacterStep = function () {
  console.log("Done loading Character step.");
  $("#character-div #continue-btn").on("click", nextStep);

  var randomCharacterBtn = document.getElementById("add-character-btn");
  randomCharacterBtn.addEventListener("click", genRandomCharacter);
};

// var homeWorldLink;
// var birthPlace;
// var eyeColor;
// var gender;
// var hairColor;
// var height;

async function genRandomCharacter() {
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var ranNumber = number[Math.floor(Math.random() * number.length)];
  console.log(ranNumber);

  var homeWorldLink;
  var name;
  var birthPlace;
  var eyeColor;
  var gender;
  var hairColor;
  var height;
  var characterDataArray = [];

  var requestUrl = "https://swapi.dev/api/people/" + ranNumber;
  let response = await fetch(requestUrl);
  let data = await response.json();
  homeWorldLink = data.homeworld;
  name = data.name;
  eyeColor = data.eye_color;
  gender = data.gender;
  hairColor = data.hair_color;
  height = data.height;
  console.log(name);
  console.log(eyeColor);
  console.log(gender);
  console.log(hairColor);
  console.log(height);

  characterDataArray.push(name);
  characterDataArray.push(eyeColor);
  characterDataArray.push(gender);
  characterDataArray.push(hairColor);
  characterDataArray.push(height);

  var names = document.getElementById("name");
  names.textContent = characterDataArray[0];
  var eyes = document.getElementById("eyeColor");
  eyes.textContent = characterDataArray[1];
  var genders = document.getElementById("gender");
  genders.textContent = characterDataArray[2];
  var hair = document.getElementById("hairColor");
  hair.textContent = characterDataArray[3];
  var heights = document.getElementById("height");
  heights.textContent = characterDataArray[4];

  async function fetchHomeWorld() {
    console.log(homeWorldLink);
    let response = await fetch(homeWorldLink);
    let data = await response.json();
    console.log(data);
    birthPlace = data.name;
    console.log(birthPlace);

    characterDataArray.push(birthPlace);

    var placeOfBirth = document.getElementById("birthPlace");
    placeOfBirth.textContent = characterDataArray[5];
  }

  fetchHomeWorld();
}

// async function fetchHomeWorld() {
//   console.log(homeWorldLink);
//   let response = await fetch(homeWorldLink);
//   let data = await response.json();
//   console.log(data);
//   birthPlace = data.name;
//   console.log(birthPlace);
//   return data;
// }

export { initCharacterStep };

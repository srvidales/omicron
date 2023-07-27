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
var birthPlace;
var eyeColor;
var gender;
var hairColor;
var height;

  var requestUrl = "https://swapi.dev/api/people/" + ranNumber;
  let response = await fetch(requestUrl);
  let data = await response.json();
  homeWorldLink = data.homeworld;
  eyeColor = data.eye_color;
  gender = data.gender;
  hairColor = data.hair_color;
  height = data.height;
  console.log(eyeColor);
  console.log(data);
  console.log(gender);
  console.log(hairColor);
  console.log(height);

  async function fetchHomeWorld() {
    console.log(homeWorldLink);
    let response = await fetch(homeWorldLink);
    let data = await response.json();
    console.log(data);
    birthPlace = data.name;
    console.log(birthPlace);
  
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

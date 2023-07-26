import { nextStep } from "./app.js";

const initCharacterStep = function () {
  console.log("Done loading Character step.");
  $("#character-div #continue-btn").on("click", nextStep);

  var randomCharacterBtn = document.getElementById("add-character-btn");
  randomCharacterBtn.addEventListener("click", genRandomCharacter);
};

var nextbtn = document.getElementById("continue-btn");
var homeWorldLink;
var speciesLink;
var birthPlace
var speciesType

async function genRandomCharacter() {
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var ranNumber = number[Math.floor(Math.random() * number.length)];
  console.log(ranNumber);

  var requestUrl = "https://swapi.dev/api/people/" + ranNumber;
  let response = await fetch(requestUrl)
  let data = await response.json();  
      homeWorldLink = data.homeworld;
      speciesLink = data.species;
      console.log(data);
      fetchHomeWorld();
      fetchCharacterSpecies();

};
async function fetchHomeWorld() {
  console.log(homeWorldLink);
  let response = await fetch(homeWorldLink);
  let data = await response.json();
  console.log(data);
  birthPlace = data.name;
  console.log(birthPlace);
  return data;
}
async function fetchCharacterSpecies() {
  console.log(speciesLink);
  let response = await fetch(speciesLink);
  let data = await response.json();
  console.log(data);
  speciesType = data.name;
  console.log(speciesType);
  return data;
}

export { initCharacterStep };

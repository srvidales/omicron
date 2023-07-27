import { nextStep } from "./app.js";

const initLocationsStep = function () {
  console.log("Done loading Location step.");
  $("#location-div #continue-btn").on("click", nextStep);

  var addLocationBtn = document.getElementById("add-btn");
  addLocationBtn.addEventListener("click", getLocation);
};

async function getLocation() {
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var ranNumber = number[Math.floor(Math.random() * number.length)];
  console.log(ranNumber);
  var climate;
  var diameter;
  var terrain;

  var requestUrl = "https://swapi.dev/api/planets/" + ranNumber;
  let response = await fetch(requestUrl);
  let data = await response.json();
  console.log(data);
  climate = data.climate;
  console.log(climate);
  diameter = data.diameter;
  console.log(diameter);
  terrain = data.terrain;
  console.log(terrain);
}

export { initLocationsStep };

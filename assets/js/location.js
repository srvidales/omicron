import {nextStep, settings} from "./app.js";

const initLocationsStep = function () {
  console.log("Done loading Location step.");
  $("#location-div #continue-btn").on("click", nextStep);

  var addLocationBtn = document.getElementById("add-btn");
  addLocationBtn.addEventListener("click", getLocation);


};

const doStep = function() {
  getLocation();
}


async function getLocation() {
  const modal = $('#main-modal');
  $('#modal-txt').text('Loading location data...');
  modal.toggle('is-active');

  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var ranNumber = number[Math.floor(Math.random() * number.length)];
  console.log(ranNumber);
  var name;
  var climate;
  var diameter;
  var terrain;
  var population;
  var rotation;

  var locationArray = [];

  var requestUrl = "https://swapi.dev/api/planets/" + ranNumber;
  let response = await fetch(requestUrl);
  let data = await response.json();

  console.log(data);
  name = data.name;
  settings['location']['name'] = name;
  climate = data.climate;
  console.log(climate);
  diameter = data.diameter;
  console.log(diameter);
  terrain = data.terrain;
  console.log(terrain);
  population = data.population;
  console.log(population);
  rotation = data.rotation_period;

  locationArray.push(name);
  locationArray.push(climate);
  locationArray.push(diameter);
  locationArray.push(terrain);
  locationArray.push(population);
  locationArray.push(rotation);

  var names = document.getElementById("txt-planetname");
  names.textContent = locationArray[0];
  var climates = document.getElementById("txt-climate");
  climates.textContent = locationArray[1];
  var diameters = document.getElementById("txt-diameter");
  diameters.textContent = locationArray[2];
  var terrains = document.getElementById("txt-terrain");
  terrains.textContent = locationArray[3];
  var populations = document.getElementById("txt-pop");
  populations.textContent = locationArray[4];
  var rotations = document.getElementById("txt-rotation");
  rotations.textContent = locationArray[5];

  modal.toggle('is-active');
}



export { initLocationsStep, doStep };

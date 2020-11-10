//https://codepen.io/codifiedconcepts/pen/bwgxRq
let isTwelveHour = false;

let wakeUpStartTime = 7;
let wakeUpEndTime = 8;
let lunchStartTime = 12;
let lunchEndTime = 13;
let bedStartTime = 21;
let bedEndTime = 22;
let randomTime = false;

//Sets the analog clock to the current time
function showCurrentTime() {
  let clock = document.getElementById("clock");
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let meridiem = "";

  //Format hours for 12-hour format
  if (isTwelveHour && hours < 12) meridiem = "AM";
  else if (isTwelveHour && hours >= 12) {
    meridiem = "PM";

    if (hours > 12) hours -= 12;
  }

  //Format hours
  if (hours < 10) hours = "0" + hours;
  //Format minutes
  if (minutes < 10) minutes = "0" + minutes;
  //Format seconds
  if (seconds < 10) seconds = "0" + seconds;

  let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  clock.innerHTML = clockTime;
}

//Updates the picture according to time and alarms
function updateClock() {
  let time = new Date().getHours();
  let message;
  let image;

  let timeEvent = document.getElementById("timeEvent");
  let imageDisplay = document.getElementById("imageDisplay");

  if (!randomTime) {
    if (time >= wakeUpStartTime && time < wakeUpEndTime) {
      image =
        "https://media.gettyimages.com/photos/green-rice-fild-with-evening-sky-picture-id516180836?s=2048x2048";
      message = "Good morning, sunshine!";
    } else if (time >= lunchStartTime && time < lunchEndTime) {
      image =
        "https://media.gettyimages.com/photos/ready-to-eat-picture-id1045891932?s=2048x2048";
      message = "Break time: let's eat!";
    } else if (time >= bedStartTime && time < bedEndTime) {
      image =
        "https://media.gettyimages.com/photos/milky-way-and-starry-sky-scene-south-china-picture-id1164815367?s=2048x2048";
      message = "Have a good night's rest!";
    } else {
      image =
        "https://media.gettyimages.com/photos/man-holding-crate-ob-fresh-vegetables-picture-id870915532?s=2048x2048";
      message = "Keep on working! You got this!";
    }
    timeEvent.innerHTML = message;
    imageDisplay.src = image;
  }

  showCurrentTime();
}
updateClock();

//Update clock each second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Get a random image for the random button
function getRandomImage() {
  const randomImageCount = 5;
  let image;
  switch (Math.floor(Math.random(randomImageCount) * (randomImageCount + 1))) {
    default:
    case 0:
      image =
        "https://media.gettyimages.com/photos/kitten-picture-id157393291?s=2048x2048";
      break;
    case 1:
      image =
        "https://media.gettyimages.com/photos/cuban-musician-playing-trumpet-havana-cuba-picture-id621986494?s=2048x2048";
      break;
    case 2:
      image =
        "https://media.gettyimages.com/photos/three-girls-playing-game-man-do-not-angry-close-up-picture-id860571826?s=2048x2048";
      break;
    case 3:
      image =
        "https://media.gettyimages.com/photos/dog-swimming-picture-id515685369?s=2048x2048";
      break;
    case randomImageCount - 1:
      image =
        "https://media.gettyimages.com/photos/camping-in-a-tent-under-the-stars-and-milky-way-galaxy-picture-id904960682?s=2048x2048";
      break;
  }
  return image;
}

//Random button functionality
let randomButton = document.getElementById("randomButton");

function randomEvent() {
  if (randomTime) randomTime = false;
  else {
    randomTime = true;
    let image = getRandomImage();
    let message = "RrRrRrRandom Mood!";

    document.getElementById("timeEvent").innerHTML = message;
    document.getElementById("imageDisplay").src = image;
  }
}
randomButton.addEventListener("click", randomEvent);

//Listens for selectors

//WAKE UP
let wakeUpStartSelector = document.getElementById("alarm1StartSelector");
function wakeUpStartEvent() {
  wakeUpStartTime = wakeUpStartSelector.value;
}
wakeUpStartSelector.addEventListener("change", wakeUpStartEvent);

let wakeUpEndSelector = document.getElementById("alarm1EndSelector");
function wakeUpEndEvent() {
  wakeUpEndTime = wakeUpEndSelector.value;
}
wakeUpEndSelector.addEventListener("change", wakeUpEndEvent);

//LUNCH TIME
let lunchStartSelector = document.getElementById("alarm2StartSelector");
function lunchStartEvent() {
  lunchStartTime = lunchStartSelector.value;
}
lunchStartSelector.addEventListener("change", lunchStartEvent);

let lunchEndSelector = document.getElementById("alarm2EndSelector");
function lunchEndEvent() {
  lunchEndTime = lunchEndSelector.value;
}
lunchEndSelector.addEventListener("change", lunchEndEvent);

//BED TIME
let bedStartSelector = document.getElementById("alarm3StartSelector");
function bedStartEvent() {
  bedStartTime = bedStartSelector.value;
}
bedStartSelector.addEventListener("change", bedStartEvent);

let bedEndSelector = document.getElementById("alarm3EndSelector");
function bedEndEvent() {
  bedEndTime = bedEndSelector.value;
}
bedEndSelector.addEventListener("change", bedEndEvent);

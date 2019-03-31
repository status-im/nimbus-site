var addClassToElement = require('./utils').addClassToElement;
var removeClassFromElement = require('./utils').removeClassFromElement;


/* Popups */

let community = document.querySelectorAll(".item--dropdown-community")[0]
let projects = document.querySelectorAll(".item--dropdown-projects")[0]

let popups = document.querySelectorAll(".popup-wrap")
let overlays = document.querySelectorAll(".popup-overlay")
let closeButtons = document.querySelectorAll(".popup__button--close")

let activePopup = null;
let activeOverlay = null;

community.addEventListener('click', function(event){
    showPopup(popups[0])
    event.preventDefault()
})

projects.addEventListener('click', function(event){
    showPopup(popups[1])
    event.preventDefault()
})

closeButtons.forEach((button) => {
  button.addEventListener('click', closeActivePopup)
})

overlays.forEach((overlay) => {
  overlay.addEventListener('click', closeActivePopup)
})

function showPopup(whichPopup) {
  activePopup = whichPopup
  addClassToElement(whichPopup, "popup--shown");
}

function closeActivePopup() {
  removeClassFromElement(activePopup, "popup--shown");
  activePopup = null;
}

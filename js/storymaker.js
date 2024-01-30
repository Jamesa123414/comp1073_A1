// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Pre-defined arrays for each story element
const nouns1 = ["dog", "cat", "bird"];
const verbs = ["runs", "jumps", "flies"];
const adjectives = ["happy", "sad", "bright"];
const nouns2 = ["park", "house", "forest"];
const settings = ["in the garden", "at the beach", "under the sky"];

// Variables to store selected words
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    selectedNoun1 = pickRandom(nouns1);
    document.getElementById("chosenNoun1").innerText = selectedNoun1;
}

function verb_on_click() {
    selectedVerb = pickRandom(verbs);
    document.getElementById("chosenVerb").innerText = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = pickRandom(adjectives);
    document.getElementById("chosenAdjective").innerText = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = pickRandom(nouns2);
    document.getElementById("chosenNoun2").innerText = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = pickRandom(settings);
    document.getElementById("chosenSetting").innerText = selectedSetting;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}`;
    document.getElementById("story").innerText = story;
}


// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const story = `${pickRandom(nouns1)} ${pickRandom(verbs)} ${pickRandom(adjectives)} ${pickRandom(nouns2)} ${pickRandom(settings)}`;
    document.getElementById("story").innerText = story;
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);
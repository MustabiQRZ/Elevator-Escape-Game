var room = document.getElementById("image");
var firstt = document.getElementById("firstF");
var secondd = document.getElementById("secondF");
var thirdd = document.getElementById("thirdF");
var popup = document.getElementById("popup");
var password = document.getElementById("password");
var popup1 = document.getElementById("popup1");
var thing = document.getElementById("panel");
var fine = document.getElementById("fine");
var change = document.getElementsByClassName("firstFloor");

thirdd.style.display = "none";
secondd.style.display = "none";
firstt.style.display = "none";

function oneF() {
    firstt.style.display = "block";
    thirdd.style.display = "none";
    secondd.style.display = "none";
}

function twoF() {
    secondd.style.display = "block";
    thirdd.style.display = "none";
    firstt.style.display = "none";
}

function thrF() {
    thirdd.style.display = "block";
    secondd.style.display = "none";
    firstt.style.display = "none";
}

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

function closePopupOne() {
    popup1.style.display = "none";
}

function keyShow() {
    popup1.style.display = "block";
}

function submit() {
    if (password.value == 3231) {
        alert("Correct! (Key Acquired) INFO: d00rkn0b");
        popup.style.display = "none";
    } else if (password.value == 4231) {
        alert("Correct! (Key Acquired) INFO: d00rkn0b");
        popup.style.display = "none";
    } else {
        alert("Wrong Password!");
    }
}

function submitKey() {
    if (keyInfo.value == "d00rkn0b") {
        alert("Accepted! Current time estimation: " + new Date() + "_;");
        alert("Location identification(): underway...");
        alert("Location identification(): Successful;");
        alert("Requesting unlock code...");
        alert("8591");
        popup1.style.display = "none";
    } else {
        alert("Invalid_Input;");
    }
}

function changeText() {
    thing.innerHTML = fine.value;
}

function end() {
    if (fine.value == 8591) {
        document.getElementById("openDoor").style.display = "block";
    } else {
        alert("Wrong Password-");
    }
}

function endgame() {
    alert("Congratulations! You've successfully completed all the puzzles and escaped!");
    alert("Thank you for playing! Hope you enjoyed this minigame I made! (simply reload the website to restart, or close it to end the game)");
    alert("Made by, Mustabi");
}

var container = document.querySelector("#container");

window.onload = window.onresize = resizeGame;

function resizeGame() {
    var gameRatio = container.offsetWidth / container.offsetHeight;
    var windowRatio = window.innerWidth / window.innerHeight;

    container.style.position = "absolute";
    container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

    var newScale;
    if (gameRatio > windowRatio) {
        newScale = window.innerWidth / container.offsetWidth;
    } else {
        newScale = window.innerHeight / container.offsetHeight;
    }
    container.style.transform = `scale(${newScale})`;
}
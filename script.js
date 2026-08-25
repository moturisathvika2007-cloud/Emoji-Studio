function changeMood(mood) {

    const mouth = document.querySelector(".mouth");

    if (mood === "happy") {
        mouth.innerHTML = "😊";
    }

    else if (mood === "sad") {
        mouth.innerHTML = "😢";
    }

    else if (mood === "angry") {
        mouth.innerHTML = "😡";
    }

    else if (mood === "surprised") {
        mouth.innerHTML = "😮";
    }
}

function resetEmoji() {

    const mouth = document.querySelector(".mouth");

    mouth.innerHTML = "😊";
}
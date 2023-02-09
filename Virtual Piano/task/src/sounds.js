document.addEventListener("keydown", function (keyDown) {
    if (["a", "s", "d", "f", "g", "h", "j"].includes(keyDown.key)) { // lowercase dees stuff
        const audio = new Audio(`white_keys/${keyDown.key}.mp3`);
        audio.play();
    } else if (["w", "e", "t", "y", "u"].includes(keyDown.key)) {
        const audio = new Audio(`black_keys/${keyDown.key}.mp3`);
        audio.play();
    } else {
        console.log(`Incorrect key: ${keyDown.key}`);
    }
})
let levelButton = document.getElementById("levelUp");
levelButton.addEventListener("click", () => {
    rollDice();
})

function rollDice() {
    var dice = document.createElement("img");
    var dice2 = document.createElement("img");
    var find = document.getElementById("dice");
    find.innerHTML = "";
    var random = Math.random() * 6;
    var random2 = Math.random() * 6;
    if (random < 1) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png";
        find.appendChild(dice);
    } else if (random < 2 && random >= 1) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png";
        find.appendChild(dice);
    } else if (random < 3 && random >= 2) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png";
        find.appendChild(dice);
    } else if (random < 4 && random >= 3) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png";
        find.appendChild(dice);
    } else if (random < 5 && random >= 4) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png";
        find.appendChild(dice);
    } else if (random < 6 && random >= 5) {
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png";
        find.appendChild(dice);
    }
}

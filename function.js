// okay so what i want to do is for the user to be able to select how many "levels" they want to level up, which would tell the function how many dice to roll. Then it would display that number of dice on the popup
$(document).ready(() => {
    let level_value = $("#textbox").val();

    //everything jQuery goes in here
    $(window).load(function () {
        $("#popup_trigger").click(function () {
            $('.hover_bkgr').show();
        });
        $('.hover_bkgr').click(function () {
            $('.hover_bkgr').hide();
        });
        $('.popup_close').click(function () {
            $('.hover_bkgr').hide();
        });
    });

});
//we somehow need to make the dice show up in the popup
let levelButton = document.getElementById("popup_trigger");
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

//here iis my code for the dice roller. Im putting it here cause idk if youd want to use it since its less code
let rollbutton = document.getElementById("button");
button.addEventListener("click", () => {
    rollDice(document.getElementById("textbox").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var $img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        $img1.setAttribute("src", imgs[x]);
        dice.appendChild($img1);
    }

}

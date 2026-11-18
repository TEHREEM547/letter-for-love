
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.onclick = function() {

        if (button.innerText == "AC") {
            display.innerText = "";
        }

        else if (button.innerText == "C") {
            display.innerText = display.innerText.slice(0, -1);
        }

        else if (button.innerText == "=") {
            display.innerText = eval(
                display.innerText.replace(/−/g, "-")
            );
        }

        else {
            display.innerText += button.innerText;
        }

    };

});


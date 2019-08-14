

var colors = generateRandomColors(6);

var pickedColor = pickColor();

var boxes = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');

colorDisplay.textContent = pickedColor;


for(var i=0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    
    boxes[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color) {
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        //loop through and generate a random color to add to the array.
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
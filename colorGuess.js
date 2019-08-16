
numOfboxes = 6;
var colors = generateRandomColors(numOfboxes);

var pickedColor = pickColor();

var boxes = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1Display = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener('click', function() {
    numOfboxes = 3;
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    colors = generateRandomColors(numOfboxes);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < boxes.length; i++) {
        if(colors[i]) {
            boxes[i].style.backgroundColor = colors[i];
        }
        else {
            boxes[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function() {
    numOfboxes = 6;
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    colors = generateRandomColors(numOfboxes);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].style.display = 'block';
    }
});

resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numOfboxes);
    pickedColor = pickColor();
    resetButton.textContent = 'New Colors';
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i];
    }
    h1Display.style.background = 'steelblue'
});

colorDisplay.textContent = pickedColor;

for(var i=0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    
    boxes[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1Display.style.backgroundColor = clickedColor;
            resetButton.textContent = 'Try Again?'
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
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
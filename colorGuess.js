

var colors = ['rgb(255, 0, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 255, 255)',
                'rgb(0, 0, 255)',
                'rgb(255, 0, 255)'
];

var pickedColor = colors[3];

var boxes = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;


for(var i=0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    
    boxes[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            alert('Correct');
        }
        else {
            alert('Wrong color!');
        }
    });
}



var colors = ['rgb(255, 0, 0)',
                'rgb(255, 255, 0)',
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 255, 255)',
                'rgb(255, 0, 255)'
];

var boxes = document.querySelectorAll('div');

for(var i=0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.backgroundColor = colors[i];
}
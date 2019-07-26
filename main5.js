// simple paint 

// setup the canvas and the graphics context 
let cnv = document.getElementById('myCanvas');
let ctx = cnv. getContext("2d");
cnv.width = 1100;
cnv.height = 700;

//global variables
mouseIsPressed = false;
let mouseX, mouseY, pmouseX , pmouseY;
let size = 5;
let penColor = "black";

// main program loop 
requestAnimationFrame(loop);

function loop() {
    //update variables


    // draw a line if mouse is pressed & held 
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
    
    requestAnimationFrame(loop);
    
}


// document event stuff 
document.addEventListener('mousedown', mousedownHandler);
document.addEventListener('mouseup', mouseupHandler);
document.addEventListener('mousemove', mousemoveHandler);
document.addEventListener('keydown', keydownHandler);

function mousedownHandler () {
    mouseIsPressed = true; 
}

function mouseupHandler () {
    mouseIsPressed = false; 
}

function mousemoveHandler (event) {
    // save previous mouse x and y 
    pmouseX = mouseX;
    pmouseY = mouseY;

    //update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    
}

function keydownHandler (event) {
    console.log(event.code)
    if(event.code == "Space") {
        //draw a background 
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);

    } else if (event.code =="ArrowUp") {
        size++;

    } else if (event.code =="ArrowDown") {
        size--;
    }
}

// color events 
document.getElementById('red').addEventListener('click', red);
document.getElementById('yellow').addEventListener('click', yellow);
document.getElementById('blue').addEventListener('click', blue);
document.getElementById('colorPicker').addEventListener('change', changeColor);

function red () {
    penColor = "red";
}

function blue () {
    penColor = "blue";
}

function yellow () {
    penColor = "yellow";
}

function changeColor () {
    penColor = document.getElementById('colorPicker').value;
}
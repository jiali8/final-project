// bird game 

//global variables 
var myGamePiece;
var myGamePiece2;
var myObstacles = [];
var myScore;
var mySound;
var myBackground;

let p1up; 
let p1down;
let p2up;
let p2down;

let p2move;




function startGame() {
    myGamePiece = new component(50, 50, "imagesBird/bird9.webp", 10, 350,"image");
    myGamePiece2 = new component(50, 50, "imagesBird/bird10.png", 10, 200,"image");
    myScore = new component("30px", "Consolas", "black", 800, 40, "text");
    myBackground = new component (1000,600, "imagesBird/sky5complete.jpg", 0, 0, "background")
    mySound = new sound("imagesBird/blop.mp3");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
          window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0; 
    this.x = x;
    this.y = y; 
    
    //bacgkround & image
    this.update = function() {
      ctx = myGameArea.context;
      if (type == "image" || type == "background") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        if (type == "background") {
          ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
      } else if (this.type == "text") {
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
   
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }

    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
            this.x = 0;
            }
        }
    } 

    //crashing
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    //stop game if crashed
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        // if (myGamePiece.crashWith(myObstacles[i]) || myGamePiece2.crashWith(myObstacles[i])) {
        //     mySound.play();
        //     myGameArea.stop();
        //     document.getElementById("main").innerHTML = "Game Over :("
        //     return;
        // } 
    }

    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0; 
    
    myGamePiece2.speedX = 0;
    myGamePiece2.speedY = 0; 

    //arrow keys as game controls to move gamepiece 1
    if (myGameArea.key == 68) {
        p1up = true; 
    }
    if (p1up == true) {
        myGamePiece.speedX = 5;
    }

    if (myGameArea.key == 39) {
        p2move = true;
    }
    if (p2move == true) {
        myGamePiece2.speedX = 5;
    }

    //if (myGameArea.key == 65) {
    //     myGamePiece.speedX = -5;
    // }
    // if (myGameArea.key == 68) {
    //     myGamePiece.speedX = 5; 
    // }
    // if (myGameArea.key == 87) {
    //     myGamePiece.speedY = -5; 
    // }
    // if (myGameArea.key == 83) {
    //     myGamePiece.speedY = 5; 
    // }


    // w,a,s,d keys as game controls to move gamepiece 2
    myGamePiece2.speedX = 0;
    myGamePiece2.speedY = 0; 
    // if (myGameArea.key == 37) {
    //     myGamePiece2.speedX = -5; 
    // }
    // if (myGameArea.key == 39) {
    //     myGamePiece2.speedX = 5;
    // }
    // if (myGameArea.key == 38) {
    //     myGamePiece2.speedY = -5; 
    // }
    // if (myGameArea.key == 40) {
    //     myGamePiece2.speedY = 5; 
    // }

    //moving & looping background
    myBackground.speedX = -1;
    myBackground.newPos();
    myBackground.update();
    myGameArea.frameNo += 1;

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 500;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 80;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(20, height, "white", x, 0));
        myObstacles.push(new component(20, x - height - gap, "white", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 5
        myObstacles[i].update();
    }

    //display score
    myScore.text = "SCORE:" + myGameArea.frameNo;
    myScore.update();

    myGamePiece.newPos();
    myGamePiece.update();
    myGamePiece2.newPos();
    myGamePiece2.update();
}

//play sound if crashed
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

// Dice Game
'use strict';

// global variables
let money = 0; 
let wood = 0; 
let nails = 0; 
let tape = 0;
let saw = 0;
let wire = 0; 
let roofing = 0;
let hammer = 0; 
let drill = 0;
let numHouses = 0;

// event listeners
//jobs
document.getElementById('mowLawn-btn').addEventListener('click', mowLawn);
document.getElementById('shovel-btn').addEventListener('click', shovelDriveway);
document.getElementById('sale-btn').addEventListener('click', garageSale); 
document.getElementById('getJob-btn').addEventListener('click', getJob);

//purchase 
document.getElementById('wood').addEventListener('click', buyWood);
document.getElementById('nail').addEventListener('click', buyNail);
document.getElementById('tape').addEventListener('click', buyTape);
document.getElementById('saw').addEventListener('click', buySaw);
document.getElementById('wire').addEventListener('click', buyWire);
document.getElementById('roofing').addEventListener('click', buyRoofing);
document.getElementById('hammer').addEventListener('click', buyHammer);
document.getElementById('drill').addEventListener('click', buyDrill);
document.getElementById('buildHouse-btn').addEventListener('click', buildHouse);
// function loops (jobs)
document.getElementById('fiveLawns').addEventListener('click', mowFiveTimes)
document.getElementById('fiveDriveways').addEventListener('click', shovelFiveTimes)
document.getElementById('fiveSales').addEventListener('click', sellFiveTimes)
document.getElementById('fiveJobs').addEventListener('click', jobFiveTimes)


//event functions 

//doing jobs to earn money 
function mowLawn () {
    money+=10;
    document.getElementById("money").innerHTML = money;
    document.getElementById("mowResults").innerHTML = "success!";
}

function shovelDriveway () {
    let shovel = Math.random();
    if (shovel >.25) {
        money+=15;
        document.getElementById("money").innerHTML= money;
        document.getElementById("shovelResults").innerHTML = "success!";
    } else {
        document.getElementById("shovelResults").innerHTML = "unsuccess :(";
    }
}

function garageSale () {
    let sell = Math.random();
    if (sell >.4 ) {
        money+=50;
        document.getElementById("money").innerHTML = money;
        document.getElementById("saleResults").innerHTML = "success!";
    } else {
        document.getElementById("saleResults").innerHTML = "unsuccess :(";
    }

}

function getJob () {
    let job = Math.random();
    if (job >.65 ) {
        money += 250;
        document.getElementById("money").innerHTML = money;
        document.getElementById("jobResults").innerHTML = "success!";
    } else {
        document.getElementById("jobResults").innerHTML = "unsuccess :(";
    }
}

//buying supplies, spends money
function buyWood () {
    if (money >= 30) {
        money-=30;
        document.getElementById("money").innerHTML = money;
        wood+=1; 
        document.getElementById("numWood").innerHTML = wood;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
    
}

function buyNail () {
    if (money >= 5) {
        money-=5;
        document.getElementById("money").innerHTML = money;
        nails+=1; 
        document.getElementById("numNails").innerHTML = nails;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buyTape () {
    if (money >= 10) {
        money-=10;
        document.getElementById("money").innerHTML = money;
        tape+=1; 
        document.getElementById("numTape").innerHTML = tape;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buySaw () {
    if (money >= 50) {
        money-=50;
        document.getElementById("money").innerHTML = money;
        saw+=1; 
        document.getElementById("numSaw").innerHTML = saw;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
    
}

function buyWire () {
    if (money >= 10) {
        money-=10;
        document.getElementById("money").innerHTML = money;
        wire+=1; 
        document.getElementById("numWire").innerHTML = wire;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buyRoofing () {
    if (money >= 100) {
        money-=100;
        document.getElementById("money").innerHTML = money;
        roofing+=1; 
        document.getElementById("numRoof").innerHTML = roofing;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buyHammer () {
    if (money >= 15) {
        money-=15;
        document.getElementById("money").innerHTML = money;
        hammer+=1; 
        document.getElementById("numHammer").innerHTML = hammer;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buyDrill () {
    if (money >= 50) {
        money-=50
        document.getElementById("money").innerHTML = money;
        drill+=1; 
        document.getElementById("numDrill").innerHTML = drill;
        document.getElementById("lowMoney").innerHTML = "+";
        document.getElementById('lowMoney').style.color = "black";
        
    } else {
        document.getElementById("lowMoney").innerHTML = "Not Enough Money";
        document.getElementById('lowMoney').style.color = "red";
        
    }
}

function buildHouse () {
    if (wood >= 15 && nails >= 10 && tape >= 1 && saw >= 1 && wire >= 5 && roofing >= 10 && hammer >= 1 && drill >= 1) {

        //update number of houses user built 
        numHouses += 1;
        document.getElementById("totalHouses").innerHTML = numHouses;

        //update user's amount of supplies
        wood -= 15;
        document.getElementById("numWood").innerHTML = wood;

        nails -= 10;
        document.getElementById("numNails").innerHTML = nails;

        tape -= 1;
        document.getElementById("numTape").innerHTML = tape;

        saw -= 1;
        document.getElementById("numSaw").innerHTML = saw;

        wire -= 5;
        document.getElementById("numWire").innerHTML = wire;

        roofing -= 10;
        document.getElementById("numRoof").innerHTML = roofing;

        hammer -= 1;
        document.getElementById("numHammer").innerHTML = hammer;

        drill -= 1;
        document.getElementById("numDrill").innerHTML = drill;


        //generate a random number 
        let randNum = Math.random(); 
        console.log(randNum);
        //displays houses (random)
        if (randNum < 0.2) {
            document.getElementById('houses').innerHTML += "<img src ='imagesHouse/house2.png'>";
        } else if (randNum < 0.4) {
            document.getElementById('houses').innerHTML += "<img src ='imagesHouse/house4.png'>";
        } else if (randNum < 0.6) {
            document.getElementById('houses').innerHTML += "<img src ='imagesHouse/house4.png'>";
        } else if (randNum < 0.8) {
            document.getElementById('houses').innerHTML += "<img src ='imagesHouse/house6.png'>";
        } else {
            document.getElementById('houses').innerHTML += "<img src ='imagesHouse/house7.png'>";
        }

    } else {
        //tell user that they are unable to build a house with insufficient supplies 
        alert('You do not have enough supplies to build a house')
    }
}

function mowFiveTimes () {
    for(let n = 0; n < 5; n++) {
        mowLawn();
        console.log(n);
    }
} 

function shovelFiveTimes () {
    for(let n = 0; n < 5; n++) {
        shovelDriveway();
        console.log(n);
    }
} 

function sellFiveTimes () {
    for(let n = 0; n < 5; n++) {
        garageSale();
        console.log(n);
    }
} 

function jobFiveTimes () {
    for(let n = 0; n < 5; n++) {
        getJob();
        console.log(n);
    }
} 
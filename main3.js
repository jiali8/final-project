//event listener 
document.getElementById("button").addEventListener("click", clickHandler)

//event function 
function clickHandler () { 
    //input 
    let foodItem = document.getElementById("1").value;
    let pluralNoun = document.getElementById("2").value;
    let pluralNoun2 = document.getElementById("3").value;
    let color = document.getElementById("4").value;
    let color2 = document.getElementById("5").value;
    let color3 = document.getElementById("6").value;
    let color4 = document.getElementById("7").value;
    let pattern = document.getElementById("8").value;
    let exclamation = document.getElementById("9").value;
    let verbs = document.getElementById("10").value;
    let number = document.getElementById("11").value;
    let pluralNoun3 = document.getElementById("12").value;
    let number2 = document.getElementById("13").value;
    let pluralNoun4 = document.getElementById("14").value;
    let number3 = document.getElementById("15").value;
    let pluralNoun5 = document.getElementById("16").value;
    let adjective = document.getElementById("17").value;
    let adverb = document.getElementById("18").value;
    let adjective2 = document.getElementById("19").value;
    let pluralNoun6 = document.getElementById("20").value;
    let noun = document.getElementById("21").value;
    let ingverb = document.getElementById("22").value;
    let clothing = document.getElementById("23").value;
    let bodypart = document.getElementById("24").value;
    let adjective3 = document.getElementById("25").value;
    let smell = document.getElementById("26").value;
    let number4 = document.getElementById("27").value;
    let adjective4 = document.getElementById("28").value;

    // process & create message 
    let message = " “Every year on my birthday, my mom makes her special dish, a " + foodItem + ". I cant really describe the taste, it is like a mix of " + pluralNoun + " and " + pluralNoun2 + ". The color is quite unique as well. The top of the dish is " + color + ", the bottom of it is " + color2 + ", and the middle of it is " + color3 + " with " + color4 + " " + pattern + ". I always wonder how she makes it, but whenever I try to get a close look at what shes doing, she yells: “" + exclamation + "” and rapidly " + verbs + ". When I ask her how she makes it, she tells me that she adds " + number + " " + pluralNoun3 + ", " + number2 + " " + pluralNoun4 + ", and " + number3 + " " + pluralNoun5 + ". She also says that the key to making the dish so " + adjective + " is to " + adverb + " add some " + adjective2 + " " + pluralNoun6 + " into the " +  noun + ". Finally, when the dish is all done, she hides all her cooking tools and starts " + ingverb + ". When she calls me down for dinner, I exitedly rush down the stairs. I make sure to first put on my " + clothing + " so that the food wont get on my " + bodypart + ". The dish looks " + adjective3 + " and smells " + smell + ". I cant wait to dig in! After around " + number4 + " minutes, I finished the dish. It was so " + adjective4 + "!!! Wow, I sure cant wait for my birthday next year!"; 

    //output message 
    document.getElementById("output").innerHTML = message; 
}

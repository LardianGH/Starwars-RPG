var characters = [
  {
    name: "Revan", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 200, // health
    maxAttack: 50, // random num gen * 
  },
  {
    name: "Bastila", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 200, // health
    maxAttack: 50, // random num gen * 
  },
  {
    name: "Nihilus", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 200, // health
    maxAttack: 50, // random num gen * 
  },
  {
    name: "Bane", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 200, // health
    maxAttack: 50, // random num gen * 
  },
  {
    name: "greg", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 200, // health
    maxAttack: 50, // random num gen * 
  }
  
  
]

var playerChosen = false; // playerChosen is initialized as false, will check to see if a player character is chosen
var enemyChosen = false;  // enemyChosen is initialized as false, will check to see if an enemy has been chosen

console.log(characters[0].name + "'s attack power is: " + characters[0].maxAttack)

$.each(characters, function (i, value) { //for every instance of 'characters'

  console.log('value: ', value)

  var charBox = $('<button>').addClass('char-box'); //creates a new button called charBox and assigns it the class 'char-box'

  var charPic = $('<div>').addClass('char-pic'); //creates a new div called charPic and assigns it the class 'char-pic'

  charPic.attr("id", characters[i].name); //assigns a unique id to each charPic based on the name of the character

  console.log(characters[i].name) 

  $(charBox).html(characters[i].name + '<br>' + " Health: " + characters[i].hp) //creates the word object over the picture (Gonna delete this, but might use it later)

  $("#char-select").append(charBox); //impliments the div charBox to the div with the id char-select

  $(charBox).prepend($(charPic)); //impliments the div charPic to the div charBox


//on click to activate
  $("#" + characters[i].name).on("click", function () { //whenever a charPic is clicked

    if (playerChosen === false) { //  First click
    console.log(characters[i].name)
    //send all others not clicked down --note

    $("#char-select").append(""); //removes the selected charBox
    $("#player").prepend(charBox); //places it in the div above it, appearing to send all the others down
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)
    $(".charSelect-title").html("Character selected: " + characters[i].name);
    $(".enemySelect-title").html("Enemy selection:");
    playerChosen = true;
    console.log(playerChosen)
    }
   
    else if (playerChosen === true && enemyChosen === false){// Second click
      console.log("Player already chosen")
      $("#char-select").append(""); //removes the selected charBox
    $("#combat").prepend(charBox); //places it in the div below it.
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)
    $(".combat-title").html("Enemy selected: " + characters[i].name);
    playerChosen = true;
    console.log(playerChosen)
    }
  })
  //end on click event

});


//Unique abilities
    //  Lord of hunger(Active) - Nihilus - Drains enemy health and add to own health
    //  Battle meditation(Active) - Bastila - doubles attack, halves enemy attack for one? round
    //  Orbalisk armor(Passive) - Bane - Takes reduced damage
    //  Mass shadow generator(Active) - Revan - Instantly kills enemy (Can only be used at 5% health, can only be used once)
    //  Telepathic scream(Active) - Starweird Queen - Causes enemy to pause attacking for two rounds
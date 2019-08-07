var characters = [
  {
    name: "Revan", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 1500, // health
    maxAttack: 30, // random num gen * 
  },
  {
    name: "Bastila", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 1000, // health
    maxAttack: 20, // random num gen * 
  },
  {
    name: "Nihilus", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 800, // health
    maxAttack: 20, // random num gen * 
  },
  {
    name: "Bane", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 2000, // health
    maxAttack: 30, // random num gen * 
  },
  {
    name: "Starweird", //name gets picture
    playerUsing: false, //changes to true if player is chosen
    hp: 500, // health
    maxAttack: 70, // random num gen * 
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

  $(charBox).prepend(characters[i].name) //+ '<br>' + " Health: " + characters[i].hp + '<br>' + " Attack: " + characters[i].maxAttack)  

  $("#char-select").append(charBox); //impliments the div charBox to the div with the id char-select

  $(charBox).append($(charPic)); //impliments the div charPic to the div charBox

  $(charBox).append(" Health: " + characters[i].hp + " | " + " Attack: " + characters[i].maxAttack) 

//on click to activate
  $(charBox).on("click", function () { //whenever a charPic is clicked

    if (playerChosen === false) { //  First click
    console.log(characters[i].name)
    //send all others not clicked down --note

    $("#char-select").append(""); //removes the selected charBox
    $('.char-box').css("background-color", "red"); //changes the css of all elements with the char-box id
    $(charBox).css("background-color", "green"); //changes just the css of the selected charBox
    $("#char-select").css("width", "800px")
    $("#player").prepend(charBox); //places it in the div above it, appearing to send all the others down
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)
    $(".charSelect-title").html("Character selected: " + characters[i].name);
    $(".enemySelect-title").html("Enemy selection:");
    playerChosen = true;
    characters[i].playerUsing = true;
    console.log(playerChosen)
    }

    else if (characters[i].playerUsing === true) {
      return null;
    }
   
    else if (playerChosen === true && enemyChosen === false){// Second click
      console.log("Player already chosen")
      $("#char-select").append(""); //removes the selected charBox
      $(charBox).css("background-color", "orange");
      $("#char-select").css("width", "600px")
    $("#combat").prepend(charBox); //places it in the div below it.
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)

    var attackButton = $('<button>').addClass('atk-but'); //creates a new button called attackButton and assigns it the class 'atk-but'
    $(attackButton).html('attack')
    $("#combat").append(attackButton);

    $(".combat-title").html("Enemy selected: " + characters[i].name);
    enemyChosen = true;
    console.log(enemyChosen)
    }

    else {
      console.log("Is Player: " + characters[i].playerUsing)
      console.log("The player and enemy have already been chosen")
    }
  })
  //end on click event

});


//Unique abilities
    //  Lord of hunger(Passive) - Nihilus - health depletes on it's own every turn
    //  Lord of hunger(Active) - Nihilus - Drains enemy health and add to own health
    //  Battle meditation(Active) - Bastila - doubles attack, halves enemy attack for one? round
    //  Orbalisk armor(Passive) - Bane - Takes reduced damage
    //  Mass shadow generator(Active) - Revan - Instantly kills enemy (Can only be used at 5% health, can only be used once)
    //  Telepathic scream(Active) - Starweird Queen - Causes enemy to pause attacking for two rounds
restart = function() {

  console.log("Reset")

var characters = [
  {
    name: "Revan", //name gets picture - Can win
    playerUsing: false, //changes to true if player is chosen
    currentEnemy: false, //changes to true if enemy is chosen
    hp: 1500, // health
    maxAttack: 30, // random num gen *
    minAttack: 20,
    ability: "Mass shadow generator",
    coolDown: 15,
  },
  {
    name: "Bastila", //name gets picture  - Can win
    playerUsing: false, //changes to true if player is chosen
    currentEnemy: false, //changes to true if enemy is chosen
    hp: 1000, // health
    maxAttack: 20, // random num gen * 
    minAttack: 10,
    ability: "Battle meditation",
    coolDown: 8,
  },
  {
    name: "Nihilus", //name gets picture - Can win
    playerUsing: false, //changes to true if player is chosen
    currentEnemy: false, //changes to true if enemy is chosen
    hp: 800, // health
    maxAttack: 20, // random num gen * 
    minAttack: 5,
    ability: "Force drain",
    coolDown: 5,
  },
  {
    name: "Bane", //name gets picture - Can win
    playerUsing: false, //changes to true if player is chosen
    currentEnemy: false, //changes to true if enemy is chosen
    hp: 1600, // health
    maxAttack: 30, // random num gen *
    minAttack: 25,
    ability: "Orbalisk armor",
    coolDown: 20,
  },
  {
    name: "Starweird", //name gets picture - Can win
    playerUsing: false, //changes to true if player is chosen
    currentEnemy: false, //changes to true if enemy is chosen
    hp: 500, // health
    maxAttack: 70, // random num gen * 
    minAttack: 1,
    ability: "Telepathic scream",
    coolDown: 13,
  }
  
  
]

var hero;
var currentEnemy;
var wasEnemy = [];
var playerChosen = false; // playerChosen is initialized as false, will check to see if a player character is chosen
var enemyChosen = false;  // enemyChosen is initialized as false, will check to see if an enemy has been chosen
var afterHealth;
var damage;

var divLength = 1100;
//I feel bad declaring everything globally but that seems to be the only way to make this stuff work

//resets the page.
$(".charSelect-title").html("Character selection:")
$("#player").html("")
$(".enemySelect-title").html("")
$("#char-select").html("")
$("#char-select").css("width", divLength + "px")
$(".combat-title").html("")
$("#combat").html("")
$(".combat-text").html("")

var fighting = function(attack, minAttack, beforeHealth) { //takes in values given to it, based on order assigns them new names
  damage = Math.floor(Math.random() * (attack - minAttack) + minAttack + 1) 
  // the above calculates the damage dealt in a round my subtracting the minimum damage from the maximum damage, 
  //choosing a random number between 0 and one less than that number, then it adds back the minimum and adds one, 
  //making the variable "damage" a random number between the minimum damage and the maximum damage.
  afterHealth = beforeHealth - damage //the variable afterHealth is equal to the health before minus the damage
}

var ability = function(ability) {
if (ability === "Mass shadow generator") {
  console.log("Revan destroyed a planet")
  currentEnemy.hp = 1;
  currentEnemy.minAttack = -1;
  currentEnemy.maxAttack = -1;
  hero.hp = (Math.floor(hero.hp * 0.5))
  hero.coolDown = 15;
  $(".combat-text").append(hero.name + " used " + hero.ability + " and annihilated " + currentEnemy.name + "." + "<br>" + " However " + hero.name + " Was also caught in the blast and got hurt" + "<br>" + hero.name + "'s health is now " + hero.hp);

}
else if (ability === "Battle meditation") {
  console.log("Bastila turned the tide of battle")
  currentEnemy.maxAttack *= 0.8;
  currentEnemy.minAttack *= 0.8;
  hero.maxAttack = hero.maxAttack * 1.6;
  hero.minAttack = hero.minAttack * 1.6;
  hero.coolDown = 8;
  $(".combat-text").append(hero.name + " used " + hero.ability + "<br>" + currentEnemy.name + "'s health is " + currentEnemy.hp);
  console.log(currentEnemy.maxAttack)
}
else if (ability === "Force drain") {
  console.log("Nihilus drained the life out of " + currentEnemy.name);
  currentEnemy.hp = (Math.floor(currentEnemy.hp * 0.5))
  hero.hp += (Math.floor(currentEnemy.hp * 0.4))
  hero.coolDown = 5;
  $(".combat-text").append(hero.name + " used " + hero.ability + "<br>" + currentEnemy.name + "'s health is " + currentEnemy.hp);
  console.log(currentEnemy.maxAttack)
}
else if (ability === "Orbalisk armor") {
  console.log("Bane's Orbalisk armor hardens")
  currentEnemy.maxAttack *= 0.5;
  currentEnemy.minAttack *= 0.5;
  hero.coolDown = 15;
  $(".combat-text").append(hero.name + " used " + hero.ability + "<br>" + currentEnemy.name + "'s health is " + currentEnemy.hp);
  console.log(currentEnemy.maxAttack)
}
else if (ability === "Telepathic scream"){
  console.log("Starweird let out a terrifying screech");
  currentEnemy.minAttack = 0;
  currentEnemy.maxAttack = 0;
  hero.coolDown = 13;
  $(".combat-text").append(hero.name + " let out a " + hero.ability + "<br>" + currentEnemy.name + "'s health is " + currentEnemy.hp);
}


}

console.log(characters[0].name + "'s attack power is: " + characters[0].maxAttack)

nextEnemy = function() {

  if(wasEnemy.length === (characters.length - 1)) {
    alert("Game won, over")
    console.log("done")
    restart()
  }

  else {

  $("#char-select").html("")

$.each(characters, function (i, value) { //for every instance of 'characters'

if ((characters[i] !== hero) && ($.inArray(characters[i], wasEnemy)) === -1){

  console.log('value: ', value)

  var charBox = $('<button>').addClass('char-box'); //creates a new button called charBox and assigns it the class 'char-box'

  var charPic = $('<div>').addClass('char-pic'); //creates a new div called charPic and assigns it the class 'char-pic'

  charPic.attr("id", characters[i].name); //assigns a unique id to each charPic based on the name of the character

  console.log(characters[i].name) // runs perfectly, but the rest of it doesn't fire for some reason

  $(charBox).prepend(characters[i].name) //+ '<br>' + " Health: " + characters[i].hp + '<br>' + " Attack: " + characters[i].maxAttack)  

  $("#char-select").append(charBox); //impliments the div charBox to the div with the id char-select

  $(charBox).append($(charPic)); //impliments the div charPic to the div charBox

  $(charBox).append(" Max Health: " + characters[i].hp + "<br>" + " Attack: " + characters[i].maxAttack) 

  if ((characters[i] != hero) && (wasEnemy.length >= 1)) {

  $(charBox).css("background-color", "red");

  }
}
else {
  return null;
}

//on click to activate
  $(charBox).on("click", function () { //whenever a charPic is clicked

    if (playerChosen === false) { //  First click
    console.log(characters[i].name)
    //send all others not clicked down --note

    $("#char-select").append(""); //removes the selected charBox
    $('.char-box').css("background-color", "red"); //changes the css of all elements with the char-box id
    $(charBox).css("background-color", "green"); //changes just the css of the selected charBox
    divLength -= 300
    $("#char-select").css("width", divLength + "px")
    $("#player").prepend(charBox); //places it in the div above it, appearing to send all the others down
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)
    $(".charSelect-title").html("Character selected: " + characters[i].name);
    $(".enemySelect-title").html("Enemy selection:");
    playerChosen = true;
    characters[i].playerUsing = true;
    hero = characters[i]
    console.log(playerChosen)
    }

    else if (characters[i].playerUsing === true) { //if the player character has been chosen
       console.log(hero)
      console.log("Is Player: " + characters[i].playerUsing)
      return null; //clicking on them does nothing
    }
   
    else if (playerChosen === true && enemyChosen === false){// Second click chooses the enemy
      console.log("Player already chosen")
      $(".enemySelect-title").html("")
      $("#char-select").html(""); //removes the selected charBox
      $(charBox).css("background-color", "orange");
      divLength -= 200
      $("#char-select").css("width", divLength + "px")
      $("#combat").prepend(charBox); //places it in the div below it.
      charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again (Not working)

    var attackButton = $('<button>').addClass('atk-but'); //creates a new button called attackButton and assigns it the class 'atk-but'
    $(attackButton).html('attack') //makes the button says attack
    $("#combat").append(attackButton); //puts the button on the page

    var abilityButton = $('<button>').addClass('abil-but'); //creates a new button called attackButton and assigns it the class 'atk-but'
    $(abilityButton).html('ability') //makes the button says attack
    $("#combat").append(abilityButton); //puts the button on the page

    if (hero.coolDown <= 0) {
      $(abilityButton).css('background-color', 'yellow')
    }

    $(".combat-title").html("Enemy selected: " + characters[i].name);
    enemyChosen = true;
    characters[i].currentEnemy = true;
    currentEnemy = characters[i] //sets the chosen enemy to 
    console.log(enemyChosen)

    $(attackButton).on("click", function() { //when you click on attackButton
      hero.coolDown--
      if (hero.coolDown <= 0) {
        $(abilityButton).css('background-color', 'yellow')
      }
      else {
        $(abilityButton).css('background-color', 'gray')
      }
    console.log("Cool Down " + hero.coolDown)
      $(".combat-text").html("")
      console.log(hero.name + " and " + currentEnemy.name + " are friends") //just making sure it got both objects down here
      fighting(hero.maxAttack, hero.minAttack, currentEnemy.hp) //The hero attacks
      currentEnemy.hp = afterHealth //updates the hp
      $(".combat-text").append(hero.name + " hits " + currentEnemy.name + " for " + damage + " damage, " + "<br>" + currentEnemy.name + "'s health is now " + currentEnemy.hp); //1st combat log
      console.log(damage)

//can probably move lose condition here ---(Suggestion)

if (hero.hp <= 0) { //lose condition, if your health is at or below zero
  hero.hp = 0
  restart()
}
else {

      if (currentEnemy.hp <= 0) { //win condition
        alert(hero.name + " defeated " + currentEnemy.name + ". " + hero.name + "'s health is currently " + hero.hp)
        console.log(characters[i].name)
        $("#combat").html("")
        $(".combat-text").html("")
        $(".enemySelect-title").html("Enemy selection:");
        enemyChosen = false;
        wasEnemy.push(currentEnemy)
        nextEnemy()
        //remove enemy from array, restart a few lines back, maybe put charboxes in a function? --TODO
      }

      else {
        console.log(currentEnemy.maxAttack)
      fighting((currentEnemy.maxAttack), (currentEnemy.minAttack), hero.hp) //the enemy attacks
      hero.hp = afterHealth //updates the hp

      if (hero.hp <= 0) { //Updates screen after loss ------------------------------------------------------------------
        alert("You lost")
        $(".enemySelect-title").html("")
        $(".combat-text").html("")
        $(".combat-title").html("")
        $(".charSelect-title").html("")
        $(".char-box").css('display', 'none')
        $(attackButton).html('Continue')
        $(abilityButton).css('display', 'none')
        $(attackButton).css('left', '70px')
      }
else 
      $(".combat-text").append("<br>" + "<br>" + currentEnemy.name + " attacks " + hero.name + " for " + damage + " damage, " + "<br>" + hero.name + "'s health is now " + hero.hp); //2nd combat log
      console.log(damage)
      

      
      if (currentEnemy.hp <= 0) { //win condition
        alert(hero.name + " defeated " + currentEnemy.name + ". " + hero.name + "'s health is currently " + hero.hp)
        console.log(characters[i].name)
        $(".combat-title").html("")
        $(".combat-text").html("")
        $(".enemySelect-title").html("Enemy selection:");
        enemyChosen = false;
        wasEnemy.push(currentEnemy)
        nextEnemy()
        //remove enemy from array, restart a few lines back, maybe put charboxes in a function? --TODO
      }

    }
    }

    })

    $(abilityButton).on("click", function() { //when you click on abilityButton
      if (hero.coolDown <= 0) {

      $(".combat-text").html("")
      ability(hero.ability) //The hero uses an ability
       //1st combat log
      console.log(damage)

//can probably move lose condition here ---(Suggestion)
if (hero.hp <= 0) { //lose condition, if your health is at or below zero
  alert("You lost")
  hero.hp = 0
  restart()
}
else {

      if (currentEnemy.hp <= 0) { //win condition
        alert(hero.name + " defeated " + currentEnemy.name + ". " + hero.name + "'s health is currently " + hero.hp)
        console.log(characters[i].name)
        $("#combat").html("")
        $(".combat-text").html("")
        $(".enemySelect-title").html("Enemy selection:");
        enemyChosen = false;
        wasEnemy.push(currentEnemy)
        nextEnemy()
        //remove enemy from array, restart a few lines back, maybe put charboxes in a function? --TODO
      }

      else {
        console.log(currentEnemy.maxAttack)
      fighting((currentEnemy.maxAttack), (currentEnemy.minAttack), hero.hp) //the enemy attacks
      hero.hp = afterHealth //updates the hp
      $(".combat-text").append("<br>" + "<br>" + currentEnemy.name + " attacks " + hero.name + " for " + damage + " damage, " + "<br>" + hero.name + "'s health is now " + hero.hp); //2nd combat log
      console.log(damage)

      
      if (currentEnemy.hp <= 0) { //win condition
        alert(hero.name + " defeated " + currentEnemy.name + ". " + hero.name + "'s health is currently " + hero.hp)
        console.log(characters[i].name)
        $("#combat").html("")
        $(".combat-text").html("")
        $(".enemySelect-title").html("Enemy selection:");
        enemyChosen = false;
        wasEnemy.push(currentEnemy)
        nextEnemy()
        //remove enemy from array, restart a few lines back, maybe put charboxes in a function? --TODO
      }
    }
    }
  }
  else {
    alert("ability not ready yet, wait " + hero.coolDown + " more turns.")
  }
  $(abilityButton).css('background-color', 'gray')
    })
    

    }

    else { //If player and enemy are chosen and you click on a picture again
      console.log("Is Player: " + characters[i].playerUsing)
      console.log("Is current enemy: " + characters[i].currentEnemy)
      console.log("The player and enemy have already been chosen")
    }
  })
  //end on click event


});
}
//--
}
nextEnemy()
}
restart() // First iteration of the whole thing

//Unique abilities
    //  Lord of hunger(Passive) - Nihilus - health depletes on it's own every turn
    //  Lord of hunger(Active) - Nihilus - Drains enemy health and add to own health
    //  Battle meditation(Active) - Bastila - doubles attack, halves enemy attack for one? round
    //  Orbalisk armor(Passive) - Bane - Takes reduced damage
    //  Mass shadow generator(Active) - Revan - Instantly kills enemy (Can only be used at 5% health, can only be used once)
    //  Telepathic scream(Active) - Starweird Queen - Causes enemy to pause attacking for two rounds
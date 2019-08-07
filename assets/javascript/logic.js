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
  }
]


console.log(characters[0].name + "'s attack power is: " + characters[0].maxAttack)

$.each(characters, function (i, value) { //for every instance of 'characters'

  console.log('value: ', value)

  var charBox = $('<button>').addClass('char-box'); //creates a new button called charBox and assigns it the class 'char-box'

  var charPic = $('<div>').addClass('char-pic'); //creates a new div called charPic and assigns it the class 'char-pic'

  charPic.attr("id", characters[i].name); //assigns a unique id to each charPic based on the name of the character

  console.log(characters[i].name) 

  $(charBox).text(characters[i].name) //creates the word object over the picture (Gonna delete this, but might use it later)

  $("#char-select").append(charBox); //impliments the div charBox to the div with the id char-select

  $(charBox).prepend($(charPic)); //impliments the div charPic to the div charBox


//on click to activate
  $("#" + characters[i].name).on("click", function () { //whenever a charPic is clicked
    console.log(characters[i].name)
    //send all others not clicked down --note

    $("#char-select").append(""); //removes the selected charBox
    $("#player").prepend(charBox); //places it in the div above it, appearing to send all the others down
    charBox = $('<div>'); //changes charBox from a button to a div, thus making it unable to be clicked again
  })
  //end on click event
});



    //  Lord of hunger - Nihilus
    //  Battle meditation - Bastila
    //  Orbalisk armor - Bane
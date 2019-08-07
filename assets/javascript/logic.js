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

//on click to activate

//end on click event

console.log(characters[0].name + "'s attack power is: " + characters[0].maxAttack)

$.each(characters, function(i, value) {

    console.log('value: ', value)
    var charBox = $('<button>').addClass('char-box');
    charBox.attr("id", characters[i].name );
    console.log(characters[i].name)
    $(charBox).text(characters[i]) //creates the word object over the picture

      $("#char-select").append(charBox);
      
      

      $("#" + characters[i].name).on("click", function() {
console.log(characters[i].name)
//send all others not clicked down

$("#char-select").append("");
$("#player").prepend(charBox);
charBox = $('<div>');
      })
    });



    //  Lord of hunger - Nihilus
    //  Battle meditation - Bastila
    //  Orbalisk armor - Bane
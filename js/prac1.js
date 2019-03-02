/*function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player1(roll){
  this.roll=roll;
}
var player1Array=[];
function player1Total(){
  var total=0;
  for (var i = 0; i < player1Array.length; i++) {
    total=total+ player1Array[i]
  }
  return total;
}
function player1Hold(hold){
  return hold+player1Total();
}
function memory(vue){
  var newArr=[]
  newArr.push(vue);
  return newArr;
}

$(document).ready(function(){
  $("#roll").click(function(){
    var player1=new Player1(rollDice());
    $("#id").text(player1.roll)
    if(player1.roll!=1){
    player1Array.push(player1.roll)
    console.log(player1Array)
    $("#show").text(player1Total())

    $("#hold").click(function(){

      var holdPlayer1=player1Hold(0)
      var memo=memory(player1Total());
      memory(player1Total()).length=0;
      $("#save").text(memo)


    })
  }
  else {
    alert("You rolled one")
    player1Array.length=0
    $("#show").text("");

  }


  })


})*/

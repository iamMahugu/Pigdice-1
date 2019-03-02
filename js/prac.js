function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
var newScore=[];
var constArray=[];

$(document).ready(function(){
  $("#roll").click(function(){
  var roll=rollDice();
  $("#id").text(roll)
  if (roll!=1) {
    newScore.push(roll);
    constArray.push(roll);

    var total=0
    for(i=0;i<newScore.length;i++){
      total=total+newScore[i]
    }
    $("#show").text(total)
    var newtotal=0;
    for(z=0;z<constArray.length;z++){
      newtotal=newtotal+constArray[z]
    }
    console.log(total)
    console.log(newScore)

  }

  else {
    alert("you rolled one and your roll ad ended ")
    $("#show").text(0)
    newScore.length=0;




  }
  $("#hold").click(function(){
    $("#show").text(0);
    newScore.length=0;
    $("#save").text(newtotal)
  })

  /*var green=[];
  green.push(total);
  alert(green)*/



  });
  });

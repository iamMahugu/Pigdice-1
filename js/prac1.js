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


})
/*function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player1(score){
	this.score=[];
}
var newScore=[];

$(document).ready(function(){

  $("#roll").click(function(){
		var all=0;

    var compare=rollDice();
		newScore.push(compare)
		console.log(newScore)
    	if(compare>1){
    		$("#id").text("you rolled "+compare);
        $("#love").append("<li>"+compare+"</li>")
				$("#love").hide();

        var total=0;
        $("#love li").each(function(){
          total+=parseFloat($(this).html());
          $("#show").text(total)


        })
				$("#hold").click(function(){

					for(i=0;i<newScore.length;i++){
							all=all+newScore[i]
							$("#save").text(all)
							}


					$("#save").text(newall)

					$("#love").empty()
					$("#show").text(0);

				})

			}
			else if(compare==1){
				newScore.length=0;
				var newall=all;
				alert("you lost")
				$("#love").empty()
				$("#show").text("0");
			}



  })



})



/*  var storeRoll=[];
  storeRoll.push(compare);
  var totalSCore=0;
  for(i=0;i<storeRoll.length;i++){
    totalSCore+=storeRoll[i];
  }
  alert(storeRoll)*/
*/

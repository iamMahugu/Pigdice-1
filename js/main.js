function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player1(score){
	this.score=[];
}
var newScore=[];

$(document).ready(function(){
  $("#roll").click(function(){
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
				var player1=new Player1(total)
				player1.score.push(total)
				$("#hold").click(function(){
					$("#save").text()
				})

			}
			else if(compare==1){
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

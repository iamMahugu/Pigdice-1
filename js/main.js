function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player1(score){
	this.score=score;
}
$(document).ready(function(){
  $("#roll").click(function(){
    var compare=rollDice();
    	if(compare>1 && compare<=6){
    		$("#id").text("you rolled "+compare);
        $("#love").append("<li>"+compare+"</li>")
        $("#love").hide()
        var total=0;
        $("#love li").each(function(){
          total+=parseFloat($(this).html());
          $("#show").text(total)

        })
				if(compare==1){
					alert("your turn has ended")
				}
				var player1=new Player1(total)

					if(player1.score>99){
						alert("you won")
					}

        }



    	else{
    		$("#id").text("Bad luck you rolled "+compare+" and your turn has ended")


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

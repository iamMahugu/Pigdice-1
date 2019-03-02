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

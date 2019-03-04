// Bussiness Logic
function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player2(roll){
  this.roll=roll;
}
function PlayersNames(playOne,playTwo){
	this.playOne=playOne;
	this.playTwo=playTwo;
}

cumulativeArray=[];
var player2Array=[];
function player2Total(){
  var total=0;
  for (var i = 0; i < player2Array.length; i++) {
    total=total+ player2Array[i]
  }
  return total;
}
var newScore=[];
var constArray=[];
var imageArray=["img/one.png","img/two.png","img/three.png","img/four.png","img/five.png","img/six.png"]


// The user interface Logic

function restartGame(){
	newScore.length=0;
	newtotal=0;
	cumulativeArray.length=0;
	constArray.length=0;
	$("#perRound").text("00.00");
	$("#save").text("00.00");
	$("#playone").text("00.00");
	$("#restart").hide();
	$("#diceOne").show();
	$("#winOne").hide();
	$("#diceOne").show();
	$("#winOne").hide();
	$("#saveTwo").text("00.00");
	$("#playTwoTotal").text("00.00");
	$("#rolledTwo").text("00.00");
	$("#restart2").hide();
	$("#diceTwo").show();
	$("#winTwo").hide();
	$("#two").removeClass();
	$("#one").removeClass();
	$("#img").attr('src','img/dis.jpg');
	$("#img1").attr('src','img/dis.jpg');
	$("#play2Roll").prop("disabled",false)
	$("#rollOne").prop("disabled",false)


}

$(document).ready(function(){
	$("#play").click(function(){
		$("#players").fadeIn(2000);
		$("#players").show()
		$("#demo").hide();
	})
	$("#players").submit(function(event){
		event.preventDefault();
		var playerOne=$("#play1").val();
		var playerTwo=$("#play2").val();
		var playerNames=new PlayersNames(playerOne,playerTwo);
		$("#players").hide();
		$("#hide1").hide();
		$("#demo").hide();
		$("#show2").slideDown(2000);
		$("#show1").slideDown(2000);
		$("#show2").show();
		$("#show1").show();
		$("#one").text(playerNames.playOne);
		$("#two").text(playerNames.playTwo);
		$("#winOne").hide();
		$("#winTwo").hide();
		$("#restart").hide();
		$("#restart2").hide();
	})


//PLay One Interface

  $("#rollOne").click(function(){
  var roll=rollDice();
	var diceMe=roll;
	if(diceMe==1){
		var img=0
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==2) {
		var img=1;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==3) {
		var img=2;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==4) {
		var img=3;
		document.getElementById('img').src=imageArray[img];

	}
	else if (diceMe==5) {
		var img=4;
		document.getElementById('img').src=imageArray[img];

	}
	else {
		var img=5;
		document.getElementById('img').src=imageArray[img];
	}
  $("#playone").text(roll)
  if (roll!=1) {
    newScore.push(roll);
	}
	else if (roll==1) {
			newScore.length=0;
			alert("you rolled one and your roll has ended ")
			$("#perRound").text(0);
			$("#rollOne").prop('disabled',true)
			$("#rollOne").text("You rolled one its not your turn")
			$("#play2Roll").prop("disabled",false)
			$("#play2Roll").text("Roll Dice")
			$("#one").removeClass();
			$("#two").addClass("green");
	}

		var total=0
    for(i=0;i<newScore.length;i++){
      total=total+newScore[i]
    }

    $("#perRound").text(total)
    /*var newtotal=0;
    for(z=0;z<constArray.length;z++){
      newtotal=newtotal+constArray[z]
    }*/

});

	///
  $("#holdOne").click(function(){
		var newtotal=0;
    for(z=0;z<newScore.length;z++){
      newtotal=newtotal+newScore[z]
    }
		if(newtotal!=0){
			constArray.push(newtotal);
		}
		var masterScore=parseInt(constArray)
		newScore.length=0;
		var newPlayerScore=0;
		for(score=0;score<constArray.length;score++){
     newPlayerScore+=constArray[score]
    }
    $("#perRound").text(0);
    $("#save").text(newPlayerScore)
		$("#play2Roll").prop("disabled",false)
		$("#play2Roll").text("Roll Dice")
		$("#one").removeClass();
		$("#two").addClass("green");
		$("#rollOne").prop("disabled",true)

		if(newPlayerScore>=100){
				$("#diceOne").hide();
				$("#winOne").fadeIn(1000);
				$("#winOne").show();
				$("#restart").fadeIn();
				$("#restart").show();
				$("#play2Roll").prop("disabled",true);
				$("#rollOne").prop("disabled",true)
				$("#restart2").fadeIn();
				$("#restart2").show();

			}


  })
	$("#restart").click(function(){
		restartGame();
	})

	//player Two Interface
	$("#play2Roll").click(function(){
		var roll=rollDice();
		var showDice=roll;
		$("#rolledTwo").text(roll);
		if(showDice==1){
			var img=0
			document.getElementById('img1').src=imageArray[img];

		}
		else if (showDice==2) {
			var img=1;
			document.getElementById('img1').src=imageArray[img];

		}
		else if (showDice==3) {
			var img=2;
			document.getElementById('img1').src=imageArray[img];

		}
		else if (showDice==4) {
			var img=3;
			document.getElementById('img1').src=imageArray[img];

		}
		else if (showDice==5) {
			var img=4;
			document.getElementById('img1').src=imageArray[img];

		}
		else {
			var img=5;
			document.getElementById('img1').src=imageArray[img];
		}
		if(roll!=1){
			player2Array.push(roll);
			//cumulativeArray.push(roll)

		}
		else if(roll==1) {
			player2Array.length=0;
			alert("You rolled one and your round has ended ")
			$("#rollOne").prop('disabled',false)
			$("#play2Roll").prop("disabled",true)
			$("#rollOne").text("Roll Dice")
			$("#play2Roll").text("You rolled one its not your turn")
			$("#two").removeClass();
			$("#one").addClass("green");

		}
		$("#playTwoTotal").text(player2Total());
	});

		$("#holdTwo").click(function(){
			var total=0;
			for (var i = 0; i < player2Array.length; i++) {
				total=total+ player2Array[i]
			}
			if(total!=0){
				cumulativeArray.push(total);

			}
			var changeCumulative=parseInt(cumulativeArray);
			player2Array.length=0;

			var playerTwoTotal=0;
			for (var index = 0; index < cumulativeArray.length; index++) {
				playerTwoTotal+=cumulativeArray[index]
			}

			$("#rollOne").prop('disabled',false)
			$("#rollOne").text("Roll Dice")
			$("#playTwoTotal").text("0");
			$("#saveTwo").text(playerTwoTotal)
			$("#one").addClass("green");
			$("#two").removeClass();
			$("#play2Roll").prop("disabled",true)


			if(playerTwoTotal>99){
				$("#diceTwo").hide();
				$("#winTwo").fadeIn(1000);
				$("#winTwo").show();
				$("#restart2").fadeIn();
				$("#restart2").show();
				$("#play2Roll").prop("disabled",true)
				$("#rollOne").prop("disabled",true)
				$("#restart").fadeIn();
				$("#restart").show();

			}


		})


		$("#restart2").click(function(){
			restartGame();
		})



  });

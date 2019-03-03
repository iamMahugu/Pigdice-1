function rollDice(){

	var result= Math.ceil(Math.random()*6)
	return Math.round(result)
}
function Player2(roll){
  this.roll=roll;
}
cumulativeArray=[];
function cumulativeTotal(){
  var total=0;
  for (var i = 0; i < cumulativeArray.length; i++) {
    total=total+ cumulativeArray[i]
  }
  return total;
}

var player2Array=[];
function player2Total(){
  var total=0;
  for (var i = 0; i < player2Array.length; i++) {
    total=total+ player2Array[i]
  }
  return total;
}
player2Total();
var newScore=[];
var constArray=[];
var imageArray=["img/one.png","img/two.png","img/three.png","img/four.png","img/five.png","img/six.png"]

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
		$("#players").hide();
		$("#hide1").hide();
		$("#demo").hide();
		$("#show2").slideDown(2000);
		$("#show1").slideDown(2000);
		$("#show2").show();
		$("#show1").show();
		$("#one").text(playerOne);
		$("#two").text(playerTwo);
		$("#winOne").hide();
		$("#winTwo").hide();
		$("#restart").hide();

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
  var total=0
  if (roll!=1) {
    newScore.push(roll);
		constArray.push(roll);

    for(i=0;i<newScore.length;i++){
      total=total+newScore[i]
    }

    $("#perRound").text(total)
    var newtotal=0;
    for(z=0;z<constArray.length;z++){
      newtotal=newtotal+constArray[z]
    }
    console.log(total)
    console.log(newScore)


  }

  else {
        alert("you rolled one and your roll has ended ")
				$("#perRound").text(0);
        /////////
        var em=[]
        em.push(total)

        console.log(em)
        newScore.length=0;
				$("#rollOne").prop('disabled',true)
				$("#rollOne").text("You rolled one its not your turn")
				$("#play2Roll").prop("disabled",false)
				$("#play2Roll").text("Roll Dice")

  }
	if(newtotal>99){
		$("#diceOne").hide();
		$("#winOne").fadeIn(1000);
		$("#winOne").show();
		$("#restart").fadeIn();
		$("#restart").show();

	}
  $("#holdOne").click(function(){
    $("#perRound").text(0);
    newScore.length=0;
    $("#save").text(newtotal)
		$("#play2Roll").prop("disabled",false)
		$("#play2Roll").text("Roll Dice")

  })
	$("#restart").click(function(){
		newScore.length=0;
		newtotal=0;
		constArray.length=0;
		$("#perRound").text("00.00");
		$("#save").text("00.00");
		$("#playone").text("00.00");
		$("#restart").hide();
		$("#diceOne").show();
		$("#winOne").hide();



	})

  /*var green=[];
  green.push(total);
  alert(green)*/



  });


	//player Two Interface
	$("#play2Roll").click(function(){
		var roll=rollDice();
		$("#rolledTwo").text(roll);
		if(roll!=1){
			player2Array.push(roll);
			cumulativeArray.push(roll)

		}else {
			alert("You rolled one and your round has ended ")
			player2ArrayCopy=[];
			player2ArrayCopy.push(player2Total());
			var tt=player2ArrayCopy;
			player2Array.length=0;
			$("#rollOne").prop('disabled',false)
			$("#play2Roll").prop("disabled",true)
			$("#rollOne").text("Roll Dice")
			$("#play2Roll").text("You rolled one its not your turn")



		}
		$("#playTwoTotal").text(player2Total());
		$("#holdTwo").click(function(){
			$("#rollOne").prop('disabled',false)
			$("#rollOne").text("Roll Dice")
			player2Array.length=0;
			$("#playTwoTotal").text("0");
			$("#saveTwo").text(cumulativeTotal())


		})



	})





  });

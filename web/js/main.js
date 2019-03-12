function createBoard() {
  //Make grid
  //Each cube needs to be clickable
  var str = "";
  var obj = document.getElementById("gameBoard");

  for (var i = 0; i < 3; i++) {
    str += "<div class='row' id='test_row" + i + "'>";
    var str2 = "";

    for (var j = 0; j < 3; j++) {
      str2 += "<div class='col-xs-4' id='test_col'>";
      var btnKey = String(i) + String(j);

      str2 += "<button type='button' id='" + btnKey + "' class='btn btn-secondary color' onclick=whoseTurn('" + btnKey + "')> ! </button>";
      str2 += "</div>";
    }

    str += str2;
    str += "</div>";
  }
  
  console.log(str);
  obj.innerHTML = str;
}

var alreadyClicked = [];
var count = 0;
var arrWinner = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function whoseTurn(buttonSpot){
  // count = 1; count++
  // X is the first one (odds)
  // Y is the second (evens)
  // Array keeping track of used tiles
  //Cuts off function to used based on array
  //Insert HTML into header for whose turn it is
  console.log(buttonSpot);

  var obj = document.getElementById(buttonSpot);
  console.log(count);
  if ((count % 2 == 0) && (!alreadyClicked.includes(buttonSpot))) {
    count++;
    alreadyClicked.push(buttonSpot);
    var newButton = assignIndex(buttonSpot);
    obj.innerHTML = "X";
    arrWinner[newButton] = 1;
    document.getElementById("whoseTurn").innerHTML = "Now it's O's turn";
    console.log(arrWinner);
    checkWinner(arrWinner);
  }
  else if ((count % 2 == 1) && (!alreadyClicked.includes(buttonSpot))) {
    count++;
    alreadyClicked.push(buttonSpot);
    var newButton = assignIndex(buttonSpot);
    obj.innerHTML = "O";
    arrWinner[newButton] = 2;  
    document.getElementById("whoseTurn").innerHTML = "Now it's X's turn";
    console.log(arrWinner);
    checkWinner(arrWinner);
  }
}

function assignIndex(button){
  if (button == "00") {
    let newButton = 0;
    console.log(newButton);
    return newButton;
  }
  if (button == "01") {
    let newButton = 1;
    console.log(newButton);
    return newButton;
  }
  if (button == "02") {
    let newButton = 2;
    console.log(newButton);
    return newButton;
  }
  if (button == "10") {
    let newButton = 3;
    console.log(newButton);
    return newButton;
  }
  if (button == "11") {
    let newButton = 4;
    console.log(newButton);
    return newButton;
  }
  if (button == "12") {
    let newButton = 5;
    console.log(newButton);
    return newButton;
  }
  if (button == "20") {
    let newButton = 6;
    console.log(newButton);
    return newButton;
  }
  if (button == "21") {
    let newButton = 7;
    console.log(newButton);
    return newButton;
  }
  if (button == "22") {
    let newButton = 8;
    console.log(newButton);
    return newButton;
  }

}

function checkWinner(a) {
  var winner = document.getElementById("WinnerMsg");

  //Check rows
  if ((a[0] + a[1] + a[2] == 3) && (a[0] != 0 && a[1] != 0 && a[2] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";

  }
  if ((a[0] + a[1] + a[2] == 6) && (a[0] != 0 && a[1] != 0 && a[2] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if ((a[3] + a[4] + a[5] == 3) && (a[3] != 0 && a[4] != 0 && a[5] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[3] + a[4] + a[5] == 6) && (a[3] != 0 && a[4] != 0 && a[5] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if ((a[6] + a[7] + a[8] == 3) && (a[6] != 0 && a[7] != 0 && a[8] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[6] + a[7] + a[8] == 6) && (a[6] != 0 && a[7] != 0 && a[8] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  //Check columns
  if ((a[0] + a[3] + a[6] == 3) && (a[0] != 0 && a[3] != 0 && a[6] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[0] + a[3] + a[6] == 6) && (a[0] != 0 && a[3] != 0 && a[6] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if ((a[1] + a[4] + a[7] == 3) && (a[1] != 0 && a[4] != 0 && a[7] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[1] + a[4] + a[7] == 6) && (a[1] != 0 && a[4] != 0 && a[7] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if ((a[2] + a[5] + a[8] == 3) && (a[2] != 0 && a[5] != 0 && a[8] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[2] + a[5] + a[8] == 6) && (a[2] != 0 && a[5] != 0 && a[8] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  //Check diagonals
  if ((a[0] + a[4] + a[8] == 3) && (a[0] != 0 && a[4] != 0 && a[8] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[0] + a[4] + a[8] == 6) && (a[0] != 0 && a[4] != 0 && a[8] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if ((a[2] + a[4] + a[6] == 3) && (a[2] != 0 && a[4] != 0 && a[6] != 0)) {
    console.log("Winner is X!")
    winner.innerHTML = "Winner is X!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
  if ((a[2] + a[4] + a[6] == 6) && (a[2] != 0 && a[4] != 0 && a[6] != 0)) {
    console.log("Winner is O!")
    winner.innerHTML = "Winner is O!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }

  if (a[0] != 0 && a[1] != 0 && a[2] != 0 && a[3] != 0 && a[4] != 0 && a[5] != 0 && a[6] != 0 && a[7] != 0 && a[8] != 0) {
    winner.innerHTML = "Draw! Please Play Again!";
    document.getElementById('gameBoard').style.display = "none";
    document.getElementById("whoseTurn").innerHTML = "";
  }
}


function start(){
  console.log('At Start');

  createBoard();

}
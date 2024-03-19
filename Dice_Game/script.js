function rollDice() {
  var dice1Value = Math.floor(Math.random() * 6) + 1;
  var dice2Value = Math.floor(Math.random() * 6) + 1;

  var dice1Element = document.getElementById("dice1");
  var dice2Element = document.getElementById("dice2");

  dice1Element.textContent = dice1Value;
  dice2Element.textContent = dice2Value;

  var total = dice1Value + dice2Value;
  var resultElement = document.getElementById("result");
  resultElement.textContent = "You rolled " + total + ".";
}

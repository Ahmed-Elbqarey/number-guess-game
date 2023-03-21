let amountValue = document.getElementById("amountValue");
let amount = document.getElementById("amount");
let betValue = document.getElementById("bet");
let submit = document.getElementById("submit");
let winner = document.querySelector(".winner");
let loser = document.querySelector(".loser");
let p = document.querySelector("p");
let numbers = Math.floor(Math.random() * 11);

function showAmount() {
  amount.innerHTML = amountValue.value;
  if (amount.innerHTML <= 0) {
    amount.style.backgroundColor = "red";
  } else {
    amount.style.backgroundColor = "green";
  }
}

submit.onclick = function () {
  if (betValue.value == numbers) {
    winner.style.display = "block";
    loser.style.display = "none";
    p.style.color = "green";
    amount.innerHTML = +amountValue.value + 500;
  } else {
    winner.style.display = "none";
    loser.style.display = "block";
    p.style.color = "red";
    amount.innerHTML = +amountValue.value - 500;
  }
  clear();
  showAmount();
};

function clear() {
  amountValue.value = amount.innerHTML;
  betValue.value = "";
}

console.log(numbers);

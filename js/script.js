const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});
document.getElementsByClassName;

//deposit btn event handler
const btnDeposit = document.getElementById("btn-deposit");
const btnWithdraw = document.getElementById("btn-withdraw");

btnDeposit.addEventListener("click", function () {
  const depositInputValue = document.getElementById("ammount-deposit").value;
  const DIValue = parseFloat(depositInputValue);
  const CdepositMoney = document.getElementById("current-deposit").innerText;
  const CdepositAmount = parseFloat(CdepositMoney);
  const totalDeposit = DIValue + CdepositAmount;
  //deposit total amount updated
  document.getElementById("current-deposit").innerText = totalDeposit;
  //update current balance with total deposit amount
  const currentBalance = document.getElementById("current-balance").innerText;
  //converted string to float
  const fCurrentBalance = parseFloat(currentBalance);
  const updatedCurrentBalance = fCurrentBalance + totalDeposit;
  document.getElementById("current-balance").innerText = updatedCurrentBalance;
});

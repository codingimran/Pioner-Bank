const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (email === "imran" && pass === "imran") {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
  } else {
    alert(
      "Thanks For Visiting My Website.\nIf you want to login please use\nEmail: imran\nPassword: imran"
    );
  }
});
document.getElementsByClassName;

//deposit btn event handler
const btnDeposit = document.getElementById("btn-deposit");

btnDeposit.addEventListener("click", function () {
  const depositInputValue = document.getElementById("amount-deposit").value;
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
imran;

//withdraw btn event handler
const btnWithdraw = document.getElementById("btn-withdraw");

btnWithdraw.addEventListener("click", function () {
  const withdrawInput = document.getElementById("amount-withdraw").value;
  const withdrawInputValue = parseFloat(withdrawInput);
  const currentWithdraw = document.getElementById("current-withdraw").innerText;
  const currentWithdrawValue = parseFloat(currentWithdraw);
  const withdrawTotalValue = withdrawInputValue + currentWithdrawValue;
  document.getElementById("current-withdraw").innerText = withdrawTotalValue;
  // updating main balance
  const currentBalance = document.getElementById("current-balance").innerText;
  const currentBalanceValue = parseFloat(currentBalance);
  // const updatedCurrentBalance = currentBalanceValue - withdrawTotalValue;
  if (currentBalanceValue <= 0) {
    alert("Insufficient Balance");
  } else if (currentBalance < withdrawTotalValue) {
    alert("Insufficient Balance");
  } else {
    const updatedCurrentBalance = currentBalanceValue - withdrawTotalValue;
    document.getElementById(
      "current-balance"
    ).innerText = updatedCurrentBalance;
  }
});

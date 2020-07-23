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

// deposit btn event handler
const btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function () {
  const depositInputValue = getInputNum("amount-deposit");
  spanTextUpdater("current-deposit", depositInputValue);
  spanTextUpdater("current-balance", depositInputValue);
});

// withdraw btn event handler
const btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function () {
  const withdrawInputValue = getInputNum("amount-withdraw");
  spanTextUpdater("current-withdraw", withdrawInputValue);
  spanTextUpdaterWithdraw("current-balance", withdrawInputValue);
});

//get input number;
function getInputNum(id) {
  const Input = document.getElementById(id).value;
  const InputValue = parseFloat(Input);
  document.getElementById(id).value = 0;
  return InputValue;
}

//span tag text updater function
function spanTextUpdater(id, inputValueVariable) {
  const Current = document.getElementById(id).innerText;
  const CurrentValue = parseFloat(Current);
  const Total = inputValueVariable + CurrentValue;
  document.getElementById(id).innerText = Total;
}

//withdraw span text updater
function spanTextUpdaterWithdraw(id, inputValueVariable) {
  const Current = document.getElementById(id).innerText;
  const CurrentValue = parseFloat(Current);
  const Total = CurrentValue - inputValueVariable;
  console.log(Total);
  document.getElementById(id).innerText = Total;
}

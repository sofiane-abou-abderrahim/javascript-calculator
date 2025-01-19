const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(usrInput.value);
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

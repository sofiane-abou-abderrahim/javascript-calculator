const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + usrInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

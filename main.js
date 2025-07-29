let ShowValue = "";

function DisplayText(value) {
  ShowValue += value
  UpdateDisplay();
}

function UpdateDisplay(){
  document.getElementById('my_calc_text').value = ShowValue;
}
function backSpace(){
  ShowValue =ShowValue.slice(0, -1);
  UpdateDisplay();
}
function ClearText() {
  ShowValue = "";
  UpdateDisplay();
}

function ShowResult(){
  try {
  const result = eval(ShowValue) ;
  ShowValue = String(result);
  UpdateDisplay();
  }
  catch (error) {
    ShowValue = 'Error';
    UpdateDisplay();
  }
}

function SquareRoot(){
  let result = Math.sqrt(parseFloat(ShowValue)); // converts the value to floating point value for it to be square rooted properly
  ShowValue = String(result.toFixed(2)); // reduces the result to the 2 decimal points
  UpdateDisplay();
  //  ShowValue = "";
}
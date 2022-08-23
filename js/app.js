/* -------------------------------------------------
              Common Javascript Functions
  ------------------------------------------------- */
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);

  if (inputFieldValue === "" || inputFieldValue != 'number') {
    alert('Please Insert a Number');
    return 0;
  }
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

/* ---------------------------------------------------
                  Player Select Button Part
  ----------------------------------------------------- */

const allButtons = document.getElementsByClassName('btn');
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function () {
    const playerName = document.getElementsByClassName('player-name');
    const playerNameValue = playerName[i].innerText;
    allButtons[i].disabled = true;
    allButtons[i].style.backgroundColor = 'gray';

    /* ---------------------------------------------
               Select Five Players Part
      --------------------------------------------- */

    const selectedPlayers = document.getElementById('selected-players');
    const playerList = document.createElement('li');
    const listLimit = selectedPlayers.childNodes.length;
    playerList.innerHTML = playerNameValue;
    if (listLimit >= 0 && listLimit <= 4) {
      selectedPlayers.appendChild(playerList);
    } else {
      alert('You have selected five players');
      allButtons[i].disabled = false;
      allButtons[i].style.backgroundColor = '';
    }
  });
}
/* ----------------------------------------------------------
               Calculating total Players Cost
  --------------------------------------------------------- */
document.getElementById('calculate').addEventListener('click', function () {
  const perPlayerExpense = getInputFieldValueById('per-player-expense');

  const selectedPlayersList = document.getElementById('selected-players');
  const totalPlayers = selectedPlayersList.childNodes.length;

  const totalPlayersExpenses = totalPlayers * perPlayerExpense;

  setTextElementValueById('all-players-expenses', totalPlayersExpenses);
});

/* -----------------------------------------------------
    Calculating Total cost including manager and coach coach Salary
    --------------------------------------------------------- */

document
  .getElementById('calculate-total')
  .addEventListener('click', function () {
    const managerSalary = getInputFieldValueById('manager-salary');
    const coachSalary = getInputFieldValueById('coach-salary');
    const selectedPlayersTotalExpenses = getTextElementValueById(
      'all-players-expenses'
    );
    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpenses =
      selectedPlayersTotalExpenses + managerSalary + coachSalary;

    setTextElementValueById('total-expenses', totalExpenses);
  });

const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const msg = document.getElementById("msg");
const players = ["X", "O"];
let current = players[0];


for (let cell of cells) {
  cell.addEventListener('click', handleCellClick);
}

function handleCellClick(event) {
  const curCell = event.target;

  let prevWinX = checkWin(players[0]);
  let prevWinO = checkWin(players[1]);

  if (curCell.innerText != '' || prevWinO || prevWinX) return;
  
  curCell.innerText = `${current}`;

  if (current == 'X') curCell.style.color = "red";
  else curCell.style.color = "blue";
  
  let win, tie;
  win = checkWin(current);
  if (!win) tie = checkTie();

  if (win || tie) return;
  
  if (current == 'X') current = players[1];
  else current = players[0];
  msg.innerText = `${current}'s turn!`;
  
  return;
}


function checkWin(current) {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const condition of winConditions) {
    const [i,j,k] = condition;
    if (cells[i].innerText == current && cells[j].innerText == current && cells[k].innerText == current) {
      msg.innerText = `Player ${current} Wins!`;
      if (current == 'X') {
        msg.style.color = "red";
        cells[i].style.backgroundColor = cells[j].style.backgroundColor = cells[k].style.backgroundColor = "#f7d0d2";
      }
      else {
        msg.style.color = "blue";
        cells[i].style.backgroundColor = cells[j].style.backgroundColor = cells[k].style.backgroundColor = "#d0d0f7";
      }
      
      confetti({
        particleCount: 1000,
        spread: 360
      });
          
      return true;
    }
  }

  return false;
}


function checkTie() {
  for (let cell of cells) 
    if (cell.innerText == '') 
      return false;

  msg.innerText = `It's a Draw!`;
  return true;
}


function restart() {
  for (let cell of cells) { 
    cell.innerText='';
    cell.style.backgroundColor="#0000000a";
  }

  current = players[0];
  msg.innerText = `${current}'s turn!`;
  msg.style.color = "#000000";

  return;
}


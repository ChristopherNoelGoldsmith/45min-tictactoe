const player1 = [];
const player2 = [];
let turn = 1;
const changeSquares = (id, playerClass) => {
  const body = document.getElementById(id).classList.add(playerClass);
};

const tickBox = (id) => {
  console.log(player1, player2, turn);
  if (turn == 1) {
    turn = turn + 1;
    changeSquares(id, 'p1-select');
    player1.push(id);
    return turnPlay(player1);
  }
  if (turn == 2) {
    turn = turn - 1;
    changeSquares(id, 'p2-select');
    player2.push(id);
    return turnPlay(player2);
  }
};

const turnPlay = (player) => {
  const winCons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['7', '5', '3'],
    ['9', '5', '1'],
  ];

  let win = [...winCons];
  console.log(win);
  const winner = win.filter((el) => {
    el = el.filter((x) => {
      console.log(player);
      if (player.includes(x)) return true;
    });
    if (el.length >= 3) return alert(`You win!`);
  });
  //if (winCons.length === 0) return alert('you win');
};

document.addEventListener('click', (ev) => {
  console.log(ev.target.id);
  return tickBox(ev.target.id);
});

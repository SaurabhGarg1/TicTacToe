
const initialState = {
  gameBoard : [
     '','','',
     '','','',
     '','',''
 ],
 turn: 'X',
 winner : ''
}

function checkWinner(board) {
    var check = (a,b,c) => {
        return !!(a + b + c).match(/^(xxx|ooo)$/gi);
    };

    if (check(board[0], board[1], board[2])) return board[0];
    if (check(board[3], board[4], board[5])) return board[3];
    if (check(board[6], board[7], board[8])) return board[6];

    if (check(board[0], board[3], board[6])) return board[0];
    if (check(board[1], board[4], board[7])) return board[1];
    if (check(board[2], board[5], board[8])) return board[2];

    if (check(board[0], board[4], board[8])) return board[0];
    if (check(board[2], board[4], board[6])) return board[2];

    if (board.join('').length === 9) return 'd';
    return '';
}

export default function (state = initialState, action){

  switch(action.type){
      case 'GRID_CLICKED' :
        if(action.payload ==='X' || action.payload === 'O' || state.winner ==='X' || state.winner==='O'){
          return state;
        }
        var newData = state.gameBoard.slice();
        newData.splice(action.location, 1, state.turn);
        return {
          gameBoard: newData,
          turn: state.turn==='X'? 'O' :'X',
          winner: checkWinner(newData)
        };

      case 'NEW_GAME' :
        return initialState;

      default:
        return state;
  }
  return state;
}


let initialState :
       gameBoard = [
          'Asaura ',' ',' ',
          ' ',' ',' ',
          ' ',' ',' '
      ]

export default function (state = initialState, action){

  switch(action.type){
      case 'GRID_CLICKED' :
        var newData = state.slice();
        newData.splice(action.location, 1, 'x');
        return newData;
  }
  return state;
}

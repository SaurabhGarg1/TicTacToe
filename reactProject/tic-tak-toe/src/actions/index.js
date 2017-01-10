export const gridClicked = (value,i) => {

//console.log("Clicked", value);
  return{
      type: 'GRID_CLICKED',
      payload: value,
      location: i
  }
}

export const newGame = () => {
  return{
      type: 'NEW_GAME'
  }
}

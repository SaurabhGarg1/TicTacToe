import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {gridClicked, newGame} from './actions/index';
import {connect} from 'react-redux';

class Grid extends Component {

 renderBoard(){

   return this.props.gameData.map((value,i) => {
     return (
         <div className="gridStyle" onClick={()=> this.props.gridClicked(value,i)}>
             <p>{value}</p>
         </div>
         );
     });
 }
 render(){

  var result = '';
      if (this.props.winner === 'O' || this.props.winner === 'X') {
          result =  this.props.winner + ' won!'
      } else if (this.props.winner === 'd') {
          result = 'Game Draw';
      }
  return (
    <div className="App">
        <h2>Tic Tak Toe Game </h2>
      {this.renderBoard()}
      <div style={{display: this.props.winner === '' ? 'none' : 'block'}}>
          <h2>{result}</h2>
          <button onClick={this.props.newGame}>New Game</button>
      </div>
    </div>
      );
  }
}

function mapStateToProps(state){
    return{
      gameData : state.ticTakGridData.gameBoard,
      winner : state.ticTakGridData.winner
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ gridClicked : gridClicked, newGame : newGame}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Grid);

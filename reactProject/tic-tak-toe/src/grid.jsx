import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {gridClicked} from './actions/index';
import {connect} from 'react-redux';

class Grid extends Component {

 renderBoard(){

   return this.props.data.map((value,i) => {
     return (
         <div className="gridStyle" onClick={()=> this.props.gridClicked(value,i)}>
             <p>{value}</p>
         </div>
         );
     });
 }
  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
      );
  }
}

function mapStateToProps(state){
    return{
      data : state.ticTakGridData
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ gridClicked : gridClicked}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Grid);

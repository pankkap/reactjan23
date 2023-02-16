import React from 'react'
import { connect } from 'react-redux';
import { buy_cake } from './CakeExample/CakeAction';

function CakeCounter_2(props) {
  return (
    <div>
      <h4 className='text-primary'>CakeShop Counter-2 </h4>
      <h2>Number of Cakes Available:{props. numberofCakes} </h2>
      <button className='btn btn-info' onClick={props.buycake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
return {
    numberofCakes:state.cake.numberofCakes
    };
}
const mapDispatchToProps = (dispatch)=>{
  return {
      buycake: ()=>{
          dispatch(buy_cake());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeCounter_2);
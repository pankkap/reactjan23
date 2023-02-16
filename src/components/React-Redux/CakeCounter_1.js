import React from 'react'
import { connect } from 'react-redux';
import { add_cake, buy_cake } from './CakeExample/CakeAction';

function CakeCounter_1(props) {
  return (
    <div>
      <h4 className='text-primary'>CakeShop Counter-1 </h4>
      <h2>Number of Cakes Available:{props. numberofCakes} </h2>
      <button className='btn btn-success' onClick={props.buycake}>Buy Cake</button>
      <button className='btn btn-primary mx-5' onClick={props.addcake}>Add Cake</button>
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
        },
        addcake: ()=>{
            dispatch(add_cake());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeCounter_1);
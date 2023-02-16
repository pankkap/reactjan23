import {ADD_CAKE, BUY_CAKE} from './CakeType'

const InitialCakeState = {numberofCakes:15}

const cakeReducer = (state=InitialCakeState, action)=>{
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                ...state,
            numberofCakes: state.numberofCakes-1
            }
        case ADD_CAKE:
            return {
                ...state,
            numberofCakes: state.numberofCakes+1
            }
        default:    
            return state;
    }   
};

export default cakeReducer;
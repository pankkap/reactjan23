const redux = require('redux')
const createStore = redux.createStore;
const combindReducers = redux.combineReducers;

// Action Types
const BUY_CAKE = "buy_cake";    
const BUY_CANDLE = "buy_candle";    

// Action Creator
const buy_cake=()=>{
    return {
        type:BUY_CAKE 
    };
}

const buy_candle=()=>{
    return {
        type:BUY_CANDLE 
    };
}

// Initial State
const InitialCakeState = {numberofCakes:20}
const InitialCandleState = {numberofCandles:40}

// Reducer
const cakeReducer = (state=InitialCakeState, action)=>{
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                ...state,
            numberofCakes: state.numberofCakes-1
            }
        default:    
            return state;
    }   
};
const candleReducer = (state=InitialCandleState, action)=>{
    switch(action.type)
    {
        case BUY_CANDLE:
            return {
                ...state,
            numberofCandles: state.numberofCandles-1
            }
        default:    
            return state;
    }   
};

const reducer = combindReducers({
    cake:cakeReducer,
    candle: candleReducer
})

const store = createStore(reducer);
console.log("Initial Stock: ",store.getState());
store.subscribe(()=>console.log("Update Stock:", store.getState()));

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_candle());
store.dispatch(buy_cake());


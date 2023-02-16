import {ADD_CAKE, BUY_CAKE} from './CakeType'

export const buy_cake =()=>{
    return {
        type:BUY_CAKE,
    };
}
export const add_cake =()=>{
    return {
        type:ADD_CAKE,
    };
}
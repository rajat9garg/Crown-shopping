import CartActionTypes from "./cart.types";

export const toggleCartHidden = () =>({
    type : CartActionTypes.TOGGLE_HIDDEN_STATE
}) 

export const addItem = (payload) =>({
    type : CartActionTypes.ADD_ITEM,
    payload : payload
})

export const removeItem = (payload) =>({
    type : CartActionTypes.REMOVE_ITEM,
    payload : payload
})

export const decreaseItemCount = (payload) =>({
    type : CartActionTypes.DECREASE_ITEM_COUNT,
    payload : payload
})
import CartActionTypes from "./cart.types";
import {AddItemsToCart,decreaseItemsFromCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_HIDDEN_STATE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems : AddItemsToCart(state.cartItems,action.payload)
      }
    
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems : state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        }
      case CartActionTypes.DECREASE_ITEM_COUNT:
        return{
          ...state,
          cartItems : decreaseItemsFromCart(state.cartItems,action.payload)
        }

    default:
      return {
        state,
        cartItems : []
      };
  }
};

export default cartReducer;

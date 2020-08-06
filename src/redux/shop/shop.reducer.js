import shopActionTypes from './shop.types'

const INITIAL_STATE = {
 shop : null,
 isFetching : false,
 errorMessage : undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching : true
      }
      case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
          ...state,
          isFetching : false,
          shop : action.payload
        }
      case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching : false,
        errorMessage : action.payload
      }

    default:
      return state;
  }
};

export default shopReducer;

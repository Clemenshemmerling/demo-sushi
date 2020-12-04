import { 
  ADD_TO_CART_BEGIN, ADD_TO_CART_SUCCESS,
  RESET_CART_BEGIN, RESET_CART_SUCCESS,
} from './types';

export const addCart = product => {
  return dispatch  => { 
    dispatch({ type: ADD_TO_CART_BEGIN });
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: product
    });
  }
}

export const resetCart = () => {
  return dispatch => {
    dispatch({ type: RESET_CART_BEGIN });
    dispatch({ type: RESET_CART_SUCCESS });
  }
}
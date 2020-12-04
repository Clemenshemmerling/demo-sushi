import produce from 'immer';
import { 
  ADD_TO_CART_BEGIN, ADD_TO_CART_SUCCESS,
  RESET_CART_BEGIN, RESET_CART_SUCCESS 
} from '../actions/types';

const initialState = {
  products: [],
  info: '',
  error: null,
  cartQty: 0,
  total: 0,
  loading: false
}

const reduce = produce((draft, action) => {
  switch(action.type) {
    case RESET_CART_BEGIN:
    case ADD_TO_CART_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case ADD_TO_CART_SUCCESS:
      draft.loading = false;
      draft.products.push(action.payload);
      draft.info += `Producto: ${action.payload.name}\nCantidad: ${action.payload.quantity}\n`;
      draft.cartQty += parseInt(action.payload.quantity, 10);  
      draft.total += parseInt((action.payload.price * action.payload.quantity), 10);
      draft.error = null;
      return;
    case RESET_CART_SUCCESS:
      draft.loading = false;
      draft.products = [];
      draft.cartQty = 0;
      draft.total = 0;
      draft.total = 0;
      draft.error = null;
      return;
    default:
      return;
  }
}, initialState);

export default reduce;
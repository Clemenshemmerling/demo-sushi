import React, { useState } from 'react';
import './styles/Cart.css'
import { Badge } from 'react-bootstrap';
import CheckoutModal from './modal/CheckoutModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({qty, info, total, products, resetCart}) => {
  const [ show, setShow ] = useState(false);

  return(
    <>
      <div className="cart-ctn" onClick={()=> setShow(true)}>
        <Badge pill variant="light">
          {qty}
        </Badge>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <CheckoutModal 
        info={info}
        show={show}
        total={total}
        setShow={setShow}
        products={products}
        resetCart={resetCart}
      />
    </>
  )
}

export default Cart;
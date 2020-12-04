import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles/Products.css'
import Cart from './Cart';
import { addCart, resetCart } from '../actions/add-cart.actions';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import product1 from '../assest/img/product1.jpg';
import product2 from '../assest/img/product2.jpg';
import product3 from '../assest/img/product3.jpg';
import product4 from '../assest/img/product4.jpg';
import product5 from '../assest/img/product5.jpg';

const Products = ({
  qty,
  info,
  total, 
  addCart, 
  products,
  resetCart
}) => {
  const [ sushis, setSushi ] = useState([
    {
      id: 1,
      name: "California Roll",
      description: "Cangrejo, pepino, aguacate y queso crema",
      price: 35,
      quantity: 0,
      img: product1
    },
    {
      id: 2,
      name: "Philadelphia Roll",
      description: "Slamon ahumado, pepino, aguacate y queso crema",
      price: 40,
      quantity: 0,
      img: product2
    },
    {
      id: 3,
      name: "Town Especial",
      description: "Empanizado, Camaron frito y queso crema",
      price: 40,
      quantity: 0,
      img: product3
    },
    {
      id: 4,
      name: "Orange Chicken Roll",
      description: "Empanizado, Orange chincken, zanahoria y queso crema",
      price: 45,
      quantity: 0,
      img: product4
    },
    {
      id: 5,
      name: "Fuji Roll",
      description: "Camaron tempurizado, salsa fuji, agucate y queso crema",
      price: 45,
      quantity: 0,
      img: product5
    },
  ]);

  const handleSetQuantity = (event, index) => {
    const newArr = [...sushis];
    newArr[index].quantity = event.target.value;
    setSushi(newArr);
  }

  const handleAddToCart = (sushi) => {
    addCart(sushi);
  }

  return (
    <div className="container">
      <Row>
        <Col xs={12} className="mt-5">
          <h1 className="mb-4 text-white text-center">Ordenar</h1>
        </Col>
          {sushis.map((sushi, index) => (
            <Col xs={12} md={4} lg={3} key={sushi.id}>
              <div className="container mb-4">
                <Card>
                  <Card.Img variant="top" src={sushi.img} />
                  <Card.Body>
                    <Card.Title>{sushi.name}</Card.Title>
                    <Card.Text>
                      {sushi.description}
                    </Card.Text>
                    <Card.Text>
                      Q{sushi.price}
                    </Card.Text>
                    <Form.Control
                      min={0}
                      type="number"
                      name="Cantidad"
                      className="mb-4"
                      value={sushi.quantity}
                      onChange={(e) => handleSetQuantity(e, index)}
                    />
                    <Button 
                      block 
                      variant="danger" 
                      disabled={sushi.quantity < 1} 
                      onClick={() => handleAddToCart(sushi)}
                    >Agregar a carrito</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
      <Cart 
        qty={qty}
        info={info}
        total={total} 
        products={products}
        resetCart={resetCart} 
      />
    </div>
  )
}

const mapState = (state, props) => ({
  qty: state.Cart.cartQty,
  info: state.Cart.info,
  total: state.Cart.total,
  products: state.Cart.products
})

const mapDispatch = {
  addCart,
  resetCart
}

export default connect (
  mapState,
  mapDispatch
)(Products);
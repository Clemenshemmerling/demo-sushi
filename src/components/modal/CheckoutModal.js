import React from 'react';
import {Row, Col, Modal, Button } from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';

const CheckoutModal = ({info, show, total, setShow, products, resetCart}) => {
  const handleRestShop = () => {
    resetCart();
    setShow(false);
  }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          Solicitar pedido
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {products.length > 0 && (
          <div className="container">
            {products.map(product => (
              <Row key={product.name + product.quantity}>
                <Col xs={12} md={4} className="mb-3">Cantidad: {product.quantity}</Col>
                <Col xs={12} md={4} className="mb-3">Producto: {product.name}</Col>
                <Col xs={12} md={4} className="mb-3">Precio: Q{product.price}</Col>
              </Row>
            ))}
            <Row>
              <Col xs={12}>
                <h5>Total: Q{total}</h5>
              </Col>
              <Col>
                <ReactWhatsapp number="+50250166920" message={info} className="border-none" onClick={handleRestShop}>
                  <Button variant="outline-info" block>Ordenar</Button>
                </ReactWhatsapp>
              </Col>
            </Row>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default CheckoutModal;
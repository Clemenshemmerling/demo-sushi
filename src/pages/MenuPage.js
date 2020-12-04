import React from 'react';
import { Image, Row, Col } from "react-bootstrap";
import Menu from '../assest/img/menu.jpg';

const MenuPage = () => {
  return (
    <div className="mt-5  w-100">
      <Row className="justify-content-center mt-5">
        <Col xs={12} className="mt-5">
          <h1 className="mb-4 text-white text-center">Menú</h1>
        </Col>
        <Col xs={10} md={5}>
          <Image src={Menu} fluid thumbnail />
        </Col>
      </Row>
    </div>
  );
}

export default MenuPage;
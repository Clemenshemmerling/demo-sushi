import React from 'react';
import '../styles/PublicNavbar.css';
import ReactWhatsapp from 'react-whatsapp';
import { Link } from "react-router-dom";
import Logo from "../../assest/img/logo.jpg";
import WhatsappLogo from '../../assest/img/whatsapp.png';
import FacebookLogo from '../../assest/img/facebook.png';
import { Nav, Image, Navbar } from "react-bootstrap";

const PublicNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-light border-bottom-red nav-ctn">
      <Navbar.Brand href="#home">
        <div className="img-ctn">
          <Image src={Logo} fluid roundedCircle />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} className="text-muted m-2" eventKey="1" to="/">Home</Nav.Link>
          <Nav.Link as={Link} className="text-muted m-2" eventKey="2" to="/menu">Menú</Nav.Link>
          <Nav.Link as={Link} className="text-muted m-2" eventKey="3" to="/shop">Comprar</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey="4">
            <ReactWhatsapp number="+50250166920" message="Deseo realizar una orden" className="border-none">
              <div className="social-ctn">
                <Image src={WhatsappLogo} fluid roundedCircle />
              </div>
            </ReactWhatsapp>
          </Nav.Link>
          <Nav.Link eventKey="5" target="_blank" href="https://www.facebook.com/sushitowngt">
            <div className="social-ctn">
              <Image src={FacebookLogo} fluid roundedCircle />
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PublicNavbar;

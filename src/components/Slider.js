import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../assest/img/slide1.jpg';
import Slide2 from '../assest/img/slide2.jpg';
import Slide3 from '../assest/img/slide3.jpg';
import './styles/Slider.css';

const Slider = () => {
  return (
    <div className="slider-ctn">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fixed-height"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

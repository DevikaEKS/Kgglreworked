import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerimg1 from "../../Asset/Group 270990052.png";
import bannerimg2 from "../../Asset/Group 270990056.png";
import bannerimg3 from "../../Asset/Group 270990059.png";
import bannerimg4 from "../../Asset/Group 270990057.png";
import './Banner.css'; // Import the custom CSS
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg1} alt="First slide"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h1 className='itheading'>Harness Unmatched Business Growth with <br/><span className='bannerkg'>KG Genius Labs</span> </h1>
          <p className='itpara'>Shape Your Ambitions into Tangible Results</p>
          <button className='btnshading'>Know More <FontAwesomeIcon icon={faAngleRight} style={{color:"BF1A36"}}/></button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg2} alt="Second slide"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h1 className='itheading'>Rise and Grow with<br/><span className='bannerkg1'>SAP</span></h1>
          <p className='itpara'>Discover how we streamline your operations and drive growth with tailored SAP implementations and support.</p>
          <button className='btnshading1'>Consult with Our Experts<FontAwesomeIcon icon={faAngleRight} style={{ color: 'fff' }} className='mx-1' /></button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg3} alt="Third slide"/>
        <Carousel.Caption className="carousel-caption-centered">
        <h1 className='sapheading'>Empower Your Business with Optimized <span className='bannerkg1'>Infrastructure Solutions</span></h1>
          <p className='itpara'>We provide comprehensive IT Infrastructure Services to ensure reliability and drive success.</p>
          <button className='btnshading1'>Explore More <FontAwesomeIcon icon={faAngleRight} style={{color:"fff"}} className='mx-1'/></button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg4} alt="Fourth slide"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h3 className='dmheading pb-2'>Revamp Your Online Presence with Our Strategic
          <span className='bannerkgdm'> Digital Marketing Magic</span></h3>
          <p className='itpara'>We offer innovative digital marketing services to enhance your brand and drive results.</p>
          <button className='btnshading1 mb-5'>Explore More <FontAwesomeIcon icon={faAngleRight} style={{color:"fff"}} className='mx-1'/></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

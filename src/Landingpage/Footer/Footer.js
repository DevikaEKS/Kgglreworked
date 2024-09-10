import React from 'react';
import kgisllogo from '../../Asset/kgisl-logo.png';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footercard from '../Footercard/Footercard';

function Footer() {
  return (
    <div className='container-fluid pt-5 footerbg px-5 '>  

      <div className='row'>
        <div className='col'>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Blogs</p>
        </div>
        <div className='col'>
          <h4>Services</h4>
          <p>SAP</p>
          <p>IT</p>
          <p>Digital Marketing</p>
          <p>HR</p>
        </div>
        <div className='col'>
          <h4>Our Branches</h4>
          <h6 className='mt-3'>Coimbatore</h6>
          <p>KGISL Campus, 365 Thudiyalur Road, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.</p>
        </div>
        <div className='col'>
          <h6 className='pt-5'>Dubai</h6>
          <p>Ideaspace Business Center, Millennium Executive Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</p>
        </div>
        <div className='col'>
          <p>A Division of</p>
          <a href="https://www.kgisl.com/">
            <img src={kgisllogo} alt="KGISL Logo" className="kgisllogo" />
          </a> 
          <div className='d-flex flex-column justify-content-center'>
            <div>
          <p className='mt-3 text-center'>Follow Us on</p> 
          </div>
          <div className='text-center'>
          <a href="https://www.facebook.com/people/KG-Geniuslabs/pfbid02QCbE8JcAes9juSSiChZ9NevWgGuUAhWjch68nJ8XSUCsSEfJBcadSXZ44EirVJY4l/"><FontAwesomeIcon icon={faFacebook} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
          <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
          <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/"><FontAwesomeIcon icon={faLinkedin} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;




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
        <div className='col-sm-4 col-lg-2'>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Blogs</p>
        </div>
        <div className='col-sm-4 col-lg-2'>
          <h4>Services</h4>
          <p>SAP Services</p>
          <p>IT Infrastructure Management</p>
          <p>Digital Marketing Services</p>
          <p>HR Consultancy</p>
        </div>
        <div className='col-sm-4 col-lg-2'>
          <h4>Our Branches</h4>
          <h6 className='mt-3'>Coimbatore</h6>
          <p>KGISL Campus, 365 Thudiyalur Road, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.</p>
        </div>
        <div className='col-sm-4 col-lg-2'>
          <h6 className='pt-5'>Dubai</h6>
          <p>Ideaspace Business Center, Millennium Executive Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</p>
        </div>
        <div className='mx-5 col-sm-4 col-lg-3'>
          <p>A Division of</p>
          <a href="https://www.kgisl.com/"><img src={kgisllogo} alt="KGISL Logo" className="kgisllogo" /></a> 
          <div className='d-flex flex-column justify-content-center'>
          <div>
          <p className='mt-3'>Follow Us on</p>                                                                                    
          </div>
          <div className='pb-4'>
          <a href="https://www.facebook.com/profile.php?id=61557350633724"><FontAwesomeIcon icon={faFacebook} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href="https://www.linkedin.com/company/kg-geniuslabs/"><FontAwesomeIcon icon={faLinkedin} className="text-white mx-2"></FontAwesomeIcon></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;




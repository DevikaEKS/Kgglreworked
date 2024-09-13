import React from 'react';
import "./Footercard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footercard() {
  return (
    <div className='container-fluid bgclrfooter mt-5 py-3'>
    <div className='card container footer-wrapper rounded-0 px-4'>
      <div className='row justify-content-center text-center'>
        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
        <a href="mailto:info@kggeniuslabs.com">
          <FontAwesomeIcon icon={faEnvelope} className="hoverani mb-2" /></a>  
          <div>
            <h5 className='contactmain'>Email Us</h5>
            <p className='contactpara'>info@kggeniuslabs.com</p>
          </div>
        </div>

     
        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
        <a href="tel:9363466093"><FontAwesomeIcon icon={faPhone} className="hoverani mb-2" /></a>
          <div>
            <h5 className='contactmain'>Contact Us</h5>
            <p className='contactpara'>+91-9363466093</p>
          </div>
        </div>

        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
        <a href='https://www.google.com/maps/place/Kgisl+Campus,+Kg+Campus,+365,+Thudiyalur+Rd,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035/@11.0834617,76.9972016,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f792ec6576e7:0xf5004dde7820f925!8m2!3d11.0834617!4d76.9972016!16s%2Fg%2F11sn7nc9tc?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'>
        <FontAwesomeIcon icon={faLocationDot} className="hoverani mb-2" />
        </a>
         
          <div>
            <h5 className='contactmain'>Location</h5>
            <p className='contactpara'>KGISL Campus</p>
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
}

export default Footercard;

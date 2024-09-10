import React from 'react';
import "./Footercard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footercard() {
  return (
    <div className='container-fluid bgclr mt-5 py-3'>
    <div className='card container footer-wrapper rounded-0 px-4'>
      <div className='row justify-content-center text-center'>
        {/* Email Section */}
        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
          <FontAwesomeIcon icon={faEnvelope} className="hoverani mb-2" />
          <div>
            <h5 className='contactmain'>Email Us</h5>
            <p className='contactpara'>info@kggeniuslabs.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
          <FontAwesomeIcon icon={faPhone} className="hoverani mb-2" />
          <div>
            <h5 className='contactmain'>Contact Us</h5>
            <p className='contactpara'>+91-9363466093</p>
          </div>
        </div>

        {/* Location Section */}
        <div className='col-12 col-lg-4 d-flex flex-column align-items-center mb-3'>
          <FontAwesomeIcon icon={faLocationDot} className="hoverani mb-2" />
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

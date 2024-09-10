import React from 'react';
import missionim from "../Asset/vision.png";
import visionim from "../Asset/mission.png";
import Typewriter from 'typewriter-effect';
import "./Mission.css";

function Mission() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center missionparts'>
        {/* Mission Section */}
        <div className='col-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mb-4 mb-md-0'>
          <div className='mission-content text-center text-md-start'>
            <div className='fixed-width-text'>
              <h1 className='serviceheading'>
                <Typewriter
                  options={{
                    strings: ['MISSION'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'vhead',
                    cursor: '', // Disable cursor
                  }}
                />
              </h1>
            </div>
            <div className='heading-with-icon mt-5'>
              <h3 className='credhead'>Mission Statement</h3>
            </div>
            <p className='section-para'>
              KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.
            </p>
          </div>
          <img src={visionim} className='section-image ms-0 ms-md-4 mt-3 mt-md-0' alt="Mission" />
        </div>

        {/* Vision Section */}
        <div className='col-12 col-lg-6 d-flex flex-column flex-md-row align-items-center'>
   
          <img src={missionim} className='section-image me-0 me-md-4 mb-5 pb-5 mb-md-0' alt="Vision" />
          <h1 className='serviceheading d-block d-md-none'>
                <Typewriter
                  options={{
                   strings: ['VISION'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'vhead1',
                    cursor: '', // Disable cursor
                  }}
                />
              </h1>
          <div className='vision-content text-center text-md-start'>




            
            <div className='heading-with-icon '>
              <h3 className='credhead'>Vision Statement</h3>
            </div>
            <p className='section-para '>
              Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.
            </p>
            <div className='fixed-width-text'>
              <h1 className='serviceheading pt-5 d-none d-md-block'>
                <Typewriter
                  options={{
                   strings: ['VISION'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'vhead1',
                    cursor: '', // Disable cursor
                  }}
                />
              </h1>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default Mission;

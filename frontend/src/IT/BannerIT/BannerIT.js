import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import LMS from '../LMS/LMS';
import Crmdemobook from '../Demobook/Crmdemobook';
import "./BannerIT.css"
import Footercard from '../../Landingpage/Footercard/Footercard';
import Footer from '../../Landingpage/Footer/Footer';
import Techstack from '../Techstack/Techstack';
import Demobook from '../Demobook/Demobook';
import Contactformit from '../Contactformit/Contactformit';
import CRM from '../CRM/CRM';
import CRMSolutions from '../CRMSolutions/CRMSolutions';
import Itfooter from '../ITFooter/Itfooter';
import Ourservices from '../Ourservices/Ourservices';
import InsightsIT from '../InsightsIT/InsightsIT';
import Bespoke from '../Bespoke/Bespoke';


function BannerIT() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showSubLinks, setShowSubLinks] = useState(false);

  // const handleMainLinkClick = (section) => {
  //   if (section === 's4hana') {
  //     setShowSubLinks(!showSubLinks); 
  //   } else {
  //     setShowSubLinks(false); 
  //     setSelectedComponent(null); 
  //   }
  // };

  const handleMainLinkClick = (section) => {
    if (section === 's4hana') {
      setShowSubLinks(!showSubLinks); 
      setSelectedComponent(null); // Reset selectedComponent when moving to "Products and Solutions"
    } else if (section === 'support') {
      setSelectedComponent('support'); // Set selectedComponent to 'support' for Bespoke Applications
      setShowSubLinks(false); // Hide any sub-links when 'Bespoke Applications' is clicked
    } else {
      setShowSubLinks(false); 
      setSelectedComponent(null); 
    }
  };
  
  

  const handleSubLinkClick = (component) => {
    setSelectedComponent(component); 
  };

  return (
    <>
      <div>
        <div className='container-fluid sapbannerpart' id='ITbanner'>
          <div className='py-4'>
            <div className='row'>
              <div className='sapbannertext p-sm-3 p-md-5'>
                <h1>
                  Enhancing Your Business with Personalized IT Solutions and Custom
                  Applications for Strategic Development.
                </h1>
                <div className='d-flex flex-column flex-lg-row justify-content-start fnt'>
                  <div className='col-sm-12 col-lg-7'>
                    <Link
                      to="#"
                      onClick={() => handleMainLinkClick('s4hana')}
                      className={`linkhover ${selectedComponent === 'lms' ? 'active-link' : ''}`}>
                      Products and Solutions <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    {/* Sub-links for Products and Solutions */}
                    {showSubLinks && (
                      <div className='sub-links mt-2'>


<Link 
  to="#"
  onClick={() => handleSubLinkClick('lms')} 
  className="d-block text-decoration-none crmtext">
  - Learning Management System (LMS)
</Link>
<Link 
  to="#"
  onClick={() => handleSubLinkClick('crm')} 
  className="d-block text-decoration-none crmtext">
  - Customer Relationship Management (CRM)
</Link>







                        {/* <Link 
                          to="#"
                          onClick={() => handleSubLinkClick('lms')} 
                          className="d-block text-decoration-none crmtext">
                          - Learning Management System (LMS)
                        </Link>
                        <Link 
                          to="#"
                          onClick={() => handleSubLinkClick('crm')} 
                          className="d-block text-decoration-none crmtext">
                          - Customer Relationship Management (CRM)
                        </Link> */}
                      </div>
                    )}
                  </div>

                  <div className='col-sm-12 col-lg-5'>
                    {/* <Link
                      to="#"
                      onClick={() => handleMainLinkClick('support')}
                      className={`linkhover ${selectedComponent === 'support' ? 'active-link' : ''}`}>
                      Bespoke Applications <FontAwesomeIcon icon={faAngleRight} />
                    </Link> */}
                    <Link
  to="#"
  onClick={() => handleMainLinkClick('support')}
  className={`linkhover ${selectedComponent === 'support' ? 'active-link' : ''}`}>
  Bespoke Applications <FontAwesomeIcon icon={faAngleRight} />
</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Below Banner */}
        <div className='content-below-banner'>
          {/* Show default message if no component is selected */}
          {!selectedComponent && (
            <div className="welcome-message">
              
              <div className='container-fluid itheaderpart'>

                <div className='row py-5 text-center mx-sm-1 mx-md-5'>
                
                  <div>  
                    <h1 className='headingIT my-2'>IT Infrastructure Management Service</h1>
                    <h5 className='optpara'><b>Optimize Your IT Infrastructure for Peak Performance</b></h5>
                    <p className='py-4 itparagraph'>In today’s digital era, efficient IT infrastructure is the backbone of business success. Our IT Infrastructure Management Service ensures your critical systems and networks are always running smoothly, secure, and scalable. With a dedicated team of experts, we provide end-to-end management, from setup and maintenance to security and upgrades, allowing you to focus on driving business growth.</p>
                  </div>
            </div>
            </div>
            <Ourservices/>
            <Techstack/>
            <InsightsIT/>
            <Contactformit/>
              <Footercard />
           <Itfooter/>
            </div>
          )}

          {/* Show LMS content */}
          {selectedComponent === 'lms' && (
            <>
              <LMS />
              <Techstack/>
              <InsightsIT/>
              <Demobook/>
              <Contactformit/>
              <Footercard />
              <Itfooter/>
            </>
          )}

          {/* Show CRM content */}
          {selectedComponent === 'crm' && (
            <>
              <CRM/>
              <CRMSolutions/>
              <Techstack/>
              <InsightsIT/>
              <Crmdemobook />
              <Contactformit/>
              <Footercard />
              <Itfooter/>
            </>
          )}

          {/* Show Support content */}
          {selectedComponent === 'support' && (
            <>
            <Bespoke/>
            <Techstack/>
              <InsightsIT/>
              <Contactformit/>
              <Footercard />
              <Itfooter/>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BannerIT;

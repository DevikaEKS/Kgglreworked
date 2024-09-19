import React,{useEffect} from 'react'
import kgisllogo from '../../Asset/kgisl-logo.png';
import "./Footerdm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Link as Sclink } from "react-scroll";
function Footerdm() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className='container-fluid pt-5 footerbg px-5 '>  
    <div className='row'>
      <div className='col-sm-4 col-lg-2'>
        <h4>Quick Links</h4>
        <Link to="/" className="nav-link"><p>Home</p></Link>
        <Link to="/aboutuspage" className="nav-link"><p>About Us</p></Link>
        <Sclink to="DMService" className="nav-link"><p>Services</p></Sclink>  
        <Link to="/blogs" className="nav-link"><p>Blog</p></Link>
      </div>
      <div className='col-sm-4 col-lg-2'>
      <h4>Services</h4>
      <Link to="/sapb" className="nav-link"><p>SAP Services</p></Link>
        <p>IT Services</p>
        <Sclink to='DMBanner'><p>Digital Marketing Services</p></Sclink>
       
        <Link to="/hr" className="nav-link"><p>HR Consultancy</p></Link>
     
      </div>
      <div className='col-sm-4 col-lg-2'>
<h4>Our Branches</h4>
<p>
  <a
    href='https://www.google.com/maps/place/KG+Genius+Labs/@11.0831794,76.9987774,15z/data=!4m6!3m5!1s0x2b66dd2813006db:0x8578e0607bb91ee0!8m2!3d11.0831794!4d76.9987774!16s%2Fg%2F11lp1km093?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
    className='text-decoration-none text-light'
    target='_blank'
    rel='noopener noreferrer'>
    Coimbatore
 
  <span className='d-block mt-2'>
    KGiSL Campus, 365 Thudiyalur Road, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.
  </span>
  </a>
</p>
</div>

      <div className='col-sm-4 col-lg-2'>
<p>
  <a
    href='https://www.google.com/maps?q=Ideaspace+Business+Center,+Millennium+Executive+Tower,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates'
    className='text-decoration-none text-light'
    target='_blank'
    rel='noopener noreferrer'
  >
    <span className='d-block pt-5 h6'>Dubai</span>
    <span>Ideaspace Business Center, Millennium Executive Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</span>
  </a>
</p>
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
        <a href='https://x.com/KGGeniusLabs'><FontAwesomeIcon icon={faSquareXTwitter} className="text-white mx-2"></FontAwesomeIcon></a>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footerdm
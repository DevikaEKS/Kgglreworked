import React from 'react'
import img1 from "../Asset/discuss.png";
import "./Aboutus.css";
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div className='container textclr' id='About'>
        <div className='row abpart'>
            <div className='col-sm-12 col-md-6 textclr about-title'>
            <div className='aboutpart'>
            <p className='my-5 aboutheading'><b>About Us</b></p> 
            <p className='abouttext'>With a rich legacy spanning decades, The KG Group has led the way in tech advancements.
KGiSL, a pioneer in South India 25 years ago, is now a fast-growing IT company,
spanning 7 countries across the Indo-Pacific. </p>
            <p className='abouttext'>KG Genius Labs, the latest venture, offers customized solutions globally.
Our expertise includes SAP, LMS, CRM, IT Services,
Bespoke Application Development, and Digital Marketing. We are the preferred
partner for forward-thinking business collaborations.</p>
            <div className='knowmore text-end'><Link to="/aboutus">Know More</Link></div>
            </div>
            </div>
            <div className='col-sm-12 col-md-5 pt-5 ms-1'>
            <img src={img1} title='About KG Genius Labs' alt='We empower businesses with advanced IT infrastructure solutions that fuel growth and success. Focused on innovation, we provide tailored services designed to meet diverse client needs' className='aboutimg'/>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
import React from 'react'
import img1 from "../../Asset/discuss.png";
import "./Aboutus.css";
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div className='container textclr'>
        <div className='row abpart'>
            <div className='col-sm-12 col-lg-6 textclr about-title'>
            <div className='aboutpart'>
            <p className='my-5 aboutheading'>About Us</p> 
            <p className='abouttext'>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries. </p>
            <p className='abouttext'>KG Genius Labs delivers tailored global solutions in SAP, LMS, CRM, and digital services, making us the go-to partner for innovative business collaborations.</p>
            <div className='knowmore text-end'><Link to="/aboutus">Know More</Link></div>
            </div>
            </div>
            <div className='col-sm-12 col-lg-5 pt-5'>
            <img src={img1} alt='about us' className='aboutimg'/>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
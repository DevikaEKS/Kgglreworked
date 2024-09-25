import React from 'react'
import "./Dmblogview.css";
import dmblogim from "../Asset/blogpart.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Dmblogview() {
    const navigate = useNavigate(); 
    const handlesappage = () => {
        navigate('/'); 
    };
  return (
    <div className='container blogpartcontent'>
        <div className='row m-2 my-4'>
           <div className='col-sm-12 col-md-6'>
            <h1 className=' py-3'><FontAwesomeIcon icon={faAngleLeft} onClick={handlesappage} style={{ cursor: 'pointer' }} /><b>Top 10 SEO strategies for a business</b></h1>
            <img src={dmblogim} alt='Seo Strategies' className='imdm mx-sm-1 mx-md-3 '/>
            <ol className='py-4'>
                <li><b>Keyword Research:</b> Discover appropriate keywords and phrases that are relevant to your business and resonate with your target audience.</li>
                <li><b>On-Page Optimization:</b> Enhance your website's meta tags, headings, and content by integrating specific keywords for optimization.</li>
                <li><b>Quality Content Creation:</b> Create valuable, pertinent content that offers benefits to your audience and seamlessly integrates relevant keywords.</li>
                <li><b>Mobile Optimization:</b> Make sure your website is mobile-friendly to enhance user experience and boost its ranking on search engines.</li>
                <li><b>Page Speed Optimization:</b> Enhance website loading speed to improve user experience and elevate search engine rankings.</li>
                <li><b>Link Building:</b> Acquire high-quality backlinks from authoritative websites to increase your website's authority and improve search engine rankings.</li>
                <li><b>Local SEO:</b> Enhance local search rankings by claiming and optimizing your Google My Business listing, and ensuring uniform NAP (Name, Address, Phone Number) details across online directories.</li> 
                <li><b>Technical SEO:</b> Make sure your website's technical elements, like crawlability, indexing, and site structure, are optimized for search engines. </li>  
                <li><b>User Experience (UX) Optimization:</b> Improve the user experience on your website by enhancing navigation, lowering bounce rates, and offering valuable content.</li> 
                <li><b>Analytics and Monitoring:</b> Monitor and assess website performance with tools such as Google Analytics to gauge the impact of your SEO strategies and guide data-based decisions.
                </li>       
            </ol>
            <p>Implementing these SEO strategies can help businesses improve their online visibility, attract more organic traffic, and drive sustainable growth.
            </p>
        </div>
      
        <div className='col-sm-12 col-lg-4 mx-4'>
                    <div className='card m-2 p-5 shadowcard'>
                        <h4 className='rqtxt'>Request Meeting with Our Experts</h4>
                        <label htmlFor='email' className='email-label'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email address'
                            className='inpbrd' />
                        <br/>
                        <input type='submit' className='subbtnclr' />
                    </div>

                    <div>
                        <h2 className='my-4'>Latest Updates</h2>
                        <div className='card shadowcard my-2'>
    <img src={dmblogim}  alt="Latest Update" className='card-img-top' />
    <div className='card-body'>
        <h5 className='card-title'>What benefits does organic conversion provide for businesses?</h5>
       
    </div>
</div>

<div className='card shadowcard my-2'>
    <img src={dmblogim}  alt="Latest Update" className='card-img-top' />
    <div className='card-body'>
        <h5 className='card-title'>The benefits of social media marketing in business</h5>    
    </div>
</div>
</div>
 </div>
        </div>
        </div>
  )
}

export default Dmblogview
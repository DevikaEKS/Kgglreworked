import React, { useState } from 'react';
import "./Dmblogview.css";
import dmblogim from "../Asset/blogpart.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Footercard from '../../Landingpage/Footercard/Footercard';
import Footer from '../../Landingpage/Footer/Footer';
import Menubar from '../../Landingpage/Menubar/Menubar';
import dmblg2 from "../Asset/image3.png";
import dmblg3 from "../Asset/Businessman.png";
import axios from 'axios';

function Dmblogview() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handlesappage = () => {
    navigate('/');
  };


  const validateURL = (inputURL) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + 
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$', 'i'
    );
    return !!urlPattern.test(inputURL);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateURL(url)) {
      setError('Please enter a valid URL');
      return;
    }
    setError('');

    axios.post(`http://localhost:5000/add-url`,{url})
    .then(res=>{
        console.log(res);
        if(res.data.message === "URL inserted successfully"){
            alert("Submitted Successfully")
            setUrl('')
        }
        else{
            alert("Failed to insert URL")
        }
    }).catch(err=>{
        console.log(err);
        
    })
  };

  return (
    <div className='container-fluid blogpartcontent m-0 p-0'>
      <Menubar />
      <div className='row  my-3 mx-1'>
        <div className='col-sm-12 col-md-7'>
          <h1 className='py-3'><b>Top 10 SEO strategies for a business</b></h1>
          <img src={dmblogim} alt='Seo Strategies' className='imsp ' />
          <ol className='py-4'>
            <li><b>Keyword Research:</b> Discover appropriate keywords and phrases that are relevant to your business and resonate with your target audience.</li>
            <li><b>On-Page Optimization:</b> Enhance your website's meta tags, headings, and content by integrating specific keywords for optimization.</li>
            <li><b>Quality Content Creation:</b> Create valuable, pertinent content that offers benefits to your audience and seamlessly integrates relevant keywords.</li>
            <li><b>Mobile Optimization:</b> Make sure your website is mobile-friendly to enhance user experience and boost its ranking on search engines.</li>
            <li><b>Page Speed Optimization:</b> Enhance website loading speed to improve user experience and elevate search engine rankings.</li>
            <li><b>Link Building:</b> Acquire high-quality backlinks from authoritative websites to increase your website's authority and improve search engine rankings.</li>
            <li><b>Local SEO:</b> Enhance local search rankings by claiming and optimizing your Google My Business listing, and ensuring uniform NAP (Name, Address, Phone Number) details across online directories.</li>
            <li><b>Technical SEO:</b> Make sure your website's technical elements, like crawlability, indexing, and site structure, are optimized for search engines.</li>
            <li><b>User Experience (UX) Optimization:</b> Improve the user experience on your website by enhancing navigation, lowering bounce rates, and offering valuable content.</li>
            <li><b>Analytics and Monitoring:</b> Monitor and assess website performance with tools such as Google Analytics to gauge the impact of your SEO strategies and guide data-based decisions.</li>
          </ol>
          <p>Implementing these SEO strategies can help businesses improve their online visibility, attract more organic traffic, and drive sustainable growth.</p>
        </div>

        <div className='col-sm-12 col-md-4'>
          <div className='card p-4 shadowcard'>
            <h4 className='rqtxt'>Free SEO Audit</h4>

            <form onSubmit={handleSubmit}>
              <input
                type='url'
                id='companywebsite'
                className='form-control form-control1'
                name='companyWebsite'
                placeholder='Enter Website URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <br />
              <input type='submit' className='subbtnclr' value='Submit' />
            </form>
          </div>

          <div>
            <h2 className='my-4'><b>Latest Updates</b></h2>
            <div className='card shadowcard my-4'>
              <img src={dmblg3} alt="Latest Update" className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>What benefits does organic conversion provide for businesses?</h5>
              </div>
            </div>

            <div className='card shadowcard my-4'>
              <img src={dmblg2} alt="Latest Update" className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>The benefits of social media marketing in business</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footercard />
      <Footer />
    </div>
  );
}

export default Dmblogview;

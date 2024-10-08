import React, { useState } from 'react';
import "./Dmblogview.css";
import dmblogim from "../Asset/seoi.jpeg";
import Footercard from '../../Landingpage/Footercard/Footercard';
import Footer from '../../Landingpage/Footer/Footer';
import Menubar from '../../Landingpage/Menubar/Menubar';
import dmblg2 from "../Asset/image3.png";
import dmblg3 from "../Asset/Businessman.png";
import axios from 'axios';

function Dmblogview() {

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

 


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
      <div className='row  my-3 mx-1 mx-md-3'>
        <div className='col-sm-12 col-md-7'>
          <h1 className='py-3'><b>Top 10 SEO strategies for a business</b></h1>
          <img src={dmblogim} alt='Seo Strategies' className='imsp ' />
          <p>In today’s digital landscape, having a solid SEO strategy is essential for businesses looking to increase their online presence and attract organic traffic. Search engine optimization (SEO) helps businesses rank higher on search engines, reach their target audience more effectively, and ultimately drive growth. From keyword research to technical optimization, a well-rounded SEO plan ensures that your website is both user-friendly and visible to search engines. In this blog, we will explore the top 10 SEO strategies that can take your business to the next level, boosting traffic and enhancing overall performance.</p>
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
          <h4>Conclusion</h4>
          <p>By implementing these top 10 SEO strategies, businesses can improve their online visibility, enhance user experience, and attract a steady stream of organic traffic. From thorough keyword research to refining technical SEO aspects, each strategy plays a critical role in shaping how your website ranks on search engines. Prioritizing SEO as part of your digital marketing efforts ensures long-term success, fostering sustainable growth in an increasingly competitive online environment. Make SEO a cornerstone of your business strategy, and watch as your search rankings</p>
        </div>

        <div className='col-sm-12 col-md-4'>
          <div className='card p-4 shadowcard'>
            <h4 className='rqtxt py-3'>Free SEO Audit</h4>
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
              <div >
                <input type='email' className='form-control form-control1'  placeholder='Enter your email'/>

              </div>
              <input type='submit' className='subbtnclr rounded-2' value='Submit' />
            </form>
          </div>

          <div>
            <h2 className='my-4'><b>Latest Updates</b></h2>
            <div className='card shadowcard my-4'>
              <img src={dmblg3} alt="Latest Update" className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'><b>What benefits does organic conversion provide for businesses?</b></h5>
              </div>
            </div>

            <div className='card shadowcard my-4'>
              <img src={dmblg2} alt="Latest Update" className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'><b>The benefits of social media marketing in business</b></h5>
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

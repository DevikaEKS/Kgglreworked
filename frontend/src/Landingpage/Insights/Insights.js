import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Insights.css";
import cardim1 from "../Asset/seoim.png";
import cardim2 from "../Asset/crm.png";
import cardim3 from "../../Sap/Asset/hana.png";
function Insights() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/Digital_Marketing_Blog'); 
  };
  const handleReadMoreClick1 = () => {
    navigate('/Sap_blog'); 
  };
  const handleReadMoreClick2 = () => {
    navigate('/IT_Blog'); 
  };

 
  return (
    <div className='container-fluid' id='blogs'>
      <div className='row  my-5 pb-5 insightspart'>
        <h1 className='text-center evolheading mb-5'><b>Additional Insights</b></h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim3} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"><b>Guide for  SAP ECC to S/4HANA Conversion</b>
              </h5>
              <button className='readbtn rounded-3 p-2' onClick={handleReadMoreClick1}>Read More</button>
              <div className='py-3'>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3 ">
            <img src={cardim2} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"><b>The Importance of CRM for Business</b></h5>
              <button className='readbtn rounded-3 p-2' onClick={handleReadMoreClick2}>Read More</button>
              <div className='py-3'>
              </div>
            </div>
          </div>
          
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim1} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"><b>Top 10 SEO strategies for a business</b></h5>
              <button  className="readbtn rounded-3 p-2"
                onClick={handleReadMoreClick}>Read More</button>
              <div className='py-3'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
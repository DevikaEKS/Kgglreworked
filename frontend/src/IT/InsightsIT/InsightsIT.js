import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./InsightsIT.css";
import cardim1 from "../Asset/CRM.png";

function InsightsIT() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/IT_Blog'); 
  };

  return (
    <div className='container-fluid'>
      <div className='row my-5 pb-5 mx-3 insightspart'>
        <h1 className='text-center blogheading mb-5'>Additional Insights</h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim1} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
              The Importance of CRM for Business
              </h5>
              <button 
                className="border border-2 rounded-5 p-2  text-decoration-none my-4"
                onClick={handleReadMoreClick}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsIT;

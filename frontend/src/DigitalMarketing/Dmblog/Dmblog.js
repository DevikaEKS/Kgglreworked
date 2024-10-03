import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dmblog.css";
import cardim1 from "../Asset/seoi.jpeg";

function Dmblog() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/Digital_Marketing_Blog');
  };
  return (
    <div className='container-fluid'>
      <div className='row my-5 pb-5 mx-3 insightspart'>
        <h1 className='text-center blogheading mb-5'>Additional Insights</h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim1} title='Digital Marketing' alt="Top 10 SEO strategies for a business " className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                Top 10 SEO strategies for a business 
              </h5>
              <button 
                className="readbtn rounded-3 p-2"
                onClick={handleReadMoreClick} >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dmblog;

import React from 'react'
import { useNavigate } from 'react-router-dom';
import cardim3 from "../../Sap/Asset/hana.jpeg";
import cardim4 from "../Asset/textsap.png";
function Sapblog() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/Sap_blog');
  };
  const handleReadMoreClick1 = () => {
    navigate('/Sap_blog1');
  };
  return (
    <div className='container-fluid' id='blogs'>
      <div className='row  my-5 pb-5 insightspart'>
        <h1 className='text-center evolheading mb-5'><b>Additional Insights</b></h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim3} title='SAP' alt="Planning SAP ECC to S/4HANA Conversion" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Guide for SAP ECC to S/4HANA Conversion
              </h5>
              <button className='readbtn rounded-3 p-2' onClick={handleReadMoreClick}>Read More</button>
              <div className='py-3'>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim4} title='SAP' alt="Planning SAP ECC to S/4HANA Conversion" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">RISE with SAP, GROW with SAP, and SAP S/4HANA
              </h5>
              <button className='readbtn rounded-3 p-2' onClick={handleReadMoreClick1}>Read More</button>
              <div className='py-3'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sapblog
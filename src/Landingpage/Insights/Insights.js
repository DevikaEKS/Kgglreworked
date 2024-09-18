import React from 'react'
import "./Insights.css";
import cardim1 from "../../Asset/Rectangle 46.png";
import cardim2 from "../../Asset/Rectangle 47.png";
import cardim3 from "../../Asset/Rectangle 48.png";
function Insights() {
  return (
    <div className='container-fluid' id='blogs'>
      <div className='row  my-5 pb-5 insightspart'>
        <h1 className='text-center evolheading mb-5'><b>Additional Insights</b></h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim1} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content</h5>
              <div className='py-3'>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none m-1">
                Read Post
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3 ">
            <img src={cardim2} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content</h5>
              <div className='py-3'>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none m-1">
                Read Post
              </a>
              </div>
            </div>
          </div>
          
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim3} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content</h5>
              <div className='py-3'>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none m-1">
                Read Post
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
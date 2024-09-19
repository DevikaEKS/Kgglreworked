import React from 'react'
import "./Blogpreview.css";
import cardim1 from "../../Asset/Rectangle 46.png";
import cardim2 from "../../Asset/Rectangle 47.png";
import cardim3 from "../../Asset/Rectangle 48.png";
function Blogpreview() {
  return (
    <div className='container-fluid'>
      <div className='row  my-5 pb-5 insightspart'>
        <h1 className='text-center blogheading mb-5'>Additional Insights</h1>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim1} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content</h5>
              <p className="card-text">
                This is a paragraph of text inside the card. It provides some information about the content of the card.
              </p>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none my-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3 ">
            <img src={cardim2} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content2</h5>
              <p className="card-text">
                This is a paragraph of text inside the card. It provides some information about the content of the card.
              </p>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none my-4">
                Read More
              </a>
            </div>
          </div>
          
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className="card colourcard text-light my-3">
            <img src={cardim3} alt="Card image" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Blog Content</h5>
              <p className="card-text">
                This is a paragraph of text inside the card. It provides some information about the content of the card.
              </p>
              <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none my-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogpreview
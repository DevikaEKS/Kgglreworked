// import React from 'react'
// import "./Dmblog.css";
// import cardim1 from "../../Asset/blog.jpg";
// import cardim2 from "../../Asset/Rectangle 47.png";
// import cardim3 from "../../Asset/Rectangle 48.png";
// function Dmblog() {
//   return (
//     <div className='container-fluid'>
//       <div className='row  my-5 pb-5 insightspart'>
//         <h1 className='text-center blogheading mb-5'>Additional Insights</h1>
//         <div className='col-sm-12 col-lg-4'>
//           <div className="card colourcard text-light my-3">
//             <img src={cardim1} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">
//               Top 10 SEO strategies for a business 
//               </h5>
//               <a href="#" className="border border-2 rounded-5 p-2 text-light text-decoration-none my-4">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dmblog



import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dmblog.css";
import cardim1 from "../Asset/blogpart.jpg";

function Dmblog() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/Digital_Marketing_Blog'); // Assuming '/blog' is the route for your blog part page
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
                Top 10 SEO strategies for a business 
              </h5>
              <button 
                className="border border-2 rounded-5 p-2  text-decoration-none my-4"
                onClick={handleReadMoreClick}
              >
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

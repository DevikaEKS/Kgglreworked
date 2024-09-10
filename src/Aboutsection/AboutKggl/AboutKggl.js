
// import React from 'react';
// import "./AboutKggl.css";
// import ab1 from "../Asset/Group 270989960 (1).png";

// function AboutKggl() {
//   return (
//     <div className='container d-flex flex-column align-items-center justify-content-center '>
//       <div className='text-center paraabout'>
//         <div className='row'>
//         <div className=' d-flex align-items-center justify-content-center my-5'> 
//           <h1 className='abhead mx-3'>Who</h1>
//           <img src={ab1} className='imab1'/>
//         </div>
        
//         {/* Second row with text and image centered */}
//         <div className=' d-flex align-items-center justify-content-center my-5'> 
//           <img src={ab1} className='imab1 mx-3'/>
//           <h1 className='abhead'>We are</h1>
//       </div>
       
//        <div className='contentparts'>
//         <p>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries.</p>      
//         <p className='intended'>KG Genius Labs, the newest venture from KG, delivers tailored solutions to global businesses, including SAP IT Infrastructure Management, LMS, CRM, Custom Application Development, and Digital Marketing Services. We are the preferred partner for forward-thinking business collaborations.</p>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default AboutKggl;


import React from 'react';
import "./AboutKggl.css";
import ab1 from "../../Asset/Rectangle 63 (1).png";
import ab2 from "../../Asset/Rectangle 62 (2).png";
function AboutKggl() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center whygl'>
      <div className='text-center paraabout'>
        <div className='row'>
          {/* First row with "Who" text and image responsive */}
          <div className='col-12 d-flex align-items-center justify-content-center my-5 flex-wrap'> 
            <h1 className='abhead mx-3'>Who</h1>
            <img src={ab1} className='imab1 img-fluid' alt='Who We Are' />
          </div>
          
          {/* Second row with "We are" text and image responsive */}
          <div className='col-12 d-flex align-items-center justify-content-center my-5 flex-wrap'> 
            <img src={ab2} className='imab1 img-fluid mx-3' alt='Who We Are'/>
            <h1 className='abhead'>We are</h1>
          </div>
          </div>
          <div className='row'>
            <p>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries.</p>      
            <p>KG Genius Labs, the newest venture from KG, delivers tailored solutions to global businesses, including SAP IT Infrastructure Management, LMS, CRM, Custom Application Development, and Digital Marketing Services. We are the preferred partner for forward-thinking business collaborations.</p>
          </div>
          {/* Paragraph section */}
          
        </div>
      </div>
   
  );
}

export default AboutKggl;

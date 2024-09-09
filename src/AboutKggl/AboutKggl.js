// import React from 'react';
// import "./AboutKggl.css";
// import ab1 from "../Asset/Group 270989960 (1).png";
// function AboutKggl() {
//   return (
//     <div className='container'>
//         <div className='row text-center paraabout'>
         
//          <div className='d-flex my-5'> 
//            <h1 className='abhead mx-3'>Who</h1>
//            <img src={ab1} className='imab1'/>
//            </div>
          
//            <div className='d-flex'> 
//            <img src={ab1} className='imab1 mx-3'/>
//            <h1 className='abhead'>We are</h1>
//            </div>
//                 <p>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries. </p>
              
// <p>KG Genius Labs, the newest venture from KG, delivers tailored solutions to global businesses, including SAP IT Infrastructure Management, LMS, CRM, Custom Application Development, and Digital Marketing Services. We are the preferred partner for forward-thinking business collaborations.
// </p>
            
//         </div>
//     </div>
//   )
// }

// export default AboutKggl




import React from 'react';
import "./AboutKggl.css";
import ab1 from "../Asset/Group 270989960 (1).png";

function AboutKggl() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center '>
      <div className='text-center paraabout'>
        {/* First row with text and image centered */}
        <div className='d-flex align-items-center justify-content-center my-5'> 
          <h1 className='abhead mx-3'>Who</h1>
          <img src={ab1} className='imab1'/>
        </div>
        
        {/* Second row with text and image centered */}
        <div className='d-flex align-items-center justify-content-center my-5'> 
          <img src={ab1} className='imab1 mx-3'/>
          <h1 className='abhead'>We are</h1>
      </div>
       
       <div className='px-5 mx-5'>
        <p>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries.</p>      
        <p className='intended'>KG Genius Labs, the newest venture from KG, delivers tailored solutions to global businesses, including SAP IT Infrastructure Management, LMS, CRM, Custom Application Development, and Digital Marketing Services. We are the preferred partner for forward-thinking business collaborations.</p>
      </div>
    </div>
    </div>
  );
}

export default AboutKggl;

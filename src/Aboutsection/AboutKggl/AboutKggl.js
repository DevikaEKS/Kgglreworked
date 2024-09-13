

// import React from 'react';
// import "./AboutKggl.css";
// import ab1 from "../../Asset/Rectangle 63 (1).png";
// import ab2 from "../../Asset/Rectangle 62 (2).png";
// function AboutKggl() {
//   return (
//     <div className='container d-flex flex-column align-items-center justify-content-center whygl'>
//       <div className='text-center paraabout'>
//         <div className='row'>
//           {/* First row with "Who" text and image responsive */}
//           <div className='col-12 d-flex align-items-center justify-content-center my-5 flex-wrap'> 
//             <h1 className='abhead mx-3'>Who</h1>
//             <img src={ab1} className='imab1 img-fluid' alt='Who We Are' />
//           </div>
          
//           {/* Second row with "We are" text and image responsive */}
//           <div className='col-12 d-flex align-items-center justify-content-center my-5 flex-wrap'> 
//             <div className='order-2 order-md-1'>
//             <img src={ab2} className='imab1 img-fluid mx-3' alt='Who We Are' />
//             </div>
//             <div className='order-1 order-md-2'>
//             <h1 className='abhead'>We are</h1>
//             </div>
//           </div>
          



//           </div>
//           <div className='row mt-5'>
//             <p>With a rich legacy spanning decades, The KG Group has been at the forefront of innovative technologies. KGiSL, which introduced pioneering tech solutions in South India 25 years ago, has now evolved into a rapidly expanding IT company across the Indo-Pacific, operating in over 7 countries.</p>      
//             <p>KG Genius Labs, the newest venture from KG, delivers tailored solutions to global businesses, including SAP IT Infrastructure Management, LMS, CRM, Custom Application Development, and Digital Marketing Services. We are the preferred partner for forward-thinking business collaborations.</p>
//           </div>
//           {/* Paragraph section */}
          
//         </div>
//       </div>
   
//   );
// }

// export default AboutKggl;




import React from 'react';
import "./AboutKggl.css";
function AboutKggl() {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center whygl'>
      <div className='text-center paraabout'>
        <div className='row mx-2'>
          {/* First row with "Who" text and image responsive */}
          <div className='col-sm-12 d-flex align-items-center justify-content-center my-5 flex-wrap'> 
            <h1 className='abhead mx-3 mb-5'>Who We are</h1>
            <p className='paragl px-3 px-sm-5'>The KG Group has established itself as a pioneer in the field of cutting-edge technologies.
From its inception, the group has maintained a relentless focus on innovation, consistently
pushing boundaries to remain at the forefront of the global tech landscape. Over the last 25
years, KGiSL has transformed the technology landscape in South India, introducing
groundbreaking solutions that have reshaped business processes and technology adoption
in the region. Today, KGiSL has evolved into a dynamic and fast-growing IT company,
serving clients across the Indo-Pacific. Its operations span over seven countries, delivering
cutting-edge solutions that meet the complex needs of modern businesses and addressing
the increasing global demand for innovative IT solutions.</p>  

            <p className='paragl px-3 px-sm-5'>Building on this legacy, KG Genius Labs, the newest venture from the KG Group, takes
forward the tradition of excellence by offering a wide range of customized solutions tailored
to meet the unique needs of businesses around the world. Our focus is on delivering high-
impact, scalable solutions that drive business efficiency and foster growth.
Our expertise spans diverse services, including SAP, Learning Management Systems
(LMS), Customer Relationship Management (CRM), IT Infrastructure Management, Bespoke
Application Development, and Digital Marketing Services.</p>
          </div>
     
          </div>   
        </div>
      </div>
   
  );
}

export default AboutKggl;

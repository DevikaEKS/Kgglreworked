// import React from 'react'
// import missionim from "../Asset/Rectangle 62 (1).png";
// import visionim from "../Asset/Rectangle 63.png";
// import "./Mission.css"
// function Mission() {
//   return (
//     <div className='container my-5'>
//         <div className='row'>
//             <div className='col-6 d-flex mt-5 firstcol'>
            
//               <div className='mx-3 px-4'>
//               <h3 className='visionheading'>Mission Statement</h3>
//               <p>KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.</p>
//               </div>
//               <img src={visionim} className='imgtot'/>
//             </div>
//             <div className='col-6 d-flex'>
//               <img src={missionim} className='imgtot'/>
//               <div className='mx-3'>
//               <h3 className='visionheading'>Vision Statement</h3>
//               <p>Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.</p>
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Mission



import React from 'react';
import missionim from "../Asset/Rectangle 62 (1).png";
import visionim from "../Asset/Rectangle 63.png";
import "./Mission.css";

function Mission() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mt-5 pt-5'>
          <div className='mx-3 px-4 text-center text-md-left mt-5'>
            <h3 className='visionheading'>Mission Statement</h3>
            <p>KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.</p>
          </div>
          <img src={visionim} className='imgtot img-fluid mt-3 mt-md-0' alt="Vision Statement"/>
        </div>
        <div className='col-sm-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mt-5'>
          <img src={missionim} className='imgtot img-fluid mb-3 mb-md-0' alt="Mission Statement"/>
          <div className='mx-3 text-center text-md-left'>
            <h3 className='visionheading'>Vision Statement</h3>
            <p>Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

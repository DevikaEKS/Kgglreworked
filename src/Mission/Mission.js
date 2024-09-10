
// import React from 'react';
// import missionim from "../Asset/vision.png";
// import visionim from "../Asset/mission.png";
// import "./Mission.css";

// function Mission() {
//   return (
//     <div className='container my-3'>
//       <div className='row'>
//         <div className='col-sm-12 col-lg-6 d-flex flex-column flex-md-row align-items-center pt-5'>
//           <div className='text-center text-md-left mt-5'>
//             <h3 className='visionheading'>Mission Statement</h3>
//             <p>KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.</p>
//           </div>
//           <img src={visionim} className='imgtot img-fluid mt-3 mt-md-0' alt="Vision Statement"/>
//         </div>
//         <div className='col-sm-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mt-5'>
//           <img src={missionim} className='imgtot img-fluid mb-3 mb-md-0' alt="Mission Statement"/>
//           <div className='mx-3 text-center text-md-left'>
//             <h3 className='visionheading'>Vision Statement</h3>
//             <p>Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mission;



// import React from 'react';
// import missionim from "../Asset/vision.png";
// import visionim from "../Asset/mission.png";
// import vtext from "../Asset/Frame 32.png";
// import mtext from "../Asset/Frame 33.png";
// import "./Mission.css";

// function Mission() {
//   return (
//     <div className='container my-3'>
//       <div className='row'>
       
//         <div className='col-sm-12 d-flex flex-column flex-md-row align-items-center mt-5'>
//           <img src={mtext} className='mx-4 px-4 vtext'/>
//           <img src={missionim} className='imgtot img-fluid mb-3 mb-md-0' alt="Mission Statement"/>
//           <div className='mx-3 text-center text-md-left'>
//             <h3 className='visionheading'>Vision Statement</h3>
//             <p>Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.</p>
//           </div>
//         </div>

//         <div className='col-sm-12 d-flex flex-column flex-md-row align-items-center pt-5'>
//           <div className='text-center text-md-left mt-5'>
//             <h3 className='visionheading'>Mission Statement</h3>
//             <p>KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.</p>
//           </div>
//           <img src={visionim} className='imgtot img-fluid mt-3 mt-md-0' alt="Vision Statement"/>
//           <img src={vtext} className='mx-4 px-4 vtext' />
//         </div>


//       </div>
//     </div>
//   );
// }

// export default Mission;







import React from 'react';
import missionim from "../Asset/vision.png";
import visionim from "../Asset/mission.png";
import vtext from "../Asset/Frame 32.png";
import mtext from "../Asset/Frame 33.png";
import "./Mission.css";

function Mission() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        {/* Mission Section */}
        <div className='col-md-6 d-flex align-items-center'>
          <div className='mission-content'>
            <div className='heading-with-icon '>
              <img src={mtext} alt="Decorative Icon" className='decorative-icon pt-5' />
              <h3 className='section-heading'>Mission Statement</h3>
            </div>
            <p className='section-para'>
              KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.
            </p>
          </div>
          <img src={visionim} className='section-image ms-4' alt="Mission" />
        </div>

        {/* Vision Section */}
        <div className='col-md-6 d-flex align-items-center pb-5 mb-5'>
          <img src={missionim} className='section-image me-4 pb-5 mb-5' alt="Vision" />
          <div className='vision-content'>
            <div className='heading-with-icon'>
             
              <h3 className='section-heading'>Vision Statement</h3>
            </div>
            <p className='section-para'>
              Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.
            </p>
           
          </div>
          <img src={mtext} alt="Decorative Icon" className='decorative-icon' />
        </div>
      </div>
    </div>
  );
}

export default Mission;

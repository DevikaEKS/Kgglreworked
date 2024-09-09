// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import cardim3 from "../../Asset/Rectangle 48.png";

// // Import Swiper core and required modules
// import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// function SwiperCard3D() {
//   return (
//     <div className='container-fluid'>
//         <div className='row'>
//             <div className='col-6'>
//                 <h1>hello</h1>
//             </div>
//     <div className='col-6'>
//       <Swiper
//         modules={[Navigation, Pagination, EffectCoverflow]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="3"
//         coverflowEffect={{
//           rotate: 10,
//           stretch: -20, // Reduce the space between slides
//           depth: 10,
//           modifier: 3,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         className='mySwiper'
//       >
//         {/* Swiper Slides */}
//         <SwiperSlide>
//           <div className="card" style={{ width: '200px' }}>
//             <img src={cardim3} alt="Sample Image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Card Title 1</h5>
//               <p className="card-text">Description for card 1.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card" style={{ width: '200px' }}>
//             <img src="https://via.placeholder.com/300" alt="Sample Image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Card Title 2</h5>
//               <p className="card-text">Description for card 2.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card" style={{ width: '200px' }}>
//             <img src="https://via.placeholder.com/300" alt="Sample Image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Card Title 3</h5>
//               <p className="card-text">Description for card 3.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card" style={{ width: '200px' }}>
//             <img src="https://via.placeholder.com/300" alt="Sample Image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Card Title 4</h5>
//               <p className="card-text">Description for card 4.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card" style={{ width: '200px' }}>
//             <img src="https://via.placeholder.com/300" alt="Sample Image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Card Title 5</h5>
//               <p className="card-text">Description for card 5.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         {/* Add more SwiperSlide components as needed */}
//       </Swiper>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default SwiperCard3D;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import cardim1 from "../../Asset/Rectangle 46.png";
import cardim2 from "../../Asset/Rectangle 47.png";
import cardim3 from "../../Asset/Rectangle 48.png";
import "./Swipingcard.css";

// Import Swiper core and required modules
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

function SwiperCard3D() {
  return (
    <div className='container'>
      <div className='row'>
     
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="2"
            loop={true} 
            coverflowEffect={{
              rotate: 0, // Set rotate to 0 to keep cards facing forward
              stretch: -50, // Adjust stretch for overlap effect
              depth: 200, // Increase depth for a more pronounced 3D effect
              modifier: 2, // Adjust modifier to control 3D intensity
              slideShadows: false, // Disable slide shadows for a clean look
            }}
            autoplay={{
              delay: 1000, // Delay between slides in ms
              disableOnInteraction: false, // Continue autoplay after interaction
            }}
            pagination={{ clickable: true }}
            className='mySwiper'
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <div className="card" style={{ width: '250px'}}>
                <img src={cardim3} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">SAP</h5>
                  <p className="card-text">Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" style={{ width: '250px' }}>
                <img src={cardim1} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">IT</h5>
                  <p className="card-text">We blend industry insights, top technologies, and expert execution to optimize IT Infrastructure and tailor solutions that drive your success.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" style={{ width: '250px' }}>
                <img src={cardim2} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">Digital Marketing</h5>
                  <p className="card-text">We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" style={{ width: '250px' }}>
                <img src={cardim1} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">HR Services</h5>
                  <p className="card-text">We don’t just place talent; we create opportunities. Our mission is to empower individuals and organizations, driving meaningful impact that transforms careers, communities, and economies.</p>
                </div>
              </div>
            </SwiperSlide>
           
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
      
      </div>
    </div>
  );
}

export default SwiperCard3D;

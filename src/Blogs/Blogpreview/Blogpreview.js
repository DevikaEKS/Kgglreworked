// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import cardim1 from "../../Asset/Rectangle 46.png";
// import cardim2 from "../../Asset/Rectangle 47.png";
// import cardim3 from "../../Asset/Rectangle 48.png";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "./Blogpreview.css";

// function Blogpreview() {
//   return (
//     <div className='container-fluid pb-5' id='servicesitpage'>
//     <h1 className='text-center'>Video Blogs</h1>
//     <div className='slider-container'>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           600: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//         }}
//       >
       
//         <SwiperSlide>
//         <div className="card my-3">
//             <img src={cardim1} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card my-3">
//             <img src={cardim2} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card  my-3">
//             <img src={cardim3} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card  my-3">
//             <img src={cardim3} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card my-3">
//             <img src={cardim3} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="card  my-3">
//             <img src={cardim3} alt="Card image" className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Blog Content</h5>
//               <p className="card-text">
//                 This is a paragraph of text inside the card. It provides some information about the content of the card.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
       
       
       
       
       
//       </Swiper>
//     </div>
//     </div>
//   );
// }

// export default Blogpreview;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import cardim1 from "../../Asset/SAP.png";
import cardim2 from "../../Asset/programming-background-collage.jpg";
import cardim3 from "../../Asset/socialmedia.jpg";
import cardim4 from "../../Asset/hr.jpg";
import "./Blogpreview.css";

// Import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';

function Blogpreview() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="3"
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -10,
            depth: 0,
            modifier: 2,
            slideShadows: false,
          }}
         
          navigation
          pagination={{ clickable: true }}
          className='mySwiper'
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <div className="card" >
              <img src={cardim1} alt="Sample Image" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">SAP</h5>
                <p className="card-text">Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" >
              <img src={cardim2} alt="Sample Image" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">IT</h5>
                <p className="card-text">We blend industry insights, top technologies, and expert execution to optimize IT Infrastructure and tailor solutions that drive your success.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={cardim3} alt="Sample Image" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">Digital Marketing</h5>
                <p className="card-text">We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card" >
              <img src={cardim4} alt="Sample Image" className="card-img-top" />
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

export default Blogpreview;

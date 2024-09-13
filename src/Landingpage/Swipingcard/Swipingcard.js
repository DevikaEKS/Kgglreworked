
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
import "./Swipingcard.css";


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
              rotate: 0, 
              stretch: 50, 
              depth: 200, 
              modifier: 2, 
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000, 
              disableOnInteraction: false, 
            }}
            pagination={{ clickable: true }}
            className='mySwiper'
          >
           
            <SwiperSlide>
              <div className="card mx-3" style={{ width: '300px'}}>
                <img src={cardim1} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">SAP</h5>
                  <p className="card-text">Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card smcrd" style={{ width: '300px' }}>
                <img src={cardim2} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">IT</h5>
                  <p className="card-text">We blend industry insights, top technologies, and expert execution to optimize IT Infrastructure and tailor solutions that drive your success.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card smcrd" style={{ width: '300px' }}>
                <img src={cardim3} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">Digital Marketing</h5>
                  <p className="card-text">We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" style={{ width: '300px' }}>
                <img src={cardim4} alt="Sample Image" className="card-img-top" />
                <div className="card-body crdbdy">
                  <h5 className="card-title text-center">HR Services</h5>
                  <p className="card-text">We don’t just place talent; we create opportunities. Our mission is to empower individuals and organizations, driving meaningful impact that transforms careers, communities, and economies.</p>
                </div>
              </div>
            </SwiperSlide>
           
            
          </Swiper>
      
      </div>
    </div>
  );
}

export default SwiperCard3D;

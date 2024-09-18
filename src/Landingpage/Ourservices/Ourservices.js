import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Ourservices.css";
import SwiperCard3D from '../Swipingcard/Swipingcard';

const texts = ["SAP Services", "IT Services", "Digital Marketing Services", "HR Consultancy"];

function Ourservices() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container servicesbg my-5 pt-5' id='ourservices'>
      <div className='row'>
        <div className='col-sm-12 col-lg-5'>
          <h1 className='serviceheading'>
            Our <span className='servetext'>Services</span>
          </h1>
          <motion.h4
            className='saptext py-3'
            key={currentText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            {texts[currentText]}
          </motion.h4>
        </div>
        <div className='col-sm-12 col-lg-7 px-2'>
          <SwiperCard3D />
        </div>
      </div>
    </div>
  );
}

export default Ourservices;

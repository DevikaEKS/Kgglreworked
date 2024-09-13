import React, { useState, useEffect } from 'react'; // Corrected import
import { motion } from 'framer-motion'; // Import motion from framer-motion
import "./Discover.css";

const texts = ["Do you have the right Team?", "What Skills would fill in the blanks?", "What Skill gaps does your team have?"];

function Discover() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100); // Change text every 5.1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid bgdiscover d-flex flex-column justify-content-center align-items-center '>
            <p className='paradiscover text-light'>Let Us Help You <span style={{ fontSize: "32px" }}><b>Discover</b></span></p>
      <div className='card text-center p-4 curved-background text-light'>
        
       

          <motion.h4
            className='hrtext py-3'
            key={currentText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            {texts[currentText]}
          </motion.h4>
        
      </div>
    </div>
  );
}

export default Discover;

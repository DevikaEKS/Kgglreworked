import React from 'react';
import corepic from "../../Asset/passionatesmall.png";
import lapcore1 from "../../Asset/passionate.png";
import core3 from "../../Asset/bulbcore.png";
import lapcore3 from "../../Asset/innovative.png";
import core4 from "../../Asset/Transparent.png";
import lapcore4 from "../../Asset/Transparentlap.png";
import core5 from "../../Asset/smalldiverse.png";
import lapcore5 from "../../Asset/groupphoto.png";
import core6 from "../../Asset/Resilient.png";
import lapcore6 from "../../Asset/resilientlap.png";
import core7 from "../../Asset/Collab.png";
import lapcore7 from "../../Asset/collabrative.png";
import core8 from "../../Asset/smalloptimistic.png";
import lapcore8 from "../../Asset/lapcore8.png";

import "./Corevalues.css";

function Corevalues() {
  return (
    <div className='container-fluid bgcore' id='corevalue'>
      <h1 className='my-5 valuetext text-center' style={{ textAlign: "left" }}>
        Our <span style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>Core Val</span>ues
      </h1>

      <div className='container corepart'>
  
        <div className='row my-2 py-2'>
          <div className='col  order-2 order-sm-1'>
            <img src={corepic} alt='Passionate' className='corepics1 small' />
            <img src={lapcore1} alt='Passionate' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Passionate</h1>
            <p>We seek impactful opportunities and partnerships with companies that share our passion.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts '>
            <h1>Optimistic</h1>
            <p>We view challenges as growth opportunities and strive for positive solutions.</p>
          </div>
          <div className='col'>
            <img src={core8} alt='Optimistic' className='corepics1 small' />
            <img src={lapcore8} alt='Optimistic' className='corepics1 large' />
          </div>
        </div>



        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={core3} alt='Innovative' className='corepics1 small' />
            <img src={lapcore3} alt='Innovative' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1 '>
            <h1>Innovative</h1>
            <p>We continually improve technology, efficiency, and resources to enhance our services.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts'>
            <h1>Collaborative</h1>
            <p>We value strong relationships and effective communication with our team, clients, and vendors, leveraging collective strengths for company success</p>
          </div>
          <div className='col'>
            <img src={core7} alt='Collaborative'  className='corepics1 small'/>
            <img src={lapcore7} alt='Collaborative' className='corepics1 large' />
          </div>
        </div>


        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={core6} alt='Resilient' className='corepics1 small'/>
            <img src={lapcore6} alt='Resilient' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Resilient</h1>
            <p>We promote self-awareness, accountability, initiative, and a commitment to the greater good.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts'>
            <h1>Diverse & Inclusive</h1>
            <p>We represent and partner with diverse and inclusive teams, talent, and clients.</p>
          </div>
          <div className='col'>
            <img src={core5} alt='Diverse & Inclusive' className='corepics1 small'/>
            <img src={lapcore5} alt='Diverse & Inclusive' className='corepics1 large' />
          </div>
        </div>


        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={core4} alt='Transparent' className='corepics1 small'/>
            <img src={lapcore4} alt='Transparent' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Transparent</h1>
            <p>We are committed to openness, honesty, and authenticity, fostering a culture of transparency.</p>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default Corevalues;

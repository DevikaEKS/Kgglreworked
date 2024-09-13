import React from 'react';
import "./Sapimplementation.css";
function Sapimplementation() {
  return (
    <div className='container'>
      <h3 className='text-center my-5'>S/4HANA Implementations</h3> 
       <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <h4 className='headimp mx-5 p-3 rounded-4'>SAP S/4HANA Private Cloud</h4>
          <p>SAP S/4HANA Cloud, Private Edition is a highly customizable cloud ERP solution</p>
          <p>SAP S/4HANA Cloud, Private Edition offers a highly customizable ERP solution, preserving your existing SAP ERP configurations while providing enhanced flexibility and continuity.</p>
        </div>

        <div className='col-sm-12 col-md-6'>
          <h4 className='headimp rounded-4 mx-5'>SAP S/4HANA Public Cloud</h4>
          <p>Choose the Best Way to Adopt Cloud ERP and streamline your operations</p>
          <p>SAP S/4HANA Cloud, public edition is a cloud-based ERP solution offering comprehensive tools for managing finance, procurement, supply chain and sales. It’s tailored for medium-sized enterprises..</p>
        </div>


       </div>
    </div>
  )
}

export default Sapimplementation
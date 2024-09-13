import React from 'react'
import sapsupportim from "../Asset/supportsap.png";
import "./Sapsupport.css";
function Sapsupport() {
  return (
    <div className='container sapsupportpart'>
        <h1 className='text-center mt-5 mb-2'>SAP Support Services</h1>
        <p className='sapsupportpara text-center'> Unlocking the Benefits of KGGL Drive to Manage SAP Landscapes</p>
        <div className='row my-5'>
            <div className='col-sm-12 col-lg-6'>
                <img src={sapsupportim} alt=''/>
            </div>
            <div className='col-sm-12 col-lg-6 sapsupportcontent px-3'>
                <p>Welcome to KGGL DRIVE Support, the ultimate solution for your SAP support needs. We offer comprehensive support services, including GAP analysis, SAP landscape audit, and incident and change request management. Our services cover the entire SAP landscape.</p>
                <p>During onboarding, we provide a one-time GAP analysis for your SAP landscape, covering system adoption and best practices. Choose KGGL for reliable, expert SAP support to fully leverage your SAP ECC and S/4HANA systems and elevate your business.</p>
            </div>
        </div>

<div className='row servicesappart my-5'>
    <div className='col-sm-12 col-lg-6'>
        <h1 className='hanaheading ms-5'> |SAP ECC 6.0</h1>
    </div>
    <div className='col-sm-12 col-lg-6 px-5 sapsupportcontent'>
        <p>Our end-to-end SAP ECC support services streamline your digital transformation journey and unlock further operational benefits from your SAP solutions.</p>
    </div>
</div>
<div className='row servicesappart'>
    <div className='col-sm-12 col-lg-6 px-5 sapsupportcontent'>
        <p >Our industry-leading SAP application managed services offer extended S/4HANA support for enhanced application efficiency and business continuity.</p>
    </div>
    <div className='col-sm-12 col-lg-6'>
        <h1 className='hanaheading ms-5'>|SAP S/4HANA</h1>
    </div>
</div>

    </div>
  )
}

export default Sapsupport
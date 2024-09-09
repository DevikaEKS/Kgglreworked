import React from 'react';
import "./Contact.css";
import contactimg from "../../Asset/contactimg.png";
function Contact() {
  return (
    <div className='container contactpart my-3'>
      <div className='row contacttext'>
        <div className='col-sm-12 col-md-6'>
          <h1 className='contactheading mb-4'>Let’s Connect</h1>
          <p className='contactpara'>Explore how our customized IT solutions can elevate your business. Get in touch with our experts today!</p>
     

     <img src={contactimg} alt='contactus' className='img-fluid'/>


          {/* democard */}
        </div>
        <div className='col-sm-12 col-md-6'>
          <form>
            <div className='form-group m-3'> 
              <label className='form-label'>Name</label>
              <input type='text' className='form-control'/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Email</label>
              <input type='email' className='form-control'/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Phone Number</label>
              <input type='text' className='form-control'/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Phone Number Country Code</label>
              <input type='text' className='form-control'/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Company Name</label>
              <input type='text' className='form-control'/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Description</label>
              <textarea className='form-control' rows='3'></textarea>
            </div>
            <div className='d-flex justify-content-end mt-4'>
              <input type='submit' className='contactbtn  py-2 rounded-2' value='Submit'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

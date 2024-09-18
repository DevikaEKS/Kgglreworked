import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Optional for custom styling

function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email regex for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
      // Handle form submission here
      console.log('Form submitted successfully');
    }
  };
  return (
    <div className="container-fluid mt-5 contactpartbg py-3">
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 text-light ">
            <h1 className='contactheading'>Let’s Connect</h1>
            <p className='connectpara'>Explore how our customized IT solutions can elevate your business. Get in touch with our experts today!</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <form onSubmit={handleSubmit} className="p-4">
              <div className="form-group mb-3 position-relative">
                <label htmlFor="requestEmail" className='text-light py-1'>Request Type</label>
                <select id="requestEmail" className="form-control text-light">
                  <option value="Select" >Select</option>
                  <option value="Contact Sales">Contact Sales</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partner Inquiry">Partner Inquiry</option>
                  <option value="Subscribe our Newsletter">Subscribe our Newsletter</option>
                </select>
                <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="businessEmail" className='text-light py-1'>Business Email</label>
                <input
                  type="text"
                  id="businessEmail"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>

              <div className="form-group py-2">
                <button type="submit" className="submitbtn py-2 px-4 rounded-1">
                  Submit
                </button>
              </div>
              <p className='text-light pt-3 privacytext'>
                The information you provide in this form will be used to process your request and keep you informed about our services, in line with KG Genius Lab's <span style={{color:"#ffff00"}}>Privacy Policy.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

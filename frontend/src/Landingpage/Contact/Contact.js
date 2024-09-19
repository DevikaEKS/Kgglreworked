import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Contact.css'; 

function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [requestType, setRequestType] = useState('Select');
  const [requestTypeError, setRequestTypeError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setRequestTypeError('');

    // Validate request type
    if (requestType === 'Select') {
      setRequestTypeError('Please select a request type.');
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Prepare the data to send
    const formData = {
      request_type_id: requestType,
      email,
    };
    console.log(formData);

    // Set loading state
    setLoading(true);

    // Submit the form data
    axios.post('http://192.168.252.178:5000/submit-form', formData)
      .then(response => {
        console.log(response);
        if (response.data.message === "Form submitted successfully") {
          alert('Form submitted successfully');
          resetForm();
        } else if (response.data.message === "Database error") {
          alert("Values not inserted");
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error.response ? error.response.data : error.message);
        alert('An error occurred. Please try again later.'); // Improved error message
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  const resetForm = () => {
    setEmail('');
    setRequestType('Select');
  };

  return (
    <div className="container-fluid mt-5 contactpartbg py-3">
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 text-light">
            <h1 className='contactheading'>Let’s Connect</h1>
            <p className='connectpara'>Explore how our customized IT solutions can elevate your business. Get in touch with our experts today!</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <form onSubmit={handleSubmit} className="p-4">
              <div className="form-group mb-3 position-relative">
                <label htmlFor="requestType" className='text-light py-1'>Request Type</label>
                <select
                  id="requestType"
                  className="form-control text-light fcpart"
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  required
                >
                  <option value="Select">Select</option>
                  <option value="1">Contact Sales</option>
                  <option value="2">General Inquiry</option>
                  <option value="3">Partner Inquiry</option>
                  <option value="4">Subscribe to our Newsletter</option>
                </select>
                {requestTypeError && <div className="invalid-feedback d-block">{requestTypeError}</div>}
                <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="businessEmail" className='text-light py-1'>Business Email</label>
                <input
                  type="email"
                  id="businessEmail"
                  className={`form-control fcpart ${emailError ? 'is-invalid' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>

              <div className="form-group py-2">
                <button type="submit" className="submitbtn py-2 px-4 rounded-1" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              <p className='text-light pt-3 privacytext'>
                The information you provide in this form will be used to process your request and keep you informed about our services, in line with KG Genius Lab's <span style={{ color: "#ffff00" }}>Privacy Policy.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Contactsap.css';

function Contactsap() {
  const [countryCodes, setCountryCodes] = useState([]);
  
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    companyName: '',
    companyWebsite: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data;
        const codes = data.map(country => ({
          name: country.name.common,
          code: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : '+1',
        }));
        setCountryCodes(codes);
      })
      .catch(error => console.error('Error fetching country codes:', error));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{3,15}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must contain only numbers and be 7-15 digits long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullPhoneNumber = `${selectedCountryCode}${formData.phoneNumber}`;

    // Get the request type from the select
    const requestTypeId = document.getElementById("requestEmail").value;

    // Combine all input values into an object
    const formValues = {
      email: formData.email,
      phno: fullPhoneNumber,
      company_name: formData.companyName,
      company_site: formData.companyWebsite,
      message: formData.description,
      request_type_id: requestTypeId, // Include request_type_id
    };
    console.log(formValues);

    // Validate the form
    if (!validateForm()) return;

    // Set loading state
    setLoading(true);

    // Submit the form data
    axios.post('http://192.168.252.178:5000/submit-form', formValues)
      .then(response => {
        if (response.data.message === "Form submitted successfully") {
          alert('Form submitted successfully!');
          resetForm();
        }
        else if (response.data.message === "Database error") {
          alert("value it's not inserted")
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };


  const resetForm = () => {
    setFormData({
      email: '',
      phoneNumber: '',
      companyName: '',
      companyWebsite: '',
      description: '',
    });
    setSelectedCountryCode('+91');
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container-fluid frmcontacts' id='sapcontact'>
      <div className='container'>
        <div className='row my-5 py-4'>
          <div className='col-sm-12 col-md-6 d-flex align-items-center justify-content-center'>
            <div className='textcontact text-light'>
              <h1 className='sapcontacthead my-sm-4 my-lg-0'>Let's Connect</h1>
              <p className='sapcontentpara'><b>Are you looking to optimize, upgrade, or fully leverage your SAP environment?</b></p>
              <p>Let’s explore how our expert SAP solutions can help you...</p>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <form onSubmit={handleSubmit} className='bg-light p-3 rounded-3 mx-sm-0 mx-lg-5'>
              <h4 className='contactheadertext mx-3'>Request a meeting with our experts</h4>
              <div className="form-group m-3 position-relative">
                <label htmlFor="requestEmail" className=' py-1'>Request Type</label>
                <select id="requestEmail" className="form-control fc1" required>
                  <option value="Select">Select</option>
                  <option value="1">Contact Sales</option>
                  <option value="2">General Inquiry</option>
                  <option value="3">Partner Inquiry</option>
                  <option value="4">Subscribe our Newsletter</option>
                </select>
                <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
              </div>

              <div className='form-group m-3'>
                <label className='form-label'>Business Email</label>
                <input
                  type='email'
                  id='useremail'
                  className='form-control form-control1'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <small className='text-danger'>{errors.email}</small>}
              </div>

              <div className='form-group m-3'>
                <label className='form-label'>WhatsApp Number</label>
                <div className='input-group form-control1 rounded-2'>
                  <select
                    className='form-select'
                    value={selectedCountryCode}
                    onChange={e => setSelectedCountryCode(e.target.value)}
                    style={{ width: "30%" }}
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    type='tel'
                    id='whatsppnumber'
                    className='form-control'
                    placeholder='Enter your phone number'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    style={{ width: "70%" }}
                    required
                    pattern="[0-9]*"
                    maxLength="15"
                  />
                </div>
                {errors.phoneNumber && <small className='text-danger'>{errors.phoneNumber}</small>}
              </div>

              <div className='form-group m-3'>
                <label className='form-label'>Company Name</label>
                <input
                  type='text'
                  id='companyname'
                  className='form-control form-control1'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group m-3'>
                <label className='form-label'>Company Website</label>
                <input
                  type='text'
                  id='webs'
                  className='form-control form-control1'
                  name='companyWebsite'
                  value={formData.companyWebsite}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group m-3'>
                <label className='form-label'>Message</label>
                <textarea
                  id='msg'
                  className='form-control form-control1'
                  name='description'
                  rows='3'
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className='d-flex justify-content-end mt-4'>
                <input
                  type='submit'
                  className='contactbtn py-2 rounded-2 border border-0'
                  value={loading ? 'Submitting...' : 'Submit'}
                  disabled={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactsap;

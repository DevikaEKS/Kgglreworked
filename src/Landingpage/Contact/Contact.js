
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Contact.css";
import contactimg from "../../Asset/contact.png";

function Contact() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); // Default country code set to +91
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data;
        const codes = data.map(country => ({
          name: country.name.common,
          code: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : '+1'
        }));
        setCountryCodes(codes);
      })
      .catch(error => console.error('Error fetching country codes:', error));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex=/^[a-z\s\.]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}$/;


    if (!formData.name || !nameRegex.test(formData.name)) {
      newErrors.name = 'Name must contain at least 2 letters.';
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.phoneNumber || !phoneRegex.test(selectedCountryCode + formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number.';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      // Proceed with the form submission logic
    } else {
      console.log("Validation failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container contactpart my-3'>
      <div className='row contacttext'>
        <div className='col-sm-12 col-md-6'>
          <h1 className='contactheading mb-4'>Let’s Connect</h1>
          <p className='contactpara'>Explore how our customized IT solutions can elevate your business. Get in touch with our experts today!</p>
          <img src={contactimg} alt='contactus' className='img-fluid'/>
        </div>
        <div className='col-sm-12 col-md-6'>
          <form onSubmit={handleSubmit}>
            <div className='form-group m-3'> 
              <label className='form-label'>Name</label>
              <input type='text' className='form-control form-control1' name='name' value={formData.name} onChange={handleChange} />
              {errors.name && <small className='text-danger'>{errors.name}</small>}
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Email</label>
              <input type='email' className='form-control form-control1' name='email' value={formData.email} onChange={handleChange} />
              {errors.email && <small className='text-danger'>{errors.email}</small>}
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Phone Number</label>
              <div className='input-group form-control1 rounded-2'>
                <select
                  className='form-select'
                  value={selectedCountryCode}
                  onChange={e => setSelectedCountryCode(e.target.value)}
                  style={{width:"30%"}}
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your phone number'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{width:"70%"}}
                 
                />
              </div>
              {errors.phoneNumber && <small className='text-danger'>{errors.phoneNumber}</small>}
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Company Name</label>
              <input type='text' className='form-control form-control1' name='companyName' value={formData.companyName} onChange={handleChange} required/>
            </div>
            <div className='form-group m-3'> 
              <label className='form-label'>Description</label>
              <textarea className='form-control form-control1' name='description' rows='3' value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <div className='d-flex justify-content-end mt-4'>
              <input type='submit' className='contactbtn py-2 rounded-2 border border-0' value='Submit' required/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

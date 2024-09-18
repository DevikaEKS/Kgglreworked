// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import "./Contactpage.css";

// function Contactpage() {
//   const [countryCodes, setCountryCodes] = useState([]);
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     companyName: '',
//     companyWebsite: '', // Updated field name
//     description: ''
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     axios.get('https://restcountries.com/v3.1/all')
//       .then(response => {
//         const data = response.data;
//         const codes = data.map(country => ({
//           name: country.name.common,
//           code: country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : '+1'
//         }));
//         setCountryCodes(codes);
//       })
//       .catch(error => console.error('Error fetching country codes:', error));
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};
//     const nameRegex = /^[a-z\s\.]{2,}$/i;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const phoneRegex = /^\+?[0-9]{1,4}[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}$/;

//     if (!formData.name || !nameRegex.test(formData.name)) {
//       newErrors.name = 'Name must contain at least 2 letters.';
//     }

//     if (!formData.email || !emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email address.';
//     }
//     if (!formData.phoneNumber || !phoneRegex.test(selectedCountryCode + formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Invalid phone number.';
//     }
//     if (!formData.companyWebsite || !/^https?:\/\/[^\s]+$/.test(formData.companyWebsite)) {
//       newErrors.companyWebsite = 'Invalid URL.';
//     }
//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully", formData);
//     } else {
//       console.log("Validation failed");
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className='container-fluid contactbgfrm text-light'>
//       <div className='row px-5 py-5'>
//         <div className='col-sm-12 col-lg-6 pt-5'>
//           <h3 className='startpara'>Start the </h3>
//           <h3 className='endpara'>Conversation Today</h3>
//           <p className='conversationpara'>Are you eager to explore how <br/><span className='endpara'>KG Genius<br/> Lab's</span><br/> comprehensive solutions can help you achieve your business goals?</p>
//         </div>
     
//           <div className='col-sm-12 col-md-6 '>
//             <form onSubmit={handleSubmit} className='bg-light rounded-3 p-4'>
//             <div className="form-group m-3 position-relative">
//                 <label htmlFor="requestEmail" className=' py-1'>Request Type</label>
//                 <select id="requestEmail" className="form-control fc1 ">
//                   <option value="Select" >Select</option>
//                   <option value="Contact Sales">Contact Sales</option>
//                   <option value="General Inquiry">General Inquiry</option>
//                   <option value="Partner Inquiry">Partner Inquiry</option>
//                   <option value="Subscribe our Newsletter">Subscribe our Newsletter</option>
//                 </select>
//                 <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
//               </div>
//               <div className='form-group m-3'> 
//                 <label className='form-label'>Business email</label>
//                 <input 
//                   type='email' 
//                   className='form-control form-control1' 
//                   name='email' 
//                   value={formData.email} 
//                   onChange={handleChange}
//                   required 
//                 />
//                 {errors.email && <small className='text-danger'>{errors.email}</small>}
//               </div>
//               <div className='form-group m-3'> 
//                 <label className='form-label'>Business Whatsapp Number</label>
//                 <div className='input-group form-control1 rounded-2'>
//                   <select
//                     className='form-select'
//                     value={selectedCountryCode}
//                     onChange={e => setSelectedCountryCode(e.target.value)}
//                     style={{width:"30%"}}
//                   >
//                     {countryCodes.map((country, index) => (
//                       <option key={index} value={country.code}>
//                         {country.name} ({country.code})
//                       </option>
//                     ))}
//                   </select>
//                   <input
//                     type='text'
//                     className='form-control'
//                     placeholder='Enter your phone number'
//                     name='phoneNumber'
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     style={{width:"70%"}}
//                   />
//                 </div>
//                 {errors.phoneNumber && <small className='text-danger'>{errors.phoneNumber}</small>}
//               </div>
//               <div className='form-group m-3'> 
//                 <label className='form-label'>Company Name</label>
//                 <input 
//                   type='text' 
//                   className='form-control form-control1' 
//                   name='companyName' 
//                   value={formData.companyName} 
//                   onChange={handleChange} 
//                   required
//                 />
//               </div>
//               <div className='form-group m-3'> 
//                 <label className='form-label'>Company Website</label>
//                 <input 
//                   type='text' 
//                   className='form-control form-control1' 
//                   name='companyWebsite' // Updated field name
//                   value={formData.companyWebsite} // Updated field name
//                   onChange={handleChange}
//                 />
//                 {errors.companyWebsite && <small className='text-danger'>{errors.companyWebsite}</small>}
//               </div>
//               <div className='form-group m-3'> 
//                 <label className='form-label'>Message</label>
//                 <textarea 
//                   className='form-control form-control1' 
//                   name='description' 
//                   rows='3' 
//                   value={formData.description} 
//                   onChange={handleChange} 
//                   required
//                 ></textarea>
//               </div>
//               <div className='d-flex justify-content-center my-4'>
//                 <input 
//                   type='submit' 
//                   className='contactbtn py-2  px-4 rounded-2 border border-0' 
//                   value='Submit' 
//                 />
//               </div>
//               <p className='privacytext'>The information you provide in this form will be used to process your request and keep you informed about our services, in line with KG Genius Lab's <span style={{color:"red"}}> Privacy Policy</span>.</p>
//             </form>
//           </div> 
//         </div>
//       </div>

//   );
// }

// export default Contactpage;




import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "./Contactpage.css";

function Contactpage() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyWebsite: '', // Updated field name
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
    const nameRegex = /^[a-z\s\.]{2,}$/i;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[0-9]{1,4}[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}$/;

    // Name validation
    if (!formData.name || !nameRegex.test(formData.name)) {
      newErrors.name = 'Name must contain at least 2 letters.';
    }

    // Email validation
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    // Phone number validation
    if (!formData.phoneNumber || !phoneRegex.test(selectedCountryCode + formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number.';
    }

    // Company website validation (optional)
    if (formData.companyWebsite && !/^https?:\/\/[^\s]+$/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = 'Invalid URL.';
    }

    // Message (description) validation
    if (!formData.description) {
      newErrors.description = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Validation failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container-fluid contactbgfrm text-light'>
      <div className='row px-5 py-5'>
        <div className='col-sm-12 col-lg-6 pt-5'>
          <h3 className='startpara'>Start the </h3>
          <h3 className='endpara'>Conversation Today</h3>
          <p className='conversationpara'>
            Are you eager to explore how <br/>
            <span className='endpara'>KG Genius<br/> Lab's</span><br/>
            comprehensive solutions can help you achieve your business goals?
          </p>
        </div>
     
        <div className='col-sm-12 col-md-6 '>
          <form onSubmit={handleSubmit} className='bg-light rounded-3 p-4'>
            <div className="form-group m-3 position-relative">
              <label htmlFor="requestEmail" className=' py-1'>Request Type</label>
              <select id="requestEmail" className="form-control fc1 ">
                <option value="Select">Select</option>
                <option value="Contact Sales">Contact Sales</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partner Inquiry">Partner Inquiry</option>
                <option value="Subscribe our Newsletter">Subscribe our Newsletter</option>
              </select>
              <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
            </div>

            <div className='form-group m-3'> 
              <label className='form-label'>Business email</label>
              <input 
                type='email' 
                className='form-control form-control1' 
                name='email' 
                value={formData.email} 
                onChange={handleChange}
                required 
              />
              {errors.email && <small className='text-danger'>{errors.email}</small>}
            </div>

            <div className='form-group m-3'> 
              <label className='form-label'>Business Whatsapp Number</label>
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
              <input 
                type='text' 
                className='form-control form-control1' 
                name='companyName' 
                value={formData.companyName} 
                onChange={handleChange} 
                required
              />
            </div>

            <div className='form-group m-3'> 
              <label className='form-label'>Company Website (Optional)</label>
              <input 
                type='text' 
                className='form-control form-control1' 
                name='companyWebsite' 
                value={formData.companyWebsite} 
                onChange={handleChange}
              />
              {errors.companyWebsite && <small className='text-danger'>{errors.companyWebsite}</small>}
            </div>

            <div className='form-group m-3'> 
              <label className='form-label'>Message</label>
              <textarea 
                className='form-control form-control1' 
                name='description' 
                rows='3' 
                value={formData.description} 
                onChange={handleChange} 
                required
              ></textarea>
              {errors.description && <small className='text-danger'>{errors.description}</small>}
            </div>

            <div className='d-flex justify-content-center my-4'>
              <input 
                type='submit' 
                className='contactbtn py-2 px-4 rounded-2 border border-0' 
                value='Submit' 
              />
            </div>

            <p className='privacytext'>
              The information you provide in this form will be used to process your request and keep you informed about our services, in line with KG Genius Lab's <span style={{color:"red"}}> Privacy Policy</span>.
            </p>
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Contactpage;

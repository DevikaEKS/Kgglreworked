// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Loginpage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };


//   const handleLogin = (e) => {
//     e.preventDefault();
//     let isValid = true;
//     setEmailError('');
//     setPasswordError('');
//     navigate('/BlogEditor') 
 
//     if (email === '') {
//       setEmailError('Email is required!');
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address!');
//       isValid = false;
//     }


//     if (password === '') {
//         setPasswordError('Password is required!');
//         isValid = false;
//       } else if (password.length < 8) {
//         setPasswordError('Password must contain atleast 8 characters ');
//         isValid = false;
//       }
//     if (isValid) {
//       navigate('/BlogEditor'); 
//     }
//   };

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center"
//       style={{ height: '100vh',backgroundColor:"#291571" }} >
//       <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
//         <h1 className="text-center mb-4">Login Page</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"/>
//             {emailError && <p className="text-danger mt-1">{emailError}</p>} {/* Email error message */}
//           </div>

//           {/* Password Field */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"/>
//             {passwordError && <p className="text-danger mt-1">{passwordError}</p>} {/* Password error message */}
//           </div>
//           <button type="submit" className="btn btn-primary w-100 my-3">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Loginpage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Fix: Define handleLogin as an arrow function
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation checks
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Navigate to the desired page if login is valid
      navigate('/BlogEditor');
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: '100vh', backgroundColor: '#291571' }}
    >
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-center mb-4">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {emailError && <p className="text-danger mt-1">{emailError}</p>} {/* Email error message */}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>} {/* Password error message */}
          </div>
          <button type="submit" className="btn btn-primary w-100 my-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;

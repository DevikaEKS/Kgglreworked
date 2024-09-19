
import React from 'react';
import "./Credentials.css";

function Credentials() {
  return (
    <div className='container text-center py-5'>
      <h1 className='evolheading my-5'><b>Credentials</b></h1>
      {/* Display only on large and above devices */}
      <div className='d-none d-lg-flex justify-content-center align-items-center lappart'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card cred yeartext mb-5 rounded-4'>
              <h1>7+</h1>
              <h2 className='txtrte'>Countries</h2>
            </div>
            <div className='card cred yeartext border-0 rounded-4 mt-5'>
              <h1>500+</h1>
              <h2>Projects</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card cred1 p-5 rounded-4 mt-4  bg-primary text-light'>
              <h1>25+</h1>
              <h2>Years Legacy</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card cred yeartext d-flex flex-column justify-content-center align-items-center mb-5 rounded-4'>
              <h1>1700+</h1>
              <h2>Professionals</h2>
            </div>
            <div className='card cred d-flex justify-content-center align-items-center yeartext rounded-4 mt-5'>
              <h1>270+</h1>
              <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Display only on small to medium devices */}
      <div className='row d-lg-none movingtext ms-auto'>
        <div className='col-sm-12'>
          <div className='card yeartext1 m-2 p-4 cred1'>
            <h1>7+</h1>
            <h2>Countries</h2>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='card profcard m-2 p-4 cred1'>
            <h1>500+</h1>
            <h2>Projects</h2>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='card yeartext m-2 p-4 cred1'>
            <h1>25+</h1>
            <h2>Legacy Years</h2>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='card profcard m-2 p-4 cred1'>
            <h1>1700+</h1>
            <h2>Professionals</h2>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='card yeartext1 m-2 p-4 cred1'>
            <h1>270+</h1>
            <h2>Clients</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;

// import React from 'react'
// import "./Credentials.css";
// function Credentials() {
//   return (
//     <div className='container text-center py-5'>
//          <h1 className='credheading'>Credentials</h1>
//         <div className='d-flex justify-content-center align-items-center'>
        
//         <div className='row lappart'>
//         <div className='col-sm-2 col-md-4'>
//       <div className='card cred m-3 mt-5 yeartext1'>
//         <h1>7+</h1>
//         <h2>Countries</h2>
//       </div>

//       <div className='card cred profcard border-0 rounded-4'>
//         <h1>500+</h1>
//         <h2>Projects</h2>
//       </div>
//       </div>

//       <div className='col-sm-2 col-md-4'>
//       <div className='card cred p-5 my-5 yeartext rounded-5 mb-5 rounded-4'>
//         <h1>25+</h1>
//         <h2>Years Legacy</h2>
//       </div>
//       </div>

//       <div className='col-sm-2 col-md-4 mb-4'>
//       <div className='card cred profcard d-flex flex-column justify-content-center align-items-center mb-3 rounded-4'>
//         <h1>1700+</h1>
//         <h2>Professionals</h2>
//       </div>
//       <div className='card cred my-2 d-flex justify-content-center align-items-center py-4 yeartext1 rounded-4'>
//         <h1>270+</h1>
//         <h2>Clients</h2>
//       </div>


//       </div>
//       </div>

//       </div>

// <div className='row movingtext'>
//  <div className='col-sm-12'>
//  <div className='card yeartext1 m-2 p-4'>
//         <h1>7+</h1>
//         <h2>Countries</h2>
//       </div>
//  </div>
//  <div className='col-sm-12'>
//  <div className='card profcard m-2 p-4'>
//         <h1>500+</h1>
//         <h2>Projects</h2>
//       </div>
//  </div>
//  <div className='col-sm-12'>
//  <div className='card yeartext m-2 p-4'>
//         <h1>25+</h1>
//         <h2>Legacy Years</h2>
//       </div>
//  </div>
//  <div className='col-sm-12'>
//  <div className='card profcard m-2 p-4'>
//         <h1>1700+</h1>
//         <h2>Professionals</h2>
//       </div>
//  </div>
//  <div className='col-sm-12'>
//  <div className='card yeartext1 m-2 p-4'>
//         <h1>270+</h1>
//         <h2>Clients</h2>
//       </div>
//  </div>
// </div>


//     </div>
//   )
// }

// export default Credentials





import React from 'react';
import "./Credentials.css";

function Credentials() {
  return (
    <div className='container text-center py-5'>
      <h1 className='credheading'>Credentials</h1>
      {/* Display only on large and above devices */}
      <div className='d-none d-lg-flex justify-content-center align-items-center lappart'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card cred m-3 mt-5 yeartext1'>
              <h1>7+</h1>
              <h2>Countries</h2>
            </div>
            <div className='card cred profcard border-0 rounded-4'>
              <h1>500+</h1>
              <h2>Projects</h2>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card cred p-5 my-5 yeartext rounded-5 mb-5 rounded-4'>
              <h1>25+</h1>
              <h2>Years Legacy</h2>
            </div>
          </div>
          <div className='col-lg-4 mb-4'>
            <div className='card cred profcard d-flex flex-column justify-content-center align-items-center mb-3 rounded-4'>
              <h1>1700+</h1>
              <h2>Professionals</h2>
            </div>
            <div className='card cred my-2 d-flex justify-content-center align-items-center py-4 yeartext1 rounded-4'>
              <h1>270+</h1>
              <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Display only on small to medium devices */}
      <div className='row d-lg-none movingtext'>
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

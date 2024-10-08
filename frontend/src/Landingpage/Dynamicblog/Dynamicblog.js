// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; 
// import "./Dynamicblog.css";
// function Dynamicblog() {
//   const [content, setContent] = useState(''); 
//   const [category, setCategory] = useState(''); 
//   const [conclusion, setConclusion] = useState(''); 


//   const modules = {
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, {'font': [] }],
//       [{ size: [] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}],
//       ['link', 'image', 'video'],
//       ['clean'] 
//     ]
//   };

//   return (
//     <div className="container-fluid bgblogs">
//       <div className="row p-5">
//         <div className="d-flex flex-column justify-content-center">
//           <form>
//             {/* Category Dropdown */}
//             <div className="mb-3 row align-items-center">
//               <label className="col-sm-2 col-form-label">Category</label>
//               <div className="col-sm-10">
//                 <select
//                   className="form-select"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}>
//                   <option value="">Select a category</option>
//                   <option value="SAP">SAP</option>
//                   <option value="IT">IT Services</option>
//                   <option value="Digital Marketing">Digital Marketing</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mb-3 row align-items-center">
//               <label htmlFor="title" className="col-sm-2 col-form-label">
//                 Blog Title
//               </label>
//               <div className="col-sm-10">
//                 <input
//                   type="text"
//                   id="title"
//                   className="form-control titlefont"
//                   placeholder="Enter the blog title"
//                 />
//               </div>
//             </div>

//             <div className="mb-3 row align-items-center">
//               <label htmlFor="imageUpload" className="col-sm-2 col-form-label">
//                 Image
//               </label>
//               <div className="col-sm-10">
//                 <input
//                   type="file"
//                   id="imageUpload"
//                   className="form-control"
//                   accept="image/*"/>
//               </div>
//             </div>

//             {/* React Quill Editor for Blog Content */}
//             <div className="my-3">
//               <label htmlFor="content">Blog Content</label>
//               <ReactQuill
//                 theme="snow"
//                 value={content}
//                 onChange={setContent}
//                 modules={modules}
//                 placeholder="Write your blog content here..."
//               />
//             </div>

//             {/* Conclusion Section */}
//             <div className="mb-3 row align-items-center">
//               <label htmlFor="conclusion" className="col-sm-2 col-form-label">
//                 Blog Conclusion
//               </label>
//               <div className="col-sm-10">
//                 <textarea
//                   id="conclusion"
//                   className="form-control"
//                   rows="3" 
//                   value={conclusion}
//                   onChange={(e) => setConclusion(e.target.value)}
//                   placeholder="Write your blog conclusion here..."
//                 ></textarea>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="row">
//               <div className="col-sm-10 offset-sm-2">
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dynamicblog;




import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useNavigate } from 'react-router-dom';
import "./Dynamicblog.css";
function Dynamicblog() {
  const [content, setContent] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [conclusion, setConclusion] = useState(''); 
  const [title, setTitle] = useState(''); // New state for blog title
  const [image, setImage] = useState(null); // New state for image
  const navigate = useNavigate(); 
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, {'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'video'],
      ['clean'] 
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can log or process your data as needed
    console.log('Category:', category);
    console.log('Title:', title);
    console.log('Image:', image);
    console.log('Content:', content);
    console.log('Conclusion:', conclusion);
    navigate('/bl', { state: { content, category, conclusion, title, image } }); // Use your desired route here
  };
  

  return (
    <div className="container-fluid bgblogs">
      <div className="row p-5">
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}> {/* Attach the submit handler here */}
            {/* Category Dropdown */}
            <div className="mb-3 row align-items-center">
              <label className="col-sm-2 col-form-label">Category</label>
              <div className="col-sm-10">
                <select
                  className="form-select form-control1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select a category</option>
                  <option value="SAP">SAP</option>
                  <option value="IT">IT Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Blog Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the blog title"
                  value={title} // Set value from state
                  onChange={(e) => setTitle(e.target.value)} // Update state on change
                />
              </div>
            </div>

            <div className="mb-3 row align-items-center">
              <label htmlFor="imageUpload" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                   placeholder="Enter the blog title"
                  accept="jpg.jpeg,png,webp"
                  onChange={(e) => setImage(e.target.files[0])} // Update image state
                />
              </div>
            </div>

            {/* React Quill Editor for Blog Content */}
            <div className="my-3">
              <label htmlFor="content">Blog Content</label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                className="form-control1 rounded-2"
                placeholder="Write your blog content here..."
              />
            </div>

            {/* Conclusion Section */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="conclusion" className="col-sm-2 col-form-label">
                Blog Conclusion
              </label>
              <div className="col-sm-10">
                <textarea
                  id="conclusion"
                  className="form-control form-control1"
                  rows="3" 
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  placeholder="Write your blog conclusion here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dynamicblog;

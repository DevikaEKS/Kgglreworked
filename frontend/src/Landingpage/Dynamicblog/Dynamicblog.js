import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useNavigate } from 'react-router-dom';
import "./Dynamicblog.css";

function Dynamicblog() {
  const [content, setContent] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [conclusion, setConclusion] = useState(''); 
  const [title, setTitle] = useState(''); 
  const [image, setImage] = useState(null); 
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

  const handleeditorpage = () => {
    window.history.back();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category:', category);
    console.log('Title:', title);
    console.log('Image:', image);
    console.log('Content:', content);
    console.log('Conclusion:', conclusion);
    navigate('/bl', { state: { content, category, conclusion, title, image } }); 
  };
  
  return (
    <div className="container">
      <div className="row mx-1 mx-md-4">
        <h3 className='text-center'>Blog Page</h3>
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group row mt-5 mb-2">
              <label className="col-sm-2">Category</label>
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

            <div className="form-group row my-3">
              <label htmlFor="title" className="col-sm-2">Blog Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the blog title"
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>

            <div className="form-group row my-3">
              <label htmlFor="imageUpload" className="col-sm-2">Blog Image</label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                  accept="jpg.jpeg,png,webp"
                  onChange={(e) => setImage(e.target.files[0])} />
              </div>
            </div>

            <div className='form-group row my-3'>
                <label className='col-sm-2'>Blog Content</label>
                <div className='col-sm-10'>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        modules={modules}
                        className="form-control1 rounded-2"
                        placeholder="Write your blog content here..."
                    />
                </div>
            </div>

            <div className="form-group row my-3">
              <label htmlFor="conclusion" className="col-sm-2">Blog Conclusion</label>
              <div className="col-sm-10">
                <textarea
                  id="conclusion"
                  className="form-control form-control1"
                  rows="3" 
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  placeholder="Write your blog conclusion here..."></textarea>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={handleeditorpage}>
                  Back
                </button>
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

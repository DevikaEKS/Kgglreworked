import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Blogupdation() {
    const [content, setContent] = useState(''); 
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

    return (
        <div className='container'>
             <form>
            <div className='form-group row mt-5 mb-2'>
               
                <label className='col-sm-2'>Category</label>
                <div className='col-sm-10'>
                    <select className='form-control form-control1'>
                        <option value="">Select a category</option>
                        <option value="SAP">SAP</option>
                        <option value="IT">IT Services</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                </div>
            </div>

            <div className='form-group row my-3'>
                <label className='col-sm-2'>Blog Title</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control form-control1' />
                </div>
            </div>

            <div className='form-group row my-3'>
                <label className='col-sm-2'>Blog Image</label>
                <div className='col-sm-10'>
                    <input type='file' accept="image/*" className='form-control form-control1' />
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

            <div className='form-group row my-3'>
                <label className='col-sm-2'>Conclusion</label>
                <div className='col-sm-10'>
                    <textarea className="form-control form-control1" rows="3"></textarea>
                </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-end">
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>


            </form>
        </div>
      
    );
}

export default Blogupdation;

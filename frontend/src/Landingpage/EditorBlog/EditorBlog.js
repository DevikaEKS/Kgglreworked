import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogsData from './blogs.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditorBlog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [blogToDelete, setBlogToDelete] = useState(null); // Track the blog to delete

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  const addnewblog = () => {
    navigate('/Dynamic_blog');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog); 
    setShowModal(true); 
  };

  const confirmDelete = () => {
    setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id)); 
    setShowModal(false); 
  };

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.sub === selectedCategory);

  return (
    <div className='container-fluid'>
      <h1 className='text-center headblog mb-5'><b>Additional Insights</b></h1>
      <div className='row m-4'>
        <div className='col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start'>
          <Link
            className={`lnkfnt ${selectedCategory === 'All' ? 'active' : ''} col-12 col-md-auto text-start mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('All')}>
            All
          </Link>
          <Link
            className={`lnkfnt ${selectedCategory === 'SAP' ? 'active' : ''} col-12 col-md-auto text-start mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('SAP')}>
            SAP
          </Link>
          <Link
            className={`lnkfnt ${selectedCategory === 'IT' ? 'active' : ''} col-12 col-md-auto text-start mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('IT')}>
            IT Services
          </Link>
          <Link
            className={`lnkfnt ${selectedCategory === 'DM' ? 'active' : ''} col-12 col-md-auto text-start mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('DM')}>
            Digital Marketing
          </Link>
          <button className='btn btn-primary' onClick={addnewblog}>Add Blog</button>
        </div>
      </div>

      <div className='row'>
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className='card shadowcard my-4'>
              <img src={blog.image} alt={blog.title} className='card-img-top cm1' />
              <div className='card-body'>
                <h5 className='card-title'><b>{blog.title}</b></h5>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-outline-info mx-2' onClick={() => handleCardClick(blog.path)}>View</button>
                  <button className='btn btn-outline-info mx-2'onClick={() => navigate(`/Blogupdation`)}>Update</button>
                  <button className='btn btn-outline-info mx-2' onClick={() => handleDeleteClick(blog)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this blog?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorBlog;

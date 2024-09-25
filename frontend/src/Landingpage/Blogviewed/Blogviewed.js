


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogsData from './blogs.json'; // Adjust the path to your JSON file
import "./Blogviewed.css";


function Blogviewed() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Track selected category

    // Fetch data from the JSON file
    useEffect(() => {
        setBlogs(blogsData); // Simulate fetching from a file or API
    }, []);

    const handleCardClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Set the selected category
    };

    // Filter blogs based on selected category
    const filteredBlogs = selectedCategory === 'All' 
        ? blogs 
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className='container-fluid'>
            {/* Category Filter Options */}
            <h1 className='text-center headblog  mb-5'><b>Additional Insights</b></h1>
            <div className='row m-4'>
    <div className='col d-flex flex-wrap justify-content-evenly border-bottom'>
        <Link
            className={`lnkfnt ${selectedCategory === 'All' ? 'active' : ''} col-12 col-md-auto text-center mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('All')}
        >
            All
        </Link>
        <Link
            className={`lnkfnt ${selectedCategory === 'SAP' ? 'active' : ''} col-12 col-md-auto text-center mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('SAP')}
        >
            SAP
        </Link>
        <Link
            className={`lnkfnt ${selectedCategory === 'IT' ? 'active' : ''} col-12 col-md-auto text-center mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('IT')}
        >
            IT Services
        </Link>
        <Link
            className={`lnkfnt ${selectedCategory === 'DM' ? 'active' : ''} col-12 col-md-auto text-center mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('DM')}
        >
            Digital Marketing
        </Link>
        <Link
            className={`lnkfnt ${selectedCategory === 'HR' ? 'active' : ''} col-12 col-md-auto text-center mb-2 mb-md-0`}
            onClick={() => handleCategoryClick('HR')}
        >
            HR Consultancy
        </Link>
    </div>
</div>


            {/* Blog Cards */}
            <div className='row'>
                {filteredBlogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className={`col-sm-12 col-lg-5 ${index % 2 === 0 ? 'offset-lg-1' : 'offset-lg-1 right-card'}`} // Apply class to right-aligned cards
                    >
                        <div className='card shadowcard my-4' onClick={() => handleCardClick(blog.path)}>
                            <img src={blog.image} alt={blog.title} className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='card-title'>{blog.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogviewed;

import React from 'react';

const Blog = (props) => {
    return (
        <div className='blog' style={{ color: 'white' }}>
            <h4>Heading: {props.heading}</h4>
            <h4>Author: {props.author}</h4>
        </div>
    );
};

export default Blog;
import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>


            <img className='w-100' src={img} alt="" />
            <h4>Service Type: {name}</h4>
            <h4>Price: {price}</h4>
            <p>Business Type: {description}</p>
            <button className='btn btn-primary w-100'>Book {name}</button>

        </div>
    );
};

export default Service;
import React from 'react';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    return (
        <footer className='bg-primary text-white text-center mt-5'>



            <p><small>copyrihht @ {year}</small></p>

        </footer>
    );
};

export default Footer;
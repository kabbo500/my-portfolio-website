import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <footer className='footer'>
                <p className='mb-5 mt-5'><small>&copy; copyright {year} MD. KABBO KAZI. All right reserved.</small></p>
            </footer>
        </div>
    );
};

export default Footer;
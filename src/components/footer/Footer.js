import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Jonathan Redrado</h1>
                <p>Fullstack Web Developer</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Design by Jonathan Redrado
                </div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/jonathan-redrado-3838a3206' target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/JoniRedrado' target="_blank" rel="noreferrer">
                        <i className='fab fa-brands fa-github'></i>
                    </a>
                    <a href='https://wa.me/541168212905' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>    
        </footer>
    )
}

export default Footer
import React from 'react';
import about from '../../img/isometric-laptop-coding-concept-web-developer-vector-25840264.jpg';
import './AboutMe.css'
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={about}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title text-primary">About Myself</h1>
                <h3 className="a-sub">
                    I am Kabbo Kazi, a passionate junior Web  Developer who desires to learn and grow in a collaborative team environment. Able to code web pages from the ground up using HTML, CSS, BootStrap, Tailwind-css, and ReactJs.
                </h3>
                <h2 className='a-sub'>I have completed my web development course from Programming hero With "Jhankar Mahbub"</h2>
                <button className='resume'><a style={{ textDecoration: "none" }} className='fs-5 ' href="https://www.linkedin.com/in/kabbo-kazi-5b7907229/" target="_blank" rel="noopener noreferrer"> Hire me</a></button>
            </div>
        </div>
    );
};

export default About;
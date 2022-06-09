import React from 'react';
import './About.css'
import about from '../img/isometric-laptop-coding-concept-web-developer-vector-25840264.jpg'
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

            </div>
        </div>
    );
};

export default About;
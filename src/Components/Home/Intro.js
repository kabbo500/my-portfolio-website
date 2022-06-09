import React from 'react';
import './Intro.css'
import me from '../img/kabbo.png'
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name text-primary">Kabbo Kazi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Junior Web Developer</div>
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">React Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        IF you Interested to know about my self ?
                    </p>
                    <button><a className='fs-4 ' href="https://drive.google.com/file/d/1_37foKQytWI6VcMCyQ7gAuhO9tbNeWPG/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className='i-img' />
            </div>
        </div>
    );
};

export default Intro;

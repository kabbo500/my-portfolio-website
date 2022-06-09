import React from 'react';
import './Project.css'
const Project = ({ project }) => {
    const { img, name, description } = project;
    return (
        <div className='product col col-12  col-md-6 col-lg-4 g-4'>
            <div class="card " >
                <div className='p-1'>
                    <img src={img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title"><span className='fw-bold'>Project Name:</span>{name}</h5>
                    <p class="card-text"><span className='fw-bold'>Technology Use:</span>{description}</p>

                </div>
            </div>
        </div>

    );
};

export default Project;
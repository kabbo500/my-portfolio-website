import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css'
const Project = ({ project }) => {
    const { _id, img, name, description } = project;

    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/project/${id}`)
    }
    return (
        <div className='product col col-12  col-md-6 col-lg-4 g-4'>
            <div class="card " >
                <div className='p-1'>
                    <img src={img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title"><span className='fw-bold'>Project Name:</span>{name}</h5>
                    <p class="card-text"><span className='fw-bold'>Technology Use:</span>{description}</p>
                    <button onClick={() => navigateToDetails(_id)} className='btn btn-primary'>Details about this project</button>
                </div>
            </div>
        </div>

    );
};

export default Project;
import React from 'react';
import Project from '../Project/Project';
import './ProjectList.css'
import { projects } from "../../projects"
const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Some of My Projects Sample</h1>

            </div>
            <div>
                <h1 className='text-primary text-center mt-4'>PROJECTS</h1>
                <div className='row'>
                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectList;
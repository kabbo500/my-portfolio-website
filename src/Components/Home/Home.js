import React from 'react';

import About from '../About/About';
import Contract from '../Contract/Contract';
import ProjectList from '../ProjectList/ProjectList';
import Intro from './Intro';

const Home = () => {

    return (
        <div>

            <Intro></Intro>
            <About></About>
            <ProjectList></ProjectList>
            <Contract></Contract>
        </div>
    );
};

export default Home;
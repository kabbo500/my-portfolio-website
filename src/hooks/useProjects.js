import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://boiling-springs-72713.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return [projects, setProjects];
}
export default useProjects;
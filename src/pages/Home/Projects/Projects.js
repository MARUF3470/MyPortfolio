import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';
const Projects = () => {
    const [projects, setProjects] = useState(null)
    useEffect(() => {
        fetch('https://porfoilo-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
    }, [])

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2'>Projects</h1>
            <p className='mt-2 text-lg'>Some of my best creation</p>

            <div className="divider w-1/2"></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    projects?.map(project => <SingleProject key={project._id} project={project}></SingleProject>

                    )
                }
            </div>
        </div>
    );
};

export default Projects;
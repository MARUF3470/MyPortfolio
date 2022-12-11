import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRegHospital } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';
import { Link } from 'react-router-dom';
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
            <h1 className='text-5xl font-bold'>Projects</h1>
            <p className='mt-2 text-lg'>Some of my best creation</p>

            <div className="divider w-1/2"></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    projects?.map(project => <div key={project._id} className="card bg-base-100 shadow-xl image-full">
                        <figure><img src={project.picture1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>Live Site: {project.siteLink}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" to={`/project/${project._id}`}>Buy Now</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;
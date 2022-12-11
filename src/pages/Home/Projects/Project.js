import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Project = () => {
    const { title, clientSiteCode, picture1, picture2, picture4, picture3, picture2Details, picture3Details, picture4Details, serverSiteCode, siteLink, technologies } = useLoaderData()
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-center text-6xl'>{title}</h1>
            <img src={picture1} className="w-full mt-5 rounded-xl" alt="" />
            <div className='my-8 border-y-2 py-10'>
                <h3 className='text-3xl font-semibold'>Site Links:</h3>
                <p className=' mt-2'>Live Site: <span className='text-blue-500'>{siteLink}</span></p>
                <p className=' mt-2'>Client site code: <span className='text-blue-500'>{clientSiteCode}</span></p>
                <p className=' mt-2'>Server Site Code: <span className='text-blue-500'>{serverSiteCode}</span></p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-5 items-center'>
                <div><img className='h-5/6 w-full rounded-md' src={picture2} alt="" /></div>
                <p className='text-2xl'>{picture2Details}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-5 items-center'>
                <div><img className='h-5/6 w-full rounded-md' src={picture3} alt="" /></div>
                <p className='text-2xl'>{picture3Details}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-5 items-center'>
                <div><img className='h-5/6 w-full rounded-md' src={picture4} alt="" /></div>
                <p className='text-2xl'>{picture4Details}</p>
            </div>
            <div className='my-8 border-y-2 py-10 '>
                <h3 className='text-3xl'>Technologies used in the project are: </h3>
                {
                    technologies?.map((technology, i) => <li>{technology}</li>)
                }
            </div>

        </div>
    );
};

export default Project;
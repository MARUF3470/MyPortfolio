import React from 'react';

const Codding = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2'>Codding Skills</h1>
            <p className='mt-2 text-lg'>Developing on</p>
            <div className="divider w-1/2"></div>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 mt-5'>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 90, "--size": "10rem", "--thickness": "8px" }}>90% <p>HTML</p></div>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 85, "--size": "10rem", "--thickness": "8px" }}>85% <p>CSS</p></div>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 80, "--size": "10rem", "--thickness": "8px" }}>80% <p>JavaScript</p></div>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 80, "--size": "10rem", "--thickness": "8px" }}>80% <p>React</p></div>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 70, "--size": "10rem", "--thickness": "8px" }}>70% <p>NodeJS</p></div>
                <div className="radial-progress text-green-300 mx-auto " style={{ "--value": 75, "--size": "10rem", "--thickness": "8px" }}>75% <p>MongoDB</p></div>
            </div>
        </div>
    );
};

export default Codding;
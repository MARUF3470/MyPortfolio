import React from 'react';

const Language = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2'>Language Skills</h1>
            <p className='mt-2 text-lg'>Reading and Writing</p>
            <div className="divider w-1/2"></div>
            <div className='mt-4'>
                <p className='text-lg'>Bangla</p>
                <progress className="progress progress-success w-56" value="100" max="100"></progress>
            </div>
            <div>
                <p className='text-lg'>English</p>
                <progress className="progress progress-success w-56" value="70" max="100"></progress>
            </div>
        </div>
    );
};

export default Language;
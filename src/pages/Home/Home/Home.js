import React from 'react';
import img from '../../../components/Picture/Maruf-removebg-preview-removebg-preview.png'
import { HiOutlineDownload } from 'react-icons/hi';
import pdf from '../../../components/Resume/Maruf_Resume .pdf'
import { Link } from 'react-router-dom';
import Language from '../Language/Language';
import Codding from '../Codding/Codding';
import Projects from '../Projects/Projects';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto items-center my-28'>
                <div>
                    <img className='w-3/4 mx-auto mb-10 rounded-full ring-slate-700 ring-8 ring-offset-base-100 ring-offset-2' src={img} alt="" />
                </div>
                <div>
                    <p className='text-lg text-secondary'>MERN Stack Developer</p>
                    <h3 className='text-5xl font-bold mt-2'>Maruf Hossain
                    </h3>
                    <p className='mt-6'>
                        <Typewriter
                            words={['Hi I am S. M. Maruf Hossain. I am trying to learn MERN for the last 6 months. I am pretty much confidence about my skils and now i am trying to get a job as a web-developer so that i can add professionalism to my knowledge...']}
                            // loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            // onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </p>
                    <div className='flex gap-2 mt-6'>
                        <a href={pdf} download className='btn rounded-3xl btn-outline btn-info'><HiOutlineDownload className='w-6 h-6 mr-1'></HiOutlineDownload> <span className='text-slate-200'>Resume</span></a>
                        <Link to='/contact' className='btn rounded-3xl btn-outline' >Contact Me</Link>
                    </div>
                </div>
            </div>
            <Language></Language>
            <Codding></Codding>
            <Projects></Projects>
        </div>
    );
};

export default Home;
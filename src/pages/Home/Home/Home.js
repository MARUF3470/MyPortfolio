import React from 'react';
import img from '../../../components/Picture/Maruf-removebg-preview-removebg-preview.png'
import { HiOutlineDownload } from 'react-icons/hi';
import pdf from '../../../components/Resume/Maruf_Resume.pdf'
import { Link } from 'react-router-dom';
import Language from '../Language/Language';
import Codding from '../Codding/Codding';
import Projects from '../Projects/Projects';
import Typewriter from 'typewriter-effect';
import ParticleBackground from '../../../components/particles/ParticleBackground';
import { motion } from "framer-motion"
const Home = () => {

    return (
        <div>
            <ParticleBackground></ParticleBackground>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto items-center my-28'>
                <motion.div className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}>
                    <img className='w-3/4 mx-auto mb-10 rounded-full ring-slate-700 ring-8 ring-offset-base-100 ring-offset-2' src={img} alt="" />
                </motion.div>
                <div>
                    <p className='text-lg text-secondary'>MERN Stack Developer</p>
                    <h3 className='text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 py-2'>Maruf Hossain
                    </h3>
                    <p className='mt-6'>
                        Hi I'm S. M. Maruf Hossain. I'm a
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
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
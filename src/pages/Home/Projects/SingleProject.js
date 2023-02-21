import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../App.css'
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Power3, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const SingleProject = ({ project }) => {
    let productItem = useRef(null)
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
    };

    useEffect(() => {
        const el = productItem.current
        gsap.fromTo(el, { y: 100, opacity: 0 }, {
            y: 0, opacity: 100, duration: 1, scrollTrigger: {
                trigger: el,
                toggleActions: 'restart pause none none'
            }
        })
    }, [])
    return (
        <div ref={productItem} key={project._id} className="card lg:card-side bg-base-100 shadow-xl">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img
                        src={project.picture1}
                        loading="lazy"
                        alt='' className='w-full h-full' /></SwiperSlide>
                    <SwiperSlide><img
                        src={project.picture2}
                        loading="lazy"
                        alt='' className='w-full h-full' /></SwiperSlide>
                    <SwiperSlide><img
                        src={project.picture3}
                        loading="lazy"
                        alt='' className='w-full h-full' /></SwiperSlide>
                    <SwiperSlide><img
                        src={project.picture4}
                        loading="lazy"
                        alt='' className='w-full h-full' /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </>
            <div className="card-body">
                <h2 className="card-title text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{project.title}</h2>
                <p className='text-green-400'>{project?.details}.</p>
                <p><strong>Technologies Used:</strong>
                    {project.technologies.map((technology, i) => <li>{technology}</li>)}
                </p>
                <div className="card-actions justify-end">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="px-6 btn-xs transition-colors duration-300 rounded-full shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30"><a href={project.siteLink}>Live Site</a></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="px-6 btn-xs transition-colors duration-300 rounded-full shadow-xl bg-slate-500 hover:bg-slate-600 text-slate-100 shadow-slate-400/30"><a href={project.clientSiteCode}>Client Side Code</a></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="px-6 btn-xs transition-colors duration-300 rounded-full shadow-xl text-emerald-100 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-400/30"><a href={project.serverSiteCode}>Server Side Code</a></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="px-6 btn-xs transition-colors duration-300 rounded-full shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400/30"><Link to={`/project/${project._id}`}>Details</Link></motion.button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
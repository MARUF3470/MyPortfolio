import React from 'react';
import { toast } from 'react-hot-toast';
import { FaMobileAlt } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import { TfiEmail } from 'react-icons/tfi'

const Contact = () => {
    // const handleForm = event => {
    //     toast.success('Thank You. I will try to reply your email as soon as possible')
    // }
    return (
        <div className='my-24'>
            <div className='border-y-4 border-gray-800  my-10'>
                <div className='py-16 lg:flex justify-between w-11/12 mx-auto'>
                    <h1 className='text-5xl font-semibold'>Contact</h1>
                    <p>Get in Touch</p>
                </div>
            </div>
            <div className='my-20'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.919544743825!2d90.39929777419457!3d23.892471483309496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4453f44ee37%3A0xc5ca99a2db987f01!2sStation%20Road%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1670678343130!5m2!1sen!2sbd" className='w-11/12 h-56 mx-auto' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto'>
                <div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <FaMobileAlt className='text-3xl text-blue-700'></FaMobileAlt>

                            <p>01786580192</p>

                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <GrMapLocation className='text-3xl text-blue-700'></GrMapLocation>

                            <p>Tongi, Station-road, Gazipur, Dhaka</p>

                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='flex gap-8 items-center'>
                            <TfiEmail className='text-3xl text-blue-700'></TfiEmail>

                            <p>smmaruf25@gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h3 className='text-2xl font-semibold'>How Can I Help You?</h3>
                    <div className="divider w-24"></div>
                    {/* To send email to directly to admin email visit formsubmit.co and read documentation*/}
                    <form action="https://formsubmit.co/smmaruf25@gmail.com" method="POST">
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <input type="hidden" name="_subject" value="Someone send a query from your portfolio!" />
                                <input type="text" placeholder="Full Name" name="name" className="input input-bordered w-full mb-2" required />
                                <input type="text" placeholder="Email" name="email" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered w-full" name="message" placeholder="Type your message here"></textarea>
                            </div>
                        </div>
                        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
                        <button className='btn rounded-3xl btn-outline btn-info mt-3' type="submit"><span className='text-gray-200'>Send Message</span></button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;
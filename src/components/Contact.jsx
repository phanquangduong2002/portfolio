import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

import Image_12 from '../assets/images/12.png';
import Image_13 from '../assets/images/13.png';
import Image_11 from '../assets/images/11.png';

import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="w-full h-auto">
            <div className="w-full relative">
                <div className="mt-[135px] w-full lg:mt-[150px] px-4 lg:px-[100px] flex flex-col justify-center relative">
                    <div className="max-w-[600px] flex items-center justify-center flex-col mx-auto mb-10">
                        <h3 className="py-3 tracking-wide text-xl lg:text-2xl text-red-500 font-normal">
                            Contact Me
                        </h3>
                        <h2 className="text-2xl lg:text-3xl font-medium text-headingColor text-center">
                            I Want To Hear From You
                        </h2>
                        <p className="py-3 text-center text-textColor text-base leading-7 lg:leading-8 lg:text-lg">
                            Please fill out the form on this section to contact with me. Or call
                            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                        </p>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row mt-10 gap-10">
                        <div className="w-full lg:w-[50%] flex flex-col gap-5 item-start">
                            <div className="w-full flex items-center justify-start gap-8">
                                <div className="w-[88px] h-[88px] flex items-center justify-center rounded-full bg-[#fedfd7]">
                                    <MdLocationOn className="text-2xl text-orange-600" />
                                </div>
                                <div className="w-[50%] sm:flex-1">
                                    <h3 className="text-3xl font-normal mb-2">Address</h3>
                                    <p className="text-base text-textColor block truncate">
                                        Ha Noi, Viet Nam
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-start gap-8">
                                <div className="w-[88px] h-[88px] flex items-center justify-center rounded-full bg-[#ddf5e6]">
                                    <MdEmail className="text-2xl text-green-600" />
                                </div>
                                <div className="w-[50%] sm:flex-1">
                                    <h3 className="text-3xl font-normal mb-2">Email</h3>
                                    <a
                                        href="mailto: phanquangduong2002@gmail.com"
                                        className="w-full text-base text-textColor hover:text-orange-600 transition-all duration-150 ease-in-out"
                                    >
                                        <p className="block truncate">quangduongsayhi@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-start gap-8">
                                <div className="w-[88px] h-[88px] flex items-center justify-center rounded-full bg-[#ece8fd]">
                                    <MdPhone className="text-2xl text-violet-600" />
                                </div>
                                <div className="w-[50%] sm:flex-1">
                                    <h3 className="text-3xl font-normal mb-2">Phone</h3>
                                    <p className="text-base text-textColor block truncate">
                                        037 *** 5152
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%] flex flex-col gap-4 item-start">
                            <div className="w-full flex-col sm:flex-row flex gap-4 flex-wrap">
                                <input
                                    type="text"
                                    className="flex-1 min-w-[40%] py-3 px-7 rounded-xl border-[1px] border-[#d6dbe5] outline-none placeholder:text-[#6f6b80] placeholder:text-lg"
                                    placeholder="Your name"
                                />
                                <input
                                    type="text"
                                    className="flex-1 min-w-[40%] py-3 px-7 rounded-xl border-[1px] border-[#d6dbe5] outline-none placeholder:text-[#6f6b80] placeholder:text-lg"
                                    placeholder="Your email"
                                />
                                <input
                                    type="text"
                                    className="flex-1 min-w-[40%] py-3 px-7 rounded-xl border-[1px] border-[#d6dbe5] outline-none placeholder:text-[#6f6b80] placeholder:text-lg"
                                    placeholder="Your phone"
                                />
                                <input
                                    type="text"
                                    className="flex-1 min-w-[40%] py-3 px-7 rounded-xl border-[1px] border-[#d6dbe5] outline-none placeholder:text-[#6f6b80] placeholder:text-lg"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="w-full">
                                <textarea
                                    className="w-full min-h-[200px] text-[#6f6b80] p-7 pt-4 outline-none resize-none rounded-xl border-[1px] border-[#d6dbe5] placeholder:text-[#6f6b80] placeholder:text-lg placeholder:tracking-wide"
                                    name="message"
                                    id="message"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <div>
                                <button className="rounded-full border-[2px] border-red-500 bg-red-500 text-white px-8 py-2 cursor-pointer text-lg hover:bg-transparent hover:text-black transition-all duration-[200ms] ease-in-out">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Decorate */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 1.6 }}
                        className="hidden md:flex absolute -z-10 -top-6 left-5"
                    >
                        <img src={Image_11} alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 1.6 }}
                        className="hidden md:flex absolute -z-10 -bottom-10 right-0"
                    >
                        <img src={Image_13} alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 1.6 }}
                        className="hidden md:flex absolute -z-10 -bottom-[170px] left-5"
                    >
                        <img src={Image_12} alt="" />
                    </motion.div>
                </div>

                {/* CopyRight */}
                <div className="mt-[135px] w-full lg:mt-[150px] p-8 flex flex-col md:flex-row gap-2 items-center justify-between relative bg-[#f2f5fb]">
                    <p className="text-sm sm:text-base text-[#6f6b80] md:px-4">
                        Copyright © 2022 All Rights Reserved
                    </p>
                    <p className="text-sm sm:text-base text-[#6f6b80] md:px-4">
                        Developed with Phan Quang Duong
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

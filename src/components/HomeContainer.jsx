import React from 'react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Avatar from '../assets/images/Avatar.jpg';
import Image_3 from '../assets/images/3.png';

const HomeContainer = () => {
    return (
        <section
            id="#home"
            className="w-full h-screen lg:max-h-[600px] flex justify-center items-start lg:items-stretch lg:justify-self-stretch bg-home_bg_image bg-cover bg-center bg-no-repeat relative"
        >
            <div className="w-full mt-14 px-4 lg:px-[120px] flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-6">
                <div className="w-full lg:w-[63%] flex flex-col justify-center">
                    <h3 className="text-red-500 text-2xl lg:text-3xl pt-6 pb-2 flex justify-center lg:justify-start">
                        Hello, I'm
                    </h3>
                    <h1 className="py-1 lg:py-4 flex justify-center lg:justify-start">
                        <span className="text-2xl font-medium lg:text-5xl">Phan Quang Duong</span>
                    </h1>
                    <h3 className="py-3 text-2xl flex justify-center lg:justify-start">
                        <span className="mr-2">A</span>
                        <span className="text-green-500">Front End Developer</span>
                    </h3>
                    <h3 className="py-2 text-textColor text-center lg:text-left">
                        I'm front end developer in Viet Nam, and I'm very passionate and dedicated
                        to my work.
                    </h3>
                    <div className="py-5 flex items-center justify-center lg:justify-start gap-7 lg:gap-10">
                        <button className="rounded-full border-[2px] border-red-500 bg-red-500 text-white px-4 py-2 cursor-pointer text-lg hover:bg-transparent hover:text-black transition-all duration-[200ms] ease-in-out">
                            <a href="#about">About Me</a>
                        </button>
                        <div className="flex gap-4 text-xl">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.facebook.com/phan.q.duong.811"
                                target="_blank"
                            >
                                <BsFacebook />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://github.com/phanquangduong2002"
                                target="_blank"
                            >
                                <BsGithub />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.instagram.com/quangduongg_"
                                target="_blank"
                            >
                                <BsInstagram />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.linkedin.com/in/quangduong202"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-5 sm:pt-0 w-full lg:w-[37%] flex items-center justify-center">
                    <div className=" h-340 lg:h-370 relative before:absolute before:content before:top-2 before:bottom-2 before:left-2 before:right-2 before:border-[1px] before:border-white before:rounded-sm">
                        <img src={Avatar} alt="" className="h-full object-contain rounded-xl" />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 1.6 }}
                className="hidden absolute lg:flex items-center justify-center h-[200px] w-[200px] top-[5.5rem] left-[34.5rem]"
            >
                <img src={Image_3} className="w-full h-full bg-cover" alt="" />
            </motion.div>
        </section>
    );
};

export default HomeContainer;

import React from 'react';

import Image_5 from '../assets/images/5.png';
import Image_6 from '../assets/images/6.png';
import Image_Project_1 from '../assets/images/Project-1.png';
import Image_Project_2 from '../assets/images/Project-2.png';
import Image_Project_4 from '../assets/images/Project-4.png';
import Image_8 from '../assets/images/8.png';

import {
    Icon_Github,
    Icon_Right,
    Icon_Right_Btn,
    Icon_Visit,
    Icon_Music,
    Icon_Movie,
} from '../assets/images';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="w-full h-auto">
            <div className="w-full relative">
                <div className="mt-[135px] w-full lg:mt-[150px] px-4 lg:px-[100px] flex flex-col justify-center relative">
                    <div className="max-w-[600px] flex items-center justify-center flex-col mx-auto mb-10">
                        <h3 className="py-3 tracking-wide text-xl lg:text-2xl text-red-500 font-normal">
                            Project
                        </h3>
                        <h2 className="text-2xl lg:text-3xl font-medium text-headingColor">
                            My Amazing Works
                        </h2>
                        <p className="py-3 text-center text-textColor text-sm leading-6 lg:leading-8 lg:text-base">
                            Most common methods for designing websites that work well on desktop is
                            responsive and adaptive design
                        </p>
                    </div>

                    {/* Project */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 1.6 }}
                        className="w-full my-5 lg:my-10 p-7 lg:p-10 flex flex-col items-center lg:items-stretch lg:justify-start lg:flex-row gap-10 rounded-2xl bg-gradient-to-l from-[#fedfe7] to-[#fbedff]"
                    >
                        <div className="w-full sm:min-h-[300px] max-w-[460px] flex items-center justify-center rounded-xl bg-white overflow-hidden">
                            <img
                                src={Image_Project_1}
                                className="w-full object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium tracking-wide pb-5">
                                Frecious Market
                            </h2>
                            <p className="pb-2 text-base leading-8 font-light">
                                A demo shopping website with add to cart features and add new
                                products.
                            </p>
                            <p className="pb-2 text-sm text-headingColor font-light">
                                2022 — web development
                            </p>
                            <div className="my-4 sm:my-6 flex flex-col gap-4">
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">React.js</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Javascript</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Firebase</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Tailwindcss</p>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center gap-5">
                                <a
                                    href="https://github.com/phanquangduong2002/FreciousMarket"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">View Source</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                                <a
                                    href="https://frecious-market.vercel.app/"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">Visit Website</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                            </div>
                            <div className="flex items-center justify-between sm:hidden">
                                <a
                                    href="https://github.com/phanquangduong2002/FreciousMarket"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Github />
                                </a>
                                <a
                                    href="https://frecious-market.vercel.app"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Visit />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 1.6 }}
                        className="w-full my-5 lg:my-10 p-7 lg:p-10 flex flex-col items-center lg:items-stretch lg:justify-start lg:flex-row gap-10 rounded-2xl bg-gradient-to-l from-[#ffeede] to-[#fff9ea]"
                    >
                        <div className="w-full max-w-[460px] sm:min-h-[300px] flex items-center justify-center rounded-xl bg-white overflow-hidden">
                            <img
                                src={Image_Project_4}
                                className="w-full h-full object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium tracking-wide pb-5">
                                Puppify Shop
                            </h2>
                            <p className="pb-2 text-base leading-8 font-light">
                                A responsive landing page with HTML & CSS and Slick slider.
                            </p>
                            <p className="pb-2 text-sm text-headingColor font-light">
                                2022 — web development
                            </p>
                            <div className="my-4 sm:my-6 flex flex-col gap-4">
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Javascript</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">HTML & CSS</p>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center gap-5">
                                <a
                                    href="https://github.com/phanquangduong2002/puppify"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">View Source</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                                <a
                                    href="https://phanquangduong2002.github.io/puppify/"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">Visit Website</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                            </div>
                            <div className="flex items-center justify-between sm:hidden">
                                <a
                                    href="https://github.com/phanquangduong2002/puppify"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Github />
                                </a>
                                <a
                                    href="https://phanquangduong2002.github.io/puppify/"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Visit />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: 'spring', bounce: 0.4, duration: 1.6 }}
                        className="w-full my-5 lg:my-10 p-7 lg:p-10 flex flex-col items-center lg:items-stretch lg:justify-start lg:flex-row gap-10 rounded-2xl bg-gradient-to-l from-[#e0f7ff] to-[#dffff4]"
                    >
                        <div className="w-full max-w-[460px] sm:min-h-[300px] flex items-center justify-center rounded-xl bg-white overflow-hidden">
                            <img
                                src={Image_Project_2}
                                className="w-full h-full object-cover object-center"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-medium tracking-wide pb-5">
                                Image Hover Effect
                            </h2>
                            <p className="pb-2 text-base leading-8 font-light">
                                A responsive landing page with mouse animations.
                            </p>
                            <p className="pb-2 text-sm text-headingColor font-light">
                                2022 — web development
                            </p>
                            <div className="my-4 sm:my-6 flex flex-col gap-4">
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">React.js</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Javascript</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">HTML & CSS</p>
                                </div>
                                <div className="flex items-center">
                                    <span>
                                        <Icon_Right />
                                    </span>
                                    <p className="font-light">Framer motion</p>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center gap-5">
                                <a
                                    href="https://github.com/phanquangduong2002/image-hover-effect"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">View Source</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                                <a
                                    href="https://image-hover-effect-seven.vercel.app/"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">Visit Website</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                            </div>
                            <div className="flex items-center justify-between sm:hidden">
                                <a
                                    href="https://github.com/phanquangduong2002/image-hover-effect"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Github />
                                </a>
                                <a
                                    href="https://image-hover-effect-seven.vercel.app/"
                                    target="_blank"
                                    className="py-2 px-3 text-sm rounded-lg border-[0.5px] border-borderBtnColor"
                                >
                                    <Icon_Visit />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative photo */}

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 1.6 }}
                        className="hidden md:flex absolute -z-10 -top-[150px] right-0"
                    >
                        <img
                            src={Image_5}
                            className="w-full h-full object-cover object-center"
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.9, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 1.2 }}
                        className="hidden md:flex absolute -z-10 top-24 left-0"
                    >
                        <img
                            src={Image_8}
                            className="w-full h-full object-cover object-center"
                            alt=""
                        />
                    </motion.div>
                </div>

                {/* Recent projects */}
                <div className="mt-14 w-full lg:mt-24 px-4 lg:px-[100px] flex flex-col justify-center relative">
                    <div className="pt-4 sm:pt-20 pb-10 sm:pb-24 font-['Pacifico'] text-4xl sm:text-[60px] md:text-[100px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5e72eb] [#ff9190] to-[#fec195] ">
                        Recent projects
                    </div>

                    <div className="mt-10 flex items-center justify-center flex-col border-t-[1px] border-borderColor">
                        {/* Project */}
                        <div className="py-4 w-full flex items-center justify-between flex-col md:flex-row gap-4 md:gap-10 border-b-[1px] border-borderColor">
                            <div className="flex gap-4 items-center min-w-[200px]">
                                <span>
                                    <Icon_Music />
                                </span>
                                <span className="text-xl font-normal tracking-wide">Music App</span>
                            </div>
                            <span className="flex-1 font-light text-headingColor tracking-wide">
                                A website to listen to music.
                            </span>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/phanquangduong2002/musicplayer"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">View Source</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                                <a
                                    href="https://phanquangduong2002.github.io/musicplayer"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">Visit Website</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Project */}
                        <div className="py-4 w-full flex items-center justify-between flex-col md:flex-row gap-4 md:gap-10 border-b-[1px] border-borderColor">
                            <div className="flex gap-4 items-center min-w-[200px]">
                                <span>
                                    <Icon_Movie />
                                </span>
                                <span className="text-xl font-normal tracking-wide">
                                    Film Filter App
                                </span>
                            </div>
                            <span className="flex-1 font-light text-headingColor tracking-wide">
                                A website to filter movies with Framer Motion.
                            </span>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/phanquangduong2002/filter-movies"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">View Source</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                                <a
                                    href="https://filter-movies-one.vercel.app"
                                    target="_blank"
                                    className="group py-2 pl-4 flex items-center rounded-lg border-[0.5px] border-borderBtnColor text-sm font-light relative hover:pl-2 transition-all duration-200 ease-in-out"
                                >
                                    <span className="mr-4">Visit Website</span>
                                    <div className="w-0 h-5 group-hover:w-4 transition-all duration-200 ease-in-out"></div>
                                    <div className=" w-5 h-5 absolute top-[50%] opacity-0 -right-2 -translate-y-2/4 group-hover:opacity-[1] group-hover:right-1 transition-all duration-200 ease-in-out">
                                        <Icon_Right_Btn />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Decorative photo */}
                    <motion.div
                        initial={{ opacity: 0.8, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex absolute -z-10 -top-24 right-0"
                    >
                        <img
                            src={Image_6}
                            className="w-full h-full object-cover object-center"
                            alt=""
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

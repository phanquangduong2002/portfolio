import React from 'react';
import Bg_Image_1 from '../assets/images/bg-item-1.png';
import Bg_Image_2 from '../assets/images/bg-item-2.png';
import Bg_Image_3 from '../assets/images/bg-item-3.png';
import Image_4 from '../assets/images/4.png';

import { Icon_Pixel, Icon_Quality, Icon_Idea } from '../assets/images';
import { motion } from 'framer-motion';

const Process = () => {
    return (
        <section className="w-full relative">
            <div className="mt-[135px] lg:mt-[190px] px-4 lg:px-[100px] flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center flex-col"
                >
                    <span className="mb-[30px] relative">
                        <img className="max-w-[90px]" src={Bg_Image_1} alt="" />
                        <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                            <Icon_Pixel />
                        </span>
                    </span>
                    <span className="mb-5 text-2xl">Pixel Perfect</span>
                    <p className="text-center text-textColor text-sm leading-6 lg:leading-8 lg:text-base">
                        Most common methods for designing websites that work well on desktop is
                        responsive and adaptive design.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center justify-center flex-col"
                >
                    <span className="mb-[30px] relative">
                        <img className="max-w-[90px]" src={Bg_Image_2} alt="" />
                        <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                            <Icon_Quality />
                        </span>
                    </span>
                    <span className="mb-5 text-2xl">High Quality</span>
                    <p className="text-center text-textColor text-sm leading-6 lg:leading-8 lg:text-base">
                        Most common methods for designing websites that work well on desktop is
                        responsive and adaptive design.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center justify-center flex-col"
                >
                    <span className="mb-[30px] relative">
                        <img className="max-w-[90px]" src={Bg_Image_3} alt="" />
                        <span className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                            <Icon_Idea />
                        </span>
                    </span>
                    <span className="mb-5 text-2xl">Awesome Idea</span>
                    <p className="text-center text-textColor text-sm leading-6 lg:leading-8 lg:text-base">
                        Most common methods for designing websites that work well on desktop is
                        responsive and adaptive design.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 1.2 }}
                    className="hidden md:flex absolute -z-10 -top-24 left-2"
                >
                    <img
                        src={Image_4}
                        className="w-full h-full object-cover object-center"
                        alt=""
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Process;

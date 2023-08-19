import { motion } from 'framer-motion';
import React from 'react';
import {
    JsImage,
    ReactImage,
    HtmlImage,
    FirebaseImage,
    CssImage,
    TailwindCssImage,
    NodeJsImage,
    MongodbImage,
} from '../assets/images';

import Image_7 from '../assets/images/7.png';
import BootstrapImage from '../assets/images/bootstrap-logo.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="w-full">
            <div className="w-full h-full relative">
                <div className="mt-[135px] w-full lg:mt-[150px] px-4 lg:px-[100px] flex flex-col justify-center">
                    <div className="w-full flex justify-start flex-col">
                        <h2 className="py-3 tracking-wide text-xl lg:text-2xl text-red-500 font-normal">
                            Code is my life
                        </h2>
                        <h3 className="text-2xl lg:text-3xl font-medium text-headingColor">
                            I Develop Skills Regularly to Keep Me Update
                        </h3>
                    </div>
                    <div className="py-10 lg:py-20 w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-4">
                        <div className="w-full lg:w-[50%] flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-x-6 gap-y-8">
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <JsImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">Javascript</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <ReactImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">React.js</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <HtmlImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">HTML</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <CssImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">CSS</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <FirebaseImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">Firebase</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <TailwindCssImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">Tailwind</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <NodeJsImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">NodeJS</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <MongodbImage />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">Mongodb</span>
                            </span>
                            <span className="min-w-[120px] sm:min-w-[130px] lg:min-w-[140px] px-2 py-4 lg:p-5 bg-white rounded-xl flex items-center justify-center flex-col shadow-boxShadow">
                                <span>
                                    <img
                                        className="w-[60px] h-[60px] object-contain object-center"
                                        src={BootstrapImage}
                                        alt=""
                                    />
                                </span>
                                <span className="pt-3 px-2 text-headingColor">Bootstrap</span>
                            </span>
                        </div>
                        <div className="w-full lg:w-[50%] flex lg:items-start lg:justify-start flex-col gap-6">
                            <p className="w-full p-7 bg-white shadow-boxShadow rounded-2xl text-headingColor">
                                Responsive and performant web pages with React.
                            </p>
                            <p className="w-full p-7 bg-white shadow-boxShadow rounded-2xl text-headingColor">
                                Deployment to platforms such as Vercel, Netlify, and Cloudflare to
                                leverage caching and firewalls at the edge.
                            </p>
                            <p className="w-full p-7 bg-white shadow-boxShadow rounded-2xl text-headingColor">
                                Data management with Firestore, Mongodb. Use of classic web security
                                principles and user authorization/authentication with Firebase Auth.
                            </p>
                            <p className="w-full p-7 bg-white shadow-boxShadow rounded-2xl text-headingColor">
                                Modern UI libraries like TailwindCSS, Framer Motion, etc. to create
                                beautiful, responsive, and accessible web apps quickly.
                            </p>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 2 }}
                    className="hidden md:flex absolute -z-10 -top-[100px] right-0"
                >
                    <img
                        src={Image_7}
                        className="w-full h-full object-cover object-center"
                        alt=""
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;

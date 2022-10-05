import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CV from '../assets/images/cv.jpg';

const MENU_HEADER = [
    {
        title: 'Home',
        href: '#home',
        isActive: true,
    },
    {
        title: 'Portfolio',
        href: '#portfolio',
        isActive: false,
    },
    {
        title: 'About',
        href: '#about',
        isActive: false,
    },
    {
        title: 'Contact',
        href: '#contact',
        isActive: false,
    },
];

const Header = () => {
    const [menu, setMenu] = useState(MENU_HEADER);

    const [isMenu, setIsMenu] = useState(false);

    const [isScroll, setIsScroll] = useState(false);

    const handleClick = (index) => {
        const newMenu = [...menu];
        newMenu.forEach((e) => {
            e.isActive = false;
        });
        newMenu[index].isActive = true;
        setMenu(newMenu);
    };

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };
    return (
        <section className="relative">
            {/* Desktop & tablet */}
            <div className="hidden w-full pt-6 pb-4 px-[120px] absolute top-0 z-10 lg:flex items-center justify-between">
                <h1 className="text-3xl font-semibold relative cursor-pointer">Quang Duong</h1>
                <ul className="flex items-center gap-3 text-lg">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`p-3 w-full h-full cursor-pointer text-lg hover:text-red-500 ${
                                    item.isActive ? 'text-red-500' : ''
                                }`}
                                onClick={() => handleClick(index)}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="rounded-xl overflow-hidden border-[2px] border-red-500 ml-1 cursor-pointer text-lg hover:text-white transition-all duration-[200ms] ease-in-out relative before:transition-all before:duration-[350ms] before:ease-in-out before:absolute before:content before:top-[50%] before:left-[50%] before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-45 before:w-full before:h-0 before:bg-red-500 before:-z-[1] hover:before:h-[400%]">
                            <a href={CV} download="CV" className=" inline-block px-4 py-1">
                                Download
                            </a>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile */}
            <div className="flex w-full py-2 px-4 fixed top-0 z-50 lg:hidden items-center justify-between bg-white border-b-[1px] border-borderColor">
                <h1 className="text-2xl md:text-3xl font-semibold relative cursor-pointer">
                    Quang Duong
                </h1>
                <div className="relative">
                    <div onClick={toggleMenu} className="flex flex-col gap-[6px] p-2">
                        <span
                            className={`w-6 h-[2px] bg-black transition-all duration-200 ease-in-out ${
                                isMenu ? 'translate-y-[8px] rotate-45' : ''
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-[2px] bg-black transition-all duration-200 ease-in-out ${
                                isMenu ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-[2px] bg-black transition-all duration-200 ease-in-out ${
                                isMenu ? '-translate-y-[8px] -rotate-45' : ''
                            }`}
                        ></span>
                    </div>
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute w-screen top-[42px] -right-4 px-8 py-6 flex flex-col gap-6 bg-white drop-shadow-sm"
                        >
                            <ul className="flex flex-col gap-3">
                                {MENU_HEADER.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-170 py-2 ml-4 bg-red-500 rounded-full text-white text-lg">
                                Download CV
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;

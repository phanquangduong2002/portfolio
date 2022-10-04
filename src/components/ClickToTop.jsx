import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ClickToTop = () => {
    const [isScroll, setIsScroll] = useState(false);

    const changeScrollHeight = () => {
        if (window.scrollY > 200) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    window.addEventListener('scroll', changeScrollHeight);

    return (
        <section>
            {isScroll && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed z-20 bottom-[100px] -right-16"
                >
                    <div className="rotate-90 flex items-center gap-3">
                        <a href="#" className="text-sm cursor-pointer">
                            TO TOP
                        </a>
                        <div className="w-[120px] h-[1px] bg-borderColor relative">
                            <span
                                className={`w-[0px] h-[1px] bg-headingColor absolute top-0 left-0 transition-all duration-100 ease-in-out`}
                            ></span>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default ClickToTop;

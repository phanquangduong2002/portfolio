import React, { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {
    ClickToTop,
    Header,
    HomeContainer,
    Portfolio,
    Process,
    About,
    Contact,
    CustomCursor,
} from './components';

function App() {
    const [clientWidth, setClientWidth] = useState(true);
    useEffect(() => {
        if (window.screen.width < 1024) {
            setClientWidth(false);
        }
    }, [clientWidth]);

    return (
        <>
            {clientWidth ? (
                <div className="w-full h-auto flex flex-col justify-center relative">
                    <CustomCursor />
                    <Header />
                    <HomeContainer />
                    <Process />
                    <Portfolio />
                    <About />
                    <Contact />
                    <ClickToTop />
                </div>
            ) : (
                <div className=" w-screen h-screen flex items-center justify-center text-center bg-black text-white text-base tracking-wide font-light">
                    Please view this demo on a desktop to see the effect.
                </div>
            )}
        </>
    );
}

export default App;

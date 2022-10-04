import React, { useRef, useState } from 'react';
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
    const containerRef = useRef();

    return (
        <div
            ref={containerRef}
            data-scroll-container
            className="w-full h-auto flex flex-col justify-center relative"
        >
            <CustomCursor />
            <Header />
            <HomeContainer />
            <Process />
            <Portfolio />
            <About />
            <Contact />
            <ClickToTop />
        </div>
    );
}

export default App;

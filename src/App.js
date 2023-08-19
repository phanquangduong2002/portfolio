import React from 'react';
import { useEffect } from 'react';
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
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
        </>
    );
}

export default App;

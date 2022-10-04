import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocoScroll = () => {
    useEffect(() => {
        const scrollEl = document.querySelector('#App');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
        });
    });
};

export default useLocoScroll;

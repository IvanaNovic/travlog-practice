import React from 'react';
import Hero from './hero/Hero';
import SponsorSlider from './sponsorsSlider/SponsorSlider';
import Services from './sectionServices/Services';

const Home = () => {
    return (
        <>
            <Hero />
            <SponsorSlider />
            <Services />
        </>
    );
};

export default Home;

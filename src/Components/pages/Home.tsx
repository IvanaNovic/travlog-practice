import Hero from './hero/Hero';
import SponsorSlider from './sponsorsSlider/SponsorSlider';
import Services from './sectionServices/Services';
import TopDestination from './topDestination/TopDestination';

const Home = () => {
    return (
        <>
            <Hero />
            <SponsorSlider />
            <Services />
            <TopDestination />
        </>
    );
};

export default Home;

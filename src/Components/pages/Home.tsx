import Hero from './hero/Hero';
import SponsorSlider from './sponsorsSlider/SponsorSlider';
import Services from './sectionServices/Services';
import TopDestination from './topDestination/TopDestination';
import TravelPoint from './travelPoint/TravelPoint';
import KeyFeatures from './keyFeatures/KeyFeatures';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <SponsorSlider />
            <Services />
            <TopDestination />
            <TravelPoint />
            <KeyFeatures />
            <Testimonials />
        </>
    );
};

export default Home;

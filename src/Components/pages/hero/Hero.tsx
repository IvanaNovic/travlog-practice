import HeroDescription from './HeroDescription';
import HeroImg from './HeroImg';

function Hero() {
    return (
        <section className="relative w-full lg:mt-8 lg:flex lg:flex-row-reverse">
            <HeroImg />
            <HeroDescription />
        </section>
    );
}

export default Hero;

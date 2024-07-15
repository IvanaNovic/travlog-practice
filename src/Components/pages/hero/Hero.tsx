import HeroDescription from "./HeroDescription";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="relative w-full px-4 py-4">
      <HeroImg />
      <HeroDescription />
    </section>
  );
}

export default Hero;

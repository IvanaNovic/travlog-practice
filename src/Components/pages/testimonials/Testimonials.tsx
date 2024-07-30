import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './utils/customStyles.css';

import {
    settingsTestimonials,
    slidesTestimonials,
} from './utils/testimonialsData';

import arrow from './../../../assets/arrow.svg';
import StarIcon from './StarIcon';

type SliderRef = Slider & {
    slickPrev: () => void;
    slickNext: () => void;
};

interface Slide {
    id: number;
    name: string;
    occupation: string;
    image: string;
    rating: number;
    description: string;
}

function Testimonials() {
    const sliderRef = useRef<SliderRef>(null);
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const createSlide = (slide: Slide) => (
        <div key={slide.id} className="p-4">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-center font-bold text-secondary md:text-2xl">
                        TESTIMONIALS
                    </h2>
                    <p className="text-2xl font-bold md:text-4xl">
                        Trust our clients
                    </p>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div>
                        <img
                            src={slide.image}
                            alt="Profile picture"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex">
                        <span className="text-xl font-bold text-orange md:text-2xl">
                            {slide.name}
                        </span>
                        <span className="text-lg font-bold text-tertiary/75 md:text-xl">
                            {' '}
                            / {slide.occupation}
                        </span>
                    </div>
                    <div className="flex">
                        {[...Array(5)].map((_x, i) => {
                            return <StarIcon filled={slide.rating > i} />;
                        })}
                    </div>
                    <p className="text-center md:px-20">{slide.description}</p>
                </div>
            </div>
        </div>
    );
    return (
        <section>
            <div className="hidden md:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex justify-start">
                        <button
                            onClick={previous}
                            className="flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-primary shadow-customShadow">
                            <img src={arrow} alt="Arrow left" />
                        </button>
                    </div>
                    <div className="w-4/5">
                        <Slider ref={sliderRef} {...settingsTestimonials}>
                            {slidesTestimonials.map(createSlide)}
                        </Slider>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={next}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-buttonShadow">
                            <img src={arrow} alt="Arrow right" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="block pb-4 md:hidden">
                <Slider ref={sliderRef} {...settingsTestimonials}>
                    {slidesTestimonials.map(createSlide)}
                </Slider>
                <div className="flex justify-between pt-8">
                    <button
                        onClick={previous}
                        className="flex h-12 w-12 rotate-180 items-center justify-center rounded-full bg-primary shadow-customShadow">
                        <img src={arrow} alt="Arrow left" />
                    </button>
                    <button
                        onClick={next}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-buttonShadow">
                        <img src={arrow} alt="Arrow right" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

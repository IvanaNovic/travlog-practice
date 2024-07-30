import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ratingStar from './../../../assets/ratingStar.svg';
import arrow from './../../../assets/arrow.svg';
import {
    settingsDestinationSlide,
    settingsMobileDestinationSlide,
    slidesDestinations,
} from './utils/slidesData';

type SliderRef = Slider & {
    slickPrev: () => void;
    slickNext: () => void;
};

interface Slide {
    id: number;
    image: string;
    title: string;
    price: string;
    destination: string;
    rating: string;
}

function DestinationSlider() {
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
        <div key={slide.id} className="w-full p-4">
            <div className="flex h-[500px] flex-col rounded-lg bg-white shadow-lg md:h-[575px]">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto h-full rounded-t-lg object-cover"
                />
                <div className="flex h-full flex-col gap-8 p-4 md:justify-evenly lg:p-6">
                    <div className="flex flex-col md:gap-7 lg:flex-row-reverse">
                        <h2 className="text-start text-lg font-bold text-secondary lg:text-end">
                            {slide.price}
                        </h2>
                        <h2 className="text-start text-xl font-bold">
                            {slide.title}
                        </h2>
                    </div>
                    <p className="text-left text-lg text-neutral-100">
                        {slide.destination}
                    </p>
                    <div className="flex flex-row gap-2">
                        <p className="font-bold text-orange">{slide.rating}</p>
                        <img src={ratingStar} alt="Rating star" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="hidden w-full py-8 md:block">
                <div className="flex justify-center gap-8 lg:justify-end lg:pr-4">
                    <button
                        onClick={previous}
                        className="flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-primary shadow-customShadow">
                        <img src={arrow} alt="Arrow left" />
                    </button>
                    <button
                        onClick={next}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-buttonShadow">
                        <img src={arrow} alt="Arrow right" />
                    </button>
                </div>
                <Slider ref={sliderRef} {...settingsDestinationSlide}>
                    {slidesDestinations.map(createSlide)}
                </Slider>
            </div>
            <div className="block md:hidden">
                <div className="flex justify-between px-4">
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
                <Slider ref={sliderRef} {...settingsMobileDestinationSlide}>
                    {slidesDestinations.map(createSlide)}
                </Slider>
            </div>
        </div>
    );
}

export default DestinationSlider;

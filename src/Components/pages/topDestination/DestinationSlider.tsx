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

    return (
        <div>
            <div className="hidden w-full py-8 md:block">
                <div className="flex justify-center gap-8 lg:justify-end lg:pr-4">
                    <button
                        onClick={previous}
                        className="shadow-customShadow flex h-16 w-16 rotate-180 items-center justify-center rounded-full bg-primary">
                        <img src={arrow} alt="Arrow left" className="" />
                    </button>
                    <button
                        onClick={next}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-buttonShadow">
                        <img src={arrow} alt="Arrow left" className="" />
                    </button>
                </div>
                <Slider ref={sliderRef} {...settingsDestinationSlide}>
                    {slidesDestinations.map((slide) => (
                        <div key={slide.id} className="w-full p-4">
                            <div className="flex h-[575px] flex-col rounded-lg bg-white shadow-lg">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="mx-auto h-full rounded-t-lg object-cover"
                                />
                                <div className="flex h-full flex-col gap-16 p-4 xl:p-8">
                                    <div className="flex flex-col lg:flex-row-reverse lg:gap-6">
                                        <h2 className="text-start text-lg font-bold text-secondary lg:text-end">
                                            {slide.price}
                                        </h2>
                                        <h2 className="text-start text-xl font-bold">
                                            {slide.title}
                                        </h2>
                                    </div>
                                    <p className="text-left text-lg text-neutral">
                                        {slide.destination}
                                    </p>
                                    <div className="flex flex-row gap-2">
                                        <p className="font-bold text-orange">
                                            {slide.rating}
                                        </p>
                                        <img
                                            src={ratingStar}
                                            alt="Rating star"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="block md:hidden">
                <div className="flex justify-between px-4">
                    <button
                        onClick={previous}
                        className="shadow-customShadow flex h-12 w-12 rotate-180 items-center justify-center rounded-full bg-primary">
                        <img src={arrow} alt="Arrow left" className="" />
                    </button>
                    <button
                        onClick={next}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-buttonShadow">
                        <img src={arrow} alt="Arrow left" className="" />
                    </button>
                </div>
                <Slider ref={sliderRef} {...settingsMobileDestinationSlide}>
                    {slidesDestinations.map((slide) => (
                        <div key={slide.id} className="w-full p-4">
                            <div className="flex flex-col rounded-lg bg-white pb-0 shadow-lg">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="mx-auto h-full rounded-t-lg object-cover"
                                />
                                <div className="flex h-full flex-col gap-8 p-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-start text-lg font-bold text-secondary lg:text-end">
                                            {slide.price}
                                        </h2>
                                        <h2 className="text-start text-xl font-bold">
                                            {slide.title}
                                        </h2>
                                    </div>
                                    <p className="text-left text-lg text-neutral">
                                        {slide.destination}
                                    </p>
                                    <div className="flex flex-row gap-2">
                                        <p className="font-bold text-orange">
                                            {slide.rating}
                                        </p>
                                        <img
                                            src={ratingStar}
                                            alt="Rating star"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default DestinationSlider;

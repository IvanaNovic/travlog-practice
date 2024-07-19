import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ratingStar from './../../../assets/ratingStar.svg';
import {
    settingsDestinationSlide,
    slidesDestinations,
} from './utils/slidesData';

function DestinationSlider() {
    return (
        <div className="w-full px-4 py-8">
            <div>
                <Slider {...settingsDestinationSlide}>
                    {slidesDestinations.map((slide) => (
                        <div key={slide.id}>
                            <div className="mx-4 my-8 flex h-[575px] flex-col gap-4 rounded-lg bg-white pb-0 shadow-lg">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="mx-auto h-full rounded-t-lg object-cover"
                                />
                                <div className="flex h-full flex-col gap-16 p-4 lg:p-6">
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
        </div>
    );
}

export default DestinationSlider;

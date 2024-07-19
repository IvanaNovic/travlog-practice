import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import romeItaly from './../../../assets/RomeItaly.svg';
import maldives from './../../../assets/Maldives.svg';
import unitedArabEmirates from './../../../assets/UnitedArabEmirates.svg';
import ratingStar from './../../../assets/ratingStar.svg';

function DestinationSlider() {
    const settings: Settings = {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const slides = [
        {
            id: 1,
            image: romeItaly,
            price: '$550.16',
            title: 'Paradise Beach, Bantayan Island',
            destination: 'Rome, Italy',
            rating: '4.8',
        },
        {
            id: 2,
            image: maldives,
            price: '$20.99',
            title: 'Ocean with full of Colors',
            destination: 'Maldives',
            rating: '4.5',
        },
        {
            id: 3,
            image: unitedArabEmirates,
            price: '$150.99',
            title: 'Mountain View, Above the cloud',
            destination: 'United Arab Emeries ',
            rating: '5.0',
        },
        {
            id: 4,
            image: romeItaly,
            price: '$550.16',
            title: 'Paradise Beach, Bantayan Island',
            destination: 'Rome, Italy',
            rating: '4.8',
        },
        {
            id: 5,
            image: maldives,
            price: '$20.99',
            title: 'Ocean with full of Colors',
            destination: 'Maldives',
            rating: '4.5',
        },
        {
            id: 6,
            image: unitedArabEmirates,
            price: '$150.99',
            title: 'Mountain View, Above the cloud',
            destination: 'United Arab Emeries ',
            rating: '5.0',
        },
    ];

    return (
        <div className="w-full px-4 py-8">
            <div>
                <Slider {...settings}>
                    {slides.map((slide) => (
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

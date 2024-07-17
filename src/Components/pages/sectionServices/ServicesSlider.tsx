import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tourGuideIcon from '../../../assets/tourGuideIcon.svg';
import easyBookingIcon from '../../../assets/easyBookingIcon.svg';
import forecastIcon from '../../../assets/forecastIcon.svg';

function ServicesSlider() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    const slides = [
        {
            id: 1,
            image: tourGuideIcon,
            title: 'Best Tour Guide',
            text: 'What looked like a small patch of purple grass, above five feet.',
        },
        {
            id: 2,
            image: easyBookingIcon,
            title: 'Easy booking',
            text: 'Square, was moving across the sand in their direction.',
        },
        {
            id: 3,
            image: forecastIcon,
            title: 'Weather Forecast',
            text: 'What looked like a small patch of purple grass, above five feet.',
        },
    ];

    return (
        <div>
            <div className="lg:flex lg:flex-row">
                <div className="w-full px-4 py-8 lg:w-1/3">
                    <div className="flex flex-col">
                        <p className="text-center text-base font-bold text-secondary md:text-2xl lg:text-start">
                            SERVICES
                        </p>
                        <p className="text-center text-2xl font-bold md:text-4xl lg:text-start">
                            Our top value categories for you
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 py-8 lg:w-2/3">
                    <div className="hidden lg:block">
                        <Slider {...settings}>
                            {slides.map((slide) => (
                                <div key={slide.id}>
                                    <div className="rounded-lg bg-white text-center shadow-lg">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="mx-auto rounded-full object-cover pb-4"
                                        />
                                        <h2 className="pt-6 text-xl font-bold">
                                            {slide.title}
                                        </h2>
                                        <p className="py-8 text-neutral lg:line-clamp-4">
                                            {slide.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="block lg:hidden">
                        <div className="flex flex-col gap-4 md:flex-row md:space-x-2">
                            {slides.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="mb-4 flex-shrink-0 rounded-lg bg-white p-6 text-center shadow-lg md:mb-0 md:w-1/3">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="mx-auto rounded-full object-cover"
                                    />
                                    <h2 className="text-xl font-bold">
                                        {slide.title}
                                    </h2>
                                    <p className="text-neutral md:line-clamp-4">
                                        {slide.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSlider;

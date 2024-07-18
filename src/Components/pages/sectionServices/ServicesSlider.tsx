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
        centerMode: true,
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
        <section className="lg:flex lg:flex-row">
            <div className="w-full px-4 lg:w-1/3">
                <div className="flex flex-col py-56">
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
                                <div className="mx-4 my-8 flex h-[425px] flex-col justify-center gap-8 rounded-lg bg-white p-10 text-center shadow-lg">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="mx-auto rounded-full object-cover"
                                    />
                                    <h2 className="text-xl font-bold">
                                        {slide.title}
                                    </h2>
                                    <p className="text-neutral">{slide.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="block lg:hidden">
                    <div className="flex flex-col gap-4 md:h-[425px] md:flex-row md:space-x-2">
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="flex flex-col gap-4 rounded-lg bg-white p-4 text-center shadow-lg md:w-1/3 md:justify-center">
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
        </section>
    );
}

export default ServicesSlider;

import { Settings } from 'react-slick';
import profilePic1 from './../../../../assets/profilePic1.svg';

export const settingsTestimonials: Settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slick-dots custom-dots',
};

export const slidesTestimonials = [
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        image: profilePic1,
        rating: 5,
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        occupation: 'Product Manager',
        image: profilePic1,
        rating: 4.5,
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
];

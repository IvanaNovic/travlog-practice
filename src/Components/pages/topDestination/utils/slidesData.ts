import { Settings } from 'react-slick';
import romeItaly from './../../../../assets/RomeItaly.svg';
import maldives from './../../../../assets/Maldives.svg';
import unitedArabEmirates from './../../../../assets/UnitedArabEmirates.svg';

export const settingsDestinationSlide: Settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

export const slidesDestinations = [
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

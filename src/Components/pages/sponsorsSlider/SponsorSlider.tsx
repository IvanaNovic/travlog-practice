import React from 'react';
import tripadvisor from '../../../assets/tripadvisor.svg';
import expedia from '../../../assets/expedia.svg';
import booking from '../../../assets/booking.svg';
import airbnb from '../../../assets/airbnb.svg';
import orbitz from '../../../assets/orbitz.svg';

const sponsors = [
    {
        onClick: () => {},
        imgSrc: tripadvisor,
        alt: 'Tripadvisor logo',
    },
    {
        onClick: () => {},
        imgSrc: expedia,
        alt: 'Expedia logo',
    },
    {
        onClick: () => {},
        imgSrc: booking,
        alt: 'Booking.com logo',
    },
    {
        onClick: () => {},
        imgSrc: airbnb,
        alt: 'Airbnb logo',
    },
    {
        onClick: () => {},
        imgSrc: orbitz,
        alt: 'Orbitz logo',
    },
];

function SponsorSlider() {
    return (
        <section className="flex flex-wrap items-center justify-center gap-y-7 py-7 sm:py-20 lg:flex-nowrap">
            {sponsors.map((sponsor) => {
                return (
                    <div key={sponsor.imgSrc} className="w-1/3 lg:w-1/5">
                        <button className="flex w-full justify-center px-2">
                            <img
                                src={sponsor.imgSrc}
                                alt={sponsor.alt}
                                className="max-w-full"
                            />
                        </button>
                    </div>
                );
            })}
        </section>
    );
}

export default SponsorSlider;

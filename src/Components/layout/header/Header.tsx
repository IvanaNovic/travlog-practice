import React from 'react';
import logoImg from '../../../assets/logo.svg';
import Hamburger from './Hamburger';
import Login from './Login';
import SignUp from './SignUp';
import SpecialDeals from './SpecialDeals';
import Discover from './Discover';
import Contact from './Contact';
import HomeHeader from './HomeHeader';

export default function Header() {
    return (
        <header className="mx-auto flex h-28 w-full max-w-[1400px] flex-row items-center justify-between px-4 py-1">
            <div className="flex-1 md:order-2">
                <img src={logoImg} className="h-10 max-w-36" alt="logo" />
            </div>
            <div className="flex flex-1 justify-end md:order-1 md:justify-start lg:hidden">
                <Hamburger />
            </div>
            <div className="order-3 hidden flex-1 justify-end md:flex">
                <Login />
                <SignUp />
            </div>
            <div className="order-2 hidden flex-1 justify-center gap-16 text-sm text-neutral lg:flex">
                <HomeHeader />
                <Discover />
                <SpecialDeals />
                <Contact />
            </div>
        </header>
    );
}

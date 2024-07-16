import logoImg from '../../../assets/logo.svg';
import AdditionalLinks from './AdditionalLinks';
import SocialNetworks from './SocialNetworks';

export default function Footer() {
    return (
        <footer className="flex w-full flex-col justify-between px-4 py-4 md:flex-col lg:flex-row lg:items-center xl:gap-8">
            <div className="mb-4 md:mb-4 lg:mb-0 lg:w-1/2">
                <div className="mb-2">
                    <img src={logoImg} alt="Logo" />
                </div>
                <div>
                    <p className="pb-2 text-neutral">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                </div>
                <SocialNetworks />
            </div>
            <div className="flex-1">
                <div className="flex flex-col">
                    <AdditionalLinks />
                </div>
            </div>
        </footer>
    );
}

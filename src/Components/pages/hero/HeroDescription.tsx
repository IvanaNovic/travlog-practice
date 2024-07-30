// eslint-disable-next-line @typescript-eslint/no-unused-vars
import briefcase from '../../../assets/briefcase.svg';
import videoIcon from '../../../assets/videoIcon.svg';

function HeroDescription() {
    return (
        <div className="flex flex-col gap-6 md:justify-center">
            <div className="flex justify-center">
                <button className="inline-flex gap-4 rounded-full px-4 py-2 text-xs text-secondary shadow-buttonShadow transition-all hover:scale-110 sm:px-8 sm:py-4 sm:text-lg">
                    Explore the world!
                    <img
                        src={briefcase}
                        alt="Icon of briefcase"
                        className="h-4 w-4 sm:h-6 sm:w-6"
                    />
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-center text-4xl font-bold">
                    Travel <a className="text-secondary">top destination</a> of
                    the world
                </p>
                <p className="flex flex-col text-center text-xs text-neutral-100">
                    We always make our customer happy by providing as many
                    choices as possible
                </p>
            </div>
            <div className="group flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="rounded-full border border-gray-100 bg-primary px-8 py-4 text-white transition-all duration-300 hover:scale-110 hover:shadow-buttonShadow">
                    Get Started
                </button>
                <button className="flex flex-row justify-center gap-2 rounded-full border border-gray-100 bg-white px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-buttonShadow">
                    <img src={videoIcon} alt="Video icon" />
                    Watch Demo
                </button>
            </div>
        </div>
    );
}

export default HeroDescription;

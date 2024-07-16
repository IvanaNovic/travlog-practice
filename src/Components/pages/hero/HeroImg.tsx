import BgPic from '../../../assets/heroBackGround.svg';
import heroImg1 from '../../../assets/heroImg1.svg';
import heroImg2 from '../../../assets/heroImg2.svg';
import heroImg3 from '../../../assets/heroImg3.svg';
import sendIcon from '../../../assets/sendIcon.svg';
import addUserIcon from '../../../assets/addUserIcon.svg';
import locationIcon from '../../../assets/locationIcon.svg';

function HeroImg() {
    return (
        <div className="flex justify-center">
            <div className="absolute w-full lg:w-1/2">
                <img
                    src={BgPic}
                    alt="Planet with airplanes around it"
                    className="flex w-full"
                />
            </div>
            <div className="relative flex flex-row justify-center gap-4 p-6 xsm:p-10 md:p-20 md:px-40">
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <img src={heroImg1} className="w-full" />
                        <div className="absolute -bottom-4 -left-4">
                            <button className="rounded-full bg-secondary px-2 py-2 shadow-buttonShadow transition-all hover:scale-110">
                                <img
                                    src={sendIcon}
                                    className="h-4 w-4 md:h-8 md:w-8"
                                />
                            </button>
                        </div>
                    </div>

                    <img src={heroImg2} />
                </div>

                <div className="relative flex">
                    <img src={heroImg3} />

                    <div className="absolute -bottom-2 left-4 md:left-12">
                        <button className="rounded-full bg-orange px-2 py-2 shadow-buttonShadow transition-all hover:scale-110">
                            <img
                                src={addUserIcon}
                                className="h-4 w-4 md:h-8 md:w-8"
                            />
                        </button>
                    </div>
                    <div className="absolute -right-9 bottom-1/4 md:-right-20 md:bottom-1/4 md:h-8 md:w-40">
                        <button className="inline-flex gap-1 rounded-full bg-white px-2 py-2 text-xs shadow-buttonShadow transition-all hover:scale-110 md:px-4 md:text-lg">
                            <img
                                src={locationIcon}
                                className="h-4 w-4 md:h-6 md:w-6"
                            />
                            Top places
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImg;

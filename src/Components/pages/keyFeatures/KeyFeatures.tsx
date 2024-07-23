import keyFeatureBg from './../../../assets/keyFeatureBg.svg';
import location from './../../../assets/location.svg';
import calendarIcon from './../../../assets/calendar.svg';
import ticketIcon from './../../../assets/ticket.svg';

function KeyFeatures() {
    return (
        <section className="flex flex-col gap-12 p-8 lg:flex-row-reverse">
            <img
                src={keyFeatureBg}
                alt="Old church and surfing pictures"
                className="lg:w-1/2"
            />
            <div className="flex flex-col gap-8 lg:w-1/2">
                <div className="flex flex-col justify-center gap-4 text-center lg:text-start">
                    <h2 className="font-bold text-secondary">KEY FEATURES</h2>
                    <p className="text-3xl font-bold">We offer best services</p>
                    <p className="text-neutral-100">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                </div>
                <div className="">
                    <button className="mb-2 flex w-full flex-col gap-4 rounded-xl border border-neutral-200 p-6 text-start transition-all duration-300 ease-in-out hover:shadow-md md:flex-row">
                        <div className="h-16 w-16 rounded-xl bg-orange p-4">
                            <img src={location} className="" />
                        </div>
                        <div className="">
                            <h6 className="text-2xl font-bold">
                                We offer best services
                            </h6>
                            <p className="text-neutral-100">
                                Lorem Ipsum is not simply random text
                            </p>
                        </div>
                    </button>
                    <button className="mb-2 flex w-full flex-col gap-4 rounded-xl border border-neutral-200 p-6 text-start transition-all duration-300 ease-in-out hover:shadow-md md:flex-row">
                        <div className="bg-yellow h-16 w-16 rounded-xl p-4">
                            <img src={calendarIcon} className="" />
                        </div>
                        <div>
                            <h6 className="text-2xl font-bold">
                                Schedule your trip
                            </h6>
                            <p className="text-neutral-100">
                                It has roots in a piece of classical
                            </p>
                        </div>
                    </button>
                    <button className="mb-2 flex w-full flex-col gap-4 rounded-xl border border-neutral-200 p-6 text-start transition-all duration-300 ease-in-out hover:shadow-md md:flex-row">
                        <div className="h-16 w-16 rounded-xl bg-secondary p-4">
                            <img src={ticketIcon} className="" />
                        </div>
                        <div>
                            <h6 className="text-2xl font-bold">
                                Get discounted coupons
                            </h6>
                            <p className="text-neutral-100">
                                Lorem Ipsum is not simply random text
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default KeyFeatures;

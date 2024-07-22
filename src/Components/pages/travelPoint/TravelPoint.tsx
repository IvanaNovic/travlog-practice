import travelPointImg from './../../../assets/travelPoint.svg';
import ticket from './../../../assets/ticket.svg';
function TravelPoint() {
    return (
        <section className="flex flex-col lg:flex-row">
            <img
                src={travelPointImg}
                alt="Woman sitting on suitcase"
                className="lg:w-2/3"
            />
            <div className="flex flex-col gap-16 py-16 lg:w-1/3">
                <div className="flex flex-col gap-8 text-center lg:text-start">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-secondary">
                            TRAVEL POINT
                        </h2>
                        <h1 className="text-4xl font-bold">
                            We helping you find your dream location
                        </h1>
                    </div>
                    <p className="text-lg text-neutral-100">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                    <img
                        src={ticket}
                        alt="Ticket icon"
                        className="absolute h-56 w-56"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex w-1/2 flex-col justify-center gap-4 rounded-lg border border-neutral-200 border-opacity-20 p-4 text-center">
                            <h4 className="text-3xl font-bold text-orange">
                                500+
                            </h4>
                            <p className="">Holiday Package</p>
                        </div>
                        <div className="flex w-1/2 flex-col justify-center gap-4 rounded-lg border border-neutral-200 text-center">
                            <h4 className="text-4xl font-bold text-orange">
                                100
                            </h4>
                            <p className="">Luxury Hotel</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex w-1/2 flex-col justify-center gap-4 rounded-lg border border-neutral-200 p-4 text-center">
                            <h4 className="text-4xl font-bold text-orange">
                                7
                            </h4>
                            <p className="">Premium Airlines</p>
                        </div>
                        <div className="flex w-1/2 flex-col justify-center gap-4 rounded-lg border border-neutral-200 text-center">
                            <h4 className="text-4xl font-bold text-orange">
                                2k+
                            </h4>
                            <p className="">Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TravelPoint;

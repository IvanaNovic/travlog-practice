import travelPointImg from './../../../assets/travelPoint.svg';
function TravelPoint() {
    return (
        <section className="flex flex-col lg:flex-row">
            <img
                src={travelPointImg}
                alt="Woman sitting on suitcase"
                className="lg:w-2/3 lg:-translate-x-5"
            />
            <div className="flex -translate-x-5 flex-col gap-8 lg:w-1/3">
                <div className="text-center lg:text-start">
                    <h2 className="font-bold text-secondary">TRAVEL POINT</h2>
                    <h1>We helping you find your dream location</h1>
                    <p className="text-neutral">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="border-neutral-200 flex w-1/2 flex-col justify-center gap-4 rounded-lg border border-opacity-20 p-4 text-center">
                            <h4 className="text-3xl font-bold text-orange">
                                500+
                            </h4>
                            <p className="">Holiday Package</p>
                        </div>
                        <div className="border-neutral-200 flex w-1/2 flex-col justify-center gap-4 rounded-lg border text-center">
                            <h4 className="text-4xl font-bold text-orange">
                                100
                            </h4>
                            <p className="">Luxury Hotel</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="border-neutral-200 flex w-1/2 flex-col justify-center gap-4 rounded-lg border p-4 text-center">
                            <h4 className="text-4xl font-bold text-orange">
                                7
                            </h4>
                            <p className="">Premium Airlines</p>
                        </div>
                        <div className="border-neutral-200 flex w-1/2 flex-col justify-center gap-4 rounded-lg border text-center">
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

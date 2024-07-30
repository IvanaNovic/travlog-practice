import emailIcon from './../../../assets/emailIcon.svg';

function Subscription() {
    return (
        <section className="bg-yellow/10 my:16 rounded-[32px] md:my-32">
            <div className="flex flex-col gap-8 px-8 py-16 md:px-16 md:py-32">
                <div>
                    <h2 className="pb-8 text-center font-bold uppercase text-secondary md:text-2xl">
                        subscribe to our newsletter
                    </h2>
                    <p className="text-center text-2xl font-bold md:text-4xl lg:px-32">
                        Prepare yourself & let’s explore the beauty of the world
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="rounded-2xl bg-white px-6 py-4 md:w-2/3 md:rounded-[32px] lg:w-4/5">
                        <form className="flex items-center">
                            <img
                                src={emailIcon}
                                alt="Email Icon"
                                className="h-5 w-5 md:h-8 md:w-8"
                            />
                            <input
                                placeholder="Your Email"
                                type="text"
                                className="border-gray-300 w-full px-4 py-2 text-sm outline-none md:text-2xl"
                            />
                        </form>
                    </div>
                    <button className="rounded-2xl bg-primary px-8 py-6 tracking-wide text-white md:w-1/3 md:rounded-[32px] md:text-2xl">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Subscription;

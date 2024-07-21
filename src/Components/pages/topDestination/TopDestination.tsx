import DestinationSlider from './DestinationSlider';

function TopDestination() {
    return (
        <section className="overflow-hidden">
            <div className="text-center lg:translate-y-24 lg:pl-4 lg:text-start">
                <p className="text-2xl font-bold text-secondary">
                    TOP DESTINATION
                </p>
                <p className="text-4xl font-bold">Explore top destination</p>
            </div>
            <div>
                <DestinationSlider />
            </div>
        </section>
    );
}

export default TopDestination;

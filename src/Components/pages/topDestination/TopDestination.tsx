import DestinationSlider from './DestinationSlider';

function TopDestination() {
    return (
        <section>
            <div className="flex flex-col justify-start gap-1 pl-4 lg:translate-y-24">
                <h2 className="align-baseline text-2xl font-bold text-secondary">
                    TOP DESTINATION
                </h2>
                <p className="text-4xl font-bold">Explore top destination</p>
            </div>
            <div>
                <DestinationSlider />
            </div>
        </section>
    );
}

export default TopDestination;

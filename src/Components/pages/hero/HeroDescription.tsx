// eslint-disable-next-line @typescript-eslint/no-unused-vars
import briefcase from "../../../assets/briefcase.svg";

function HeroDescription() {
  return (
    <div>
      <div className="flex justify-center">
        <button className="text-secondary py-2 px-4 text-xs sm:text-lg sm:py-4 sm:px-8 inline-flex gap-4 rounded-full shadow-[rgba(0,0,15,0.09)_4px_15px_15px_1px]">
          Explore the world!
          <img
            src={briefcase}
            alt="Icon of briefcase"
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </button>
      </div>
      <div className="flex flex-col ">
        <p className="text-4xl font-bold text-center">
          Travel <a className="text-secondary ">top destination</a> of the world
        </p>
        <p className="flex flex-col text-xs text-neutral text-center">
          We always make our customer happy by providing as many choices as
          possible
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button className="rounded-full bg-primary">Get Started</button>
        <button className="rounded-full bg-primary">Watch Demo</button>
      </div>
    </div>
  );
}

export default HeroDescription;

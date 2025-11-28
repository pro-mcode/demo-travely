import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="hero">
      <div className="relative overflow-hidden mx-auto">
        <Navbar />
        <div className="hero-circle"></div>
        <div className="hero-content">
          <div className="w-full space-y-4 lg:w-1/2 lg:pb-12">
            <div className="hero-top">Travel insurance made easy</div>
            <div className="my-8">
              <h2 className="hero-heading">
                We Find Best Travel Insurance Plan For You In Few Minutes
              </h2>
            </div>
            <p className="hero-text">
              Supply chain assets vesting period mass market graphical user
              interface. Advisor traction seed money.
            </p>
            <div className="btn-container">
              <button className="hero-btn btn">Get Started Now!</button>
            </div>
            <p className="hero-text">
              We compare 436 insurance companies in 46 countries.
            </p>
          </div>
          <div className="relative mt-12 w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-end lg:items-end lg:mt-0">
            <img
              src="/assets/images/person-homepage.webp"
              alt=""
              className="h-auto max-h-150 max-w-[70%] mb-0 z-10"
            />
            <div className="get-started-circle absolute -top-10 right-1/2 translate-x-1/2 h-70 w-70 sm:h-90 sm:w-90 rounded-full opacity-70 lg:right-0 lg:translate-x-0 lg:h-100 lg:w-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { featureList } from "./feature-list";

export default function Feature() {
  return (
    <div id="features" className="feature">
      {featureList.map((feature, index) => (
        <div key={index} className="feature-container ">
          <div className="feature-wrapper flex flex-col justify-between items-center md:flex-row md:gap-12">
            <div className="feature-content space-y-4 w-full md:w-1/2">
              <div className="feature-top px-4 py-1.5 rounded-md shadow-xs w-fit mx-auto md:mx-0">
                {feature.top}
              </div>
              <div className="text-2xl text-center font-bold max-w-[85%] mx-auto md:text-left leading-10 md:text-3xl md:min-w-full md:mx-0">
                {feature.title}
              </div>
              <div className="text-base text-center pt-4 max-w-[85%] mx-auto md:text-left md:min-w-full">
                {feature.content}
              </div>
            </div>
            <div className="image-container mt-12 w-full mx-auto md:w-1/2 flex flex-col justify-end items-end md:mx-0 md:mt-0">
              <img
                src={feature.img}
                alt=""
                className=" max-h-100 w-100 max-w-[70%] mx-auto md:max-h-90 md:max-w-90 md:mx-0 lg:max-h-100 lg:max-w-100"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

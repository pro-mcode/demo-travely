import { onboardSteps } from "./onboard-steps";

export default function Onboarding() {
  return (
    <div className="onboarding py-24">
      <div className="onboarding-top mb-4">3 Steps Onboarding</div>
      <h2 className="section-title">Simple Process to Get Start</h2>
      <div className="section-note">
        Install the app, compare available travel insurance plans, and select
        the plan that suits you.
      </div>
      <div className="onboarding-content w-full mx-auto flex flex-col justify-between space-y-8 md:space-y-0 md:mt-0 md:flex-row md:gap-4">
        {onboardSteps.map((step, index) => (
          <div
            key={index}
            className="onboard-card bg-white px-8 py-12 pb-16 rounded-md shadow-emerald-900 w-100 max-w-[90%] mx-auto md:w-1/3"
          >
            <div className="onboard-card-top text-sm w-fit mx-auto py-1.5 px-3 rounded-md">
              {step.top}
            </div>
            <img src={step.img} alt="" className="w-54 h-54 mx-auto my-8" />
            <h4 className="text-lg font-bold text-center">{step.title}</h4>
            <p className="text-base text-center translate-y-3">
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

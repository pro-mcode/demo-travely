import { pricingLists } from "./pricing-list";
export default function Pricing() {
  return (
    <div id="pricing" className="pricing py-24">
      <div className="pricing-top mb-4">Pricing</div>
      <h2 className="section-title">Flexible Pricing Options</h2>
      <div className="section-note">
        Flexible plans to suit every traveler. Compare, choose, and pay for the
        coverage that fits your needs—transparent pricing with no hidden fees.
      </div>
      <div className="pricing-content w-full mx-auto flex flex-col justify-between space-y-8 md:space-y-0 md:flex-row md:gap-3 lg:gap-8">
        {pricingLists.map((list, index) => (
          <div
            key={index}
            className="pricing-card bg-white px-8 py-12 pb-16 rounded-md shadow-md w-100 max-w-[90%] mx-auto md:w-1/3"
          >
            <img src={list.img} alt="" className="w-36 h-36 mx-auto" />

            <div className="pricing-card-top text-sm w-fit mx-auto py-1.5 px-3 rounded-md my-8">
              {list.top}
            </div>
            <h4 className="text-4xl font-bold text-center">{list.price}</h4>
            <div className="mt-8">
              {list.offers.map((offer, index) => (
                <span
                  key={index}
                  className="block text-base text-center my-1.5 mt-4"
                >
                  {offer}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

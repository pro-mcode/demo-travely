import { testimonialLists } from "./testitmonial-list";

export default function Testimonial() {
  return (
    <div id="testimonials" className="testimonial py-24">
      <div className="testimonial-top mb-4">testimonials</div>
      <h2 className="section-title">Trusted By Thousands of Happy Customers</h2>
      <div className="section-note">
        See how Travely helps travelers find the best insurance plans quickly,
        easily, and with complete confidence.
      </div>
      <div className="testimonial-content w-full mx-auto flex flex-col justify-between space-y-8 md:space-y-0 md:flex-row md:gap-3 lg:gap-8">
        {testimonialLists.map((testimony, index) => (
          <div
            key={index}
            className="testimonial-card bg-white px-8 py-12 pb-16 rounded-md shadow-md w-100 max-w-[90%] mx-auto md:w-1/3"
          >
            <div className="testimonial-card-top text-2xl">
              {testimony.quote}
            </div>
            <div className="content text-base py-10">{testimony.content}</div>
            <div className="line w-18 h-0.5 mb-4"></div>
            <h4 className="text-lg font-bold">{testimony.author}</h4>
            <div className="position text-base mt-2">{testimony.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

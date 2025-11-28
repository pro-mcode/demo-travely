// export default function Footer() {
//   return (
//     <footer className="footer py-16">
//       <div className="footer-content space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:space-y-0 gap-12">
//         <div className="">
//           <h3 className="text-lg font-medium uppercase">Travely</h3>
//           <span className="block text-base mt-4">copyright©travely.com</span>
//         </div>
//         <div className="">
//           <h3 className="text-lg font-medium uppercase">Quick Links</h3>
//           <div className="space-y-2 mt-4">
//             <span className="block text-base">Features</span>
//             <span className="block text-base">Pricing</span>
//             <span className="block text-base">Testimonial</span>
//             <span className="block text-base">Blog</span>
//           </div>
//         </div>
//         <div className="">
//           <h3 className="text-lg font-medium uppercase">California Office</h3>
//           <div className="space-y-2 mt-4">
//             <span className="block text-base">
//               4243 Woodland Terrace Sacramento, CA 95814.
//             </span>
//             <span className="block text-base">Tel. 916 753 2645</span>
//           </div>
//         </div>
//         <div className="">
//           <h3 className="text-lg font-medium uppercase">New York Office</h3>
//           <div className="space-y-2 mt-4">
//             <span className="block text-base">
//               885 Oakwood Avenue New York, NY 10013
//             </span>
//             <span className="block text-base">Tel. 916 753 2645</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="footer py-16">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-medium uppercase">Travely</h3>
          <div className="mt-4">
            <p className="text-base leading-relaxed">
              Helping travelers stay protected with affordable, reliable
              insurance for every trip.
            </p>
            <span className="block text-base mt-4">
              © {new Date().getFullYear()} travely.com
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-medium uppercase">Explore</h3>
          <div className="mt-4">
            <ul className="space-y-2">
              <li className="text-base">Insurance Plans</li>
              <li className="text-base">How It Works</li>
              <li className="text-base">Testimonials</li>
              <li className="text-base">Blog & Guides</li>
            </ul>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-medium uppercase">Support</h3>
          <div className="mt-4">
            <ul className="space-y-2">
              <li className="text-base">Help Center</li>
              <li className="text-base">Claim Assistance</li>
              <li className="text-base">Contact Us</li>
              <li className="text-base">FAQs</li>
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div>
          <h3 className="text-lg font-medium uppercase">Head Offices</h3>

          <div className="space-y-4 mt-4">
            <div>
              <div className="text-base font-medium">California, USA</div>
              <p className="text-base">
                Travely – West Coast HQ 1859 Sierra Ridge Way San Diego, CA
                92103
              </p>
              <p className="text-base">Tel. +1 (619) 482-7719</p>
            </div>

            <div>
              <div className="text-base font-medium">New York, USA</div>
              <p className="text-base">
                Travely – East Coast Branch 77 Brookhaven Plaza, Suite 402
                Brooklyn, NY 11201
              </p>
              <p className="text-base">Tel. +1 (718) 439-8854</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

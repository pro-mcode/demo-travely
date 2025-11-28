import Hero from "../components/hero";
import Onboarding from "../components/onboarding";
import Feature from "../components/feature";
import ProductVideo from "../components/product-video";
import Pricing from "../components/pricing";
import Testimonial from "../components/testimonial";
import GetStarted from "../components/get-started";
import Blog from "../components/blog";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <title>Travely</title>
      <Hero />
      <Onboarding />
      <ProductVideo />
      <Feature />
      <Pricing />
      <Testimonial />
      <GetStarted />
      <Blog />
      <Footer />
    </>
  );
}

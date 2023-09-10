import Buttontop from "./components/button/Buttontop";
import Aboutus from "./sections/Aboutus";
import Airplane from "./sections/Airplane";
import Facilities from "./sections/Facilities";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Package from "./sections/Package";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <>
    <div className="max-w-full pt-[30px] md:pt-[50px]">
      <div>
        <Hero />
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Package />
      </div>
      <div>
        <Airplane />
      </div>
      <div>
        <Facilities />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
      <Buttontop />
    </div>
    </>
  )
}

export default App

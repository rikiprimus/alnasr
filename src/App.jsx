import Aboutus from "./sections/Aboutus";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
    <div className="max-w-full pt-[50px] pb-[50px] md:pt-[50px] md:pb-[100px]">
      <div>
        <Hero />
      </div>
      <div className="">
        <Aboutus />
      </div>
    </div>
    </>
  )
}

export default App

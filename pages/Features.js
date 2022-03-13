import Navbar from "./navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="features">
      <Navbar></Navbar>
      <div className="gridwrapper pb-20 flex justify-center w-full pt-40 bg-black">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="PhotoGrid  w-[1188px] justify-center grid gap-5 text-center grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2"
        >
          <div className=" bg-grid1 px-10 bg-cover bg-center rounded-md pt-10 h-[600px] col-span-2">
            <h5 className="h5 font-semibold text-[20px] text-white">
              Design with real native elements
            </h5>
            <h5 className="font-basic font-light font-[16px] mt-2 text-[#7a7a7a]">
              Use real input textfields, live maps, pickers, sliders and more!
            </h5>
          </div>
          <div className=" bg-grid2  px-10 pt-10 bg-center bg-cover col-span-2 md:col-span-1 h-[600px] rounded-md  ">
            <h5 className="h5 font-semibold text-[20px] text-white">
              Video player control
            </h5>
            <h5 className="font-basic font-light font-[16px] mt-2 text-[#7a7a7a]">
              Play not only supports video but gives you full control with
              built-in actions.
            </h5>
          </div>
          <div className=" bg-grid3 md:w-full px-10 pt-10 bg-center bg-cover h-[600px] rounded-md">
            <h5 className="h5 font-semibold text-[20px] text-white">
              Set the status bar & open modals with a tap
            </h5>
          </div>
          <div className=" bg-grid4 px-10 pt-10 bg-center bg-cover h-[600px] rounded-md col-span-2">
            <h5 className="h5 font-semibold text-[20px] text-white">
              Live maps integration
            </h5>
            <h5 className="font-basic font-light font-[16px] mt-2 text-[#7a7a7a]">
              Easily add real maps to your product with one tap. Add pins,
              customize <br /> the look and feel and link it to other parts of
              your product.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;

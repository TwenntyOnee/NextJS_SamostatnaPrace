import Image from "next/image";
import Img1 from "../Images/5fc8fae155f3b862e56d8edc_meet-play2-p-2000.png";
import store from "../Images/download-on-the-app-store-badge.png";
import Img4 from "../Images/61043103d660e9c90919fd58_3-phone-bucket-03-p-2000.jpeg";
import Img2 from "../Images/6103f18f4366315865b067e5_2-phone-bucket-01-p-2000.jpeg";
import Img3 from "../Images/6103f2c8e63b636c8cd6d24b_2-phone-bucket-03-p-2000.jpeg";
import Img5 from "../Images/6103f352b77c589c741deeb6_1-phone-bucket-04-p-2000.jpeg";
import Navbar from "./navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Gradient from "rgt";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="homepage">
      <Navbar></Navbar>
      <div className="homepage    w-full flex justify-center pt-32 bg-black text-center">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="h2 px-6 text-[#8cb9b4] max-w-[700px]"
        >
          The first native iOS design tool built for creating mobile products.
        </h1>
      </div>
      <div className="store flex  justify-center pt-14 bg-black">
        <Image src={store} alt="Img1" width="120px" height="40px"></Image>
      </div>
      <div className="wrapper   bg-black w-full">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" overflow-hidden  md:pt-32 bg-black scale-90 flex justify-center h-screen w-full"
        >
          <iframe
            className="absolute min-w-[1000px]"
            src="https://player.vimeo.com/video/380412943?background=1"
            frameborder="0"
            width="100%"
            height="90%"
            allow="autoplay; fullscreen"
          ></iframe>
          <Image
            alt="Img2"
            className=" xl:visible invisible"
            src={Img1}
          ></Image>
        </div>
      </div>
      <div className="bg-black pt-32">
        <div className="grid bg-Grid h-screen  bg-cover  w-full">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 97%)",
            }}
            className="test absolute z-10  h-screen w-full"
          ></div>
          <div className=" w-full px-6 bg-black flex flex-col items-center justify-center bg-opacity-60 bg-cover absolute h-screen">
            <h1 className="h2 font-Inter  text-[#8cb9b4] text-center ">
              Design, prototype, and collaborate <br /> directly from your
              phone.
            </h1>

            <h5 className="h5 pt-5 text-center text-[#999] font-[40px] leading-[32px] font-normal">
              Experience your design as you create it, while taking full
              advantage of native <br /> iOS features to bring your product to
              life.
            </h5>

            <div className="button hover:scale-[103%] cursor-pointer  transition-all duration-300 ease-in-out bg-[#17ffa6] mt-10 w-52 rounded-xl flex items-center justify-center font-medium opacity-75 h5 h-10">
              See How It Works
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-black overflow-x-hidden">
        <div className="wrapper flex mt-20 flex-col xl:flex-row">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="wrapper  px-6 xl:pl-80 xl:w-1/2 w-full items-center justify-center flex flex-col"
          >
            <h1 class="h1 max-w-[540px]  text-left font-Inter font-bold ">
              <Gradient dir="left-to-right" from="#43afc2" to="#f57f90">
                A better way to design mobile products.
              </Gradient>
            </h1>
            <h5 className="h5 max-w-[540px] mt-8  leading-8 text-[#999]">
              Unlike traditional design tools that require you to context switch
              and simulate the mobile experience, Play is the first tool to make
              contextual design for mobile possible. No more proxies,
              simulations or syncing to mirror apps. With Play, you can design,
              iterate and experiment with your product as you create it.
            </h5>
          </div>
          <div className="video xl:pr-80 p-5 xl:w-1/2 w-full items-center xl:justify-start justify-center flex h-screen">
            <iframe
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" min-w-[300px]"
              src="https://player.vimeo.com/video/582156297?background=1"
              frameborder="0"
              width="100%"
              height="70%"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section  relative pt-10 bg-black bg-contain bg-no-repeat bg-center w-full h-screen">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%)",
          }}
          className="test absolute z-10  h-screen w-full"
        ></div>
        <div className="w-full   flex">
          <Image
            src={Img2}
            alt="Img3"
            layout="fill"
            objectFit="cover"
            width="1664px"
            height="1198px"
            className=" scale-[80%]"
          ></Image>
        </div>
        <div className="text absolute w-full h-screen">
          <div className="wrapper md:w-1/2 h-full md:items-start right-0 float-right md:pl-10 justify-center items-start md:pb-20 md:pr-20 flex md:justify-start">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="wrapper  px-10 md:px-0 "
            >
              <h5 className="h5 text-[20px] md:w-[291px] text-white">
                Bring your design system to your phone.
              </h5>
              <h5 className="h5 md:w-[360px] font-light mt-3 text-[#7a7a7a]">
                Design components, tweak design tokens, and adjust spacing, all
                from your phone.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section pb-14 bg-black overflow-x-hidden">
        <div className="wrapper mt-20 flex flex-col xl:flex-row-reverse">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="wrapper px-6 xl:pr-80 xl:w-1/2 w-full items-center justify-center flex flex-col"
          >
            <h1 class="h1 max-w-[540px]  text-left font-Inter font-bold ">
              <Gradient dir="left-to-right" from="#43afc2" to="#f57f90">
                Powerful native iOS features— in the palm of your hand.
              </Gradient>
            </h1>
            <h5 className="h5 max-w-[540px] mt-8 text-[#999] leading-8">
              Play gives you access to powerful, native iOS features — live
              maps, input text fields, camera & AR, pickers and steppers — that
              simply aren’t possible in other design tools. Play in the sandbox
              that Apple created to bring your product to life.
            </h5>
          </div>
          <div className="video xl:pl-80 p-5 xl:w-1/2 w-full items-center md:justify-start justify-center flex h-screen">
            <iframe
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" min-w-[300px]"
              src="https://player.vimeo.com/video/580949104?background=1"
              frameborder="0"
              width="100%"
              height="70%"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="section relative pt-10 bg-black w-full h-screen">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%)",
          }}
          className="test absolute z-10  h-screen w-full"
        ></div>
        <div className="w-full  flex">
          <Image
            src={Img4}
            alt="Img4"
            layout="fill"
            objectFit="cover"
            width="1664px"
            height="1198px"
            className="scale-75"
          ></Image>
        </div>
        <div className="text z-20 absolute w-full h-screen">
          <div className="wrapper md:w-1/2 h-full md:items-end md:pl-40 pl-0 pr-0 justify-center items-start md:pb-20 md:pr-20 flex md:justify-end">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="wrapper px-10 md:px-0 md:w-[291px]"
            >
              <h5 className="h5 text-[20px] text-white">
                Live maps, input text, date pickers.
              </h5>
              <h5 className="h5 font-light mt-3 text-[#7a7a7a]">
                Stop spending time trying to “get close to the real thing” when
                you can design with real, native elements in Play.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section h-screen flex w-full justify-center items-center bg-black">
        <div className="review flex justify-center w-2/3 h-3/4 border-y-[1px] border-gray-500 bg-black"></div>
      </div>

      <div className="section pb-14 bg-black overflow-x-hidden">
        <div className="wrapper mt-20 flex flex-col xl:flex-row-reverse">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="wrapper px-6 xl:pr-80 xl:w-1/2 w-full items-start justify-center flex flex-col"
          >
            <h1 class="h1 max-w-[540px]  text-left font-Inter font-bold ">
              <Gradient dir="left-to-right" from="#43afc2" to="#f57f90">
                Sophisticated interactions made easy.
              </Gradient>
            </h1>
            <h5 className="h5 max-w-[540px] mt-8 text-[#999] leading-8">
              Play gives you access to powerful, native iOS features — live
              maps, input text fields, camera & AR, pickers and steppers — that
              simply aren’t possible in other design tools. Play in the sandbox
              that Apple created to bring your product to life.
            </h5>

            <div className="button hover:scale-[103%] cursor-pointer transition-all duration-300 ease-in-out bg-[#17ffa6] mt-10 w-52 rounded-xl flex items-center justify-center font-medium opacity-75 h5 h-10">
              See How It Works
            </div>
          </div>

          <div className="video xl:pl-80 p-5 xl:w-1/2 w-full items-center md:justify-start justify-center flex h-screen">
            <iframe
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" min-w-[300px]"
              src="https://player.vimeo.com/video/580950164?background=1"
              frameborder="0"
              width="100%"
              height="70%"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section relative pt-10 bg-black bg-contain bg-no-repeat bg-center w-full h-screen">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%)",
          }}
          className="test absolute z-10  h-screen w-full"
        ></div>
        <div className="w-full  flex">
          <Image
            alt="Img"
            src={Img3}
            layout="fill"
            objectFit="cover"
            width="1664px"
            height="1198px"
            className=" scale-[80%]"
          ></Image>
        </div>
        <div className="text absolute w-full h-screen">
          <div className="wrapper md:w-1/2 h-full md:items-start right-0 float-right md:pl-10 justify-center items-start md:pb-20 md:pr-20 flex md:justify-start">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="wrapper  px-10 md:px-0 "
            >
              <h5 className="h5 text-[20px] md:w-[291px] text-white">
                Play together!
              </h5>
              <h5 className="h5 md:w-[360px] font-light mt-3 text-[#7a7a7a]">
                Collaborate with your team and easily share work in progress.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section  bg-black overflow-x-hidden">
        <div className="wrapper flex mt-20 flex-col xl:flex-row">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="wrapper  px-6 xl:pl-80 xl:w-1/2 w-full items-center justify-center flex flex-col"
          >
            <h1 class="h1 max-w-[540px]  text-left font-Inter font-bold ">
              <Gradient dir="left-to-right" from="#43afc2" to="#f57f90">
                Go from idea to working product in minutes.
              </Gradient>
            </h1>
            <div className="wrapper">
              <h5 className="h5 max-w-[540px] mt-8  leading-8 text-[#999]">
                Create, iterate and experiment—fast.
              </h5>
              <h5 className="h5 max-w-[540px] mt-8  leading-8 text-[#999]">
                Design from scratch, import from Figma, or use the Play Library
                and Page Layouts to get your project started quickly.
              </h5>
              <h5 className="h5 max-w-[540px] mt-8  leading-8 text-[#999]">
                However you get started, Play gives you the ability to get
                something "in your hands" quickly so you can experiment and
                iterate on your initial concepts.
              </h5>
            </div>
          </div>
          <div className="video xl:pr-80 p-5 xl:w-1/2 w-full items-center xl:justify-start justify-center flex h-screen">
            <iframe
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" min-w-[300px]"
              src="https://player.vimeo.com/video/582286852?background=1"
              frameborder="0"
              width="100%"
              height="70%"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="section relative bg-black w-full h-screen">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%)",
          }}
          className="test absolute z-10  h-screen w-full"
        ></div>
        <div className="w-full flex">
          <Image
            alt="Img"
            src={Img5}
            layout="fill"
            objectFit="cover"
            width="1664px"
            height="1198px"
            className="scale-75"
          ></Image>
        </div>
        <div className="text z-20 absolute w-full h-screen">
          <div className="wrapper md:w-1/2 h-full md:items-end md:pl-40 pl-0 pr-0 justify-center items-start md:pb-20 md:pr-20 flex md:justify-end">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="wrapper  px-10 md:px-0 md:w-[291px]"
            >
              <h5 className="h5 text-[20px] text-white">
                Live maps, input text, date pickers.
              </h5>
              <h5 className="h5 font-light mt-3 text-[#7a7a7a]">
                Stop spending time trying to “get close to the real thing” when
                you can design with real, native elements in Play.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="section  pt-20 pb-40 bg-black flex justify-center items-center flex-col">
        <h2 className="h3 pb-10 text-[#8cb9b4]">Create with Play</h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="wrapper gap-3 xl:flex-row flex-col  flex"
        >
          <div className="bg-flex1 pb-5 hover:scale-[102%] duration-300 cursor-pointer transition-all ease-in-out  text-white flex flex-col justify-end items-center rounded-sm bg-center bg-cover  w-[300px] md:w-[380px] h-[480px]">
            <h5 className="h5">Quickly Build & Test Ideas</h5>
            <h5 className="font-basic mt-1 text-sm text-[#666666]">
              Play Library · 02:00
            </h5>
          </div>
          <div className="bg-flex2 pb-5 hover:scale-[102%] duration-300 cursor-pointer text-white flex flex-col justify-end items-center rounded-sm bg-center bg-cover  w-[300px] md:w-[380px] h-[480px]">
            <h5 className="h5">Create Powerful Prototypes</h5>
            <h5 className="font-basic mt-1 text-sm text-[#666666]">
              Interactions · 00:31
            </h5>
          </div>
          <div className="bg-flex3 pb-5 hover:scale-[102%] duration-300 cursor-pointer text-white flex flex-col justify-end items-center rounded-sm bg-center bg-cover w-[300px] md:w-[380px] h-[480px]">
            <h5 className="h5">Import Components from Figma</h5>
            <h5 className="font-basic mt-1 text-sm text-[#666666]">
              Figma Import · 01:00
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../media/Home page/Background  Elements/Background.png";
import bubble from "../../../media/Home page/Hero Elements/bubble.png";
import gun from "../../../media/Home page/Hero Elements/Gun.png";
import pill from "../../../media/Home page/Hero Elements/pill.png";
import portal from "../../../media/Home page/Hero Elements/portal.png";
import Logo from "../../Shared/Logo/Logo";

const Banner = () => {
  return (
    <div
      className=" min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        background: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Logo />
      <section className=" w-full flex justify-center flex-col items-center uppercase mt-24">
        <div className="">
          <div className=" text-[100px] font-[700]">
            <div className="sm:drop-shadow-[0_0_12px_rgba(157,254,0,0.85)] md:drop-shadow-[0_0_35px_rgba(157,254,0,0.65)] drop-shadow-2xl flex justify-center items-center">
              <img
                src={bubble}
                alt=""
                className=" absolute top-[-95px] left-[-125px] z-10 w-64 h-64"
              />
              <h1 className="italic">The</h1>
              <img src={portal} alt="" />
              <h1 className="bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-transparent bg-clip-text">
                Rick &
              </h1>
            </div>
            <div className="flex">
              <h1 className="bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-transparent bg-clip-text">
                Morty 
              </h1>
              <h1 className="italic"> Wiki</h1>
              <img
                src={gun}
                alt=""
                className="mt-[-100px] mr-[-190px] w-72 h-80"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="sm:w-full md:w-fit mt-[-20px] mx-auto flex sm:flex-col md:flex-row md:items-center sm:gap-10 md:gap-20">
            <Link to="https://www.youtube.com/watch?v=KQ9Cgdsa9tc&feature=youtu.be&ab_channel=ONEMedia" target='_blank'>
              <button className="bg-gradient-to-r w-fit from-[#9DFE00] to-[#14D9E5] rounded-[25px] flex md:justify-between md:items-center sm:px-3 sm:py-4 md:px-6 md:py-4 gap-3 h-fit sm:order-2 md:order-1 drop-shadow-md">
                {/* <div className='relative sm:w-[18px] sm:w-[18px] md:w-[24px] md:h-[24px] '>
								<Image src={playButton} fill />
							</div> */}
                <p className=" sm:text-[16px] md:text-h3 sm:tracking-wide md:tracking-normal font-semibold">
                  Watch Now
                </p>
              </button>{" "}
            </Link>
            <p className=" text-p sm:w-[300px] md:w-[500px] leading-[20px] sm:order-1 md:order-2 text-cyanBlue ">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

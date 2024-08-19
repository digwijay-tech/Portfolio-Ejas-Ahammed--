import EjasPc from "../../assets/ijas-pic.png";
import Wave from "../Wave"; // Assuming this is another component you might be using

const Hero = () => {
  return (
    <div className="relative lg:h-lvh ">
      <div className="items-center justify-center grid lg:grid-cols-2 lg:gap-0  gap-10 sm:grid-cols-1 relative z-10 lg:pt-0 pt-24">
        <div className="p-10 lg:ms-16 ms-0">
          <span className="text-yellow-400 text-xl">Hi, I&apos;m</span>
          <h1 className="hero-text font-semibold text-3xl md:text-2xl lg:text-5xl lg:leading-normal leading-normal">
            EJAS AHAMMED AK
          </h1>
          <h3 className="text-xl leading-normal">Graphic Designer</h3>
          <p></p>
        </div>
        <img src={EjasPc} alt="Ejas" className="lg:w-full z-10 lg:pb-0 " />
      </div>
      <Wave/>
    </div>
  );
};

export default Hero;

import AboutTabs from "./AboutTabs";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col lg:flex-row bg-gray-800 pt-28 px-8 lg:px-16 pb-28"
      id="aboutme"
    >
      <div className="flex-1 mb-6 lg:mb-0">
        <h1 className="text-yellow-400 font-bold text-3xl lg:text-4xl">About Me</h1>
        <p className="pt-6 text-white text-base lg:text-lg">
          I am an accomplished graphic designer with 2 years of hands-on
          experience in an advertising company. During my tenure, I have honed
          my skills in creating impactful visual designs that effectively convey
          brand messages and resonate with target audiences. I am proficient in
          utilizing industry-standard design software and have a keen eye for
          detail, ensuring every project meets high standards of creativity and
          professionalism. My work ethic, creativity, and ability to collaborate
          effectively with teams make me a valuable asset in delivering
          successful design solutions that meet client objectives.
        </p>
      </div>
      <div className="flex-1">
        <div className="border border-yellow-300 lg:mx-7 px-6 py-4 min-h-56 lg:min-h-full bg-gray-700 rounded-lg">
          <AboutTabs />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

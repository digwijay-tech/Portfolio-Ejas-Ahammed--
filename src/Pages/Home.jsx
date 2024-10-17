import AboutMe from "../Components/AboutMe/AboutMe";
import Designs from "../Components/Designs/Designs";
import LogoDesign from "../Components/Logofolio/LogoDesign";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Skill from "../Components/Skill/Skill";
import CV from "./CV";
const Home = () => {

  return (
    <div className="bg-slate-950 text-yellow-50 overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Designs />
      <LogoDesign/>
      <Skill />
      <CV/>
      <Footer />
    </div>
  );
};

export default Home;

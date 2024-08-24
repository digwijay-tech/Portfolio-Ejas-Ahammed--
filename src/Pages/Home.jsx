
import AboutMe from '../Components/AboutMe/AboutMe'
import Designs from '../Components/Designs/Designs'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Skill from '../Components/Skill/Skill'
const Home = () => {
  return (
    <div className="bg-slate-950 text-yellow-50 overflow-hidden">
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Designs/>
    <Skill/>
    <Footer/>
    
    </div>
  )
}

export default Home
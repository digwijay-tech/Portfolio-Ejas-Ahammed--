
import AboutMe from '../Components/AboutMe/AboutMe'
import Designs from '../Components/Designs/Designs'
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
    
    </div>
  )
}

export default Home
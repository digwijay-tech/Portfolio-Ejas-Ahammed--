
import Designs from '../Components/Designs'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className="bg-slate-950 text-yellow-50">
    <Navbar/>
    <Hero/>
    <Designs/>
    </div>
  )
}

export default Home
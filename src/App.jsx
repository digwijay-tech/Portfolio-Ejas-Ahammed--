import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import PrintGallery from "./Pages/PrintGallery"
import LogoGallery from "./Pages/LogoGallery"
import PosterGallery from "./Pages/PosterGallery"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/printgallery" element={<PrintGallery/> }/>
      <Route path="/postergallery" element={<PosterGallery/> }/>
      <Route path="/logogallery" element={<LogoGallery/> }/>
    </Routes>
  )
}

export default App
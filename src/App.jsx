import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/gallery" element={<Gallery/>}/> */}
    </Routes>
  )
}

export default App
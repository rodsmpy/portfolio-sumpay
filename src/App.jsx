import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
function App() {
  return (
    <>
      <Router>
        <h1>tanginamo</h1>
        <Navbar/>
        

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/> 
          <Route path= "/contact" element={<Contact/>}/>        
        </Routes>
      </Router>

    </>
  )
}

export default App

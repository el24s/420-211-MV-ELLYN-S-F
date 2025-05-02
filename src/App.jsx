import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProjectForm from './pages/ProjectForm'
import Portfolio from './pages/Portfolio'
import Interest from './pages/Interest'
import NavBar from "./components/NavBar"
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<ProjectForm />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </>
  )
}

export default App

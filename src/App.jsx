import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { AboutUs } from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = 'Signup' element = {<Signup/>}/>
        <Route path = 'AboutUs' element = {<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

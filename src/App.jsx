import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignOut from './pages/SignUp'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>}/>    
    <Route path="/About" element = {<About/>}/>    
    <Route path="/SignOut" element = {<SignUp/>}/>    
    <Route path="/SignIn" element = {<SignIn/>}/>    

  </Routes>
  </BrowserRouter>)
}

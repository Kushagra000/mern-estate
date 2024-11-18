import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'

export default function App() {
  return (<BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>}/>    
    <Route path="/About" element = {<About/>}/>    
    <Route path="/Sign-up" element = {<SignUp/>}/>    
    <Route path="/Sign-in" element = {<SignIn/>}/>    

  </Routes>
  </BrowserRouter>)
}

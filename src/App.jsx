import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './login'
import Signup from './Signup'
function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}   />
      <Route  path='/about' element={<About/>}   />
      <Route  path='/contact' element={<Contact/>}   />
      <Route  path='/login' element={<Login/>}/>
      <Route  path='login/signup' element={<Signup/>}/>
   </Routes>
  </BrowserRouter>

    </>
  )
}

export default App

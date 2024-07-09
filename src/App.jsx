import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Knowledge from './pages/Knowledge'
import Connect from './pages/Connect'
import Home from './pages/Home'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/work' element={<Work></Work>}></Route>
        <Route path='/knowledge' element={<Knowledge></Knowledge>}></Route>
        <Route path='/connect' element={<Connect></Connect>}></Route>
      </Routes>
    </>
  )
}

export default App

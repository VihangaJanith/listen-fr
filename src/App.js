import React from 'react'
import Predict from './Predict'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Profile from './Profile'
import Navbar from './NavBar'
import Recommendations from './Recommendations'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import AboutUs from './pages/AboutUs/About'

function App() {

    
  return (
    <div>
      <Navbar/>
    <Router>

<Routes>
  
  <Route path="/" element={<Home/>}/>

  <Route path="/profile" element={<Profile/>} />
  <Route path="/recommendations" element={<Recommendations/>} />
  {/* <Route path="/home" element={<Home/>} /> */}
  <Route path="/search" element={<Search/>} />
  <Route path="/about" element={<AboutUs/>} />



  </Routes>

</Router>


      {/* <Predict/> */}
      <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} ListenEd. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default App
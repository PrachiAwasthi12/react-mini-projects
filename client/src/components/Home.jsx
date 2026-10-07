import React from 'react'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <outlet/>
        </div>
    </div>
  )
}

export default Home
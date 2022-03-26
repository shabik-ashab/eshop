import React from 'react'
import Announcement from '../componets/Announcement'
import Navbar from '../componets/Navbar'
import Slider from '../componets/Slider'


const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home
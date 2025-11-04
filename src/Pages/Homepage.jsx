import React from 'react'

import Header from '../Components/Header'
import Experience from '../Components/Experience'
import Mywork from '../Components/Mywork'
import Aboutme from '../Components/Aboutme'
import Testimonial from '../Components/Testimonial'
import Letstalk from '../Components/Letstalk'
import Myimage from '../Components/Myimage'
const Homepage = () => {
  return (
    <div>
      <Header />
      <Myimage />
      <div id="about">
        <Aboutme />
      </div>
      <div id="portfolio">
        <Mywork />
      </div>
      <div id="services">
        <Experience />
      </div>
      <Testimonial />
      <Letstalk />
    </div>
  )
}

export default Homepage
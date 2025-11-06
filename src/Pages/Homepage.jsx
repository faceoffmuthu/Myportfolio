import React, { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Experience from '../Components/Experience'
import Mywork from '../Components/Mywork'
import Aboutme from '../Components/Aboutme'
import Testimonial from '../Components/Testimonial'
import Letstalk from '../Components/Letstalk'
import Myimage from '../Components/Myimage'
const Homepage = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Header  />
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

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          data-no-custom-cursor
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:bg-gray-900 transition-colors"
          style={{ cursor: 'default' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Homepage
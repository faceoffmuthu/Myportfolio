import React from 'react'

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav data-no-custom-cursor className="w-full py-8 px-8 font-saira-condensed">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#about" 
          onClick={(e) => handleSmoothScroll(e, 'about')}
          className="text-black uppercase tracking-wide hover:opacity-70 transition-opacity text-lg cursor-pointer"
        >
          ABOUT
        </a>
        <a 
          href="#portfolio" 
          onClick={(e) => handleSmoothScroll(e, 'portfolio')}
          className="text-black uppercase tracking-wide hover:opacity-70 transition-opacity text-lg cursor-pointer"
        >
          MY WORKS
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleSmoothScroll(e, 'skills')}
          className="text-black uppercase tracking-wide hover:opacity-70 transition-opacity text-lg cursor-pointer"
        >
          SKILLS
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="text-black uppercase tracking-wide hover:opacity-70 transition-opacity text-lg cursor-pointer"
        >
          CONTACT
        </a>
      </div>
    </nav>
  )
}

export default Navbar
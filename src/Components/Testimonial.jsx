import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { arrow } from '../assets/images'

const testimonials = [
  {
    id: 1,
    name: 'Emily Carter',
    // role: '1.65m subscribers',
    content: "Hands down the best editor I've worked with. Every TikTok looks clean, on-brand, and performs way better than before. Total game changer.",
    rating: 5,
    image: 'https://framerusercontent.com/images/7fL4QJDsuimM3GmAxnTxB58Lrw.jpg'
  },
  {
    id: 2,
    name: 'James Richardson',
    // role: '2.45m subscribers',
    content: 'I send raw clips, and they come back looking like they were made for TV. Super quick turnaround and always nails the vibe.',
    rating: 5,
    image: 'https://framerusercontent.com/images/AqDU62U0ILWH6uLvadot2OfuggA.jpg',
    variant: 'bg-gray-50'
  },
  {
    id: 3,
    name: 'Sophie Williams',
    // role: '5m subscribers',
    content: "We've seen a noticeable uptick in engagement since working together. The edits are sharp, creative, and optimized perfectly for YouTube Shorts.",
    rating: 5,
    image: 'https://framerusercontent.com/images/OuUloSm0m69zkSLax5gEBHqD8Y.png'
  },
  {
    id: 4,
    name: 'Sophie Williams',
    // role: '5m subscribers',
    content: "We've seen a noticeable uptick in engagement since working together. The edits are sharp, creative, and optimized perfectly for YouTube Shorts.",
    rating: 5,
    image: 'https://framerusercontent.com/images/OuUloSm0m69zkSLax5gEBHqD8Y.png'
  },
  {
    id: 5,
    name: 'Sophie Williams',
    //  role: '5m subscribers',
    content: "We've seen a noticeable uptick in engagement since working together. The edits are sharp, creative, and optimized perfectly for YouTube Shorts.",
    rating: 5,
    image: 'https://framerusercontent.com/images/OuUloSm0m69zkSLax5gEBHqD8Y.png'
  },
  {
    id: 6,
    name: 'Sophie Williams',
    // role: '5m subscribers',
    content: "We've seen a noticeable uptick in engagement since working together. The edits are sharp, creative, and optimized perfectly for YouTube Shorts.",
    rating: 5,
    image: 'https://framerusercontent.com/images/OuUloSm0m69zkSLax5gEBHqD8Y.png'
  },
]

const Testimonial = () => {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const containerRef1 = useRef(null)
  const containerRef2 = useRef(null)
  const isInView1 = useInView(containerRef1, { once: false, amount: 0.1 })
  const isInView2 = useInView(containerRef2, { once: false, amount: 0.1 })

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  useEffect(() => {
    // Start animations immediately to ensure they work on all screen sizes including mobile
    const startAnimations = () => {
      // First row animation (left to right)
      controls1.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 90,
            ease: 'linear',
          }
        }
      })

      // Second row animation (right to left)
      controls2.start({
        x: ['-50%', '0%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 90,
            ease: 'linear',
          }
        }
      })
    }

    // Start animations immediately on mount with a small delay to ensure DOM is ready
    const timer = setTimeout(startAnimations, 100)
    
    return () => clearTimeout(timer)
  }, [controls1, controls2])

  return (
    <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="w-full max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-row md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left Side - Heading and Rating */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase font-saira-condensed leading-tight mb-4 sm:mb-6">
              WHAT<br />CLIENTS SAY
            </h2>
            
            {/* Average Rating */}
            <div className="flex items-center gap-2 sm:gap-3">
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-black text-xs sm:text-sm md:text-base lg:text-lg uppercase font-saira-condensed tracking-wide">
                4.5 AVERAGE RATING
              </span>
            </div>
          </div>

          {/* Right Side - Navigation Arrow */}
          <div className="flex-shrink-0 self-center md:self-auto">
            <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center hover:opacity-70 transition-opacity">
              <img src={arrow} alt="arrow" className="w-full h-full" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative pb-12 overflow-hidden">
          {/* First row */}
          <motion.div 
            ref={containerRef1}
            className="flex items-stretch gap-4 sm:gap-6 py-4 w-max"
            animate={controls1}
            style={{ willChange: 'transform' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className={`p-8 rounded-xl ${
                  index % 2 === 0 ? 'bg-white' : 
                  'bg-transparent border border-gray-200'
                } shadow-sm flex flex-col w-[350px] flex-shrink-0`}
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-black fill-current"
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-lg mb-8 flex-grow">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium font-saira-condensed">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-saira-condensed">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Second row */}
          <motion.div 
            ref={containerRef2}
            className="flex items-stretch gap-4 sm:gap-6 py-4 w-max mt-6 ml-auto"
            animate={controls2}
            initial={{ x: '50%' }}
            style={{ willChange: 'transform' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`second-${testimonial.id}-${index}`}
                className={`p-8 rounded-xl ${
                  index % 2 === 1 ? 'bg-white' : 
                  'bg-transparent border border-gray-200'
                } shadow-sm flex flex-col w-[350px] flex-shrink-0`}
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-black fill-current"
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-lg mb-8 flex-grow">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium font-saira-condensed">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-saira-condensed">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial


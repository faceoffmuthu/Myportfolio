import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Letstalk = () => {
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0 })

  // Create repeating items for seamless scrolling
  const items = [
    { type: 'symbol', style: 'white', text: null },
    { type: 'text', style: 'white', text: "LET'S WORK" },
    { type: 'symbol', style: 'black', text: null },
    { type: 'text', style: 'black', text: "LET'S TALK" },
  ]

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }
      }
    })
  }, [controls])

  // Starburst SVG Component
  const Starburst = ({ isWhite }) => {
    const fillColor = isWhite ? 'white' : 'black'
    const strokeColor = isWhite ? '#374151' : 'none'
    const strokeWidth = isWhite ? '1' : '0'

    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 80 80"
        className="flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central circle */}
        <circle cx="40" cy="40" r="8" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} />
        {/* Radial lines */}
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16
          const radian = (angle * Math.PI) / 180
          const x1 = 40 + 8 * Math.cos(radian)
          const y1 = 40 + 8 * Math.sin(radian)
          const x2 = 40 + 32 * Math.cos(radian)
          const y2 = 40 + 32 * Math.sin(radian)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={fillColor}
              strokeWidth={isWhite ? '2' : '3'}
              strokeLinecap="round"
            />
          )
        })}
      </svg>
    )
  }

  return (
    <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="relative">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-8 md:gap-12 lg:gap-16 w-max"
          animate={controls}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item.type}-${item.style}-${index}`} className="flex items-center gap-6 md:gap-8 lg:gap-10 flex-shrink-0">
            {item.type === 'symbol' ? (
              <Starburst isWhite={item.style === 'white'} />
            ) : (
              <h2
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase font-saira-condensed whitespace-nowrap ${
                  item.style === 'white'
                    ? 'text-white drop-shadow-[2px_2px_0px_#374151]'
                    : 'text-black'
                }`}
                style={
                  item.style === 'white'
                    ? {
                        WebkitTextStroke: '1px #374151',
                        textShadow: '2px 2px 0px #374151',
                      }
                    : {}
                }
              >
                {item.text}
              </h2>
            )}
          </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Letstalk


import React from 'react'
import { logo } from '../assets/images'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <header className="w-full min-h-[80vh] lg:min-h-screen bg-white flex flex-col justify-between px-6 md:px-12 lg:px-16 py-3 md:py-8 lg:py-5">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-24rem)]">
        {/* Large MUTHU Heading - Upper Middle */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-start pt-12 md:pt-16 lg:pt-24"
        >
          <h1 className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-sans font-bold tracking-tight">
            <img src={logo} alt="logo" className="w-full h-full" />
          </h1>
        </motion.div>

        {/* Bottom Text Blocks */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.18 } } }}
          className="flex flex-row md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 pb-8 md:pb-0 font-saira-condensed font-normal"
        >
          {/* Left Text Block */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Brand & Freelancer
            </h2>
            <h2 className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Website Designer
            </h2>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <p className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Based in Tamil Nadu,
            </p>
            <p className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed">
              India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header


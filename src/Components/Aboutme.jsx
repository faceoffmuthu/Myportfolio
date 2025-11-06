import React from 'react'
import { aboutme,html,css,javascript,tailwindcss,mongodb,react,node,express,figma,myResume } from '../assets/images'
import { motion, useScroll, useTransform } from 'motion/react'


const Aboutme = () => {
  const [showResume, setShowResume] = React.useState(false)

  const openResume = () => setShowResume(true)
  const closeResume = () => setShowResume(false)
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeResume() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const rightImageRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: rightImageRef })
  const opacity = useTransform(scrollYProgress, [1, 0.8], [0.4, 1])
  const clipPath = useTransform(scrollYProgress, [0, 0.5], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <>
      {/* About Me Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
            {/* Left Column - Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-1/2 flex flex-col"
            >
              {/* Small ABOUT label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-gray-600 uppercase text-sm md:text-base font-saira-condensed tracking-wide">
                  ABOUT
                </span>
              </div>
              
              {/* Large ABOUT ME heading */}
              <h2 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase leading-none font-saira-condensed">
                ABOUT<br />ME
              </h2>
            </motion.div>

            {/* Right Column - Image Section with overlay reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-1/2"
            >
              {/* RIGHT IMAGE + SCROLL ANIMATION OVERLAY */}
              <div
                ref={rightImageRef}
                className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden shadow-lg md:w-full"
              >
                {/* Background Image */}
                <img
                  src={aboutme}
                  alt="About Me"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Reveal Animation */}
                <motion.div
                  style={{ opacity, clipPath }}
                  className="absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center px-6 text-center"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-cormorant mb-3 font-saira-condensed">
                    Creative. Focused. Passionate.
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-notosans max-w-md font-saira-condensed">
                    Every line of code is crafted with precision and creativity to
                    deliver meaningful, visually engaging experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Do I Work & My Skills Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* How Do I Work Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }}
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Title */}
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/3">
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                  HOW <br/>DO I WORK
                </h2>
              </motion.div>

              {/* Content */}
              <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-full md:w-2/3 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-saira-condensed">
                {/* Item 01 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="flex gap-3 sm:gap-4">
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl flex-shrink-0">✺</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">01</div>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-saira-condensed leading-relaxed">
                      I focus on clarity, performance, and user experience — starting with your goals.
                    </p>
                  </div>
                </motion.div>

                {/* Item 02 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="flex gap-3 sm:gap-4">
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl flex-shrink-0">✺</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">02</div>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-saira-condensed leading-relaxed">
                      Then crafting sleek, functional designs through research, design, development, and refinement.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* My Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            id="skills" className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
          >
            {/* Title */}
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/3">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                MY <br/>SKILLS
              </h2>
            </motion.div>

            {/* Skill Bars */}
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-full md:w-2/4 flex flex-col gap-3 sm:gap-4 font-saira-condensed">
              {/* Skill Bar 1 - Responsive Design */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '100%' }}>
                  <span className="truncate"><span className="text-gray-500">01</span> RESPONSIVE DESIGN</span>
                  <span className="flex-shrink-0 ml-2">100%</span>
                </div>
              </motion.div>

              {/* Skill Bar 2 - Coding */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '90%' }}>
                  <span className="truncate"><span className="text-gray-500">02</span> CODING</span>
                  <span className="flex-shrink-0 ml-2">90%</span>
                </div>
              </motion.div>

              {/* Skill Bar 3 - Problem Solving */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '88%' }}>
                  <span className="truncate"><span className="text-gray-500">03</span> PROBLEM SOLVING</span>
                  <span className="flex-shrink-0 ml-2">88%</span>
                </div>
              </motion.div>

              {/* Skill Bar 4 - Communication */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '92%' }}>
                  <span className="truncate"><span className="text-gray-500">04</span> COMMUNICATION</span>
                  <span className="flex-shrink-0 ml-2">92%</span>
                </div>
              </motion.div>

              {/* Skill Bar 5 - Project Management */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '79%' }}>
                  <span className="truncate"><span className="text-gray-500">05</span> PROJECT MANAGEMENT</span>
                  <span className="flex-shrink-0 ml-2">79%</span>
                </div>
              </motion.div>

              {/* Skill Bar 6 - Database */}
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '75%' }}>
                  <span className="truncate"><span className="text-gray-500">06</span> DATABASE</span>
                  <span className="flex-shrink-0 ml-2">75%</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* My Tech Stack & My Experience Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* My Tech Stack Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Title */}
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/3">
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                  MY <br/>TECH STACK
                </h2>
              </motion.div>

              {/* Tech Icons Grid */}
              <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-full md:w-2/3">
                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-4 max-w-2xl mx-auto md:mx-0">
                  {/* HTML5 */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={html} alt="html" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* CSS3 */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={css} alt="css" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* JavaScript */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={javascript} alt="javascript" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* Tailwind CSS */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={tailwindcss} alt="tailwindcss" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* MongoDB */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={mongodb} alt="mongodb" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* React */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={react} alt="react" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* Next.js */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={node} alt="node" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* Express.js */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={express} alt="express" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                  
                  {/* Figma */}
                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto col-start-1 sm:col-start-2 md:col-start-1">
                    <img src={figma} alt="figma" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* My Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
          >
            {/* Title & Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/3">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight mb-4 sm:mb-6 md:mb-8">
                MY <br/>EXPERIENCE
              </h2>
              <button onClick={openResume} className="px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-gray-300 rounded-full bg-white hover:bg-black hover:text-white transition-colors flex items-center gap-2 text-black font-saira-condensed text-xs sm:text-sm md:text-base w-auto">
                VIEW MY CV
                <span className="">↗</span>
              </button>
            </motion.div>

            {/* Experience List */}
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="w-full md:w-2/3 flex flex-col">
              {/* Experience 1 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-2xl bg-white inline-flex items-center justify-center">
                    <span className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed whitespace-nowrap text-center">2024 - 2025</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <h3 className="text-black text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase font-saira-condensed mb-1 sm:mb-2 font-bold">
                    FRONT-END DEVELOPER
                  </h3>
                  <p className="text-black text-lg sm:text-sm md:text-base lg:text-lg font-saira-condensed">
                    Freelancer
                  </p>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-2xl bg-white inline-flex items-center justify-center">
                    <span className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed whitespace-nowrap text-center">2024 - 2025</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <h3 className="text-black text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase font-saira-condensed mb-1 sm:mb-2 font-bold">
                    FULL-STACK DEVELOPER
                  </h3>
                  <p className="text-black text-lg sm:text-sm md:text-base lg:text-lg font-saira-condensed">
                    Dhigrowth Company
                  </p>
                </div>
              </motion.div>

              {/* Experience 3 */}
              {/* <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6"> */}

              {/* Experience 4 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-2xl bg-white inline-flex items-center justify-center">
                    <span className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed whitespace-nowrap text-center">2021 - 2024</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <h3 className="text-black text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase font-saira-condensed mb-1 sm:mb-2 font-bold">
                    DEGREE IN COMPUTER APPLICATIONS
                  </h3>
                  <p className="text-black text-lg sm:text-sm md:text-base lg:text-lg font-saira-condensed">
                    Hindustan college of arts and science
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {showResume && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 sm:p-4 md:p-6 overflow-auto"
          onClick={closeResume}
          data-no-custom-cursor
        >
          <div
            className="relative w-full max-w-[min(92vw,960px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeResume}
              aria-label="Close"
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black shadow hover:bg-gray-100"
              data-no-custom-cursor
            >
              ×
            </button>
            <img
              src={myResume}
              alt="Resume"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Aboutme


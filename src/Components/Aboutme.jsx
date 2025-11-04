import React from 'react'
import { aboutme,html,css,javascript,tailwindcss,mongodb,react,node,express,figma } from '../assets/images'


const Aboutme = () => {
  return (
    <>
      {/* About Me Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
            {/* Left Column - Text Section */}
            <div className="w-full md:w-1/2 flex flex-col">
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
            </div>

            {/* Right Column - Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square md:aspect-auto md:h-full">
                <img 
                  src={aboutme} 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Do I Work & My Skills Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* How Do I Work Section */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Title */}
              <div className="w-full md:w-1/3">
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                  HOW <br/>DO I WORK
                </h2>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-saira-condensed">
                {/* Item 01 */}
                <div className="flex gap-3 sm:gap-4">
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl flex-shrink-0">✺</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">01</div>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-saira-condensed leading-relaxed">
                      I focus on clarity, performance, and user experience — starting with your goals.
                    </p>
                  </div>
                </div>

                {/* Item 02 */}
                <div className="flex gap-3 sm:gap-4">
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl flex-shrink-0">✺</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">02</div>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-saira-condensed leading-relaxed">
                      Then crafting sleek, functional designs through research, design, development, and refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Skills Section */}
          <div id="skills" className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Title */}
            <div className="w-full md:w-1/3">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                MY <br/>SKILLS
              </h2>
            </div>

            {/* Skill Bars */}
            <div className="w-full md:w-2/4 flex flex-col gap-3 sm:gap-4 font-saira-condensed">
              {/* Skill Bar 1 - Responsive Design */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '100%' }}>
                  <span className="truncate"><span className="text-gray-500">01</span> RESPONSIVE DESIGN</span>
                  <span className="flex-shrink-0 ml-2">100%</span>
                </div>
              </div>

              {/* Skill Bar 2 - Coding */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '90%' }}>
                  <span className="truncate"><span className="text-gray-500">02</span> CODING</span>
                  <span className="flex-shrink-0 ml-2">90%</span>
                </div>
              </div>

              {/* Skill Bar 3 - Problem Solving */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '88%' }}>
                  <span className="truncate"><span className="text-gray-500">03</span> PROBLEM SOLVING</span>
                  <span className="flex-shrink-0 ml-2">88%</span>
                </div>
              </div>

              {/* Skill Bar 4 - Communication */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '92%' }}>
                  <span className="truncate"><span className="text-gray-500">04</span> COMMUNICATION</span>
                  <span className="flex-shrink-0 ml-2">92%</span>
                </div>
              </div>

              {/* Skill Bar 5 - Project Management */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '79%' }}>
                  <span className="truncate"><span className="text-gray-500">05</span> PROJECT MANAGEMENT</span>
                  <span className="flex-shrink-0 ml-2">79%</span>
                </div>
              </div>

              {/* Skill Bar 6 - Database */}
              <div className="relative w-full bg-gray-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-saira-condensed bg-black rounded-full" style={{ width: '75%' }}>
                  <span className="truncate"><span className="text-gray-500">06</span> DATABASE</span>
                  <span className="flex-shrink-0 ml-2">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Tech Stack & My Experience Section */}
      <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* My Tech Stack Section */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              {/* Title */}
              <div className="w-full md:w-1/3">
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight">
                  MY <br/>TECH STACK
                </h2>
              </div>

              {/* Tech Icons Grid */}
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-4 max-w-2xl mx-auto md:mx-0">
                  {/* HTML5 */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={html} alt="html" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* CSS3 */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={css} alt="css" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* JavaScript */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={javascript} alt="javascript" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* Tailwind CSS */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={tailwindcss} alt="tailwindcss" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* MongoDB */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={mongodb} alt="mongodb" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* React */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={react} alt="react" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* Next.js */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={node} alt="node" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* Express.js */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                    <img src={express} alt="express" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                  
                  {/* Figma */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center mx-auto col-start-1 sm:col-start-2 md:col-start-1">
                    <img src={figma} alt="figma" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Experience Section */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Title & Button */}
            <div className="w-full md:w-1/3">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase font-saira-condensed leading-tight mb-4 sm:mb-6 md:mb-8">
                MY <br/>EXPERIENCE
              </h2>
              <button className="px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-gray-300 rounded-full bg-white hover:bg-black hover:text-white transition-colors flex items-center gap-2 text-black font-saira-condensed text-xs sm:text-sm md:text-base w-auto">
                VIEW MY CV
                <span className="">↗</span>
              </button>
            </div>

            {/* Experience List */}
            <div className="w-full md:w-2/3 flex flex-col">
              {/* Experience 1 */}
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
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
              </div>

              {/* Experience 2 */}
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
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
              </div>

              {/* Experience 3 */}
              {/* <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-2xl bg-white inline-flex items-center justify-center">
                    <span className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed whitespace-nowrap text-center">2021 - 2022</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <h3 className="text-black text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase font-saira-condensed mb-1 sm:mb-2 font-bold">
                    DESKTOP DEVELOPER
                  </h3>
                  <p className="text-black text-lg sm:text-sm md:text-base lg:text-lg font-saira-condensed">
                    Development Company
                  </p>
                </div>
              </div> */}

              {/* Experience 4 */}
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutme


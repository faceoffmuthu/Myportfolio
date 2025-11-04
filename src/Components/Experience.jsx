import React from 'react'

const Experience = () => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 font-saira-condensed">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-row md:flex-row justify-between items-center gap-8 md:gap-4 lg:gap-8">
          {/* First Block - Projects */}
          <div className="flex flex-col items-center">
            <div className="text-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2">
              5+
            </div>
            <div className="text-black text-sm md:text-base lg:text-lg uppercase tracking-wide text-center">
              PROJECTS
            </div>
          </div>

          {/* Second Block - Years of Experience */}
          <div className="flex flex-col items-center">
            <div className="text-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2">
              1+
            </div>
            <div className="text-black text-sm md:text-base lg:text-lg uppercase tracking-wide text-center">
              YEARS OF EXPERIENCE
            </div>
          </div>

          {/* Third Block - Happy Clients */}
          <div className="flex flex-col items-center">
            <div className="text-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2">
              5+
            </div>
            <div className="text-black text-sm md:text-base lg:text-lg uppercase tracking-wide text-center">
              HAPPY CLIENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


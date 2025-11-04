import React from 'react'
import { myworks, myworks2, myworks3,myworks4, myworks5, myworks6, myworks7, myworks8, myworks9 } from '../assets/images'

const Mywork = () => {
  return (
    <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* MY WORK in Right Corner - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block absolute top-0 right-0">
          <h2 className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-saira-condensed font-bold uppercase">
            MY WORK →
          </h2>
        </div>

        {/* Mobile MY WORK title */}
        <div className="md:hidden mb-8">
          <h2 className="text-black text-3xl sm:text-4xl font-saira-condensed font-bold uppercase">
            MY WORK →
          </h2>
        </div>

        {/* Left Side - Text */}
        <div className="w-full md:w-3/4 lg:w-2/3 pr-0 md:pr-48 lg:pr-64 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-saira-condensed font-normal leading-relaxed">
            "I design sleek, high-performance web experience that help brands stand out."
          </h2>
        </div>

        {/* Grid Section - 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {/* Row 1 - Half height */}
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks2} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks3} alt="myworks" className="w-full h-full object-cover" />
          </div>

          {/* Row 2 */}
          <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
            <img src={myworks4} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
            <img src={myworks5} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
            <img src={myworks6} alt="myworks" className="w-full h-full object-cover" />
          </div>

          {/* Row 3 */}
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks7} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks8} alt="myworks" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-square md:aspect-[2/1] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={myworks9} alt="myworks" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Mywork
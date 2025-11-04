import React from 'react'
import { myworks, myworks2, myworks3,myworks4, myworks5, myworks6, myworks7, myworks8, myworks9 } from '../assets/images'

const workItems = [
  { id: 1, image: myworks, link: 'https://sanikasrestaurant.com/', aspect: 'aspect-square md:aspect-[2/1]' },
  { id: 2, image: myworks2, link: 'https://rutsnrides.com/', aspect: 'aspect-square md:aspect-[2/1]' },
  { id: 3, image: myworks3, link: 'https://befhue.dhiwebsite.in/', aspect: 'aspect-square md:aspect-[2/1]' },
  { id: 4, image: myworks4, link: 'https://demovectra.dhiwebsite.in/', aspect: 'aspect-square' },
  { id: 5, image: myworks5, link: 'https://demo.milaaparfum.com/', aspect: 'aspect-square' },
  { id: 6, image: myworks6, link: '#', aspect: 'aspect-square' },
  { id: 7, image: myworks7, link: '#', aspect: 'aspect-square md:aspect-[2/1]' },
  { id: 8, image: myworks8, link: 'https://kiipl.co.in/', aspect: 'aspect-square md:aspect-[2/1]' },
  { id: 9, image: myworks9, link: 'https://starttennew.dhiwebsite.in/', aspect: 'aspect-square md:aspect-[2/1]' },
]

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
          {workItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full ${item.aspect} bg-gray-300 rounded-lg overflow-hidden min-h-[250px] md:min-h-0 block hover:opacity-90 transition-opacity`}
            >
              <img src={item.image} alt={`Work ${item.id}`} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Mywork

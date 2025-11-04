import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myphoto } from "../assets/images";

const Myimage = () => {
  const navigate = useNavigate();
  const [backgroundSize, setBackgroundSize] = useState('cover');
  const [textFillColor, setTextFillColor] = useState('black');

  useEffect(() => {
    const handleResize = () => {
      // Tablet view: md breakpoint (768px and up, but less than lg which is 1024px)
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setBackgroundSize('120%'); // Zoom in for tablet
      } else {
        setBackgroundSize('cover');
      }
      
      // Set text color: black for mobile/tablet, white for desktop (lg and above)
      if (window.innerWidth >= 1024) {
        setTextFillColor('white');
      } else {
        setTextFillColor('black');
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle arrow click
  const handleHireMeClick = () => {
    navigate("/hire-me"); // Route to your "Hire Me" page
  };

  return (
    <div
      data-no-custom-cursor
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90 md:scale-120 transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${myphoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%'
        }}
        role="img"
        aria-label="Profile"
      />

      {/* Left Overlay - HIRE ME Circle */}
      <div className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center overflow-visible">
        <div
          className="relative flex items-center justify-center cursor-pointer group overflow-visible"
          onClick={handleHireMeClick}
        >
          {/* Circular HIRE ME Text */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 animate-spin-slow overflow-visible">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 125, 125 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                />
              </defs>
              <text
                fill={textFillColor}
                fontSize="18"
                className="sm:text-[20px] md:text-[22px] lg:text-[24px]"
                fontFamily="'Saira Condensed', sans-serif"
                textTransform="uppercase"
                fontWeight="normal"
                textAnchor="start"
              >
                <textPath href="#circle-path" startOffset="2%">
                  HIRE ME ✺
                </textPath>
                <textPath href="#circle-path" startOffset="26.5%">
                  HIRE ME ✺
                </textPath>
                <textPath href="#circle-path" startOffset="51%">
                  HIRE ME ✺
                </textPath>
                <textPath href="#circle-path" startOffset="75.5%">
                  HIRE ME ✺
                </textPath>
              </text>
            </svg>

            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black lg:text-white group-hover:text-gray-300 lg:group-hover:text-gray-300 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Overlay - Social Links */}
      <div className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {[
            { name: "GITHUB", link: "https://github.com/faceoffmuthu" },
            // { name: "DRIBBBLE", link: "https://dribbble.com" },
            { name: "LINKEDIN", link: "https://www.linkedin.com/in/muthu-v-b202a431b/" },
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-saira-condensed uppercase hover:opacity-80 transition-all flex items-center gap-1 sm:gap-2"
            >
              {platform.name}
              <svg
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Optional overlay gradient for readability on small screens */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 sm:hidden"></div>
    </div>
  );
};

export default Myimage;

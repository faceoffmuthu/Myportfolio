import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myphoto } from "../assets/images";
import { motion } from "motion/react";

const Myimage = () => {
  const navigate = useNavigate();
  const [backgroundSize, setBackgroundSize] = useState('cover');

  useEffect(() => {
    const handleResize = () => {
      // Tablet view: md breakpoint (768px and up, but less than lg which is 1024px)
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setBackgroundSize('120%'); // Zoom in for tablet
      } else {
        setBackgroundSize('cover');
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      data-no-custom-cursor
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
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
        initial={{ scale: 1.03, opacity: 0.85 }}
        animate={{ scale: 1.10, opacity: 0.95 }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Left Overlay - HIRE ME Circle */}
      <motion.div className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center overflow-visible">
        <motion.div
          className="relative flex items-center justify-center cursor-pointer group overflow-visible"
          onClick={handleHireMeClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
          {/* Circular HIRE ME Text */}
          <div className="relative w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 overflow-visible">
            <motion.svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 125, 125 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="20"
                className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
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
            </motion.svg>

            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                className="w-7 h-7 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white group-hover:text-gray-300 transition-all duration-300"
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
        </motion.div>
      </motion.div>

      {/* Right Overlay - Social Links */}
      <motion.div className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.14 } } }}
          className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
        >
          {[
            { name: "GITHUB", link: "https://github.com/faceoffmuthu" },
            // { name: "DRIBBBLE", link: "https://dribbble.com" },
            { name: "LINKEDIN", link: "https://www.linkedin.com/in/muthu-v-b202a431b/" },
          ].map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, x: 10 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-saira-condensed uppercase hover:opacity-80 transition-all flex items-center gap-1 sm:gap-2"
            >
              {platform.name}
              <svg
                width="16"
                height="16"
                className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0"
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
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Optional overlay gradient for readability on small screens */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 sm:hidden"></div>
    </motion.div>
  );
};

export default Myimage;

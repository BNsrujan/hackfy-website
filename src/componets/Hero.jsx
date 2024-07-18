import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/style";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(-1);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleHover = (index) => {
    setCurrentFilter(index);
  };

  const handleMouseLeave = () => {
    setCurrentFilter(-1);
  };

  const filters = [
    "none",
    "hue-rotate(180deg) brightness(0.7)",
    "hue-rotate(90deg) brightness(0.7)",
    "hue-rotate(80deg) brightness(0.7)",
  ];

  return (
    <div
      className="pt-[40px] flex bg-cover bg-opacity-20 bg-no-repeat bg-center flex-wrap lg:h-screen"
      style={{
        // filter: currentFilter !== -1 ? filters[currentFilter] : "none",
        backgroundImage: `url('/src/assets/bg2.jpg')`, 
      }}
    >
      <div className="w-1/2 h-full text-white pl-40 flex items-center">
        <div>
          <motion.div variants={textVariant()} className="">
            <h2 className={`${styles.heroHeadText}`}>
              Essential Policy for Cybersecurity Protection.
            </h2>
            <p className={styles.heroSubText}>
              In today's increasingly digital world, cybersecurity has become
              paramount. With the rapid expansion of online activities,
            </p>
          </motion.div>
          <div className="flex gap-8 pt-5">
            <button
              className={`${styles.buttonred} font-semibold text-lg px-4 py-3`}
              onClick={handleButtonClick}
              onMouseEnter={() => handleHover(1)} // Apply filter on hover
              onMouseLeave={handleMouseLeave} // Reset filter on leave
            >
              Watch the Video
            </button>

            <Link to="/demo">
              <button
                className={`${styles.buttonred} font-semibold text-lg px-4 py-3`}
              >
                Request A Demo
              </button>
            </Link>
            {showVideo && (
              <div className="video-overlay">
                <div className="video-container">
                  <button
                    onClick={handleCloseVideo}
                    className="font-extrabold text-1xl absolute -top-10 -right-10 border-red-800 p-3 w-7 h-7 flex justify-center items-center bg-red-500 rounded-full"
                  >
                    x
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Demo Video"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full pr-40"></div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { SectionWrapper } from '@/hoc';
import { motion } from 'framer-motion';
import { styles } from '@/style';
import { textVariant,textVariants } from '@/utils/motion';
import { projectData } from '@/constants';
import { image, tick } from '@/assets';

function About() {
  return (
    <>
      <div className='flex  sm:flex-none'>
        <div className="w-1/2 px-3 flex flex-wrap min-w-60">
          <motion.div initial="hidden" animate="show">
            <motion.div variants={textVariants(-35,1)} className='pb-5 sm'>
              <p className={styles.sectionSubText}>About us</p>
              <h2 className={styles.sectionHeadText}>Why Choose Us?</h2>
            </motion.div>
            {projectData.map((prog, index) => (
              <motion.div key={index} variants={textVariants(-30, 1)} className="flex py-4 gap-1">
                <img src={tick} alt="" className='w-6' />
                <p className='text-xl'>{prog.description}</p>
              </motion.div>
            ))}
            <motion.button
              variants={textVariants(-10,1.5 )}
              className={`${styles.buttonred} font-semibold text-lg ml-3 mt-5 px-4 py-3`}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
        <motion.div variants={textVariants(-10,1 )} className='w-1/2 h-full'>
          <img src={image} alt="" />
        </motion.div>
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");

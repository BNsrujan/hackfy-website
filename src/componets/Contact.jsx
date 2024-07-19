import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '@/style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Contact() {
  
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className='felx flex-col itmes-center justify-center h-screen bg-secondarys'
    >
      {/* <h1 className={styles.sectionHeadText}>Contact Us</h1>
      <form >
        <label className='block text-gray-700'htmlFor=""></label>
        <input type='text'
        name='firstName'
        value={formData.fi}
        />
      </form> */}
    </motion.div>
  )
}

export default Contact
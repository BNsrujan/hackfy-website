import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clients } from '@/constants';
import { Stare } from '@/assets';

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full   md:h-[36rem] bg-testimoniales bg-contain bg text-black   bg-no-repeat bg-center bg-blues  overflow-hidden flex justify-center items-center">
      <AnimatePresence>
        {clients.map((client, index) =>
          index === currentIndex ? (
            <motion.div
              key={client.id}
              className="absolute w-full h-full flex flex-col p-60 justify-center items-center text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Best Trusted Cyber Security</h1>
              <motion.img src={Stare}
              className='h-8'
               alt=""
                />
              <p className="text-lg mb-4">"{client.comment}."</p>
              <motion.div className='flex '><motion.img
                src={client.url}
                alt={client.alt}
                className="w-20 h-20 rounded-full border-red-700 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className='m-3 text-start  '>
              <h1 className="text-2xl  font-semibold ">{client.name}</h1>
              <p className='text-lg text-slate-800'> {client.work}</p>
              </div>
              </motion.div>
            </motion.div>
            
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientSlider;

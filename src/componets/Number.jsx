import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CountUps } from "../constants";

import { SectionWrapper } from '@/hoc'

const Number = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    onChange: (inView) => setCounterOn(inView),
  });

  return (
    <span className="flex max-m-7xl  w-full justify-center items-center  h-full m-0  min-h-64 ">
      {CountUps.map((nums) =>(
        <div className="w-full  h-full  m-auto  min-w-64 justify-center items-center flex " key={nums.num}>
    <span ref={ref}  className="hover:bg-slate-600  hover:duration-150 font-extrabold text-7xl flex 
    justify-center   
     border-gray-500   items-center text-white w-full  h-full ">
      <h1 >
        {counterOn && <CountUp start={0} end={nums.num} duration={2} delay={0} />}{nums.sig}
        <p className="font-bold py-3 text-2xl ">{nums.define}</p>
      </h1>
      
    </span>
    
    </div>
    ))}
    </span>
    
  );
};

export default SectionWrapper(Number,"");

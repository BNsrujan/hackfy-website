import { SectionWrapper } from '@/hoc'
import { Services_data } from "../constants";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { styles } from '@/style';

const ProjectCardes = ({
  index,
  name,
  main_img,
  description,
}) => {
const Navigate = useNavigate();

  return (
    <motion.div  variants={fadeIn('up', 'spring', index * 1/6, 1.6)}className="p-5  w-96 relative h-89 rounded-lg   
    border border-slate-200   
    hover:shadow-md hover:scale-50   hover:scale-300  hover:transition hover:duration-300 hover:ease-in-out  ">
      <div className="   items-center">
        <span className="   w-full h-32 overflow-hidden rounded-lg flex justify-center items-center bg-white">
          <img src={main_img} />
        </span>
        <span className="pl-4">
          <p>A career in</p>
          <h1 className=" font-bold  text-2xl"> {name}</h1>
          
        </span>
      </div>
      <div className="pt-4 leading-5  text-white font-normal text-lg pb-7">
        <p>{description}</p>
      </div>

      
     <a href="/servies" className=' absolute bottom-4 left-6 text-xl  hover:text-zinc-300 hover:underline'>read me</a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Explore Powerful Career Tracks in Cybersecurity with Hacfy</p>
        <h2 className={styles.sectionHeadText}>HACTY offers a Wide Range of Powerful Career Tracks to build your cybersecurity Career</h2>
      </motion.div>
    <motion.div className="relative flex flex-wrap gap-7  justify-center ">
      {Services_data.map((cards, index) => (
        <ProjectCardes key={`card-${index}`} index={index} {...cards} />
      ))}
    </motion.div>
    </>
  );}
export default SectionWrapper(Services,"")
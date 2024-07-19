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
    

    <motion.div variants={fadeIn('up', 'spring', index * 1/6, 1.6)} class="max-w-sm mx-auto bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-blue-900 duration-300">
      <img class="w-full h-48 object-cover" src={main_img}  alt="Card Image"/>
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{name}</h2>
        <p class="text-gray-200 mb-4">{description}</p>
        <button class="px-4 py-2 text-sm sm:text-base md:text-lg font-medium border border-gray-800 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          read more 
        </button>
      </div>
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
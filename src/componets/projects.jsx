import { delay, motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { Services_data } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { styles } from "@/style";

const ProjectCardes = ({ index, name, main_img, description }) => {
  const navigate = useNavigate();

  const cardVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.01,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="p-5   relative text-lg rounded-lg border border-zinc-500 "
      onClick={() => navigate(`/project/${index}`)}
    >
      <div className=" items-center flex   space-y-4">
        <div className="flex flex-wrap">
          <div className="max-w-[800px] flex bg-cover w-1/4 m-3  overflow-hidden rounded-lg">
            <img src={main_img} alt={name} className="w-[800px] h-auto" />
          </div>
          <div className="text-start w-2/4 border-x-2 border-x-zinc-700 p-6">
            <h1 className="font-bold text-3xl ">{name}</h1>
            <div className="pt-4 leading-5 w-full text-white font-normal text-lg">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 justify-center items-center flex">
          <button
            className={`${styles.buttonred} font-semibold text-lg px-4 py-3 max-h-16`}
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Choose your cybersecurity career path and achieve your professional
          goals
        </h2>
        <p className={styles.sectionSubText}>
          Empowering professionals worldwide to achieve their cybersecurity
          career aspirations
        </p>
      </motion.div>
      <motion.div className="relative flex mt-10 flex-wrap gap-7 justify-center">
        {Services_data.map((cards, index) => (
          <ProjectCardes key={`card-${index}`} index={index} {...cards} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "");

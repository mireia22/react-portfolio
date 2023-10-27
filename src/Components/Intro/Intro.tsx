import { motion } from "framer-motion";
import { ImLinkedin2 } from "react-icons/im";
import { BiSolidMessageDots } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { useSectionInView } from "../../Hooks/Hooks";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="font-fjalla w-[100vw] min-h-[90vh] sm:w-[60vw] sm:rounded-b-[15rem]  tracking-widest bg-hero-pattern bg-background bg-opacity-80 bg-fixed 
       scroll-mt-[100rem] z-[998]    py-4
       flex  items-center text-center justify-center flex-wrap sm:border-l-4  sm:border-r-4  border-font/50
       sm:grid sm:grid-cols-2 
      "
    >
      <article
        className="flex flex-col mt-8 w-full items-center
      sm:p-6 sm:text-4xl sm:gap-3 sm:mt-0  sm:items-end"
      >
        <motion.p
          className="
          text-3xl mt-[3.5rem]
          sm:mt-[6rem]  sm:text-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          I'm{" "}
          <span
            className=" text-5xl
              bg-gradient-to-t from-white to-greenblue bg-clip-text text-transparent
"
          >
            Mireia
          </span>
          ,
        </motion.p>
        <motion.p
          className="mb-3 mt-3 text-xl  sm:text-2xl  sm:text-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          and this a showcase of my
        </motion.p>
        <motion.p
          className=" sm:mt-2 text-xl  sm:text-end           "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          WEB DEVELOPENT JOURNEY.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="flex justify-center items-center w-[80vw] sm:w-full sm:justify-end"
        >
          <img
            className=" w-[200px] shadow-xs sm:origin-bottom-left"
            src="/assets/images/portrait.png"
            alt="Mireia portrait"
            loading="lazy"
          />
        </motion.div>
      </article>
      <motion.article
        className="flex flex-col gap-4  tracking-wider  sm:h-[450px] font-medium items-center sm:items-start sm:gap-6 sm:justify-end"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="#contact"
          className="  bg-font text-black px-2 py-1 flex  
          items-center  gap-2 rounded
          hover:bg-black hover:border-2 hover:text-font "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <BiSolidMessageDots className="group-hover:translate-x-1 transition" />
        </a>
        <a
          className="   bg-font text-black px-2 py-1 flex  
            items-center  gap-2 rounded
            hover:bg-black hover:border-2 hover:text-font
            
            "
          href="/CV-mireia-garcia.pdf"
          download
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition " />
        </a>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/"
            target="_blank"
            className="bg-greenblue bg-opacity-60 text-font border-2 border-font border-opacity-60 p-1 flex rounded-full
             hover:text-greenblue hover:bg-font hover:border-greenblue transition
                      cursor-pointer  border-black/10 w-10 h-10 items-center justify-center"
          >
            <ImLinkedin2 />
          </a>
          <a
            href="https://github.com/mireia22"
            target="_blank"
            className="bg-greenblue bg-opacity-60 text-font border-2 border-font border-opacity-60 p-1 flex rounded-full
             hover:text-greenblue hover:bg-font hover:border-greenblue transition
                      cursor-pointer  border-black/10 w-10 h-10 items-center justify-center"
          >
            <BsGithub />
          </a>
        </div>
      </motion.article>
    </section>
  );
};

export default Intro;

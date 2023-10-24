import { motion } from "framer-motion";
import { ImLinkedin2 } from "react-icons/im";
import { BiSolidMessageDots } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { useSectionInView } from "../../Hooks/Hooks";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="font-fjalla min-h-screen tracking-widest bg-hero-pattern bg-background bg-opacity-80 bg-fixed 
      min-w-full scroll-mt-[100rem] z-[998]   flex  items-center text-start justify-around flex-wrap 
 sm:grid sm:grid-cols-2 
      "
    >
      <article className="flex flex-col  text-start p-4 sm:p-6 sm:text-4xl sm:gap-3  ">
        <motion.p
          className="mt-[6rem]  sm:text-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          HELLO, I'm{" "}
          <span
            className=" sm:text-7xl  bg-gradient-to-t from-white to-greenblue bg-clip-text text-transparent
"
          >
            Mireia
          </span>
          ,
        </motion.p>
        <motion.p
          className="mb-3 mt-2 text-xl  sm:text-2xl font-antonio sm:text-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          and this a showcase of my
        </motion.p>
        <motion.p
          className="mb-2 mt-2 text-xlfont-antonio sm:text-end           "
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
          className="flex justify-center sm:justify-end"
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
        className="flex flex-col p-4 gap-4 sm:h-full  tracking-wider sm:mb-[21rem] justify-end font-medium items-end sm:items-start sm:gap-6 sm:justify-end"
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
            className="bg-greenblue bg-opacity-60 text-font text-2xl border-2 border-font border-opacity-60 flex 
            focus:scale-[1.15] hover:scale-[1.15] hover:text-greenblue hover:bg-font hover:border-greenblue  rounded-full
                      cursor-pointer  border-black/10 w-10 h-10 items-center justify-center"
          >
            <BsGithub />
          </a>
        </div>
      </motion.article>

      <div className="relative mt-18 sm:mb-[0rem]">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100vw"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#000000"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Intro;

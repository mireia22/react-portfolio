import { motion } from "framer-motion";
import { ImLinkedin2 } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { useSectionInView } from "../../Hooks/Hooks";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionInView(null);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[40rem] text-center sm:mb-0 scroll-mt-[100rem] z-[998] mt-20  flex items-center justify-around flex-wrap gap-8"
    >
      <article className="flex flex-col items-center ">
        <motion.p
          className="mt-8 px-4 text-xl font-normal !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          Hello, I'm Mireia,
        </motion.p>
        <motion.p
          className="mb-6 mt-2 text-xl font-normal !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          and this a showcase of my web development journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="bg-black rounded-full  bg-opacity-20 py-5"
        >
          <img
            className=" w-[200px] shadow-xs"
            src="/assets/images/my-photo.png"
            alt="Mireia portrait"
            loading="lazy"
          />
        </motion.div>
      </article>

      <motion.article
        className="flex flex-col sm:flex-row gap-5 justify-center mt-4 font-medium items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="#contact"
          className=" font-bold group bg-font text-black px-2 py-1 flex border-2 border-purple-light border-opacity-50
          items-center  gap-2 rounded outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <GrContact className="text-white group-hover:translate-x-1 transition" />
        </a>
        <a
          className=" font-bold group  bg-font text-black px-2 py-1 flex border-2 border-purple-light border-opacity-40
            items-center  gap-2 rounded outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
          href="/CV-mireia-garcia.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/"
            target="_blank"
            className="bg-purple-medium bg-opacity-40 text-font border-2 border-font border-opacity-20 p-1 flex rounded-full
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition
                      cursor-pointer  border-black/10 w-10 h-10 items-center justify-center"
          >
            <ImLinkedin2 />
          </a>
          <a
            href="https://github.com/mireia22"
            target="_blank"
            className="bg-purple-medium bg-opacity-40 text-font text-2xl border-2 border-font border-opacity-20 flex 
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition rounded-full
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

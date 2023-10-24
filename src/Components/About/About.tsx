import SectionHeading from "../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../Hooks/Hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className=" text-center w-full bg-stars-pattern items-center leading-8 scroll-mt-[2rem] sm:scroll-mt-[12rem] z-100 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3 ">
        I'm a junior{" "}
        <span className=" font-bold text-purple-light">
          Frontend Developer{" "}
        </span>
        with a burning desire to expand my horizons and become a Full-Stack
        Developer.{" "}
      </p>
      <p>💡</p>

      <p>
        As someone{" "}
        <span className=" font-bold text-purple-light">open-minded</span> and
        actively curious, I thrive on embracing diversity and absorbing new
        cultures and perspectives.
      </p>
      <p>🌱</p>
      <p>
        My{" "}
        <span className=" font-bold text-purple-light">
          professional objective
        </span>{" "}
        is to continuously evolve as a developer, learn from experienced
        professionals, and contribute to the success of challenging projects.
      </p>
    </motion.section>
  );
};

export default About;

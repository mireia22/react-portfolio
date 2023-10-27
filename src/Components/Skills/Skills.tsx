import SectionHeading from "../SectionHeading/SectionHeading";
import { useSectionInView } from "../../Hooks/Hooks";
import { SKILLS_DATA } from "../../data/data";
import { motion } from "framer-motion";
import WaveDivider from "../SectionDivider/WaveDivider";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (subIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * subIndex,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="   bg-hero-pattern bg-greenblue bg-fixed min-w-full bg-opacity-40 sm:scroll-mt-[8rem] "
    >
      <WaveDivider before />
      <SectionHeading>Skills</SectionHeading>

      {SKILLS_DATA.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col p-3 mb-5 text-center items-center "
        >
          <h1 className="text-xl mb-3 uppercase tracking-widest font-semibold">
            {skill.name}
          </h1>
          <ul
            className={`flex flex-wrap justify-center gap-8 sm:w-[30rem] p-4 ${
              index === SKILLS_DATA.length - 1 ? "opacity-70" : ""
            }`}
          >
            {skill.skills.map((subSkill, subIndex) => (
              <motion.li
                key={subIndex}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="items-center text-center justify-center flex flex-col gap-1 "
                custom={subIndex}
              >
                <h3 className="mb-1">{subSkill.name}</h3>
                <div className="w-12 h-12">
                  <img
                    src={subSkill.icon}
                    alt={subSkill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
      <WaveDivider before={false} />
    </section>
  );
};

export default Skills;

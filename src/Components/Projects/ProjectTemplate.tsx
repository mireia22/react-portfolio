import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../../data/data";
import { useRef } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

type ProjectProps = (typeof PROJECTS)[number];

const ProjectTemplate = ({
  title,
  description,
  tools,
  preview,
  code,
  app,
}: ProjectProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.li
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="flex flex-col gap-8 items-center text-center bg-black border-purple-dark cursor-pointer border-6 border-opacity-30 border-4 rounded-md p-4 w-100 h-100 
     group  sm:w-[35rem] sm:h-[18rem] sm:flex-row sm:justify-between sm:gap-8 sm:px-8 sm:py-0"
    >
      <article
        className="flex flex-col  d
        gap-6  items-center text-center max-w-[20rem]  "
      >
        <div>
          <h2 className="text-xl font-bold mb-2 text-font group-hover:scale-110 transition">
            {title.toUpperCase()}
          </h2>
          <p className="text-sm leading-8 sm:text-start ">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2 justify-center ">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="bg-greenblue text-gray-50 tracking-widest p-2 bg-opacity-70 rounded-lg font-semibold uppercase text-xs"
            >
              {tool}
            </li>
          ))}
        </ul>
      </article>

      <article className="flex flex-col   gap-4 items-center text-center ">
        <div className=" w-[10rem] rounded">
          <img
            src={preview}
            alt={title}
            className="  object-contain rounded  grayscale group-hover:grayscale-0 group-hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex gap-7">
          <a
            className="cursor-pointer flex gap-2 items-center text-center  hover:underline hover:text-greenblue"
            href={code}
          >
            <FaGithubSquare />
            Code
          </a>
          <a
            className="cursor-pointer flex gap-2 items-center text-center hover:underline hover:text-greenblue"
            href={app}
          >
            <AiFillEye />
            Visit
          </a>
        </div>
      </article>
    </motion.li>
  );
};

export default ProjectTemplate;

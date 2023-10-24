import { motion } from "framer-motion";
import { LINKS } from "../../data/data";
// import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
import { GiMountainCave } from "react-icons/gi";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const handleSetActiveSection = (section: any) => {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header
      className="z-[999] fixed left-1/2 -translate-x-1/2 w-full border-b-2 border-purple-light border-opacity-20
      text-sm bg-black bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] text-font    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full sm:text-base  "
    >
      <nav>
        <ul
          className="grid grid-cols-3 items-end gap-y-4 py-2
          sm:flex sm:flex-nowrap sm:gap-5 sm:px-8 sm:justify-between sm:items-end"
        >
          <a href="#home" className=" flex text-3xl justify-center">
            <GiMountainCave className="self-center" />
          </a>
          {LINKS.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative "
            >
              <a
                href={link.hash}
                onClick={() => handleSetActiveSection(link.name)}
                className="text-[0.8rem] flex items-center justify-center  tracking-widest "
              >
                {link.name.toUpperCase()}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-greenblue h-7  rounded-full w-[5.5rem] absolute -z-20 bg-opacity-50"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

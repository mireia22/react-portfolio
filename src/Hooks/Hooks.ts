import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "../Context/ActiveSectionContext";

import { LINKS } from "../data/data";

export type SectionName = (typeof LINKS)[number]["name"];

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);
  return { ref };
};

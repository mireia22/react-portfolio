import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-purple-light my-6 h-16 w-1 rounded-full  hidden sm:block bg-opacity-30 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;

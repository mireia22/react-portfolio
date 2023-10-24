import { useSectionInView } from "../../Hooks/Hooks";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-30 mb-10 bg-stars-pattern
    w-full text-center p-6
    "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-font mt-5">
        Please contact me directly at{" "}
        <a href="mailto:mireiagarciaferrer22@gmail.com" className="underline">
          mireiagarciaferrer22@gmail.com
        </a>{" "}
        or throught this form.
      </p>
      <form className="mt-10 flex flex-col items-center gap-4 sm:min-w-[60rem]">
        <input
          className="h-14 w-[22rem] rounded-lg  p-4 text-purple-dark "
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 w-[22rem] rounded-lg  p-4 text-purple-dark"
          placeholder="Your message"
          required
          maxLength={500}
        ></textarea>
        <button
          type="submit"
          className="group self-center flex items-center justify-center transition-all outline-none px-3 py-2 gap-2
           bg-gray-600  rounded-full text-white bg-greenblue
           
          
           hover:bg-white hover:text-greenblue  "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;

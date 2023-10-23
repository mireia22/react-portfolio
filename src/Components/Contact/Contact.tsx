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
      className="scroll-mt-28 mb-20
    sm:mb-28 w-[min(100%, 38rem)] text-center 
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
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-font -mt-5">
        Please contact me directly at
        <a href="mailto:mireiagarciaferrer22@gmail.com" className="underline">
          mireiagarciaferrer22@gmail.com
        </a>
        or throught this form.
      </p>
      <form
        className="mt-10 flex flex-col gap-4"
        action={(formData) => {
          console.log(FormData);
        }}
      >
        <input
          className="h-14 rounded-lg border-black p-4 text-purple-dark "
          type="email"
          required
          placeholder="Your email"
        />
        <textarea
          className="h-52 rounded-lg border-black p-4 text-purple-dark"
          placeholder="Your message"
          required
          maxLength={500}
        ></textarea>
        <button
          type="submit"
          className="group self-center flex items-center justify-center transition-all outline-none h-[3rem] w-[6rem]
           bg-gray-600 p-3 rounded-full text-white
           
           focus:scale-110 
           hover:bg-gray-900  00 hover:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;

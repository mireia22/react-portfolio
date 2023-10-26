import { useSectionInView } from "../../Hooks/Hooks";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [message, setMessage] = useState<string | null>(null);

  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const USER_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${SERVICE_KEY}`,
          `${TEMPLATE_KEY}`,
          form.current,
          `${USER_KEY}`
        )
        .then(
          (result) => {
            setMessage("Message sent");
            console.log(result.text);
            console.log("message sent");
            clearForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    const clearForm = () => {
      form.current && form.current.reset();
    };
  };

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

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 flex flex-col items-center gap-4 sm:min-w-[60rem]"
      >
        <input
          type="text"
          name="user_name"
          required
          maxLength={500}
          placeholder="Your Name"
          className="h-12 w-[20rem] rounded-lg  p-4 text-purple-dark"
        />
        <input
          type="email"
          name="user_email"
          required
          maxLength={500}
          placeholder="Your Email"
          className="h-12 w-[20rem] rounded-lg  p-4 text-purple-dark "
        />
        <textarea
          name="message"
          className="h-52 w-[20rem] rounded-lg  p-4 text-purple-dark"
          placeholder="Your Message"
          required
          maxLength={500}
        />
        {message && (
          <div className="bg-greenblue bg-opacity-50 p-2 w-[10rem] rounded-lg flex items-center text-center justify-center gap-1 text-font">
            <p>{message}</p>
            <GoCheckCircleFill />
          </div>
        )}
        <button
          type="submit"
          value="Send"
          className="group self-center flex items-center justify-center transition-all outline-none px-3 py-2 gap-2
           bg-gray-600  rounded-full text-white bg-greenblue
           hover:bg-white hover:text-greenblue  "
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const headerVariant = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.8 } },
};
const formVariant = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const Contact = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [loader, setLoader] = useState(false);
  const [submitValue, setSubmitValue] = useState("Let's Talk");
  const [submitBg, setSubmitBg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_j9rxxmk",
        "template_e2z53km",
        form.current,
        "V8z9nQohXTgizYNnf"
      )
      .then(
        (result) => {
          setLoader(false);
          console.log(result.text);
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          setSubmitValue("Sent Successfully");
          setSubmitBg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      name="contact"
      className=" w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-40 pb-20">
      <div className="container mx-auto">
        <div className="p-10">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}>
            <motion.h1
              variants={headerVariant}
              className="text-4xl border-b-4 mb-10 border-gray-500 inline-block text-white">
              Contact
            </motion.h1>
            <motion.p
              variants={headerVariant}
              className=" text-gray-500 text-xl mb-10">
              Feel free to ask if you have any questions.
            </motion.p>
          </motion.div>

          <div className=" flex justify-center items-center py-10">
            <motion.form
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.5 }}
              variants={formVariant}
              action=""
              ref={form}
              onSubmit={sendEmail}
              className=" w-96">
              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="email"
                  name="user_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  ref={emailRef}
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="user_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  ref={nameRef}
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  name="message"
                  id="floating_textarea"
                  className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  rows={10}
                  required
                  ref={messageRef}></textarea>
                <label
                  htmlFor="floating_textarea"
                  className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>
              <button
                type="submit"
                className={` text-white ${
                  submitBg
                    ? " bg-green-400"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500"
                }  py-3 px-8 rounded-md ${submitBg ? "" : "cursor-pointer"}`}
                disabled={submitBg}>{`${
                loader ? "Sending . . ." : submitValue
              } `}</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

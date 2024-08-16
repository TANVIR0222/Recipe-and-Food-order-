import { Textarea } from "flowbite-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
const About = () => {
    const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // setError(false);
        // setSuccess(false);
    
        // // emailjs.sendForm(
        // //     process.env.NEXT_PUBLIC_SURVICE_ID,
        // //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
        // //     form.current,
        // //     process.env.NEXT_PUBLIC_PUBLIC_KEY
        // //   )
        //   .then(
        //     () => {
        //       setSuccess(true);
        //       form.current.reset();
        //     },
        //     () => {
        //       setError(true);
        //     }
        //   );
      };
    return (
        <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className=" text-black h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-6xl flex items-center justify-center ">
          <div>
            {text.split("").map((letter, index) => (
              <motion.samp
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.samp>
            ))}
            😊
          </div>
        </div>
        {/* From container */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          >
            <span>Tanvir Islam Dev,</span>
            <Textarea
              rows={6}
              placeholder="Enter Your Massage"
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
            />
            <span>My mail address is:</span>
            <Textarea
              name="user_email"
              type="text"
              placeholder="Enter Your Email"
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
      </div>
    </motion.div>
    );
};

export default About;
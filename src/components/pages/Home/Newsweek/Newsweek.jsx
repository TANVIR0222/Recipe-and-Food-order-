import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Newsweek = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm("service_mxdjlru", "template_ry023r8", form.current, {
        publicKey: "QcGEu9QKfFP48mKbT",
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          
        },
        () => {
          setError(true);
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank You",
        showConfirmButton: false,
        timer: 1500,
      });
  };
  return (
    <div className="text-center  my-20">
      <div>
        <h1 className="text-xl md:text-3xl my-8 text-black">Sing up for my weekly newsletter!</h1>
        <p className="text-gray-500 my-4">
          Weekly email with my latest recipe cooking tips and tricks and product
          recommendations! <br /> You'll be set up in minutes
        </p>
      </div>
      <div className="flex items-center justify-center">
        <form
        onSubmit={sendEmail}
        ref={form}
         className=" mx-4 grid-cols-1">
          <input
            className="w-80 my-3 md:w-96 text-black mx-2 h-16 rounded-md   bg-slate-100 "
            type="text"
            name="user_message"
            placeholder="Name"
            required
            color="gray"
          />
          <input
            className="w-80 my-3 md:w-96 mx-2 h-16 rounded-md  bg-slate-100"
            type="email"
            name="user_email"
            placeholder="Email"
            required
            color="gray"
          />
          {/* <button className="bg-blue-600 border-black border-1 text-white p-4 rounded-md"></button> */}
          <button className="bg-[#399918] text-white px-2 p-4  rounded hover:rounded-full">Get Started</button>
          {success && ''}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
        </form>
        
      </div>
    </div>
  );
};

export default Newsweek;

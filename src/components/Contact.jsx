import { useState, useRef } from "react";
import SectionHeading from "./SectionHeading"; // Ensure this exists
import img5 from './calendly.png'

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value.trim() ||
      !emailRef.current.value.trim() ||
      !messageRef.current.value.trim()
    ) {
      nameRef.current.focus();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      // clear inputs manually since refs are uncontrolled
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";

      setTimeout(() => setSent(false), 3000); // hide after 3s
    }, 900);
  };

  return (
    <section id="contact" className="scroll-mt-10 px-6 md:px-20 py-16 bg-[#00303C]  ">
      <div className="flex-col md:flex md:flex-row justify-between max-full text-[#ffff] " >
       
        <div className="mt-10 space-y-2">
          <h1 className="font-bold text-3xl text-center md:text-start">Ready to Grow Your Business Online?</h1>
          <p className="text-sm opacity-70 font-extralight text-center md:text-start"> Let’s build a digital strategy that works for you.</p>
        </div>

       <div className="bg-[#00303C] p-8 items-center justify-center flex ">
               <button className="border border-[#00303C] bg-[#C6FD07] px-5 py-2 rounded-full font-semibold flex flex-row justify-center items-center gap-3 shadow-lg text-sm text-[#00303C] hover:scale-[1.02] transition">
                 <img className="h-5" src={img5} alt="" />
                 Book a Free Discovery Call
               </button>
             </div>
      </div>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 md:mt-8 bg-[#00303C] p-8 rounded-2xl shadow-lg  border-1 border-[#C6FF00]"
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border text-[#ffff] border-gray-300 e"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border border-gray-300 text-[#ffff] "
        />
        <textarea
          ref={messageRef}
          placeholder="Message"
          className="p-4 rounded-lg border border-gray-300 text-[#ffff]  md:col-span-2 h-32 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-[#C6FF00]  text-[#00303C] px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <p className="md:col-span-2 text-green-600 font-medium text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

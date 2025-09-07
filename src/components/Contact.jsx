import { useState, useRef } from "react";
import SectionHeading from "./SectionHeading"; // Ensure this exists

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    ) {
      nameRef.current.focus();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 3000); // hide message after 3s
    }, 900);
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
      <SectionHeading
        title="Get in Touch"
        subtitle="We’d love to hear about your project!"
      />

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-white p-8 rounded-2xl shadow-lg border"
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6FF00] focus:outline-none"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6FF00] focus:outline-none"
        />
        <textarea
          ref={messageRef}
          placeholder="Message"
          className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6FF00] focus:outline-none md:col-span-2 h-32 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-[#C6FF00] text-[#00303C] px-6 py-3 rounded-full font-semibold hover:scale-[1.05] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <p className="md:col-span-2 text-green-600 font-medium text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

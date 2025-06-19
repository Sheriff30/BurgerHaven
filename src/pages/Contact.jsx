import React from "react";
import Contact from "../ui/Contact";

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <div>
      <div
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#002347]/30"></div>
        <div className="container mx-auto py-15 px-4 relative z-10">
          <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 text-white">
            CONTACT BURGER HAVEN
          </h1>

          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-8 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="block text-lg uppercase tracking-wider text-[#002347]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-[#002347] text-[#002347] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="block text-lg uppercase tracking-wider text-[#002347]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-[#002347] text-[#002347] placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-lg uppercase tracking-wider text-[#002347]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-[#002347] text-[#002347] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-lg uppercase tracking-wider text-[#002347]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-[#002347] text-[#002347] placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-lg uppercase tracking-wider text-[#002347]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:border-[#002347] text-[#002347] placeholder-gray-400 resize-none"
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to be contacted by Burger Haven via the provided
                    mobile number and email. I have read and agree to the Burger
                    Haven terms and privacy policy.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#002347] text-white px-6 py-3 text-xl uppercase tracking-wider hover:bg-opacity-90 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

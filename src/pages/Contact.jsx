import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import CategoryHero from "../components/CategoryHero";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* HERO (UNCHANGED) */}
      <CategoryHero
        title="Contact Us"
        description="We are here to help you 24/7. Feel free to reach out for any questions or support."
        route="Home / Contact"
      />

      {/* CONTACT SECTION */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">

          {/* HEADING */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get in touch
            </h2>
            <p className="text-gray-600 mt-3">
              Feel free to reach out to us directly through our contact form below. We’ll get back to you as soon as possible.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm text-gray-700">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-sm text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-700">Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition w-full sm:w-auto"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}
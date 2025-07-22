import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import { useState } from "react";
import { usePostContactMutation } from "../api/webApiSlice";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [postContact] = usePostContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postContact(formData).unwrap();
      setFormData({ name: "", email: "", message: "" });
      // Optionally, show a success toast or message
    } catch (error) {
      console.error("Error sending message", error);
      // Optionally, show an error toast or message
    }
  };
  return (
    <PageWrapper
      title="Contact Me"
      description="Feel free to reach out for collaborations or just a friendly hello 👋"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-lg border border-gray-700 shadow-lg">
            <FaEnvelope className="text-yellow-500 w-6 h-6" />
            <span className="text-gray-200 text-sm">
              sachinnimshan@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-lg border border-gray-700 shadow-lg">
            <FaPhoneAlt className="text-yellow-500 w-6 h-6" />
            <span className="text-gray-200 text-sm">+94 77 9012 655</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/60 p-5 rounded-lg border border-gray-700 shadow-lg">
            <FaMapMarkerAlt className="text-yellow-500 w-6 h-6" />
            <span className="text-gray-200 text-sm">Walasmulla, Sri Lanka</span>
          </div>

          <div className="flex gap-6 mt-6  justify-center">
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener"
              title="GitHub Profile"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-yellow-500 hover:text-yellow-300 transition"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/60 p-6 rounded-lg border border-gray-700 shadow-lg"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none"
              rows={5}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Contact;

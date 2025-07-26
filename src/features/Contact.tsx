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
      description="Feel free to reach out for collaborations or just a friendly hello"
      background="bg-triangle-bg bg-no-repeat bg-cover bg-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg shadow-lg text-base text-secondaryTextColor font-medium">
            <FaEnvelope className="text-secondaryTextColor w-6 h-6" />
            <span>sachinnimshan@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg border shadow-lg text-base text-secondaryTextColor font-medium">
            <FaPhoneAlt className="text-secondaryTextColor w-6 h-6" />
            <span>+94 77 9012 655</span>
          </div>
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg shadow-lg text-base text-secondaryTextColor font-medium">
            <FaMapMarkerAlt className="text-secondaryTextColor w-6 h-6" />
            <span>Walasmulla, Sri Lanka</span>
          </div>

          <div className="flex gap-6 mt-6  justify-center">
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-primaryTextColor hover:text-secondaryColor transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener"
              title="GitHub Profile"
              className="text-primaryTextColor hover:text-secondaryColor transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-primaryTextColor hover:text-secondaryColor transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sachin-nimshan"
              target="_blank"
              rel="noopener"
              title="LinkedIn Profile"
              className="text-primaryTextColor hover:text-secondaryColor transition"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-primaryWhiteColor p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
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
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
              rows={5}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-secondaryColor text-primaryWhiteColor font-semibold py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Contact;

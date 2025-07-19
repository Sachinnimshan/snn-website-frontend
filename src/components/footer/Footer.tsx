import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Sachin Nimshan";

  return (
    <footer
      aria-label="Footer"
      className="bg-black/50 text-yellow-400 text-center py-4 select-none text-sm font-small"
    >
      <div className="flex items-center justify-center gap-2">
        <AiOutlineCopyright size={16} />
        <span className="text-gray-400">{currentYear}</span>
        <span className="font-signature">{name}</span>
        <span className="text-gray-400">All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

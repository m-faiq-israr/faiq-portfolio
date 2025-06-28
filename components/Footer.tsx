import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 relative overflow-hidden" id="contact">
      {/* background grid */}
      <div className="absolute inset-0 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* centered content */}
      <div className="relative flex flex-col items-center text-center z-10 px-4">
        <h1 className="text-white font-bold text-5xl md:text-[4rem] text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-6 mb-8 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mfaiqisrar@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* bottom footer */}
      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center px-4 gap-4">
        <p className="md:text-lg text-sm text-white text-center">
          Copyright © 2025 Muhammad Faiq Israr
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "#0A0F19CC",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <img src={info.img} alt={info.name || "icon"} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

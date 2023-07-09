import React from "react";
import SocialMediaIcons from "./socialMediaIcons";

const Footer: React.FC = () => {
  return (
    <footer className="px-10 lg:px-40 pt-20 lg:py-16">
      <div className="lg:flex lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-wide">FEYZ IBRAHIM</h3>
          <p className="py-6 leading-6 text-gray-600 max-w-lg">
            Freelancer providing services for programming and design content
            needs. Web and Mobile App developer and Unity Game Developer...
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-5 tracking-wide">SOCIAL</h3>
          <div className="text-2xl flex gap-5">
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      {/* Line between footer and copy rights */}

      <div className="w-full border-b border-cyan-400 my-10"></div>

      {/* Copy rights and Creator details*/}

      <div className="text-center pb-10">
        <p>Copyright 2023</p>
        <p className="my-2">...</p>
        <p>Made with ❤️ by Feyz Ibrahim</p>
      </div>
    </footer>
  );
};

export default Footer;

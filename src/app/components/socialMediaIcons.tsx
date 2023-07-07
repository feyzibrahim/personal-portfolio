import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const SocialMediaIcons: React.FC = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/feyz-ibrahim-861883194/"
        target="_blank"
      >
        <AiFillLinkedin className="icon-style" />
      </a>
      <a href="https://twitter.com/fe_y_z_" target="_blank">
        <AiFillTwitterCircle className="icon-style" />
      </a>
      <a
        href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
        target="_blank"
      >
        <AiFillYoutube className="icon-style" />
      </a>
      <a href="https://github.com/feyzibrahim" target="_blank">
        <AiFillGithub className="icon-style" />
      </a>
      <a href="https://www.instagram.com/fe_y_z_" target="_blank">
        <AiFillInstagram className="icon-style" />
      </a>
    </>
  );
};

export default SocialMediaIcons;

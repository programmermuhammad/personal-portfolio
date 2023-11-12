import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://x.com/shexmuhammad9?s=21&t=MzAxkAHfBH25cYEMWH2yiQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/hama.lawlaw.39/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://instagram.com/_shex_muhamad_khaylani_?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

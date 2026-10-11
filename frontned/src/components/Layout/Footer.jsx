import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
     <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Dhananjay Mallik.</div>
      <div>
        <Link to={"https://www.youtube.com/@dhananjaymallik4451"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/dhananjay-mallik-72a1a62a3/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/mallikdhananjay884?igsh=dWN6OG1ueHRiZjFu"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  )
}

export default Footer

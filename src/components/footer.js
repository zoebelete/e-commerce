import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <p>copyright @2021</p>
      <div className="social">
        <FacebookIcon className="fa" />
        <InstagramIcon className="fa" />
      </div>
    </div>
  );
}

export default Footer;

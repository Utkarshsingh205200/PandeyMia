import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footers container-fluid">
        <div className="container FooterBox">
          <p className="Courses">PandeyMia</p>
          <div className="FooterText">
            <p className="footex">
              <span><i className="fa icon fa-address-card"></i></span>Saurabh Pandey<br/>
              <span><i className="fa icon fa-mail-reply-all"></i></span>pandey.saurabh@magicedtech.com<br/>
              <span><i className="fa icon fa-phone"></i></span>9305648704<br/>
              <span><i className="fa icon fa-location-arrow"></i></span>Magic Softwares,Sector 124, Noida <br/>
            </p>
            <p className="footmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.443769521336!2d77.32203751802443!3d28.548078039299558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1467fba80a66854b%3A0x1dea2cd1588dec7d!2sMagic%20Software!5e0!3m2!1sen!2sin!4v1687239772326!5m2!1sen!2sin"
                width="400"
                height="250"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

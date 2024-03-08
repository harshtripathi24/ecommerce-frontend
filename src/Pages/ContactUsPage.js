import React, { useEffect } from "react";

import { useGlobalContext } from "../Utilities/Context/Context";

import "./ContactUsPage.css";

const ContactInfo = {
  Email1: "contact@example.com",
  Email2: "support@example.com",
  contactNo1: "9981438324",
  contactNo2: "9981438364",
  contactAddress: " 2nd Floor - Murli Vihar Colony, Mumbai (Mahrashtra)",
  countryCode: "+91-",
};

const ContactUsPage = () => {
  const { closeNav } = useGlobalContext();

  useEffect(() => {
    closeNav();
  }, []);

  return (
    <>
      <div className="contactPageMain">
        <div className="contactDiv">
          <div className="leftSection">
            <h4 className="label">Email us on:</h4>

            <p className="info">
              <a className="info" href={`mailto:${ContactInfo.Email1}`}>
                {ContactInfo.Email1}
              </a>
              <br />
              <a className="info" href={`mailto:${ContactInfo.Email2}`}>
                {ContactInfo.Email2}
              </a>
            </p>
            <h4 className="label">Call us on:</h4>
            <p className="info">
              <a
                className="info"
                href={`tel:+${ContactInfo.countryCode}${ContactInfo.contactNo1}`}
              >
                {ContactInfo.countryCode}
                {ContactInfo.contactNo1}
              </a>
              <br />
              <a
                className="info"
                href={`tel:+${ContactInfo.countryCode}${ContactInfo.contactNo2}`}
              >
                {ContactInfo.countryCode}
                {ContactInfo.contactNo2}
              </a>
            </p>

            <h4 className="label">Visit us:</h4>

            <p className="info">{ContactInfo.contactAddress}</p>
          </div>
          <div className="rightSection">
            <div className="mapDiv">
              <iframe
                title="myMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.453872042153!2d72.86973389999999!3d19.11364465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1709706129910!5m2!1sen!2sin"
                width="600"
                height="450"
                className="myMap"
                // style="border:0;"
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;

import logo from "../../Utilities/Images/header-logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="max-width mainFooter">
        <div className="addressSection">
          <img src={logo} alt="" />
          <div className="intro">
            We are a team of designers and developers who creates high quality
            premium Shopify themes.
          </div>

          <div className="address">
            <span className="infoHeading">Address : </span>{" "}
            <span className="infoText">169-C, Technohub, Dubai</span>
          </div>
          <div className="phone">
            <span className="infoHeading">Phone : </span>{" "}
            <span className="infoText">+1 800 1236879</span>
          </div>
          <div className="email">
            <span className="infoHeading">Email : </span>
            <span className="infoText">support@hello.com</span>
          </div>
        </div>

        <div className="menus">
          <div className="mainMenu">
            <div className="menu">Main Menu</div>
            <div className="menuItems">
              <div>Home</div>
              <div>Catalog</div>
              <div>Specials</div>
              <div>Pages</div>
              <div>Product Pages</div>
            </div>
          </div>

          <div className="mainMenu">
            <div className="menu">Other Links</div>
            <div className="menuItems">
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
              <div>Something</div>
              <div>Something</div>
              <div>Something</div>
            </div>
          </div>
        </div>

        <div className="newsLetter">
          <div className="menu">Newsletter</div>
          <div className="joinNewsLetter">
            <input
              className="joinNewsLetterInput"
              type="text"
              placeholder="Enter Your Email Here"
            />
            <button className="joinNewsLetterButton">Subscribe</button>
          </div>

          <div className="stayConnected">
            <div className="stayConnectedText menu">Stay Connected</div>

            <div className="socialMediaIcons">
              <InstagramIcon
                className="socialMediaIcon"
                fontSize={window.innerWidth < 768 ? "medium" : "large"}
              />
              <TwitterIcon
                className="socialMediaIcon"
                fontSize={window.innerWidth < 768 ? "medium" : "large"}
              />
              <EmailIcon
                className="socialMediaIcon"
                fontSize={window.innerWidth < 768 ? "medium" : "large"}
              />
              <FacebookIcon
                className="socialMediaIcon"
                fontSize={window.innerWidth < 768 ? "medium" : "large"}
              />
              <PinterestIcon
                className="socialMediaIcon"
                fontSize={window.innerWidth < 768 ? "medium" : "large"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lowerFooter">
        Copyright © 2019 MassTechnologist.Com. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;

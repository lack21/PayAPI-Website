import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/logo.svg";
import lightLogoImage from "../assets/logo-light.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { useState } from "react";

function Layout() {
  const [isLinksActive, setIsLinksActive] = useState(false);

  function ToggleLinks() {
    setIsLinksActive((isLinksActive) => !isLinksActive);
    console.log(isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/PayAPI-Website">
          <img
            src={isLinksActive ? lightLogoImage : logoImage}
            alt="logo"
            className={`logo ${isLinksActive ? "active" : ""}`}
          />
        </Link>
        <div className={`links ${isLinksActive ? "active" : ""}`}>
          <Link to="pricing" className="link" onClick={ToggleLinks}>
            Pricing
          </Link>
          <Link to="about" className="link" onClick={ToggleLinks}>
            About
          </Link>
          <Link to="contact" className="link" onClick={ToggleLinks}>
            Contact
          </Link>
        </div>
        <Link to="contact" className="btn">
          Schedule a Demo
        </Link>
        <img
          src={isLinksActive ? closeIcon : menuIcon}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLinks}
        />
      </nav>

      <Outlet />

      <section className="bottom-content">
        <h2 className="heading">Ready to start?</h2>
        <form className="form">
          <input type="email" name="email" placeholder="Enter email address" />
          <Link to="/PayAPI-Website" className="btn">
            Schedule a Demo
          </Link>
        </form>
      </section>

      <footer className="footer">
        <Link to="/PayAPI-Website">
          <img src={lightLogoImage} alt="logo" className="logo" />
        </Link>
        <div className="footer-links">
          <Link to="pricing" className="link">
            Pricing
          </Link>
          <Link to="about" className="link">
            About
          </Link>
          <Link to="contact" className="link">
            Contact
          </Link>
        </div>
        <div className="social-icons">
          <img src={facebookIcon} alt="facebook-icon" />
          <img src={twitterIcon} alt="twitter-icon" />
          <img src={linkedinIcon} alt="linkedin-icon" />
        </div>
      </footer>
    </>
  );
}

export default Layout;

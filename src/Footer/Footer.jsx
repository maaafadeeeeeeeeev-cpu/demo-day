import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./Footer.css";

 function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <span className="logo-icon">✳</span>
          <span className="logo-text">YourBank</span>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">About</a>
          <a href="#">Security</a>
        </nav>
      </div>

      <div className="footer-middle">
        <div className="contact-item">
          <MdEmail />
          <span>hello@skillbridge.com</span>
        </div>
        <div className="contact-item">
          <MdPhone />
          <span>+91 91813 23 2309</span>
        </div>
        <div className="contact-item">
          <MdLocationOn />
          <span>Somewhere in the World</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        <p className="copyright">
          YourBank All Rights Reserved
        </p>

        <div className="legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
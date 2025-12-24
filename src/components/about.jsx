import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Welcome to YourBank
              <br />
              <span>Empowering Your Financial Journey</span>
            </h1>
            <p>
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers' needs.
            </p>
          </div>
          <div className="hero-image">
            <img
              src="https://img.freepik.com/free-photo/business-people-discussing-finances_23-2147655035.jpg"
              alt="Financial consultation"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="section-header">
            <h2>Mission & Vision</h2>
            <p>
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              strong commitment to customer satisfaction and community
              development.
            </p>
          </div>

          <div className="mv-cards">
            {/* Mission Card - белая */}
            <div className="card mission-card">
              <img
                src="https://img.freepik.com/free-vector/finance-growth-concept-illustration_114360-1688.jpg"
                alt="Financial growth"
              />
            </div>

            {/* Vision Card - тёмная с фоном */}
            <div className="card vision-card">
              <div className="vision-bg">
                <img
                  src="https://img.freepik.com/free-photo/abstract-digital-grid-background-with-glowing-particles_587448-4293.jpg"
                  alt="Future vision"
                />
                <div className="overlay"></div>
              </div>
              <div className="vision-text">
                <h3>Vision</h3>
                <p>
                  Our vision at YourBank is to redefine banking by creating a
                  seamless and personalized experience for our customers. We
                  strive to be the most trusted and innovative financial
                  partner, delivering unparalleled performance. Through
                  continuous innovation and collaboration, we strive to be at
                  the forefront of the industry, setting new standards for
                  excellence and integrity. Our goal is to create a better
                  financial institution known for our unwavering commitment to
                  excellence, trust, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="press">
        <div className="container">
          <h2>Press Releases</h2>
          <p className="section-desc">
            Stay updated with the latest happenings and exciting developments at
            YourBank through our press releases.
          </p>

          <div className="press-grid">
            <div className="press-card">
              <img
                src="https://img.freepik.com/free-photo/business-partners-handshake_53876-117510.jpg"
                alt="Rewards"
              />
              <div className="press-content">
                <h4>YourBank Launches New Rewards Program...</h4>
                <p className="meta">Location: India | Date: 13/12/2024</p>
                <p>
                  YourBank is pleased to announce the introduction of a new
                  Rewards Program...
                </p>
              </div>
            </div>

            <div className="press-card">
              <img
                src="https://img.freepik.com/free-photo/modern-office-building-close-up_1232-1078.jpg"
                alt="Branch"
              />
              <div className="press-content">
                <h4>YourBank Expands Branch Network...</h4>
                <p className="meta">Location: India | Date: 12/12/2024</p>
                <p>
                  YourBank is excited to announce the grand opening of our
                  newest branch...
                </p>
              </div>
            </div>

            <div className="press-card">
              <img
                src="https://img.freepik.com/free-photo/close-up-business-people-shaking-hands_23-2147895279.jpg"
                alt="Nonprofit"
              />
              <div className="press-content">
                <h4>YourBank Partners with Local Nonprofit...</h4>
                <p className="meta">Location: India | Date: 24/12/2024</p>
                <p>
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative...
                </p>
              </div>
            </div>

            <div className="press-card">
              <img
                src="https://img.freepik.com/free-photo/person-holding-tablet-with-world-map_23-2147895280.jpg"
                alt="Sustainable"
              />
              <div className="press-content">
                <h4>YourBank Launches Sustainable Banking Initiative...</h4>
                <p className="meta">Location: India | Date: 28/12/2024</p>
                <p>
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo-circle">YB</div>
            <span>YourBank</span>
          </div>

          <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#">Careers</a>
            <a href="#">About</a>
            <a href="#">Security</a>
          </nav>

          <div className="social">
            <a href="#">✉️</a>
            <a href="#">💬</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
          </div>

          <div className="footer-bottom">
            <p>
              support@yourbank.com | +91 91813 23 2309 | Somewhere in the World
            </p>
            <p>YourBank All Rights Reserved</p>
            <p>
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;

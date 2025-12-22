import React from "react";
import "./Idk.css";

function Idk() {
  return (
    <>
      <div className="global">
        <div className="idk-1">
          <h1>
            Welcome to Yourbankbr <br /> <span></span>Empowering Your Financial
            Journey
          </h1>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower <br /> individuals and businesses to achieve
            their financial goals. We are committed to delivering <br />
            personalized and innovative services that prioritize our customers'
            needs.
          </p>
        </div>
        <div className="forphoto">
          <img src="/okak.png" alt="" />
        </div>
      </div>

      <div className="values">
        <h1>
          Our <span>Values</span>
        </h1>

        <p>
          At YourBank, our values form the foundation of our organization and
          guide our actions. <br /> We believe in upholding the highest
          standards of integrity, br delivering exceptional service, <br /> and
          embracing innovation. These values define our culture and shape the
          way we work together to achieve our goals.
        </p>
      </div>

      {/* Prodigy */}

      <div className="container">
        <div className="grid">
          <div className="card">
            <span className="line"></span>
            <div>
              <h2>Integrity</h2>
              <p>
                We conduct ourselves with utmost honesty, transparency, and
                ethical behavior. We believe in doing what is right for our
                customers, colleagues, and stakeholders.
              </p>
            </div>
          </div>

          <div className="card">
            <span className="line"></span>
            <div>
              <h2>Customer Centricity</h2>
              <p>
                Our customers are at the heart of everything we do. We are
                dedicated to understanding their needs and delivering
                exceptional service.
              </p>
            </div>
          </div>

          <div className="card">
            <span className="line"></span>
            <div>
              <h2>Collaboration</h2>
              <p>
                We foster a collaborative work environment where teamwork and
                diversity are celebrated.
              </p>
            </div>
          </div>

          <div className="card">
            <span className="line"></span>
            <div>
              <h2>Innovation</h2>
              <p>
                We embrace change and constantly seek innovative solutions to
                meet evolving customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Idk;

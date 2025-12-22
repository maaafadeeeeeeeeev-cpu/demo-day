import React from "react";
import "./Container.css";

function Container() {
  return (
    <>
      <div className="text-1">
        <h1>
          Our <span>Benefits</span>
        </h1>
        <p>
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to <br /> support their personal and professional growth.
        </p>
      </div>

      <div className="page">
        <div className="cards">
          <div className="card">
            <div className="icon">💻</div>
            <h3>Competitive Compensation</h3>
            <p>
              We provide a competitive salary package that recognizes the skills
              and expertise of our employees. YourBank believes in rewarding
              exceptional performance and offering opportunities for financial
              growth.
            </p>
          </div>

          <div className="card">
            <div className="icon">💡</div>
            <h3>Health and Wellness</h3>
            <p>
              We prioritize the health and well-being of our employees by
              providing comprehensive medical, dental, and vision insurance
              plans, wellness programs, and gym memberships.
            </p>
          </div>

          <div className="card">
            <div className="icon">💰</div>
            <h3>Retirement Planning</h3>
            <p>
              We offer a retirement savings plan with a generous employer match
              to help employees build a secure financial foundation for the
              future.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚖️</div>
            <h3>Work-Life Balance</h3>
            <p>
              Flexible work arrangements, paid time off, parental leave, and
              programs that help employees balance personal and professional
              life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;

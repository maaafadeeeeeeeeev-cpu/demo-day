import "./var.css";

function Var() {
  return (
    <div className="page">
      <div className="container">
        <h2 className="section-title">
          Job <span>Openings</span>
        </h2>
        <p className="section-subtitle">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service.
        </p>

        <div className="jobs">
          {/* Card 1 */}
          <div className="job-card">
            <h3>Relationship Manager</h3>
            <div className="job-meta">
              <span>Location: India</span>
              <span>Department: Retail Banking</span>
            </div>

            <h4>About This Job</h4>
            <p>
              You will be responsible for developing and maintaining
              relationships with clients, understanding their financial needs,
              and offering tailored solutions.
            </p>

            <h4>Requirements & Qualifications</h4>
            <ul>
              <li>Bachelor’s degree in Business or Finance</li>
              <li>3+ years experience in relationship management</li>
              <li>Strong communication and negotiation skills</li>
            </ul>

            <button>Apply Now</button>
          </div>

          {/* Card 2 */}
          <div className="job-card">
            <h3>Risk Analyst</h3>
            <div className="job-meta">
              <span>Location: India</span>
              <span>Department: Risk Management</span>
            </div>

            <h4>About This Job</h4>
            <p>
              Play a vital role in identifying and assessing potential risks,
              developing mitigation strategies, and ensuring compliance.
            </p>

            <h4>Requirements & Qualifications</h4>
            <ul>
              <li>Bachelor’s degree in Economics or Finance</li>
              <li>2+ years experience in risk analysis</li>
              <li>Strong analytical and problem-solving skills</li>
            </ul>

            <button>Apply Now</button>
          </div>

          {/* Card 3 */}
          <div className="job-card">
            <h3>IT Security Specialist</h3>
            <div className="job-meta">
              <span>Location: India</span>
              <span>Department: IT Security</span>
            </div>

            <h4>About This Job</h4>
            <p>
              Ensure the security and integrity of information systems, conduct
              vulnerability assessments, and respond to security incidents.
            </p>

            <h4>Requirements & Qualifications</h4>
            <ul>
              <li>Bachelor’s degree in Computer Science</li>
              <li>5+ years experience in IT security</li>
              <li>Knowledge of security frameworks and protocols</li>
            </ul>

            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Var;

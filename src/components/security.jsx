import React from 'react';
import './Security.css';

const Security = () => {
  return (
    <div className="security-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Your Security is Our <span className="highlight">Top Priority</span>
          </h1>
          <p>
            At YourBank, we understand the importance of keeping your financial information secure. 
            We employ robust security measures and advanced technologies to protect your personal and financial data. 
            Rest assured that when you bank with us, your security is our utmost priority.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://via.placeholder.com/600x400?text=Security+Shield" 
            alt="Security shield on phone" 
          />
        </div>
      </section>

      {/* How We Protect You */}
      <section className="protect-section">
        <h2>How We Protect You</h2>
        <p>
          At YourBank, we prioritize the security and confidentiality of your financial information. 
          Our state-of-the-art encryption technology and stringent data protection measures ensure your assets 
          and transactions are safeguarded at all times.
        </p>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure Online Banking Platform</h3>
          <p>
            Our online banking platform is built with multiple layers of security to 
            safeguard your information. We utilize industry-standard encryption protocols 
            to ensure that your data remains confidential and protected during transmission.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Multi-Factor Authentication</h3>
          <p>
            To enhance the security of your online banking experience, we employ 
            multi-factor authentication. This additional layer of security requires 
            you to provide multiple pieces of identification, such as a password and 
            a one-time verification code, to access your account.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🚨</div>
          <h3>Fraud Monitoring</h3>
          <p>
            We have sophisticated fraud detection systems in place to monitor your 
            accounts for any suspicious activities. Our dedicated team works around 
            the clock to detect and prevent unauthorized transactions, providing you 
            with peace of mind.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">📱</div>
          <h3>Secure Mobile Banking</h3>
          <p>
            Our mobile banking app is designed with the same level of security as 
            our online banking platform. You can confidently manage your finances on 
            the go, knowing that your information is protected.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-contact">
          Still have any questions? Contact our team via <a href="mailto:support@yourbank.com">support@yourbank.com</a>
        </p>

        <div className="faq-grid">
          <div className="faq-item">
            <h4>How do I open an account with YourBank?</h4>
            <p>
              Opening an account with YourBank is easy. Simply visit our website and click on 
              the "Open an Account" button. Follow the prompts, provide the required information, 
              and complete the application process. If you have any questions or need assistance, 
              our customer support team is available to help.
            </p>
          </div>

          <div className="faq-item">
            <h4>What documents do I need to provide to apply for a loan?</h4>
            <p>
              The documents required for a loan application may vary depending on the type of 
              loan you are applying for. Generally, you will need to provide identification 
              documents (such as a passport or driver's license), proof of income (such as pay 
              stubs or tax returns), and information about the collateral (if applicable). Our 
              loan officers will guide you through the specific requirements during the application process.
            </p>
          </div>

          <div className="faq-item">
            <h4>How can I access my accounts online?</h4>
            <p>
              Accessing your accounts online is simple and secure. Visit our website and click 
              on the "Login" button. Enter your username and password to access your accounts. 
              If you haven't registered for online banking, click on the "Enroll Now" button 
              and follow the registration process. If you need assistance, our customer support 
              team is available to guide you.
            </p>
          </div>

          <div className="faq-item">
            <h4>Are my transactions and personal information secure?</h4>
            <p>
              At YourBank, we prioritize the security of your transactions and personal information. 
              We employ industry-leading encryption and multi-factor authentication to ensure that 
              your data is protected. Additionally, we regularly monitor our systems for any potential 
              threats and maintain strict internal controls to safeguard your information. You can 
              bank with confidence knowing that we have robust security systems in place.
            </p>
          </div>
        </div>

        <a href="#" className="load-all-faq">Load All FAQ →</a>
      </section>
    </div>
  );
};

export default Security;
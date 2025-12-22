import "./lele.css";

function Lele() {
  return (
    <div className="page">
      <div className="container">
        {/* FAQ */}
        <h2 className="section-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="section-subtitle">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>

        <div className="faq-grid">
          <div className="faq-card">
            <h4>How do I open an account with YourBank?</h4>
            <p>
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts and
              complete the application process.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              What documents do I need to provide to apply for a loan?
            </h4>
            <p>
              Documents may vary depending on the loan type. Generally, you will
              need identification documents, proof of income, and information
              about collateral (if applicable).
            </p>
          </div>

          <div className="faq-card">
            <h4>How can I access my accounts online?</h4>
            <p>
              Visit our website and click on the "Login" button. Enter your
              credentials to securely access your accounts and manage your
              finances online.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              Are my transactions and personal information secure?
            </h4>
            <p>
              At YourBank, we prioritize security. We use advanced encryption
              technologies and robust security measures to protect your data.
            </p>
          </div>
        </div>

        <div className="faq-button">
          <button className="secondary-btn">Load All FAQs</button>
        </div>

        {/* CTA */}
        <div className="cta">
          <div>
            <h3>
              Start your Career with <span>YourBank</span> today!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
              pellentesque elit. Pellentesque eget ut imperdiet nulla.
            </p>
          </div>

          <button className="primary-btn">Open Account</button>
        </div>
      </div>
    </div>
  );
}

export default Lele;

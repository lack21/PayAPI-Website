import { Link } from "react-router-dom";
import checkIcon from "../assets/icon-check.svg";

function Pricing() {
  return (
    <>
      <div className="sub-circle"></div>

      <section className="pricing">
        <h1 className="title">Pricing</h1>

        <div className="row">
          <div className="item">
            <h3 className="name">Free Plan</h3>
            <p className="text">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <h4 className="price">$0.00</h4>
            <ul className="pieces">
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Transactions
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Auth
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Identity
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Investments
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Assets
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Liabilities
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Income
              </li>
            </ul>
            <Link to="/PayAPI-Website/contact" className="pricing-btn">
              Request Access
            </Link>
          </div>
          <div className="item">
            <h3 className="name">Basic Plan</h3>
            <p className="text">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <h4 className="price">$249.00</h4>
            <ul className="pieces">
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Transactions
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Auth
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Identity
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Investments
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Assets
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Liabilities
              </li>
              <li className="piece inactive">
                <img src={checkIcon} alt="check-icon" />
                Income
              </li>
            </ul>
            <Link to="/PayAPI-Website/contact" className="pricing-btn">
              Request Access
            </Link>
          </div>
          <div className="item">
            <h3 className="name">Premium Plan</h3>
            <p className="text">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <h4 className="price">$499.00</h4>
            <ul className="pieces">
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Transactions
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Auth
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Identity
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Investments
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Assets
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Liabilities
              </li>
              <li className="piece">
                <img src={checkIcon} alt="check-icon" />
                Income
              </li>
            </ul>
            <Link to="/PayAPI-Website/contact" className="pricing-btn">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;

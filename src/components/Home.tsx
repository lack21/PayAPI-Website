import { Link } from "react-router-dom";
import phoneImage from "../assets/illustration-phone-mockup.svg";
import teslaImage from "../assets/tesla.svg";
import microsoftImage from "../assets/microsoft.svg";
import hpImage from "../assets/hewlett-packard.svg";
import oracleImage from "../assets/oracle.svg";
import googleImage from "../assets/google.svg";
import nvidiaImage from "../assets/nvidia.svg";
import easyImplementImage from "../assets/illustration-easy-to-implement.svg";
import simpleUiImage from "../assets/illustration-simple-ui.svg";
import personalFinancesIcon from "../assets/icon-personal-finances.svg";
import bankingAndCoverageIcon from "../assets/icon-banking-and-coverage.svg";
import consumerPaymentsIcon from "../assets/icon-consumer-payments.svg";

function Home() {
  return (
    <>
      <header className="header">
        <div className="content">
          <h1 className="title">
            Start building with our APIs for absolutely free.
          </h1>
          <form className="form">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <Link to="/PayAPI-Website" className="btn">
              Schedule a Demo
            </Link>
          </form>
          <p className="question-text">
            Have any questions?{" "}
            <Link to="contact" className="link">
              Contact Us
            </Link>
          </p>
        </div>
        <img src={phoneImage} alt="phone-image" className="header-image" />
      </header>

      <article className="banner">
        <div className="content">
          <h2 className="heading">Who we work with</h2>
          <p className="text">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link to="about" className="banner-btn">
            About Us
          </Link>
        </div>
        <div className="logos first">
          <img src={teslaImage} alt="tesla-logo" />
          <img src={microsoftImage} alt="microsoft-logo" />
          <img src={hpImage} alt="hp-logo" />
          <img src={oracleImage} alt="oracle-logo" />
          <img src={googleImage} alt="google-logo" />
          <img src={nvidiaImage} alt="nvidia-logo" />
        </div>
      </article>

      <section className="feature">
        <img src={easyImplementImage} alt="easy-implement" />
        <div className="content">
          <h2 className="heading">Easy to implement</h2>
          <p className="text">
            Our API comes with just a few lines of code. You'll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>

      <section className="feature second">
        <img src={simpleUiImage} alt="simple-ui" />
        <div className="content">
          <h2 className="heading">Simple UI & UX</h2>
          <p className="text">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </section>

      <section className="offers">
        <div className="item">
          <img src={personalFinancesIcon} alt="personal-finances-icon" />
          <h3 className="name">Personal Finances</h3>
          <p className="text">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className="item">
          <img src={bankingAndCoverageIcon} alt="banking-and-coverage-icon" />
          <h3 className="name">Banking & Coverage</h3>
          <p className="text">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div className="item">
          <img src={consumerPaymentsIcon} alt="consumer-payments-icon" />
          <h3 className="name">Consumer Payments</h3>
          <p className="text">
            It's easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;

import teslaImage from "../assets/tesla.svg";
import microsoftImage from "../assets/microsoft.svg";
import hpImage from "../assets/hewlett-packard.svg";
import oracleImage from "../assets/oracle.svg";
import googleImage from "../assets/google.svg";
import nvidiaImage from "../assets/nvidia.svg";

function Contact() {
  return (
    <>
      <div className="sub-circle"></div>

      <section className="contact">
        <h1 className="title">
          Submit a help request and we'll get in touch shortly.
        </h1>

        <div className="row">
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
            />
            <input type="text" name="title" placeholder="Title" required />
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              required
            ></textarea>

            <div className="check-label">
              <input type="checkbox" name="checkbox" id="check" />
              <label htmlFor="check" className="check-label">
                Stay up-to-date with company announcements and updates to our
                API
              </label>
            </div>

            <button className="contact-btn">Submit</button>
          </form>
          <div className="content">
            <h2 className="heading">
              Join the thousands of innovators already building with us
            </h2>
            <div className="logos">
              <img src={teslaImage} alt="tesla-logo" />
              <img src={microsoftImage} alt="microsoft-logo" />
              <img src={hpImage} alt="hp-logo" />
              <img src={oracleImage} alt="oracle-logo" />
              <img src={googleImage} alt="google-logo" />
              <img src={nvidiaImage} alt="nvidia-logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

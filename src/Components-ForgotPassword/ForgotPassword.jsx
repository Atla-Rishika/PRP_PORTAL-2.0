import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import "./ForgotPassword.css";

import Logo from "../assets/ForgotPasswordAssets/Logo.png";
import MainIllustration from "../assets/ForgotPasswordAssets/MainIllustration.png";
import EmailIcon from "../assets/ForgotPasswordAssets/EmailIcon.png";
import GoogleIcon from "../assets/ForgotPasswordAssets/GoogleIcon.png";
import ArrowRight from "../assets/ForgotPasswordAssets/ArrowRight.png";
import ShieldIcon from "../assets/ForgotPasswordAssets/ShieldIcon.png";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();

    if (!value) {
      setError("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    navigate(ROUTES.resetLinkSent, { state: { email: value } });
  };

  return (
    <div className="ForgotPassword-page">
      <section className="ForgotPassword-leftSection">
        <header className="ForgotPassword-header">
          <img className="ForgotPassword-logo" src={Logo} alt="" />
          <div className="ForgotPassword-brandText">
            <span className="ForgotPassword-brandTitle">
              Placement &amp; Recruitment Platform
            </span>
            <span className="ForgotPassword-brandTagline">
              Connect • Discover • Succeed
            </span>
          </div>
        </header>

        <div className="ForgotPassword-content">
          <h1 className="ForgotPassword-heading">
            Forgot Your Password?
            <br />
            Get Back to Your Account.
          </h1>
          <p className="ForgotPassword-description">
            Don't worry if you've forgotten your password. We'll help you
            securely reset it and get you back to your Eduhire account.
          </p>
        </div>

        <img
          className="ForgotPassword-illustration"
          src={MainIllustration}
          alt="Forgot password illustration"
        />

        <div className="ForgotPassword-quote">
          <img className="ForgotPassword-quoteIcon" src={ShieldIcon} alt="" />
          <div>
            <p className="ForgotPassword-quoteMain">
              "A unified platform that simplifies training, placements, and
              recruitment management."
            </p>
            <p className="ForgotPassword-quoteAuthor">
              Dr. Elena Vance — Dean of Experiential Education, Northeastern
              Consortium
            </p>
          </div>
        </div>
      </section>

      <section className="ForgotPassword-formSection">
        <form className="ForgotPassword-form" onSubmit={handleSubmit} noValidate>
          <h2 className="ForgotPassword-formHeading">Forgot Password ?</h2>
          <p className="ForgotPassword-formDescription">
            Enter your registered ID or email to receive a password reset link.
          </p>

          <div className="ForgotPassword-emailField">
            <label className="ForgotPassword-emailLabel" htmlFor="email">
              Email Address
            </label>
            <div className="ForgotPassword-inputWrapper">
              <img className="ForgotPassword-emailIcon" src={EmailIcon} alt="" />
              <input
                id="email"
                className="ForgotPassword-emailInput"
                type="email"
                placeholder="Enter Email address"
                value={email}
                onChange={handleChange}
                aria-invalid={Boolean(error)}
              />
            </div>
            {error && (
              <p className="ForgotPassword-error" role="alert">
                {error}
              </p>
            )}
          </div>

          <button className="ForgotPassword-submitButton" type="submit">
            Send Reset Link
            <img className="ForgotPassword-arrowIcon" src={ArrowRight} alt="" />
          </button>

          <div className="ForgotPassword-divider">
            <Link className="ForgotPassword-backLogin" to={ROUTES.login}>
              BACK TO LOGIN
            </Link>
          </div>

          <button className="ForgotPassword-googleButton" type="button">
            <img className="ForgotPassword-googleIcon" src={GoogleIcon} alt="" />
            Google
          </button>

          <p className="ForgotPassword-accountText">
            Don't have an account?{" "}
            <button className="ForgotPassword-createAccount" type="button">
              Create Account
            </button>
          </p>

          <nav className="ForgotPassword-footer" aria-label="Footer">
            <a className="ForgotPassword-footerLink" href="#help">Help</a>
            <a className="ForgotPassword-footerLink" href="#privacy">Privacy</a>
            <a className="ForgotPassword-footerLink" href="#terms">Terms</a>
          </nav>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
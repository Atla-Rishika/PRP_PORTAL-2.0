import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import "./NewPassword.css";
import logo from "../assets/SuccessfulPageAssets/EduhireBrandIcon.png";
import illustration from "../assets/SuccessfulPageAssets/PasswordResetIllustration.png";
import shield from "../assets/SuccessfulPageAssets/SecurityShieldIcon.png";

const getPasswordError = (password) => {
  if (!password) return "Please enter a new password.";
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[a-z]/.test(password)) return "Password must include a lowercase letter.";
  if (!/[A-Z]/.test(password)) return "Password must include an uppercase letter.";
  if (!/\d/.test(password)) return "Password must include a number.";
  return "";
};

const NewPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      password: getPasswordError(formData.password),
      confirmPassword: !formData.confirmPassword
        ? "Please confirm your new password."
        : formData.password !== formData.confirmPassword
          ? "Passwords do not match."
          : "",
    };
    setErrors(newErrors);
    if (newErrors.password || newErrors.confirmPassword) return;
    navigate(ROUTES.resetSuccess);
  };

  return (
    <main className="NewPassword-reset-page">
      <section className="NewPassword-reset-page-story">
        <header className="NewPassword-brand">
          <span className="NewPassword-brand-logo-frame">
            <img src={logo} alt="" className="NewPassword-brand-logo" />
          </span>
          <div>
            <h2>Placement &amp; Recruitment Platform</h2>
            <p className="NewPassword-Brand-Tagline">
              <span className="NewPassword-Brand-Tagline-Item">Connect</span>
              <span className="NewPassword-Brand-Tagline-Item">Discover</span>
              <span className="NewPassword-Brand-Tagline-Item">Succeed</span>
            </p>
          </div>
        </header>

        <div className="NewPassword-story-content">
          <p className="NewPassword-subtitle">One last step</p>
          <h1>
            Create Your
            <br />
            New Password
          </h1>
          <p className="NewPassword-story-copy">
            Choose a strong password to keep your account secure.
            <br />
            You will use it the next time you log in.
          </p>

          <div className="NewPassword-story-illustration-stage">
            <img
              src={illustration}
              alt="Illustration of a secure password reset"
              className="NewPassword-story-illustration"
            />
          </div>
        </div>

        <div className="NewPassword-testimonial">
          <span className="NewPassword-testimonial-icon">
            <img src={shield} alt="" />
          </span>
          <div>
            <p>
              “A unified platform that simplifies training, placements, and
              recruitment management.”
            </p>
            <p>
              Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium
            </p>
          </div>
        </div>
      </section>

      <section className="NewPassword-reset-page-action" aria-labelledby="newpassword-title">
        <div className="NewPassword-confirmation-card">
          <h2 id="newpassword-title">Set a New Password</h2>
          <p>Your new password must be different from the one you used before.</p>

          <form className="NewPassword-form" onSubmit={handleSubmit} noValidate>
            <div className="NewPassword-field">
              <label htmlFor="newPassword">New Password</label>
              <div className={`NewPassword-input-wrapper ${errors.password ? "NewPassword-input-error" : ""}`}>
                <input
                  id="newPassword"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="NewPassword-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="NewPassword-error" role="alert">{errors.password}</p>
              )}
            </div>

            <div className="NewPassword-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className={`NewPassword-input-wrapper ${errors.confirmPassword ? "NewPassword-input-error" : ""}`}>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="NewPassword-error" role="alert">{errors.confirmPassword}</p>
              )}
            </div>

            <p className="NewPassword-hint">
              At least 8 characters, with uppercase, lowercase and a number.
            </p>

            <button type="submit" className="NewPassword-submit">
              Reset Password
            </button>
          </form>

          <div className="NewPassword-help-row">
            <span className="NewPassword-help-row-line" />
            <p>
              <a href="#back" onClick={(e) => { e.preventDefault(); navigate(ROUTES.login); }}>
                Back to Login
              </a>
            </p>
            <span className="NewPassword-help-row-line" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewPassword;

import React from "react";
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'
import "./SuccessfulPage.css";
import logo from "../assets/SuccessfulPageAssets/EduhireBrandIcon.png";
import illustration from "../assets/SuccessfulPageAssets/PasswordResetIllustration.png";
import shield from "../assets/SuccessfulPageAssets/SecurityShieldIcon.png";
import successMark from "../assets/SuccessfulPageAssets/SuccessConfirmationIcon.png";



  const SuccessfulPage = () => {
    const navigate = useNavigate();

    const handleBackToLogin = () => {
    navigate(ROUTES.login);
  };

 return (
     <main className="SuccessfulPage-reset-page">
       <section className="SuccessfulPage-reset-page-story">
         <header className="SuccessfulPage-brand">
           <span className="SuccessfulPage-brand-logo-frame">
             <img src={logo} alt="" className="SuccessfulPage-brand-logo" />
           </span>
           <div>
             <h2>Placement &amp; Recruitment Platform</h2>
             {/* <p>Connect • Discover • Succeed</p> */}
             <p className="SuccessfulPage-Brand-Tagline">  <span className="SuccessfulPage-Brand-Tagline-Item">Connect</span>  <span className="SuccessfulPage-Brand-Tagline-Item">Discover</span>  <span className="SuccessfulPage-Brand-Tagline-Item">Succeed</span></p>
           </div>
         </header>
 
         <div className="SuccessfulPage-story-content">
           <p className="SuccessfulPage-subtitle">New beginning awaits</p>
           <h1 id="success-heading">
             Your Password Has
             <br />
             Been Reset Successfully!
           </h1>
           <p className="SuccessfulPage-story-copy">
             You're all set! Your account is now secure.<br />
             Log in and continue your journey towards a brighter future.
           </p>
 
           <div className="SuccessfulPage-story-illustration-stage">
             <img
               src={illustration}
               alt="A person celebrating a successful account update"
               className="SuccessfulPage-story-illustration"
             />
           </div>
         </div>
 
         <div className="SuccessfulPage-testimonial">
           <span className="SuccessfulPage-testimonial-icon">
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
 
       <section className="SuccessfulPage-reset-page-action" aria-labelledby="confirmation-title">
         <div className="SuccessfulPage-confirmation-card">
           <img src={successMark} alt="" className="SuccessfulPage-confirmation-card-icon" />
           <h2 id="confirmation-title">Password Reset Successfully!</h2>
           <p>
             Your password has been reset. You can now log in with your new password
             and continue exploring all the opportunities on EduHire.
           </p>
           <button type="button" onClick={handleBackToLogin}>
             Back to Login 
           </button>
 
           <div className="SuccessfulPage-help-row">
             <span className="SuccessfulPage-help-row-line" />
             <p>
               Need help? <a href="mailto:support@eduhire.example">Contact Support</a>
             </p>
             <span className="SuccessfulPage-help-row-line" />
           </div>
         </div>
       </section>
     </main>
   );
}

export default SuccessfulPage;
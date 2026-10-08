import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import LoginIllustration from '../assets/LoginAssets/LoginIllustration.png'
import EmailIcon from '../assets/LoginAssets/EmailIcon.png'
import PasswordIcon from '../assets/LoginAssets/PasswordIcon.png'
import ShowPasswordIcon from '../assets/LoginAssets/ShowPasswordIcon.png'
import HidePasswordIcon from '../assets/LoginAssets/HidePasswordIcon.png'
import GoogleIcon from '../assets/LoginAssets/GoogleIcon.png'
import SearchIcon from '../assets/LoginAssets/SearchIcon.png'
import LearnIcon from '../assets/LoginAssets/LearnIcon.png'
import TrustedIcon from '../assets/LoginAssets/TrustedIcon.png'
import InfoIcon from '../assets/LoginAssets/InfoIcon.png'
import SignInArrow from '../assets/LoginAssets/SignInArrow.png'
import DotIcon from '../assets/LoginAssets/DotIcon.png'
import './CommonLoginScreen.css'

const CommonLoginScreen = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        keepSignedIn: false,
        showPassword: false
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        if (name === 'email' || name === 'password') {
            setErrors((prev) => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newErrors = {
            email: formData.email.trim() ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required'
        }
        setErrors(newErrors)
        if (newErrors.email || newErrors.password) {
            return
        }
        console.log(formData)
    }

    const togglePassword = () => {
        setFormData((prev) => ({
            ...prev,
            showPassword: !prev.showPassword
        }))
    }

    return (
        <div className="CommonLoginScreen-Container">
            <div className="CommonLoginScreen-Left">
                <div className="CommonLoginScreen-Brand">
                    <div className="CommonLoginScreen-Brand-Logo">
                        <img src={ProductLogo} alt="EduHire Logo" />
                    </div>
                    <div className="CommonLoginScreen-Brand-Content">
                        <h3>Placement & Recruitment Platform</h3>
                        <p>Connect <span className="CommonLoginScreen-Dot"></span> Discover <span className="CommonLoginScreen-Dot"></span> Succeed</p>
                    </div>
                </div>
                <div className="CommonLoginScreen-Welcome-Content">
                    <h5>WELCOME</h5>
                    <h1>One Platform. Endless<br />Opportunities</h1>
                    <p>Discover jobs, build your skills, and take the next step in your<br className="CommonLoginScreen-Desktop-Break" /> career journey with EduHire.</p>
                </div>
                <div className="CommonLoginScreen-Features">
                    <div className="CommonLoginScreen-Feature">
                        <div className="CommonLoginScreen-Feature-Icon">
                            <img src={SearchIcon} alt="Search" />
                        </div>
                        <h3>Find Opportunities</h3>
                        <p>Explore roles from top<br />companies</p>
                    </div>
                    <div className="CommonLoginScreen-Feature">
                        <div className="CommonLoginScreen-Feature-Icon">
                            <img src={LearnIcon} alt="Learn" />
                        </div>
                        <h3>Learn & Grow</h3>
                        <p>Access resources to build<br />your skills</p>
                    </div>
                    <div className="CommonLoginScreen-Feature">
                        <div className="CommonLoginScreen-Feature-Icon">
                            <img src={TrustedIcon} alt="Trusted platform" />
                        </div>
                        <h3>A Trusted Platform</h3>
                        <p>Safe, transparent and<br />reliable.</p>
                    </div>
                </div>
                <div className="CommonLoginScreen-Illustration-Container">
                    <img src={LoginIllustration} alt="EduHire platform illustration" />
                </div>
                <div className="CommonLoginScreen-Info">
                    <img src={InfoIcon} alt="Information" />
                    <p>Connecting students with the right opportunities to build successful careers.</p>
                </div>
            </div>
            <div className="CommonLoginScreen-Right">
                <div className="CommonLoginScreen-Form-Container">
                    <div className="CommonLoginScreen-Form-Header">
                        <h1>Welcome Back</h1>
                        <p>Login to your EduHire account</p>
                    </div>
                    <form className="CommonLoginScreen-Form" onSubmit={handleSubmit} noValidate>
                        <div className="CommonLoginScreen-Field">
                            <label htmlFor="email">Email Address</label>
                            <div className={`CommonLoginScreen-Input-Container ${errors.email ? 'CommonLoginScreen-Input-Error' : ''}`}>
                                <img src={EmailIcon} alt="Email" />
                                <input id="email" name="email" type="email" placeholder="Enter Email address" value={formData.email} onChange={handleChange} />
                            </div>
                            {errors.email && <p className="CommonLoginScreen-Validation-Error">{errors.email}</p>}
                        </div>
                        <div className="CommonLoginScreen-Field">
                            <div className="CommonLoginScreen-Password-Label">
                                <label htmlFor="password">Password</label>
                                <button type="button" className="CommonLoginScreen-Forgot-Password" onClick={() => navigate(ROUTES.forgotPassword)}>Forgot Password?</button>
                            </div>
                            <div className={`CommonLoginScreen-Input-Container ${errors.password ? 'CommonLoginScreen-Input-Error' : ''}`}>
                                <img src={PasswordIcon} alt="Password" />
                                <input id="password" name="password" type={formData.showPassword ? 'text' : 'password'} placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                                <button type="button" className="CommonLoginScreen-Password-Toggle" onClick={togglePassword}>
                                    <img src={formData.showPassword ? HidePasswordIcon : ShowPasswordIcon} alt={formData.showPassword ? 'Hide password' : 'Show password'} />
                                </button>
                            </div>
                            {errors.password && <p className="CommonLoginScreen-Validation-Error">{errors.password}</p>}
                        </div>
                        <label className="CommonLoginScreen-Remember">
                            <input type="checkbox" name="keepSignedIn" checked={formData.keepSignedIn} onChange={handleChange} />
                            <span>Keep me signed in</span>
                        </label>
                        <button type="submit" className="CommonLoginScreen-SignIn-Button">
                            <span>Sign In</span>
                            <img className="CommonLoginScreen-SignIn-Arrow" src={SignInArrow} alt="Sign in" />
                        </button>
                    </form>
                    <div className="CommonLoginScreen-Divider">
                        <span></span>
                        <p>OR CONTINUE WITH</p>
                        <span></span>
                    </div>
                    <button type="button" className="CommonLoginScreen-Google-Button">
                        <img src={GoogleIcon} alt="Google" />
                        <span>Google</span>
                    </button>
                    <p className="CommonLoginScreen-Create-Account">Don't have an account?<button type="button">Create Account</button></p>
                    <div className="CommonLoginScreen-Footer-Links">
                        <a href="#help">Help</a>
                        <img className="CommonLoginScreen-Footer-Dot" src={DotIcon} alt="" />
                        <a href="#privacy">Privacy</a>
                        <img className="CommonLoginScreen-Footer-Dot" src={DotIcon} alt="" />
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonLoginScreen
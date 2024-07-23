import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/footer_logo.svg'
import User_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1><span>..</span></h1>
                <p>Thank you for visiting my portfolio, and I hope my work reflects my passion and dedication to the world of wespan development.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={User_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Karthikeyan. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
        
    

    
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linked_icon from '../../assets/ln icon.png'
import github_icon from '../../assets/github_icon.png'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4b2a434a-057a-40a1-bf98-107b7d941b41");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><a href="mailto:karthikarthikeyan389@gmail.com"> karthikarthikeyan389@gmail.com</a>

                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><a href="tel:+91 8870456971">+91 8870456971</a>
                    
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><a href="https://www.google.com/maps/place/Kottaipattinam,+Tamil+Nadu/@10.006375,79.0631994,10.18z/data=!4m6!3m5!1s0x3b0024b4acdb1047:0xb2a68eaa41e23ebe!8m2!3d9.9799803!4d79.1971742!16s%2Fm%2F0gjf2_0?entry=ttu">Kottaippattinam, TamilNadu</a>
                </div>
                <div className="contact-detail">
                    <img src={linked_icon} alt="" /><a href="https://www.linkedin.com/in/karthi-keyan-6ab032252/"> Karthikeyan</a>
                </div>
                <div className="contact-detail">
                    <img src={github_icon} alt="" /><a href="https://github.com/KarthikeyanR007"> Karthikeyan</a>
                </div>
            </div>
        </div>
        <form  className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact

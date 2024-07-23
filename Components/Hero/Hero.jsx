import React from 'react'
import './Hero.css'
import profile_img from '../../assets/prot1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Karthikeyan</span> Fullstack Developer</h1>
            <p>
            Hello! My name Karthikeyan, and I am a passionate Full Stack Developer. 
            With one year of professional experience and a strong foundation in Web and App development, 
            I am constantly honing my skills and expanding my knowledge.
            </p>
            <p>
            I am eager to showcase my work and journey as a developer through this portfolio. 
            Here, you will find a collection of my latest projects, experiments, and accomplishments. 
            I am dedicated to creating clean and user-friendly solutions, always aiming to leave a positive 
            impact on the web.
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1auQspyM_R1zLDTimyosd7eWvwQKKzfBn/view?usp=drive_link">My resume</a></div>
            </div>

        </div>
    )
}

export default Hero

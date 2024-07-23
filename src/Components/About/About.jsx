import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/portprobig.jpeg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" className='prot_img' height={700}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am FullStack developer highly motivated Software Engineer with hands-on experience in 
                            building responsive web and mobile application using React, Flutter and Node.js .
                            Proven ability  to solve complex problems. Successfully optimized a mobile application,reduce 
                            load times by 15% and let projects that boosted user engagement by 30% and Skilled SQL,Firebase with
                            a strong foundation in java, javascript, Dart, PHP, Flutter and React Native
                        </p>
                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{width:"75%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"90%"}} /></div>
                        <div className="about-skill"><p>Dart</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>PHP</p><hr style={{width:"95%"}} /></div>
                        <div className="about-skill"><p>React js</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p>React Native</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"90%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>One and half</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>COURSES COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About

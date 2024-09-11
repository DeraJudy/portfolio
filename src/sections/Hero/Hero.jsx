import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toogleTheme} = useTheme();

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.Hero} 
                src={heroImg} 
                alt="Profile picture of Chidera Ulu" 
            />
            <img
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toogleTheme}
                />
        </div>
        <div className={styles.info}>
            <h1>
                Chidera
                <br />
                Ulu
            </h1>
            <h2>FrontEnd Developer</h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter-icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github-icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin-icon" />
                </a>
            </span>
            <p>
                With a passion for developing modern React web apps for commercial businesses.
            </p>
            <a href={CV} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero

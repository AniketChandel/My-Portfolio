import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      
      <div className={styles.text}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>
          Feel free to reach out — I'm always open to opportunities and collaborations!
        </p>
      </div>

      <ul className={styles.links}>
        
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:aniketchandel8471@gmail.com">
            aniketchandel8471@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a 
            href="www.linkedin.com/in/aniket-singh-0a5357363" 
            target="_blank" 
            rel="noreferrer"
          >
            linkedin.com/in/aniketchandel
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GitHub icon"
          />
          <a 
            href="https://github.com/Aniketchandel" 
            target="_blank" 
            rel="noreferrer"
          >
            github.com/Aniketchandel
          </a>
        </li>

      </ul>
    </footer>
  );
};
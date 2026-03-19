import React from "react";

import styles from "./Aboutme.module.css";
import { getImageUrl } from "../../utils";

export const Aboutme = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/About.png")}
          alt="sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontened.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive and user-friendly web interfaces using HTML,
                CSS, JavaScript, React.js, and Tailwind CSS.
              </p>
            </div>
          </li>

        <li className={styles.aboutItem}>
  <img src={getImageUrl("about/database.png")} alt="DSA icon" />
  <div className={styles.aboutItemText}>
    <h3>Data Structures & Algorithms</h3>
    <p>
      I have a strong foundation in C++ and problem-solving using Data Structures and Algorithms, 
      along with experience working with MySQL.
    </p>
  </div>
</li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/datascience.png")} alt="ML icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning & Data Analysis</h3>
              <p>
                I work with NumPy, Pandas, Matplotlib, and Seaborn for data
                analysis and visualization, and have a basic understanding of
                machine learning concepts.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
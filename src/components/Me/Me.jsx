import React from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aniket</h1>
        <p className={styles.description}>
          I'm a passionate frontend developer skilled in React.js, JavaScript,
          and Tailwind CSS, with a strong foundation in Data Structures &
          Algorithms and experience in Machine Learning using NumPy, Pandas,
          Matplotlib, and Seaborn.
        </p>
        <a href="mailto:aniketchandel8471@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Me/Me.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
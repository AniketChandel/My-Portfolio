import React from "react";
import styles from "./Projectbox.module.css";
import { getImageUrl } from "../../utils";

export const Projectbox = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.containerCard}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.titleCard}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
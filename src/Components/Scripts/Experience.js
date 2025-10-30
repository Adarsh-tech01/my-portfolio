import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("#video");
    elements.forEach((element) => {
      element.play().catch((error) => {
        console.error("Autoplay failed", error);
      });
    });
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Experience</p>
      <p className={styles.desc}>
        Bringing ideas to life through code with hands-on experience across
        technologies and roles.
      </p>
      {/* <div className={styles.timeline}> */}
        {/* <div className={`${styles.box} ${styles.left_box}`}></div> */}
        <div className={`${styles.box} `}>
          {/* <img
            className={styles.icons}
            src={require("../Images/ten.jpg")}
            alt="ten"
            data-aos="zoom-in"
          /> */}
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>React JS Developer</p>
            <p className={styles.subtitle}>The Entrepreneurship Network</p>
            <p className={styles.italic}>
              (Oct 2025 - Present, Internship, Remote)
            </p>
            <p className={styles.description}>
              I work as trainee at the TEN and collaborate with team to get the
              final result to the company using the best tech.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://www.entrepreneurshipnetwork.net/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

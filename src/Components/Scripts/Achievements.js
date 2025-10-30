import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Achievements</p>
      <p className={styles.desc}>
        Recognitions and milestones that highlight my accomplishments and
        contributions throughout my journey.
      </p>
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/school_logo.jpg")}
            alt="school-app"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <video
              id="video"
              controls
              loop
              muted
              autoPlay
              style={{ width: "100%" }}
            >
              <source
                src={require("../Images/project demo.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className={styles.tags_box}>
              <span className={styles.tags}>React</span>
              <span className={styles.tags}>Javascript</span>
              <span className={styles.tags}>Material UI</span>
              <span className={styles.tags}>node.js</span>
              <span className={styles.tags}>MySql</span>
              <span className={styles.tags}>School App</span>
            </div>
            <p className={styles.title}>School Management System</p>
            <p className={styles.subtitle}>
              A School website which reduce physical record manage work.
            </p>
            
            <div className={styles.button_box}>
              <a
                href="https://school-app-two-rose.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/certificates.jpg")}
            alt="school-app"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img
              src={require("../Images/complition-certificates.jpg")}
              alt="certificates"
              width="100%"
            />

            <p className={styles.title}>Certificates of Completion</p>
             <div className={styles.button_box}>
              <a
                href="https://www.mygreatlearning.com/certificate/NODSNVUQ"
                target="_blank"
                rel="noreferrer"
              >
                Validate Certificate
              </a>
            </div>
            <div className={styles.button_box}>
              {/* <a
                href="https://school-app-two-rose.vercel.app/"
                target="_blank"
                rel="noreferrer"
              > */}
                {/* Visit Website */}
              {/* </a> */}
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

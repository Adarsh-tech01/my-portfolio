import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
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
      <p className={styles.heading}>Projects</p>
      <p className={styles.desc}>
        Here are some of the projects I've developed and worked on, showcasing
        my skills and creativity.
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
            {/* <p className={styles.description}>
              A School Management System is a web-based application designed to
              streamline administrative and academic operations. It manages
              student records, attendance, fees, exams, staff, and communication
              between teachers, students, and parents. The system enhances
              efficiency, reduces paperwork, and ensures smooth coordination
              within the educational institution.
            </p> */}
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
      
      </div>
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/weather.jpg")}
            alt="school-app"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
              <img 
              src={require('../Images/weather-project.jpg')}
              alt="weather-project"
              style={{width:'100%'}}
              />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React</span>
              <span className={styles.tags}>Javascript</span>
              <span className={styles.tags}>Material UI</span>
               <span className={styles.tags}>Weather API</span>
            </div>
            <p className={styles.title}>Weather Forecast</p>
            <p className={styles.subtitle}>
              This is a real time weather forecast web application.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://adarsh-weather-forecast.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

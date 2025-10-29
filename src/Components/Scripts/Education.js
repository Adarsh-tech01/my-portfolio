import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Education</p>
      <p className={styles.desc}>
        The academic institutions and programs that have contributed to my
        knowledge and growth.
      </p>
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/lpu.jpg")}
            alt="bseb"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>Master of Computer Applications </p>
            <p className={styles.subtitle}>
              Lovely Professional University, Punjab
            </p>
            <p>
              Appeared in 2025 at LPU Punjab that help me to focused on advanced
              commerce subjects, preparing me for higher education and a career
              in business and finance.
            </p>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/mgkvp.jpg")}
            alt="brabu"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>Bachelor of Computer Application</p>
            <p className={styles.subtitle}>
              Mahatma Gandhi Kashi Vidhyapeeth Varanasi
            </p>
            <p className={styles.description}>
              Graduated with 73.33% marks in 2025 from MGKVP Varanasi. This
              degree provided a strong foundation in computer software and
              practices, enhancing my skill and tech knowledge.
            </p>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/bns.jpg")}
            alt="bseb"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>Intermediate PCM</p>
            <p className={styles.subtitle}>Board: CBSE, New Delhi</p>
            <p>
              Completed with 86.00% marks in 2021 from BNS School, Varanasi.
              Focused on advanced Science subjects, preparing me for higher
              education and a career in IT.
            </p>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={require("../Images/bns.jpg")}
            alt="bseb"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>Matriculation</p>
            <p className={styles.subtitle}>Board: CBSE, New Delhi</p>
            <p>
              Achieved 87.00% marks in 2019 from BNS School, Varanasi.
              This stage of education laid the groundwork for my academic
              journey, emphasizing core subjects and essential skills.
            </p>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

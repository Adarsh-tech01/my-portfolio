import styles from "../Styles/About.module.css";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {
  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice()) {
      const elements = document.querySelectorAll(".tilt");
      elements.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          reverse: true,
          glare: true,
          scale: 1.1,
          "max-glare": 0.3,
        });
      });
    }
  }, []);
  const [text] = useTypewriter({
    words: [
      "Front-End Developer",
      "React JS Developer",
      "Javascript Developer",
      "Python Developer",
      "Software Developer",
    ],
    loop: {},
  });
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <p className={styles.name}>
          Hi, I am
          <br />
          Adarsh Kumar Singh
        </p>
        <div className={styles.title}>
          I am a{" "}
          <span className={styles.typewriter}>
            {text}
            <Cursor />
          </span>
        </div>
        <div className={styles.bio}>
          I specialize in frontend web development using React.js, with a focus
          on creating responsive, high-performance, and user-friendly
          interfaces. Passionate about crafting seamless user experiences, I
          enjoy learning modern frontend technologies and optimizing UI
          workflows. With a strong understanding of JavaScript, React ecosystem,
          and UI/UX principles, I strive to build impactful, scalable, and
          visually appealing web applications.
        </div>
        <a
          href="/Adarsh_Singh.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.resume}
        >
          Check Resume
        </a>
      </div>
      <img
        className={`${styles.mypic} tilt`}
        src={require("../Images/mypic.jpg")}
        alt="mypic"
      />
    </div>
  );
};

import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>Hi, I'm Om Prakash Nellikondi</h1>
              <p className={styles.description}>Creative and Experienced React Frontend Developer | Building Seamless User Experiences | Passionate About Modern Web Technologies</p>
              <a href="mailto:omp0716@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt= "Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}


import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Anthony</h1>
                <p className={styles.description}>I'm web developer </p>
                <a href="mailto:anthonyrodrigues.c@gmail.com"
                    className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/hero.jpg")}
                alt="Hero image of me"
                className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/about.png")}
                    alt="Me with laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Curson icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I love design and make beautiful and optimised sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="UI icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>Backend Developer</h3>
                            <p>
                                I'm able to develop fast and optimised APIs
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
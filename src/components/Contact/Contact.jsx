import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:anthonychampionrodrigues@gmail.com">anthonychampionrodrigues@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/anthony-rodrigues-champion/368406188">linkedin.com/Anthony-Rodrigues-Champion</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/AnthonyChampion">github.com/AnthonyChampion</a>
                </li>
                <li className={styles.link}>
                    <p><a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by Muhammad Ali - Flaticon</a>
                    </p>

                </li>
            </ul>
        </footer>
    );
};

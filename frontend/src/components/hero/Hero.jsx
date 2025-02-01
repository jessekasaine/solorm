//import React from 'react';
import styles from "./Hero.module.css"

function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.h1}>Designed and Developed</h1>
                <div className={styles.hero}>
                    <h1 className={styles.h1}>right </h1>
                    <button className={styles.heroButton}>Here</button>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                {/*<img className={styles.heroImage} src="../../assets/desktopImage.png" alt='hero image'/>*/}
                <div className={styles.heroImage}>
                </div>
            </div>
        </section>
    );
}

export default Hero;
//import React from 'react';
import styles from "./Hero.module.css"

function Hero() {
    return (
        <section className={styles.heroContainer}>
            {/*SoloRM work station
            All your work tools in one place

            */}
            <div className={styles.contentWrapper}>
                <p className={styles.p}>SoloRM work station</p>
                <h1 className={styles.h1}>All your work tools</h1>
                <div className={styles.hero}>
                    <h1 className={styles.h1}>in one place </h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;
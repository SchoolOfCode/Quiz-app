import React from "react";
import styles from './EndGame.module.css'

export default function EndGame ({ score, progress, lives, timer }) {
    return (
        <div className={styles.wrapper}>
            <h1>Game Over ☠</h1>
            <h2 className={styles.text}>Progress {progress}/15</h2>
            <h2 className={styles.score}>Score {score}</h2>
            <h2 className={styles.text}>Lives {lives}</h2>
            <h2 className={styles.text}>Timer</h2>
        </div>
    );
}
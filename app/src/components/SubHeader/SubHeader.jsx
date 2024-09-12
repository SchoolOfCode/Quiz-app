"use client";

import React, { useEffect, useState } from 'react';
import styles from './SubHeader.module.css';
import QuestionCards from '../QuestionCards/QuestionCards';
import Timer from '../Timer/Timer';

export default function SubHeader({ score, progress, lives, timer }) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.text}>Progress : {progress}/15</h2>
            <h2 className={styles.score}>Score : {score}</h2>
            <h2 className={styles.text}>Lives : {lives}</h2>
            <h2 className={styles.text}>Time left : <Timer /></h2>
        </div>
    );
}
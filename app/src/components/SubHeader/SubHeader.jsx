"use client";

import React, { useEffect, useState } from 'react';
import styles from './SubHeader.module.css';
import QuestionCards from '../QuestionCards/QuestionCards';

export default function SubHeader({ score, lives, timer }) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.text}>Progress</h2>
            <h2 className={styles.text}>Score</h2>
            <h2 className={styles.text}>
                {score}
            </h2>
            <h2 className={styles.text}>Lives</h2>
            <h2 className={styles.text}>Timer</h2>
        </div>
    );
}
"use client";

import React from 'react';
import styles from './FailScreen.module.css';
import Button from '../Button/Button';

export default function FailScreen({ onClose , correctAnswerVar}) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
               ❌ Incorrect. ❌ </p>
            <p> The correct answer was {correctAnswerVar} </p>
            <Button
                onClick={onClose}>
                    Next Question
            </Button>
        </div>
    );
}

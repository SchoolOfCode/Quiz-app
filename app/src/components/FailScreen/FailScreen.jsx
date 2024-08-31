"use client";

import React from 'react';
import styles from './FailScreen.module.css';
import Button from '../Button/Button';

export default function FailScreen({ onClose }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
               ❌ Incorrect. ❌ The correct answer was ... </p>
            <Button
                onClick={onClose}>
                    Next Question
            </Button>
        </div>
    );
}

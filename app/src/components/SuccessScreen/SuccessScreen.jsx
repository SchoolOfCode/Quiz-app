"use client";

import React from 'react';
import styles from './SuccessScreen.module.css';

import Button from '../Button/Button'

export default function SuccessScreen({ onClose, score }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                ✅ Correct! ✅ 
                <p>Your score is : {score}</p>
            </div>
            <Button 
                onClick={onClose}>
                Next Question
            </Button>
        </div>
    );
}

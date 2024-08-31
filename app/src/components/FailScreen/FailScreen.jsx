"use client";

import React from 'react';
import styles from './FailScreen.module.css';

export default function FailScreen({ onClose }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text} onClick={onClose}>
                Fail - Click to close
            </div>
        </div>
    );
}

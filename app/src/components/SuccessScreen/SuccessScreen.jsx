"use client";

import React from 'react';
import styles from './SuccessScreen.module.css';

export default function SuccessScreen({ onClose }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text} onClick={onClose}>
                Styled success screen - Click to close
            </div>
        </div>
    );
}

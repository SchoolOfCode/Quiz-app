"use client";

import React from 'react'
import styles from './SuccessScreen.module.css'
import {useState} from "react"

export default function SuccessScreen() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                Styled success screen
            </div>
        </div>
    )
}
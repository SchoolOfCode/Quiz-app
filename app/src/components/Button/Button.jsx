import React from "react";
import styles from './Button.module.css'

export default function Button ({ onClick, children }) {
    return (
        <button 
        className={styles.button} 
        type='button'
        onClick={onClick}>
        {children}
    </button>
    )
}
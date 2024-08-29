import React from 'react'
import styles from './questionCards.module.css'

export default function QuestionCards () {
    return (
    <div className={styles.wrapper}>
        <div className={styles.form}>
            <legend className={styles.title}>Question 1</legend>
            <div className={styles.answerGroup}>
                <input 
                    type="radio" 
                    id="Answer1" 
                    name="Answer" />
                <label className={styles.text} htmlFor="Answer1">Answer 1</label>
            </div>
            <div className={styles.answerGroup}>
                <input 
                    type="radio" 
                    id="Answer2" 
                    name="Answer" />
                <label className={styles.text} htmlFor="Answer2">Answer 2</label>
            </div>
            <div className={styles.answerGroup}>
                <input 
                    type="radio" 
                    id="Answer3" 
                    name="Answer" />
                <label className={styles.text} htmlFor="Answer3">Answer 3</label>
            </div>
            <div className={styles.answerGroup}>
                <input 
                    type="radio" 
                    id="Answer4" 
                    name="Answer" />
                <label className={styles.text} htmlFor="Answer4">Answer 4</label>
            </div>
            <button 
                className={styles.button} 
                type="submit">
                    Submit answer
            </button>
        </div>
    </div>
)
}
import React from 'react'
import styles from './questionCards.module.css'

export default function QuestionCards () {
    return (
    <div className={styles.wrapper}>
        <form className={styles.form}>
            <legend className={styles.title}>Question 1</legend>
                <input
                    type='radio'
                    id='Answer1'
                    name="Answer1"
                    />
                    <label className={styles.text} htmlFor='Answer1'>Answer 1</label>
                <input 
                    type='radio'
                    id='Answer2'
                    name="Answer2"
                    />
                    <label className={styles.text} htmlFor='Answer2'>Answer 2</label>
                <input
                    type='radio'
                    id='Answer3'
                    name="Answer3"
                    />
                    <label className={styles.text} htmlFor='Answer3'>Answer 3</label>
                <input
                    type='radio'
                    id='Answer4'
                    name="Answer4"
                    />
                    <label className={styles.text} htmlFor='Answer4'>Answer 4</label>
        </form>
    </div>
    )
}
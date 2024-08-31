"use client";

import React, { useState } from 'react';
import styles from './questionCards.module.css';
import Success from '../SuccessScreen/SuccessScreen';
import Fail from '../FailScreen/FailScreen';

export default function QuestionCards() {
    const [submit, setSubmit] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);  // Tracks if the correct answer is selected
    const [answerSelected, setAnswerSelected] = useState(false);  // Tracks if any answer is selected
    const [score, setScore] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        
        if (!answerSelected) {
            setSubmit(true);  // Ensure it checks for selection before submitting
            return;
        }

        setSubmit(true);
        if (correctAnswer) {
            setScore(score + 1);  // Increment score only if the correct answer is selected
        }
        console.log('Current Score:', score);  // Log the score to verify it's updating correctly
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <legend className={styles.title}>Question 1</legend>
                <div className={styles.answerGroup}>
                    <input 
                        type="radio" 
                        id="Answer1" 
                        name="Answer"
                        onClick={() => {
                            setCorrectAnswer(true);
                            setAnswerSelected(true);
                        }} 
                    />
                    <label className={styles.text} htmlFor="Answer1">Answer 1</label>
                </div>
                <div className={styles.answerGroup}>
                    <input 
                        type="radio" 
                        id="Answer2" 
                        name="Answer" 
                        onClick={() => {
                            setCorrectAnswer(false);
                            setAnswerSelected(true);
                        }} 
                    />
                    <label className={styles.text} htmlFor="Answer2">Answer 2</label>
                </div>
                <div className={styles.answerGroup}>
                    <input 
                        type="radio" 
                        id="Answer3" 
                        name="Answer" 
                        onClick={() => {
                            setCorrectAnswer(false);
                            setAnswerSelected(true);
                        }} 
                    />
                    <label className={styles.text} htmlFor="Answer3">Answer 3</label>
                </div>
                <div className={styles.answerGroup}>
                    <input 
                        type="radio" 
                        id="Answer4" 
                        name="Answer" 
                        onClick={() => {
                            setCorrectAnswer(false);
                            setAnswerSelected(true);
                        }} 
                    />
                    <label className={styles.text} htmlFor="Answer4">Answer 4</label>
                </div>
                <button 
                    className={styles.button} 
                    type="submit"
                    onClick={handleClick}>
                        Submit answer
                </button>
            </div>
            <div className={styles.submit}>
                { 
                    !answerSelected && submit 
                        ? "Please select an answer" 
                        : submit && (correctAnswer ? <Success/> : <Fail/>)
                }
            </div>
        </div>
    );
}

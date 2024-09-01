"use client";

import React, { useState } from 'react';
import styles from './questionCards.module.css';
import Success from '../SuccessScreen/SuccessScreen';
import Fail from '../FailScreen/FailScreen';
import Button from '../Button/Button'

export default function QuestionCards() {
    const [submit, setSubmit] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswerVar = 'Answer1';

    const handleClick = (event) => {
        event.preventDefault();
        
        if (!answerSelected) {
            setSubmit(true);
            return;
        }

        setSubmit(true);

        if (correctAnswer) {
            setScore(prevScore => prevScore + 1);
            setShowSuccess(true);
            setShowFail(false);
        } else {
            setShowFail(true);
            setShowSuccess(false);
        }

        console.log('Current Score:', score);
    };

    const handleCloseScreens = () => {
        setShowSuccess(false);
        setShowFail(false);
        setAnswerSelected(false)
        setCorrectAnswer(null)
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
                </div></div>
                <Button 
                    onClick={handleClick}>
                        Submit answer
                </Button>
            
            <div className={styles.submit}>
                { 
                    !answerSelected && submit 
                        ? "Please select an answer" 
                        : (
                            <>
                                {showSuccess && (<Success 
                                onClose={handleCloseScreens}
                                score={score} />)}
                                {showFail && (<Fail 
                                onClose={handleCloseScreens}
                                correctAnswerVar={correctAnswerVar} />)}
                            </>
                        )
                }
            </div>
        </div>
    );
}

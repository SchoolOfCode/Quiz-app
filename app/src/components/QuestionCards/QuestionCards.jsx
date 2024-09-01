"use client";

import React, { useEffect, useState } from 'react';
import styles from './questionCards.module.css';
import Success from '../SuccessScreen/SuccessScreen';
import Fail from '../FailScreen/FailScreen';
import Button from '../Button/Button'

// async function getQuestions() {
//     const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Couldn't fetch data: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
//         console.error(error.message)
//     }
// }

export default function QuestionCards() {

    const [submit, setSubmit] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswerVar = 'Answer1';

    //api
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchQuestions = async () => {
        try {
            const response = await fetch('https://the-trivia-api.com/v2/questions/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect (() => {
        fetchQuestions();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error} </p>;
    }
    console.log(questions[0].question.text)

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
                <legend className={styles.title}> {questions[0].question.text} </legend>
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
                    <label className={styles.text} htmlFor="Answer1">{questions[0].correctAnswer}</label>
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
                    <label className={styles.text} htmlFor="Answer2">{questions[0].incorrectAnswers[0]}</label>
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
                    <label className={styles.text} htmlFor="Answer3">{questions[0].incorrectAnswers[1]}</label>
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
                    <label className={styles.text} htmlFor="Answer4">{questions[0].incorrectAnswers[2]}</label>
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

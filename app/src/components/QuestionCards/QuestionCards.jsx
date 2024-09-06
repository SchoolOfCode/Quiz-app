"use client";

import React, { useEffect, useState } from 'react';
import styles from './questionCards.module.css';
import Success from '../SuccessScreen/SuccessScreen';
import Fail from '../FailScreen/FailScreen';
import Button from '../Button/Button'

export default function QuestionCards() {

    const [submit, setSubmit] = useState(false);
    const [pass, setPass] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [score, setScore] = useState(0);
    const [questionCount, setQuestionCount] = useState(1);
    const [finished, setFinished] = useState(false);

       //api
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    //random answer box
    const [correctAnswerBox, setCorrectAnswerBox] = useState(null)

    function randomCorrectAnswer () {
        const correctAnswerSelector = Math.floor(Math.random() * 4);
        setCorrectAnswerBox(correctAnswerSelector)
        console.log('correctAnswerBox', correctAnswerSelector)
        return;
    }

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
        randomCorrectAnswer();
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

        if (pass && questionCount < 6) {
            setScore(prevScore => prevScore + 1);
            setShowSuccess(true);
            setShowFail(false);
            setQuestionCount(prevCount => prevCount + 1);
        } else if (!pass && questionCount < 6) {
            setShowFail(true);
            setShowSuccess(false);
            setQuestionCount(prevCount => prevCount + 1);
        } else {
            console.log('finished')
        }

        console.log('Current Score:', score);
    };

    const handleCloseScreens = () => {
        setShowSuccess(false);
        setShowFail(false);
        setAnswerSelected(false)
        setPass(null)
        fetchQuestions();
        randomCorrectAnswer();
    };

    const handleAnswerSelect = (selectedAnswerIndex) => {
        setAnswerSelected(true);
        if (selectedAnswerIndex === correctAnswerBox) {
            setPass(true);
        } else {
            setPass(false);
        }
    };

    return (
<div className={styles.wrapper}>
    <div className={styles.form}>
        <legend className={styles.title}>{questions[0].question.text}</legend>
        
        <div className={styles.answerGroup}>
            <input 
                type="radio" 
                id="Answer1" 
                name="Answer" 
                onClick={() => handleAnswerSelect(0)} 
            />
            <label className={styles.text} htmlFor="Answer1">
                {correctAnswerBox === 0 ? questions[0].correctAnswer 
                : questions[0].incorrectAnswers[0]}
            </label>
        </div>
        
        <div className={styles.answerGroup}>
            <input 
                type="radio" 
                id="Answer2" 
                name="Answer" 
                onClick={() => handleAnswerSelect(1)} 
            />
            <label className={styles.text} htmlFor="Answer2">
                {correctAnswerBox === 1 ? questions[0].correctAnswer 
                : questions[0].incorrectAnswers[1]}
            </label>
        </div>
        
        <div className={styles.answerGroup}>
            <input 
                type="radio" 
                id="Answer3" 
                name="Answer" 
                onClick={() => handleAnswerSelect(2)} 
            />
            <label className={styles.text} htmlFor="Answer3">
                {correctAnswerBox === 2 ? questions[0].correctAnswer 
                : questions[0].incorrectAnswers[2]}
            </label>
        </div>

        <div className={styles.answerGroup}>
            <input 
                type="radio" 
                id="Answer4" 
                name="Answer" 
                onClick={() => handleAnswerSelect(3)} 
            />
            <label className={styles.text} htmlFor="Answer4">
                {correctAnswerBox === 3 ? questions[0].correctAnswer 
                : questions[0].incorrectAnswers[0]}
            </label>
        </div>
    </div>
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
                                correctAnswerVar={questions[0].correctAnswer} />)}
                            </>
                        )
                }
            </div>
        </div>
    );
}

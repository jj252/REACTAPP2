import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';
import {useState} from 'react';



const Questions = (my_question) =>{
    const questions_increment = my_question.prop2;
    console.log('CHECK OUT THESE CHARACTERS',questions_increment);
    
    
    const questions = my_question;
    console.log('CHECK OUT THE VALUES2',questions_increment);
   
    return (
    <>
    
    <div className={style.question}>{questions.prop[questions_increment].question}</div>,
    <div  className={style.choice1}>{questions.prop[questions_increment].option1}</div>,
    <div  className={style.choice2}>{questions.prop[questions_increment].option2}</div>,
    <div  className={style.choice3}>{questions.prop[questions_increment].option3}</div>,
    <div  className={style.choice4}>{questions.prop[questions_increment].option4}</div>
    
    </>
    )
}

export default Questions
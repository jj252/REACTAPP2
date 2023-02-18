import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';
import {useState} from 'react';



const Questions2 = (my_question) =>{

        const questions_increment = my_question.prop2;
        
        const questions = my_question;

        return (
        <>
        <div>{questions.prop[questions_increment].question}</div>,
        
        </>
        )
    
}

export default Questions2
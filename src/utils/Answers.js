import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';
import {useState} from 'react';



    export const AnswersA = (my_question) =>{
        const questions_increment = my_question.prop2;
        
        const questions = my_question;

        return (
            <>
            <div>{questions.prop[questions_increment].option1}</div>
            </>
            )
    }

    export const AnswersB = (my_question) =>{
        const questions_increment = my_question.prop2;
        
        const life_line = my_question.prop3;
        
        const questions = my_question;

                return (
                <>
                <div>{questions.prop[questions_increment].option2}</div>
                </>
                )
    }

    export const AnswersC = (my_question) =>{
        const questions_increment = my_question.prop2;
            
        
        const questions = my_question;
        
            return (
                <>
                <div>{questions.prop[questions_increment].option3}</div>
                </>
                )

            
            }

        export const AnswersD = (my_question) =>{
            const questions_increment = my_question.prop2;
                
            const questions = my_question;
            
                return (
                    <>
                    <div>{questions.prop[questions_increment].option4}</div>
                    </>
                    )
    
                
            }
    



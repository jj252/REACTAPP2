import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';



const Questions = (my_question) =>{
    //console.log('CHECK THESE OUT BABY',prop.prop2);
    
    const questions = my_question;
    const questions_increment = my_question.prop2;
    console.log('CHECK THESE OUT BABY',questions_increment)
    console.log(questions.name);
    return (
    <>
    <div className={style.question}>{questions.prop[questions_increment].question}</div>,
    <div className={style.choice1}>{questions.prop[questions_increment].option1}</div>,
    <div className={style.choice2}>{questions.prop[questions_increment].option2}</div>,
    <div className={style.choice3}>{questions.prop[questions_increment].option3}</div>,
    <div className={style.choice4}>{questions.prop[questions_increment].option4}</div>
    
    </>
    )
}

export default Questions
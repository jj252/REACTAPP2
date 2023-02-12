import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';

const Questions = (my_question,isFifty) =>{
    
    const test1 = my_question;
    console.log('THIS IS THE VALUE OF TEST1:',test1.prop);
    const questions = SelectQuestion(test1.prop);
    console.log(questions.name);
    return (
    <>
    <div className={style.question}>{questions.question}</div>
    <div className={style.choice1}>{questions.option1}</div>,
    <div className={style.choice2}>{questions.option2}</div>,
    <div className={style.choice3}>{questions.option3}</div>
    <div className={style.choice4}>{questions.option4}</div>
    
    </>
    )
}

export default Questions
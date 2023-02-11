import style from '../app/shared/StudentList.module.css';
import { SelectQuestion } from './Navigation';

const Questions = () =>{
    const questions = SelectQuestion();
    console.log(questions.name);
    return (
    <div className={style.question}>{questions.name}</div>
    )
}

export default Questions
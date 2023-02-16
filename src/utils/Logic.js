import Questions from "./Questions";
import style from '../app/shared/StudentList.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import {createElement,useState,useEffect,useRef} from 'react';
import { LOADED_QUESTIONS } from "../app/shared/LOADED_QUESTIONS";
import { Compare_Answer } from "./Navigation";
import yellow from '../app/assets/img/yellow.png';
import useTimer2 from "./Timer";
import { useTimer } from "react-timer-hook";
import life_lines from '../app/assets/img/lifelines.jpg';
import life_lines2 from '../app/assets/img/lifelines2.jpg';
import useSound from 'use-sound';
import mainTheme from '../app/assets/sounds/1001000 music.mp3';
import finishedMusic from '../app/assets/sounds/main.mp3';
import the_host from '../app/assets/img/Ask_the_Host.jpg';
import { SelectAllQuestions } from './Navigation';
import { SelectQuestion } from './Navigation';
import Questions2 from "./Questions2";
import { AnswersA,AnswersB,AnswersC,AnswersD } from "./Answers";

const Logic = () =>{
    
    const question_new = SelectAllQuestions();

    
    

    //set the progress to use to cycle through the game
    const [progress,setProgress] = useState(1);
    const [questionNumber,setQuestionNumber] = useState(1);
    const [counter, setCounter] = useState(30);
    const [bank,setBank] = useState(100);
    const [isFifty,setisFifty] = useState(false);
    const [isFiftyUsedOnce,setisFiftyUsedOnce] = useState(false);
    const [askTheHost,setaskTheHost] = useState(false);
    const [askTheHost1,setaskTheHost1] = useState(false);
    
    const [questionNumber2,setQuestionNumber2] = useState(1);
    console.log('THEEEEEEESE',question_new[questionNumber2].fifty);
    console.log(questionNumber2);
    //responsible for playing the main theme song
    const [play2, {stop}] = useSound(mainTheme);
    
    const getAnswers = (ans,the_progress) => {
        
        
        if(ans === question_new[the_progress].ans){
            
            
            setQuestionNumber2(the_progress +1);
            setCounter(30);

            if(the_progress === 1 ){
                console.log('I\'M IN!!!');
                setBank(100);
            }
            else if(the_progress === 2 ){
                setBank(200);
                console.log('I\'M IN!!!');
            }
            else if(the_progress === 3 ){
                setBank(300);
                console.log('I\'M IN!!!');
            }
            else if(the_progress === 4 ){
                setBank(500);
                console.log('I\'M IN!!!');
            }
            else if(the_progress === 5 ){
                setBank(1000);
                console.log('I\'M IN!!!');
            }
            else{
                setProgress(0);
            }

            
            console.log('WE\'VE GOT A MATCH');
        }
    }

    //Responsible for setting up the timer if the timer is at 0 the game ends
    useEffect(() => {
    const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter === 0){
            setProgress(0);
        }
        return () => {clearInterval(timer)};
        }, );
    //50/50 is only given one second after that it defaults back to original
    useEffect(() => {
        const timer = setTimeout(() => {
        setisFifty(false);
        }, 1000);
        return () => clearTimeout(timer);
        }, [isFifty]);

        

        //When the game ends the progress is set to zero and the game ends
        if(progress === 0){
            {stop();}
            return(
            <>
            <div className={style.game_over}>Game Over</div>
            <div className={style.regular_text}>Thank you for playing Millionaire demo version</div>
            <div className={style.regular_text2}>Your current Funds are ${bank}.00</div>
            </>
            )
            
        }
        //When progress is set to 1 the first question is loaded
        else if(progress === 1){

            if(!isFifty){
        //{play2()}
                return(
                <>
                <Button className={style.questionButton} color="info" ><Questions2 prop={question_new} prop2={questionNumber2} /></Button>,
                <Button onClick={() => {getAnswers('a',questionNumber2,);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></Button>
                <Button onClick={() => getAnswers('b',questionNumber2) } className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></Button>
                <Button onClick={() => getAnswers('c',questionNumber2) } className={style.answerButtonC} color="info" ><AnswersC prop={question_new} prop2={questionNumber2} /></Button>
                <Button onClick={() => getAnswers('d',questionNumber2) } className={style.answerButtonD} color="info" ><AnswersD prop={question_new} prop2={questionNumber2} /></Button>
                <Button onClick={() => setisFifty(true)}> THIS IS MY BUTTON</Button>
                <div className = {style.my_counter}>{counter} </div>
                </>
                )
            }
            else if(isFifty){
                

                if(question_new[questionNumber2].option1 === question_new[questionNumber2].correct  ){
                    return (
                    <>
                    <Button onClick={() => {getAnswers('a',questionNumber2,);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></Button>,
                    <Button onClick={() => {getAnswers('b',questionNumber2,);} }className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></Button>
                    </>
                    )
                }
                else if(question_new[questionNumber2].option2 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <Button onClick={() => {getAnswers('b',questionNumber2,);} }className={style.answerButtonB} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></Button>,
                        <Button onClick={() => {getAnswers('d',questionNumber2,);} }className={style.answerButtonD} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></Button>
                        </>
                        )
                }
                else if(question_new[questionNumber2].option3 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <Button onClick={() => {getAnswers('c',questionNumber2,);} }className={style.answerButtonC} color="info" ><AnswersC prop={question_new} prop2={questionNumber2} /></Button>,
                        <Button onClick={() => {getAnswers('a',questionNumber2,);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></Button>
                        </>
                        )
                }
                else if(question_new[questionNumber2].option4 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <Button onClick={() => {getAnswers('d',questionNumber2,);} }className={style.answerButtonD} color="info" ><AnswersD prop={question_new} prop2={questionNumber2} /></Button>,
                        <Button onClick={() => {getAnswers('b',questionNumber2,);} }className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></Button>
                        </>
                        )
                }
                
                }

                
        
        }
        //Loads the second set of questions and answers
        
        
}

export default Logic
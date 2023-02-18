import Questions from "./Questions";
import style from '../app/shared/StudentList.module.css';
import {  Button } from 'reactstrap';
import {createElement,useState,useEffect,useRef} from 'react';
import {useSpring,animated} from 'react-spring';
import Selected_Choice from "./Selected_Choice";
import useSound from 'use-sound';
import mainTheme from '../app/assets/sounds/1001000 music.mp3';
import two_thousand from '../app/assets/sounds/200032000.mp3';
import corrent_Ans from '../app/assets/sounds/correct answer.mp3';
import { SelectAllQuestions } from './Navigation';
import wrong_Ans from '../app/assets/sounds/wrong answer.mp3';
import Questions2 from "./Questions2";
import { AnswersA,AnswersB,AnswersC,AnswersD } from "./Answers";
import getSerious from '../app/assets/sounds/lets play.mp3';
import My_Modal from "./My_Modal";
import TheSideBar from '../utils/TheSideBar';
import fifty_Fifty from '../app/assets/img/ll_fifty.jpg';

const Logic = () =>{

    let song = new Audio(two_thousand);
    console.log('SOUND',song);
    
    

    const question_new = SelectAllQuestions();

    //set the progress to use to cycle through the game
    const [progress,setProgress] = useState(1);
    
    const [counter, setCounter] = useState(30);
    //set up the amount of money the user earned
    const [bank,setBank] = useState(0);
    //set up if the lifeline fifty fifty is turned on
    const [isFifty,setisFifty] = useState(false);
    const [isFiftyUsedOnce,setisFiftyUsedOnce] = useState(false);
    const [askTheHost,setaskTheHost] = useState(false);
    const [askTheHost1,setaskTheHost1] = useState(false);
    const [playSound,setPlaySound] = useState(false);
    const [playSound2,setPlaySound2] = useState(false);
    const [playSound3,setPlaySound3] = useState(false);
    const [questionNumber2,setQuestionNumber2] = useState(1);
    
    //the animated style for most the divs fading them
    const animatedStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{ duration:1500 }
      })

    const buttonA = useRef(null);
    const buttonB = useRef(null);
    const buttonC = useRef(null);
    const buttonD = useRef(null);

    const buttonAA = useRef(null);

    const resetButtons = () =>{
        buttonA.current.style.background = 'blue';
        buttonB.current.style.background = 'blue';
        buttonC.current.style.background = 'blue';
        buttonD.current.style.background = 'blue';
    }

    //sounds used to play in the game
    const [play_main_theme, { stop }] = useSound(mainTheme, {
        volume: 0.5,
       });
       const [two_thousand_theme, { sound }] = useSound(two_thousand, {
        volume: 0.5,
       });
       const [correct_ans, {stop3 }] = useSound(corrent_Ans, {
        volume: 0.5,
       });
       const [wrong_ans, { stop4 }] = useSound(wrong_Ans, {
        volume: 0.5,
       });
       const [lets_go_theme, { stop5 }] = useSound(getSerious, {
        volume: 0.5,
       });

    //responsible for what to do when an answer is selected
    const getAnswers = (ans,the_progress) => {
        console.log('TWO THOUSAND $$$ THEME',two_thousand_theme);
        if(ans === question_new[the_progress].ans){
            
            if (ans === 'a' && ans === question_new[the_progress].ans){
                buttonA.current.style.background = 'green';
                
                
            }
            else if (ans === 'b' && ans === question_new[the_progress].ans){
                buttonB.current.style.background = 'green';
            }
            if (ans === 'c' && ans === question_new[the_progress].ans){
                buttonC.current.style.background = 'green';
                
            }
            if (ans === 'd' && ans === question_new[the_progress].ans){
                buttonD.current.style.background = 'green';
            }
            const timer = setTimeout(() => {
                setQuestionNumber2(the_progress +1);
                
                correct_ans();
                
              }, 3000);

            if(the_progress === 1 ){
                console.log(buttonA.current);

                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                setCounter(30);
                setBank(100);
            }
            else if(the_progress === 2 ){
                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                setCounter(30);
                setBank(200);
                
            }
            else if(the_progress === 3 ){
                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                
                setCounter(30);
                setBank(300);
                
            }
            else if(the_progress === 4 ){
                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                setBank(500);
                setCounter(30);
            }
            else if(the_progress === 5 ){
                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                setBank(1000);
                setPlaySound2(true);
                setCounter(30);
            }
            else if(the_progress === 6 ){
                const timer2 = setTimeout(() => {
                    resetButtons()
                    
                  }, 1000);
                setBank(2000);
                setCounter(30);
            }
            else if(the_progress === 7 ){
                const timer2 = setTimeout(() => {
                    resetButtons();
                    
                  }, 1000);
                setBank(4000);
                setCounter(30);
            } 
            else if(the_progress === 8 ){
                const timer2 = setTimeout(() => {
                    resetButtons();
                    
                  }, 1000);
                setBank(8000);
                setCounter(30);
            } 
            else if(the_progress === 9 ){
                const timer2 = setTimeout(() => {
                    resetButtons();
                    
                  }, 1000);
                setBank(16000);
                setCounter(30);
            }
            else if(the_progress === 10 ){
                const timer2 = setTimeout(() => {
                    resetButtons();
                    setProgress(2);
                }, 1000);
                setBank(32000);
                setCounter(30);
            }
        }
        else{
            
            if (ans === 'a' && ans != question_new[the_progress].ans){
                buttonA.current.style.background = 'red';
                console.log('WE\'VE GOT A MATCHA');
                
            }
            else if (ans === 'b' && ans != question_new[the_progress].ans){
                buttonB.current.style.background = 'red';
                console.log('WE\'VE GOT A MATCHB');
            }
            if (ans === 'c' && ans != question_new[the_progress].ans){
                buttonC.current.style.background = 'red';
                console.log('WE\'VE GOT A MATCHC');
                
            }
            if (ans === 'd' && ans != question_new[the_progress].ans){
                buttonD.current.style.background = 'red';
                console.log('WE\'VE GOT A MATCHD');
            }
            const timer3 = setTimeout(() => {
                wrong_ans();
                setProgress(0);
                
              }, 3000);
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

        useEffect(() => {
            play_main_theme();
            }, [playSound]);

        useEffect(() => {
            {stop();}
            song.play();
            
            }, [playSound2]);

        useEffect(() => {
            {stop();}
            song.pause();
            lets_go_theme();
            }, [playSound3]);

        

        //When the game ends the progress is set to zero and the game ends
        if(progress === 0){
            {stop();}
            {song.pause();}
            return(
            <>
                <div className={style.theModal}><My_Modal /></div>
            </>
            )
            
        }
        //When progress is set to 1 the first question is loaded
        else if(progress === 1){
            
            if(!isFifty){
        //{play2()}
                return(
                <>
                <animated.div style={animatedStyle}>
                <Button className={style.questionButton} color="info" ><Questions2 prop={question_new} prop2={questionNumber2} /></Button>,
                <button ref={buttonA} style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('a',questionNumber2,);setPlaySound(true);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></button>
                <button ref={buttonB} style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber2);setPlaySound(true); }} className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></button>
                <button ref={buttonC} style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('c',questionNumber2);setPlaySound(true);} } className={style.answerButtonC} color="info" ><AnswersC prop={question_new} prop2={questionNumber2} /></button>
                <button ref={buttonD} style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('d',questionNumber2);setPlaySound(true);} } className={style.answerButtonD} color="info" ><AnswersD prop={question_new} prop2={questionNumber2} /></button>
                </animated.div>
                {!isFiftyUsedOnce
                ?<animated.div style={animatedStyle} className = {style.mybutton} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={fifty_Fifty}/></animated.div>
                :console.log('IT\'TS WORKING')
                }
                <animated.div style={animatedStyle} className = {style.my_counter}>{counter}</animated.div>
                <animated.div style={animatedStyle} className = {style.bankCheck}>${bank} </animated.div>
                <animated.div style={animatedStyle} className={style.sideBar}><TheSideBar prop={bank} prop2={questionNumber2}/></animated.div>
                
                
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
        else if (progress === 2){
            
            const timer2 = setTimeout(() => {
                
                setPlaySound3(true);
                setProgress(1);
            }, 5000);
            
        }
        //Loads the second set of questions and answers
        
        
}

export default Logic
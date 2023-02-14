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

const Logic = () =>{
    
    const question_new = SelectAllQuestions();

    
    console.log('THEEEEEEESE',question_new[0].question);

    //set the progress to use to cycle through the game
    const [progress,setProgress] = useState(1);
    const [questionNumber,setQuestionNumber] = useState(1);
    const [counter, setCounter] = useState(30);
    const [bank,setBank] = useState(0);
    const [isFifty,setisFifty] = useState(false);
    const [isFiftyUsedOnce,setisFiftyUsedOnce] = useState(false);
    const [askTheHost,setaskTheHost] = useState(false);
    const [askTheHost1,setaskTheHost1] = useState(false);
    
    const [questionNumber2,setQuestionNumber2] = useState(1);
    //responsible for playing the main theme song
    const [play2, {stop}] = useSound(mainTheme);
    
    const getAnswers = (ans,the_progress) => {
        
        console.log('QUESTION_NEW ANSWERS:',question_new[the_progress].ans);
        console.log('ANSWERS:',ans);
        if(ans === question_new[the_progress].ans){
            
            setQuestionNumber2(the_progress +1);
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
        {play2()}
        return(
        <>
        <Questions prop={question_new} prop2={questionNumber2}/>
        
          {!isFifty 
          ?(
          <>
          
          <Button className={style.option1} color="info" onClick={() => {getAnswers('a',questionNumber2,);setCounter(30);setBank(100);} }>A</Button>,
          <Button className={style.option2} color="info" onClick={() => getAnswers('b',questionNumber2) }>B</Button>,
          <Button className={style.option3} color="info" onClick={() => getAnswers('c',questionNumber2) }>C</Button>,
          <Button className={style.option4} color="info" onClick={() => getAnswers('d',questionNumber2) }>D</Button>
          
          </>
          )
          :(
          
          <>
          <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(2); setProgress(2);setCounter(30);setBank(100);} }>A</Button>,
          <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>
          </>
          
          )
          }
          <Button className={style.yellow} color='warning'></Button>
          <div className={style.my_counter}>{counter}</div>
          <div className={style.bankCheck}>Money Earned ${bank}.00</div>
          
          {!isFiftyUsedOnce 
          ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
          :console.log('ITS EQUAL TO TRUE')
          }
          
          </>
        )
        
        }
        //Loads the second set of questions and answers
        else if(progress === 2){
            console.log('I\'M IN THE WRONG FUNCTION');
            return(
                <>
                 <Questions prop={questionNumber}/>
                  {!isFifty 
                  ?(
                  <>
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(3); setProgress(3);setCounter(30);setBank(200);} }>C</Button>,
                  <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
                  
                  </>
                  )
                  :(
                   
                  <>
                  
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(3); setProgress(3);setCounter(30);setBank(200);} }>C</Button>
                  </>
                  )
                  }
                  <Button className={style.yellowb} color='warning'></Button>
                  <div className={style.my_counter}>{counter}</div>
                  <div className={style.bankCheck}>Money Earned ${bank}.00</div>
                  <div className={style.life_lines}><img src={life_lines}/></div>

                  {!isFiftyUsedOnce 
                  ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
                  :console.log('ITS EQUAL TO TRUE')
          }
                  </>
                )
                
                }
        //Loads the third set of questions and answers
        else if(progress === 3){
            
            return(
                <>
                 <Questions prop={questionNumber}/>
                  {!isFifty 
                  ?(
                  <>
                  <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(4); setProgress(4);setCounter(30);setBank(300);} }>A</Button>,
                  <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>,
                  <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
                  
                  </>
                  )
                  :(
                   
                  <>
                  <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(4); setProgress(4);setCounter(30);setBank(300);} }>A</Button>,
                  <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
                  </>
                  )
                  }
                  <Button className={style.yellowc} color='warning'></Button>
                  <div className={style.my_counter}>{counter}</div>
                  <div className={style.bankCheck}>Money Earned ${bank}.00</div>
                  <div className={style.life_lines}><img src={life_lines}/></div>

                  {!isFiftyUsedOnce 
                  ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
                  :console.log('ITS EQUAL TO TRUE')
          }
                  </>
                )
                
                }
        else if(progress === 4){
        
            return(
                <>
                 <Questions prop={questionNumber}/>
                  {!isFifty 
                  ?(
                  <>
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(5); setProgress(5);setCounter(30);setBank(500);} }>C</Button>,
                  <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
                  
                  </>
                  )
                  :(
                   
                  <>
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(5); setProgress(5);setCounter(30);setBank(500);} }>C</Button>
                  </>
                  )
                  }
                  <Button className={style.yellowd} color='warning'></Button>
                  <div className={style.my_counter}>{counter}</div>
                  <div className={style.bankCheck}>Money Earned ${bank}.00</div>
                  <div className={style.life_lines}><img src={life_lines}/></div>

                  {!isFiftyUsedOnce 
                  ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
                  :console.log('ITS EQUAL TO TRUE')
          }
                  </>
                )
            
        }
        else if(progress === 5){
        
            return(
                <>
                 <Questions prop={questionNumber}/>
                  {!isFifty 
                  ?(
                  <>
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(6); setProgress(6);setCounter(30);setBank(1000);} }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>,
                  <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
                  
                  </>
                  )
                  :(
                   
                  <>
                  <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(6); setProgress(6);setCounter(30);setBank(1000);} }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
                  </>
                  )
                  }
                  <Button className={style.yellowe} color='warning'></Button>
                  <div className={style.my_counter}>{counter}</div>
                  <div className={style.bankCheck}>Money Earned ${bank}.00</div>
                  <div className={style.life_lines}><img src={life_lines}/></div>

                  {!isFiftyUsedOnce 
                  ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
                  :console.log('ITS EQUAL TO TRUE')
          }
                  </>
                )
            
        }
        else if(progress === 6){
        
            return(
                <>
                 <Questions prop={questionNumber}/>
                  {!isFifty 
                  ?(
                  <>
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>,
                  <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>,
                  <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>,
                  <Button className={style.option4} color="info" onClick={() => {setQuestionNumber(0); setProgress(0);setCounter(30);setBank(2000);} }>D</Button>
                  
                  </>
                  )
                  :(
                   
                  <>
                  <Button className={style.option4} color="info" onClick={() => {setQuestionNumber(0); setProgress(0);setCounter(30);setBank(2000);} }>D</Button>,
                  <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
                  </>
                  )
                  }
                  <Button className={style.yellowe} color='warning'></Button>
                  <div className={style.my_counter}>{counter}</div>
                  <div className={style.bankCheck}>Money Earned ${bank}.00</div>
                  <div className={style.life_lines}><img src={life_lines}/></div>

                  {!isFiftyUsedOnce 
                  ?<div className={style.life_lines2} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true)}}><img src={life_lines2} alt='life lines'/></div>
                  :console.log('ITS EQUAL TO TRUE')
          }
                  </>
                )
            
        }
        else if(progress === 7){
        
            return(
            <>
              <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
              <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(7); setProgress(7);setCounter(30);} }>B</Button>
              <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowe} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines} alt='life lines'/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
              
            </>
            )
            
        }
        
}

export default Logic
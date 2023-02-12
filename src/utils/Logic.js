import Questions from "./Questions";
import style from '../app/shared/StudentList.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import {createElement,useState,useEffect,useRef} from 'react';
import { LOADED_QUESTIONS } from "../app/shared/LOADED_QUESTIONS";
import { Compare_Answer } from "./Navigation";
import yellow from '../app/assets/img/yellow.png';
import useTimer2 from "./Timer";
import { useTimer } from "react-timer-hook";
import life_lines from '../app/assets/img/lifelines.jpg'




const Logic = () =>{
    const [progress,setProgress] = useState(1);
    const [questionNumber,setQuestionNumber] = useState(1);
    const [counter, setCounter] = useState(30);
    const [bank,setBank] = useState(0);
    const [isFifty,setisFifty] = useState(false);

    // Third Attempts
    useEffect(() => {
    const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter === 0){
            setProgress(0);
        }
        return () => {clearInterval(timer)};
        }, [counter]);

        if(progress === 0){
            console.log('THE PROGRESS IS AT 0');
        }

        else if(progress === 1){
        
        return(
        <>
         <Questions prop={questionNumber}/>
          <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(2); setProgress(2);setCounter(30);setBank(100);} }>A</Button>
          <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>
          <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
          <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
          <Button className={style.yellow} color='warning'></Button>
          <div className={style.my_counter}>{counter}</div>
          <div className={style.bankCheck}>Money Earned ${bank}.00</div>
          <div className={style.life_lines}><img src={life_lines}/></div>
          <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
          </>
        )
        
        }
        else if(progress === 2){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
              <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>
              <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(3); setProgress(3);setCounter(30);setBank(200);} }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowb} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines}/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
              </>
            )
            
        }
        else if(progress === 3){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(4); setProgress(4);setCounter(30);setBank(300);} }>A</Button>
              <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>
              <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowc} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines}/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
              </>
            )
            
        }
        else if(progress === 4){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
              <Button className={style.option2} color="info" onClick={() => setProgress(0) }>B</Button>
              <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(5); setProgress(5);setCounter(30);setBank(500);} }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowd} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines}/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
              </>
            )
            
        }
        else if(progress === 5){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
              <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(6); setProgress(6);setCounter(30);setBank(1000);} }>B</Button>
              <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowe} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines}/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
              </>
            )
            
        }
        else if(progress === 6){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => setProgress(0) }>A</Button>
              <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(7); setProgress(7);setCounter(30);setBank(1000);} }>B</Button>
              <Button className={style.option3} color="info" onClick={() => setProgress(0) }>C</Button>
              <Button className={style.option4} color="info" onClick={() => setProgress(0) }>D</Button>
              <Button className={style.yellowe} color='warning'></Button>
              <div className={style.my_counter}>{counter}</div>
              <div className={style.bankCheck}>Money Earned ${bank}.00</div>
              <div className={style.life_lines}><img src={life_lines}/></div>
              <div className={style.life_lines2}><img src={life_lines} alt='life lines'/></div>
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
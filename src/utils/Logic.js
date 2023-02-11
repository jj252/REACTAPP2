import Questions from "./Questions";
import style from '../app/shared/StudentList.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import {createElement,useState,useEffect,useRef} from 'react';

const Logic = () =>{
    const [progress,setProgress] = useState(1);
    const [questionNumber,setQuestionNumber] = useState(1);
        if(progress === 1){
        
        return(
        <>
         <Questions prop={questionNumber}/>
          <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(2); setProgress(2)} } >A</Button>
          <Button className={style.option2} color="info" >B</Button>
          <Button className={style.option3} color="info" >C</Button>
          <Button className={style.option4} color="info" >D</Button>
          </>
        )
        
        }
        else if(progress === 2){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info">A</Button>
              <Button className={style.option2} color="info">B</Button>
              <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(3); setProgress(3)} }>C</Button>
              <Button className={style.option4} color="info" >D</Button>
              </>
            )
            
            }
            else{
                return console.log('Youve finished the game');
            }
}

export default Logic
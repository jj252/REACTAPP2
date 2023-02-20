import {useRef,useEffect,useState} from 'react';
import style from '../app/shared/StudentList.module.css';
import myImage from '../app/assets/img/yellow.png';

const TheSideBar = (cash_progress) =>{
    console.log(cash_progress.prop);
    let the_Question_number = cash_progress.prop2;
    const [toggle,setToggle] = useState(false);
    
    useEffect(() => {
        setStyle(cash_progress.prop);
        setToggle(true);
        }, [the_Question_number]);

    const goingFor100 = useRef(null);
    const goingFor200 = useRef(null);
    const goingFor300 = useRef(null);
    const goingFor500 = useRef(null);
    const goingFor1000 = useRef(null);
    const goingFor2000 = useRef(null);
    const goingFor4000 = useRef(null);
    const goingFor8000 = useRef(null);
    const goingFor16000 = useRef(null);
    const goingFor32000 = useRef(null);
    const goingFor64000 = useRef(null);
    const goingFor125000 = useRef(null);
    const goingFor250000 = useRef(null);
    const goingFor500000 = useRef(null);
    const goingFor1000000 = useRef(null);
    
    

    let basicBtn2 = {
        position:'absolute',
        background: 'yellow',
        opacity:'0.5',
        
    }
    const setStyle = (progress3) =>{
        console.log('I\'M IN THE FUNCTION');
        
        if (progress3 === 0){
            goingFor100.current.style.background = 'yellow';
            goingFor100.current.style.color = 'black';
            }
        
        if (progress3 === 100){
        goingFor200.current.style.background = 'yellow';
        goingFor200.current.style.color = 'black';
        goingFor100.current.style.background = 'transparent';
        }
        else if(progress3 === 200){
        goingFor300.current.style.background = 'yellow';
        goingFor300.current.style.color = 'black';
        goingFor200.current.style.background = 'transparent';
        
        }
        else if(progress3 === 300){
        goingFor500.current.style.background = 'yellow';
        goingFor500.current.style.color = 'black';
        goingFor300.current.style.background = 'transparent';
        goingFor200.current.style.color = 'black';
        }
        else if(progress3 === 500){
        goingFor1000.current.style.background = 'yellow';
        goingFor1000.current.style.color = 'black';
        goingFor500.current.style.background = 'transparent';
        }
        else if(progress3 === 1000){
        goingFor2000.current.style.background = 'yellow';
        goingFor2000.current.style.color = 'black';
        goingFor1000.current.style.background = 'transparent';
        }
        else if(progress3 === 2000){
        goingFor4000.current.style.background = 'yellow';
        goingFor4000.current.style.color = 'black';
        goingFor2000.current.style.background = 'transparent';
        }

        else if(progress3 === 4000){
            goingFor8000.current.style.background = 'yellow';
            goingFor8000.current.style.color = 'black';
            goingFor4000.current.style.background = 'transparent';
            }
            else if(progress3 === 8000){
            goingFor16000.current.style.background = 'yellow';
            goingFor16000.current.style.color = 'black';
            goingFor8000.current.style.background = 'transparent';
            }
            else if(progress3 === 16000){
            goingFor32000.current.style.background = 'yellow';
            goingFor32000.current.style.color = 'black';
            goingFor16000.current.style.background = 'transparent';
            }
            else if(progress3 === 32000){
            goingFor64000.current.style.background = 'yellow';
            goingFor64000.current.style.color = 'black';
            goingFor32000.current.style.background = 'transparent';
            }
    }
    
    return (
        <>
          <div className={style.sideBar2}>       
            <div ref={goingFor1000000} style={{background: 'transparent', color:'green'}}>15 $1,000,000</div>
            <div ref={goingFor500000} style={{background: 'transparent', color:'white'}}>14 $500,000</div>
            <div ref={goingFor250000} style={{background: 'transparent', color:'white'}}>13 $250,000</div>
            <div ref={goingFor125000} style={{background: 'transparent', color:'white'}}>12 $125,000</div>
            <div ref={goingFor64000} style={{background: 'transparent', color:'white'}}>11 $64,000</div>
            <div ref={goingFor32000} style={{background: 'transparent', color:'green'}}>10 $32,000</div>
            <div ref={goingFor16000} style={{background: 'transparent', color:'white'}}>9 $16,000</div>
            <div ref={goingFor8000} style={{background: 'transparent', color:'white'}}>8 $8,000</div>
            <div ref={goingFor4000} style={{background: 'transparent', color:'white'}}>7 $4,000</div>
            <div ref={goingFor2000} style={{background: 'transparent', color:'white'}}>6 $2,000</div>
            <div ref={goingFor1000} style={{background: 'transparent', color:'green'}}>5 $1,000</div>
            <div ref={goingFor500} style={{background: 'transparent', color:'white'}}>4 $500</div>
            <div ref={goingFor300} style={{background: 'transparent', color:'white'}}>3 $300</div>
            <div  ref={goingFor200} style={{background: 'transparent', color:'white'}}>2 $200</div>
            <div ref={goingFor100} style={{background: 'transparent', color:'white',}}>1 $100</div>
            </div> 
            
            
            
            
        </>
        
    )
    
}

export default TheSideBar;
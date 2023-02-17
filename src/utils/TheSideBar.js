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
        if (progress3 === 100){
        goingFor200.current.style.background = 'yellow';
        }
        else if(progress3 === 200){
        goingFor300.current.style.background = 'yellow';
        goingFor200.current.style.background = 'transparent';
        }
        else if(progress3 === 300){
        goingFor500.current.style.background = 'yellow';
        goingFor300.current.style.background = 'transparent';
        }
        else if(progress3 === 500){
        goingFor1000.current.style.background = 'yellow';
        goingFor500.current.style.background = 'transparent';
        }
        else if(progress3 === 1000){
        goingFor2000.current.style.background = 'yellow';
        goingFor1000.current.style.background = 'transparent';
        }
        else if(progress3 === 2000){
        goingFor4000.current.style.background = 'yellow';
        goingFor2000.current.style.background = 'transparent';
        }

        else if(progress3 === 4000){
            goingFor8000.current.style.background = 'yellow';
            goingFor4000.current.style.background = 'transparent';
            }
            else if(progress3 === 8000){
            goingFor16000.current.style.background = 'yellow';
            goingFor8000.current.style.background = 'transparent';
            }
            else if(progress3 === 16000){
            goingFor32000.current.style.background = 'yellow';
            goingFor16000.current.style.background = 'transparent';
            }
            else if(progress3 === 32000){
            goingFor64000.current.style.background = 'yellow';
            goingFor32000.current.style.background = 'transparent';
            }
    }
    
    return (
        <>
          <div className={style.sideBar2}>       
            <div ref={goingFor1000000} style={{background: 'transparent', color:'green'}}>$1,000,000</div>
            <div ref={goingFor500000} style={{background: 'transparent', color:'white'}}>$500,000</div>
            <div ref={goingFor250000} style={{background: 'transparent', color:'white'}}>$250,000</div>
            <div ref={goingFor125000} style={{background: 'transparent', color:'white'}}>$125,000</div>
            <div ref={goingFor64000} style={{background: 'transparent', color:'white'}}>$64,000</div>
            <div ref={goingFor32000} style={{background: 'transparent', color:'green'}}>$32,000</div>
            <div ref={goingFor16000} style={{background: 'transparent', color:'white'}}>$16,000</div>
            <div ref={goingFor8000} style={{background: 'transparent', color:'white'}}>$8,000</div>
            <div ref={goingFor4000} style={{background: 'transparent', color:'white'}}>$4,000</div>
            <div ref={goingFor2000} style={{background: 'transparent', color:'white'}}>$2,000</div>
            <div ref={goingFor1000} style={{background: 'transparent', color:'green'}}>$1,000</div>
            <div ref={goingFor500} style={{background: 'transparent', color:'white'}}>$500</div>
            <div ref={goingFor300} style={{background: 'transparent', color:'white'}}>$300</div>
            <div  ref={goingFor200} style={{background: 'transparent', color:'white'}}>$200</div>
            <div ref={goingFor100} style={{background: 'transparent', color:'white',}}>$100</div>
            </div> 
            
            
            
            
        </>
        
    )
    
}

export default TheSideBar;
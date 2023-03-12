
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';

import { Container, Row, Col,  } from 'reactstrap';

import style from '../src/app/shared/StudentList.module.css';

import Logic from './utils/Logic';

import game_default3 from '../src/app/assets/img/game_default3.jpg';

import Home_Screen from './utils/Home_Screen'
import {useState} from 'react';



import settings from '../src/app/assets/img/settings2.jpg';
import welcome from '../src/app/assets/img/welcome.jpg';
import {useSpring,animated} from 'react-spring';
import QuestionForm from './utils/QuestionForm';
import black from '../src/app/assets/img/black_wallpaper.jpg';




function App() {

  

  const animatedStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config:{ duration:1500 }
  })
  
  const [startGame,setStartGame] = useState(false);
  const [open_Settings,set_open_Settings] = useState(false);

if (startGame){
  return(
  <>
  
  <Container>
    <Row>
      
      <Col className={style.main_container} xs='12' sm='5' md='12' >
      <div><img src={game_default3}></img><Logic /></div>
      
      </Col>
    </Row>
  </Container>
  </>
  )
}

if (open_Settings){
  return(
    <>
    <animated.div style={animatedStyle} className={style.introduction}><img style={{width:'85%', height:'540px' }} src={welcome}/>
        <div className={style.main_logo4}><QuestionForm /></div>
    </animated.div>
    <button onClick={()=> setStartGame(true)} style={{background: 'blue', color:'white' }} className={style.introduction2} >START GAME</button>
    <div><img src={black}/></div>
    <div className={style.create_question}>Create Your Own Question</div>
    </>
    )
}


else{
  return (
  
  <>
        
        <animated.div style={animatedStyle} className={style.introduction}><img style={{width:'85%', height:'540px' }} src={welcome}/>,
        <div className={style.main_logo3}><img src={settings} /></div>
        </animated.div>
        <button onClick={()=> setStartGame(true)} style={{background: 'blue', color:'white' }} className={style.introduction2} >START GAME</button>
        <button onClick={()=> set_open_Settings(true)} style={{background: 'blue', color:'white' }} className={style.introduction3} >SETTINGS</button>
        </>
  )
}
  
        
        
    
  
}

export default App;

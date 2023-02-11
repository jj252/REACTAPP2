
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsitesList';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState,useEffect,useRef} from 'react';
import {CreatedElement} from './components/Misc';
import {CreatedElement2} from './components/Misc';
import {New_Button} from './components/Misc';
import {New_Button2} from './components/Misc';
import  My_Form  from './components/My_Form';
import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes, Route} from  'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import style from '../src/app/shared/StudentList.module.css';
import AnimatedText from '../src/utils/AnimatedText';
import Questions from './utils/Questions';
import Choices from './utils/Choices';



function App() {

  const [questionNumber,setQuestionNumber] = useState(1);

  return(
  <>
  <Header />
  <Container >
    <Row>
      <Col md='9' className={style.container}>
          
      </Col>
      <Col md='3' className={style.money_bar}>
          
      </Col>
    </Row>
    <Row>
      <Col md='12' className={style.question_menu}>
          <Questions prop={questionNumber}/>
          <Button className={style.option1} color="info" onClick={() => setQuestionNumber(2) }>A</Button>
          <Button className={style.option2} color="info" onClick={() => setQuestionNumber(2) }>B</Button>
          <Button className={style.option3} color="info" onClick={() => setQuestionNumber(2) }>C</Button>
          <Button className={style.option4} color="info" onClick={() => setQuestionNumber(2) }>D</Button>
      </Col>
    </Row>
  
  
  </Container>
  </>
  );
        
        
    
  
}

export default App;

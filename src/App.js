
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

  return(
  <>
  <Header />
  <Container >
    <Row>
      <Col md='7' className={style.container}>
          
      </Col>
      <Col md='5' className={style.money_bar}>
          
      </Col>
    </Row>
    <Row>
      <Col md='12' className={style.question_menu}>
          <Questions />
          <Choices />
      </Col>
    </Row>
  
  
  </Container>
  </>
  );
        
        
    
  
}

export default App;

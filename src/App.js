
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';

import { Container, Row, Col,  } from 'reactstrap';

import style from '../src/app/shared/StudentList.module.css';

import Logic from './utils/Logic';

import game_default3 from '../src/app/assets/img/game_default3.jpg';



function App() {
  let progress = 1
  
  
  return(
  <>
  
  <Container>
    <Row>
      
      <Col className={style.main_container} xs='1' sm='5' md='12' >
      <div><img src={game_default3}></img><Logic /></div>
        
      </Col>
    </Row>
    
      
    
    
  
  
  </Container>
  </>
  )
  
        
        
    
  
}

export default App;

import {useSpring, animated} from 'react-spring';
import { Button } from 'reactstrap';
import style from '../app/shared/StudentList.module.css';



const AnimatedText = () =>{

    

    const animatedStyle = useSpring({
        loop: { reverse: true },
        from: { opacity: 0, },
        to: { opacity: 1 },
      })

    return (
        <>
        <animated.div style={animatedStyle} className={style.col}>Click Start</animated.div>
        <Button className={style.mybutton}>Start</Button>
        </>
    )

    
}

export default AnimatedText
import {useState} from 'react';
import {Button, Modal, ModalHeader,ModalBody} from 'reactstrap';
import {useSpring,animated} from 'react-spring';
import style from '../app/shared/StudentList.module.css';

const My_Modal = () =>{
    console.log('IM IN THE MODAL');
    const animatedStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{ duration:1500 }
      })

      const set_Progress = () =>{
        return  1;
          }

    const [modalOpen,setModalOpen] = useState(true);
    return(
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false) } className={style.theModal} style={{ color:'red'}} >
                    GAME OVER
                </ModalHeader>
                <ModalBody onClick={() => {set_Progress()} }>
                    CURRENT FUNDS:
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default My_Modal;
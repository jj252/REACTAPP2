import {useState} from 'react';
import {Button, Modal, ModalHeader,ModalBody} from 'reactstrap';
import {useSpring,animated} from 'react-spring';
import style from '../app/shared/StudentList.module.css';

const My_Modal = () =>{

    const [modalOpen,setModalOpen] = useState(true);
    return(
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false) } className={style.theModal} style={{ color:'red'}} >
                    GAME OVER
                </ModalHeader>
                <ModalBody>
                    CURRENT FUNDS:
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default My_Modal;
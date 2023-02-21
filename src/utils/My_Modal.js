import {useState} from 'react';
import {Button, Modal, ModalHeader,ModalBody} from 'reactstrap';
import {useSpring,animated} from 'react-spring';
import style from '../app/shared/StudentList.module.css';

const My_Modal = (the_bank) =>{

    if(the_bank.prop < 1000){
        the_bank = 0
    }
    else if(the_bank.prop > 1000 && the_bank.prop < 32000 ){
        the_bank = 1000
    }
    else if(the_bank.prop > 32000 && the_bank.prop < 1000000 ){
        the_bank = 32000
    }
    else{
        the_bank = 1000000
    }

    const [modalOpen,setModalOpen] = useState(true);
    return(
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false) } className={style.theModal} style={{ color:'red'}} >
                    GAME OVER
                </ModalHeader>
                <ModalBody>
                    CURRENT FUNDS:$ {the_bank}
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default My_Modal;
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import {useState} from 'react';


const My_Modal = (the_bank) =>{
    
    let gameState = 'GAME OVER';

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
        gameState = 'WINNER';
    }

    const [modalOpen,setModalOpen] = useState(true);
    return(
        <>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false) } style={{background: 'blue'}}>
                    <div style={{background: 'blue', color:'orange' }}>{gameState}</div>
                </ModalHeader>
                <ModalBody>
                    CURRENT FUNDS:${the_bank}
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default My_Modal;
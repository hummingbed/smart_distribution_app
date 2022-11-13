import Nav from '../ReusableComponents/Nav';
import ButtonComponent from '../ReusableComponents/ButtonComponent'
import InputFieldcomponent from '../ReusableComponents/InputFieldcomponent';
import Button from 'react-bootstrap/Button';
import ModalComponent from '../ReusableComponents/ModalComponent'
import React from 'react';
// import { Link } from 'react-router-dom';

const PageTransferComponent = () => {
    const transferStle = { backgroundColor: '#FFE0AB', marginTop: '5rem', height: '5rem' };
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />
            <div className="page-transfer-component">
                <form action="" >
                    <div className='page-transfer-component-header'>
                        <h3>Package Transfer</h3>
                        <p className='text-center'>Enter Driver`s unique ID to transfer this Package</p>
                    </div>
                    <InputFieldcomponent />
                    <a href=""></a>
                    <Button style={transferStle} onClick={() => setModalShow(true)}>
                        <p className='modal-button-style'> Send Request</p>
                    </Button>

                    <ModalComponent
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </form>
            </div>
        </div>
    );
}

export default PageTransferComponent;
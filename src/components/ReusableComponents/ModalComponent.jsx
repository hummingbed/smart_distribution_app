import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

function ModalComponent(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='spinner'>
                <Spinner animation="border" size="lg" variant="warning" role="status">
                    <span className="visually-hidden ">Loading...</span>
                </Spinner>
            </div>
            <div className='modal-component-page'>
                <Modal.Body>
                    <h4 className='text-center modal-message-head'>Request was sent successfully</h4>
                    <p className='text-center modal-message' >
                        We are notifying the driver about your request
                    </p>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default ModalComponent;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <ModalComponent
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

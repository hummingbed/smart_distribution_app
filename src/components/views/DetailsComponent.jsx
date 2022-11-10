import Nav from '../ReusableComponents/Nav'
import { Check } from 'react-bootstrap-icons';
const DetailsComponent = () => {
    //BiCheckCircleFill
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const date = `${dd}/${mm}/${yyyy}`;
    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />
            <div className="detailes-component">
                <Check className='check-icon' color='white' />

                <h4 className='text-center'>Delivery completed</h4>
                <hr />

                <div className="tracking">
                    <span className='tracking-num'>
                        <p>Tracking Number</p>
                        <h5>#224456788676</h5>
                    </span>

                    <span className='date'>
                        <p>Date</p>
                        <h5>{date}</h5>
                    </span>

                    <span className='time'>
                        <p>Time</p>
                        <h5>6:00PM</h5>
                    </span>
                </div>
                <div className="request-status">
                    <h2 className='request-status-left'>Request Status:</h2>
                    <h2 className='request-status-green'>Delivered</h2>
                </div>

                <div className="request-detail-component">
                    <span><h2 className='request-detail-component-header'>Request Details</h2></span>
                    <div className="request-detail-component-from reciever-margin-top">
                        <span><p>From</p></span>
                        <span><h3>Pipe junction, Ilorin</h3></span>
                    </div>

                    <div className="request-detail-component-to reciever-margin-top">
                        <span><p>To</p></span>
                        <span><h3>Roadblock garage, Akure</h3></span>
                    </div>

                    <div className="request-detail-component-transfer-location reciever-margin-top">
                        <span><p>Transfer Location</p></span>
                        <span><h3>Mayfair Bustop, Ile-Ife</h3></span>
                    </div>

                    <div className='request-detail-component-reciever reciever-margin-top'>
                        <div>
                            <span><p>Reciever Name</p></span>
                            <span><h3>Folakemi Olayemi</h3></span>
                        </div>

                        <div>
                            <span><p>Reciever Gender</p></span>
                            <span><h3>Female</h3></span>
                        </div>
                    </div>

                    <div className="request-detail-component-reciever-contact reciever-margin-top">
                        <span>
                            <p>Reciever Contact</p>
                            <h3>+234 815 6322 1716</h3>
                        </span>

                        <span><h3 className='request-detail-component-email'>Folakemi@gmail.com</h3></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsComponent;
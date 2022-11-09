import Nav from '../ReusableComponents/Nav';
const DeliveryComponent = () => {

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const date = `${dd}/${mm}/${yyyy}`;

    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />

            <h4 className='text-center'>Delivery Details</h4>
            <div className='delivery-component'>
                <div className="tracker">

                    <div className="tracking-number">
                        <p>Tracking Number</p>
                        <h5>#22445678676</h5>
                    </div>

                    <div className="delivery-date">
                        <p>Delivery date</p>
                        <h5>{date}</h5>
                    </div>
                </div>

                <div className="destination">

                    <div className="destination-details-top destination-margin">
                        <p>destination details</p>
                    </div>

                    <div className="destination-details destination-margin">
                        <h5>Delivery Address</h5>
                        <p>Roadblock garage, Akure</p>
                    </div>

                    <div className="reciever">
                        <div className="reciever-head destination-margin">
                            <div className='reciever-name'>
                                <p>Reciever Name</p>
                                <h5>Folakemi Olayemi</h5>
                            </div>

                            <div className='reciever-gender'>
                                <p>Reciever Gender</p>
                                <h5>Female </h5>
                            </div>
                        </div>

                        <div className='reciever-contact '>
                            <span>
                                <p>Reciever Contact</p>
                                <h5>+234 080 6887 4356 </h5>
                            </span>
                            <span className="email">
                                <h5>folakemi@gmail.com</h5>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pickup">
                    <div className="pickup-details pickup-margin">
                        <p>Pickup details</p>
                    </div>

                    <div className="pickup-point pickup-margin" >
                        <p>Pickup point</p>
                        <h5>Pipe Junction, Ilorin</h5>
                    </div>

                    <div className="sender pickup-margin">
                        <div className="sender-name">
                            <p>Sender Name</p>
                            <h5>Chika Ebube</h5>
                        </div>

                        <div className="sender-contact">
                            <p>Sender Contact</p>
                            <h5>+234 080 6887 4356 </h5>
                        </div>
                    </div>
                </div>
                <div className="package-details pickup-margin">
                    <span>
                        <p>PACKAGE DETAILS</p>
                    </span>
                    <span>
                        <p>Content of Package</p>
                        <h5>Fabric</h5>
                    </span>
                </div>
                <input className='button' type="button" value="Start Trip" />
            </div>
        </div>
    );
}

export default DeliveryComponent;
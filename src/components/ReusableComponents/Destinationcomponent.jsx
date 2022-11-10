const Destinationcomponent = () => {
    return (
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
    );
}

export default Destinationcomponent;
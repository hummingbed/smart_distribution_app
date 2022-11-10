const PickupComponent = () => {
    return (
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
    );
}

export default PickupComponent;
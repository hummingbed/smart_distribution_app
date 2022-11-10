import Nav from '../ReusableComponents/Nav';
import ButtonComponent from '../ReusableComponents/ButtonComponent'
import InputFieldcomponent from '../ReusableComponents/InputFieldcomponent';
const ConfirmDeliveryComponent = () => {
    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />
            <div className="page-transfer-component">
                <form action="">
                    <div className='page-transfer-component-header'>
                        <h3>Confirm Delivery</h3>
                        <p className='text-center'>Tell the reciever to input the delivery code</p>
                    </div>
                    <InputFieldcomponent inputHeader="Delivery code" />
                    <span className='reciever-name-span'>
                        <h4 className='reciever-name-span-margin-top'>Reciever Details</h4>
                        <div className="reciever-name reciever-name-span-margin-top">
                            <div>
                                <p>Name</p>
                                <h5>Folakemi Olayemi</h5>
                            </div>
                            <div>
                                <p>Gender</p>
                                <h5>Female</h5>
                            </div>
                        </div>

                        <div className="reciever-contact reciever-name-span-margin-top">
                            <div>
                                <p>Contact</p>
                                <h5>Folakemi@gmail.com</h5>
                            </div>

                            <div>
                                <h5 className='reciever-email'>Folakemi@gmail.com</h5>
                            </div>
                        </div>
                    </span>
                    <ButtonComponent btnText="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ConfirmDeliveryComponent;
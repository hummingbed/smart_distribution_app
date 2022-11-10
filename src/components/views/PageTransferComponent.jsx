import Nav from '../ReusableComponents/Nav';
import ButtonComponent from '../ReusableComponents/ButtonComponent'
import InputFieldcomponent from '../ReusableComponents/InputFieldcomponent';

const PageTransferComponent = () => {
    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />
            <div className="page-transfer-component">
                <form action="">
                    <div className='page-transfer-component-header'>
                        <h3>Package Transfer</h3>
                        <p className='text-center'>Enter Driver`s unique ID to transfer this Package</p>
                    </div>
                    <InputFieldcomponent />
                    <span></span>
                    <ButtonComponent btnText="Send Request"/>
                </form>
            </div>
        </div>
    );
}

export default PageTransferComponent;
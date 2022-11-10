import Nav from '../ReusableComponents/Nav';
import ButtonComponent from '../ReusableComponents/ButtonComponent'
import Destinationcomponent from '../ReusableComponents/Destinationcomponent'
import PickupComponent from '../ReusableComponents/PickupComponent'
import PackageCopmpnent from '../ReusableComponents/PackageCopmpnent'
import TrackerComponent from '../ReusableComponents/TrackerComponent'

const RequestTransferComponent = () => {
    return (
        <div className='home-component'>
            <Nav hidePlusIcon="none" />

            <h4 className='text-center'>Delivery Details</h4>
            <div className='delivery-component'>
                <TrackerComponent />
                <Destinationcomponent />
                <PickupComponent />
                <PackageCopmpnent />
                <ButtonComponent btnText="I`ve arrived at location"/>
            </div>
        </div>
    );
}
export default RequestTransferComponent;
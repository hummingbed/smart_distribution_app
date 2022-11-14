import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from 'mdb-react-ui-kit';
import Nav from '../ReusableComponents/Nav';
import { Link, useLocation } from 'react-router-dom';


const RequestComponent = () => {

    const location = useLocation();
    const newLocations = location.pathname

    const strpString = newLocations.replace('/request/', '');

    if (strpString === 'tab1') {
        var tabs = 'tab1'
        console.log(1);
    }
    if (strpString === 'tab2') {
        var tabs = 'tab2'
    }
    if (strpString === 'tab3') {
        var tabs = 'tab3'
    }
    if (strpString === '/request') {
        var tabs = 'tab1'
    }

    const [basicActive, setBasicActive] = useState(tabs);
    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    return (
        <div className='home-component'>

            <Nav />
            <div className='tab-component'>
                <MDBTabs className='mb-3 tab-name'>
                    <MDBTabsItem>
                        <MDBTabsLink className='text-dark' style={{ backgroundColor: '#F5F5F5', border: 'none' }} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            <h5 className='tab-name-style'> Request</h5>
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem >
                        <MDBTabsLink className='text-dark' style={{ backgroundColor: '#F5F5F5', border: 'none' }} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            <h5 className='tab-name-style'>In Transit</h5>
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink className='text-dark' style={{ backgroundColor: '#F5F5F5', border: 'none' }} onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            <h5 className='tab-name-style'>Delivered</h5>
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={basicActive === 'tab1'}>
                        <p className="border-left border-tab-top" />
                        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor: '#F5F5F5' }} light>
                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>
                                    <Link to='/delivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>
                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <Link to='/delivery' >
                                        <div className="request-text">
                                            <h5>Transfer Request</h5>
                                            <p>from: James Gabriel</p>
                                        </div>
                                    </Link>
                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>
                                    <Link to='/delivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>
                                </div>
                            </MDBListGroupItem>

                        </MDBListGroup>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab2'}>
                        <p className="border-center border-tab-top" />
                        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor: '#F5F5F5' }} light>
                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>
                                    <Link to='/transfer' >
                                        <div className="request-text">
                                            <h5>#22445678676</h5>
                                            <p>To: Akure</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>
                                    <Link to='/transfer' >
                                        <div className="request-text">
                                            <h5>#123456732578</h5>
                                            <p>To: Akure</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>
                                    <Link to='/transfer' >
                                        <div className="request-text">
                                            <h5>#123456732578</h5>
                                            <p>To: Abuja</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>
                                    <Link to='/transfer' >
                                        <div className="request-text">
                                            <h5>#123456732578</h5>
                                            <p>To: Osun</p>
                                        </div>
                                    </Link>
                                </div>
                            </MDBListGroupItem>

                        </MDBListGroup>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab3'}>
                        <p className="border-right border-tab-top" />
                        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor: '#F5F5F5' }} light>
                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>
                                    <Link to='/confirmdelivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <Link to='/confirmdelivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <Link to='/confirmdelivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>
                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component" style={{ cursor: 'pointer' }}>

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <Link to='/confirmdelivery' >
                                        <div className="request-text">
                                            <h5>Pickup Request</h5>
                                            <p>from: Wharehouse Admin</p>
                                        </div>
                                    </Link>

                                </div>
                            </MDBListGroupItem>

                        </MDBListGroup>
                    </MDBTabsPane>

                </MDBTabsContent>
            </div>
        </div >
    );
}

export default RequestComponent;
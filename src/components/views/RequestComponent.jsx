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

const RequestComponent = () => {

    const [basicActive, setBasicActive] = useState('tab1');
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
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Transfer Request</h5>
                                        <p>from: James Gabriel</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                        </MDBListGroup>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab2'}>
                        <p className="border-center border-tab-top" />
                        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor: '#F5F5F5' }} light>
                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>

                                    <div className="request-text">
                                        <h5>#22445678676</h5>
                                        <p>To: Akure</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>

                                    <div className="request-text">
                                        <h5>#123456732578</h5>
                                        <p>To: Akure</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>

                                    <div className="request-text">
                                        <h5>#123456732578</h5>
                                        <p>To: Abuja</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'><MDBIcon className='display-4' color='warning' fas icon="ellipsis-h" /></span>
                                    </div>

                                    <div className="request-text">
                                        <h5>#123456732578</h5>
                                        <p>To: Osun</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                        </MDBListGroup>
                    </MDBTabsPane>

                    <MDBTabsPane show={basicActive === 'tab3'}>
                        <p className="border-right border-tab-top" />
                        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor: '#F5F5F5' }} light>
                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

                                </div>
                            </MDBListGroupItem>

                            <MDBListGroupItem >
                                <div className="request-component">

                                    <div className='request-question-logo'>
                                        <span className='question-logo'>?</span>
                                    </div>

                                    <div className="request-text">
                                        <h5>Pickup Request</h5>
                                        <p>from: Wharehouse Admin</p>
                                    </div>

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
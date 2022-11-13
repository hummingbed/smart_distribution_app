import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import Nav from '../ReusableComponents/Nav';

class ScanComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        // this.setState({
        //     result: data,
        // })
        if(data){
            console.log(123)
        }else{
            console.log('090')
        }
        
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 350,
        }

        return (
            <div className='home-component'>
                <Nav hidePlusIcon="none" />
                <form action="">
                    <div className='scan-component'>
                        <h3 className='text-center'>Place the QR code within the box</h3>
                        <p className='text-center'>scanning will start automatically</p>
                        <QrReader
                            delay={this.state.delay}
                            style={previewStyle}
                            onError={this.handleError}
                            onScan={this.handleScan}
                        />
                        <p>{this.state.result}</p>
                        <input className='button' type="button" value="Cancel" />
                    </div>
                </form>

            </div>
        )
    }
}

export default ScanComponent;
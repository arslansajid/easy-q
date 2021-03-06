import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QRScanner extends Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
            if(!!this.props.setResult) {
                this.props.setResult(data);
                this.props.showSuccess(true);
            }
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "350px", maxHeight: "350px" }}
                />
                {/* <p>{this.state.result}</p> */}
            </div>
        )
    }
}

export default QRScanner;

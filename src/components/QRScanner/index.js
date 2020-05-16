import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QRScanner extends Component {
    state = {
        result: 'No result',
        error: 'No error'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err);
        this.setState({
            error: err.message
        })
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "350px", maxHeight: "350px" }}
                    legacyMode={true}
                />
                <p>{this.state.result}</p>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default QRScanner;

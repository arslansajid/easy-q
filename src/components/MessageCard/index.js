import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Avatar from 'react-avatar';

const MessageCard = (props) => {
    const { name, message, time } = props;
    return (
        <Card className="message-card">
            <Container className="py-3">
                <Row className="py-2">
                    <Col className="col-4 col-lg-3 col-md-3 col-sm-3">
                        <Avatar
                            className="message-avatar"
                            name={name}
                        />
                    </Col>
                    <Col className="col-8 col-lg-9 col-md-9 col-sm-9 d-flex flex-column justify-content-between">
                        <h5 className="text-black">{message}</h5>
                        <div className="d-flex">
                            <h5 className="mr-2">Received at:</h5>
                            <h5 className="text-black">{time}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="d-flex p-3 align-items-center">
                <Avatar
                    className="message-avatar"
                    name={name}
                />
                <div className="d-flex flex-column justify-content-between">
                    <p className="text-black">{message}</p>
                    <div className="d-flex">
                        <p className="mr-2">Received at:</p>
                        <p className="text-black">{time}</p>
                    </div>
                </div>
            </div> */}
        </Card>
    )
}

export default MessageCard;

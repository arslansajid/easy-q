import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Avatar from 'react-avatar';

const MessageCard = (props) => {
    const { name, message, time } = props;
    return (
        <Card className="message-card">
            {/* <Container className="py-3">
                <Row>
                    <Col className="col-3 py-2">
                        <Avatar
                            className="message-avatar"
                            name={name}
                        />
                    </Col>
                    <Col className="col-9 py-2 d-flex flex-column justify-content-between">
                        <p className="text-black">{message}</p>
                        <div className="d-flex">
                            <p className="mr-2">Received at:</p>
                            <p className="text-black">{time}</p>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            <div className="d-flex p-3 align-items-center">
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
            </div>
        </Card>
    )
}

export default MessageCard;

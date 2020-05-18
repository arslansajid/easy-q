import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";

const MessageCard = (props) => {
    const { name, message, time, toggleChatWidget, msg } = props;
    const isMobile = window.screen.width < 500;
    console.log(isMobile)
    if (isMobile) {
        return (
            <Link to="/chat">
                <div onClick={() => toggleChatWidget(msg)} className="message-card">
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
                </div>
            </Link>
        )
    } else {
        return (
            <div onClick={() => toggleChatWidget(msg)} className="message-card">
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
            </div>
        )
    }
}

export default MessageCard;

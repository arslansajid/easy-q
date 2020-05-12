import React from "react";
import { Container, Row, Col, Card, Alert } from "reactstrap";

const MessageCard = () => {
    return (
        <Card className="message-card">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="py-2">
                        <h3>Message</h3>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default MessageCard;

import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

const BookingCard = () => {
    return (
        <Card className="booking-card">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="py-2">
                        <h3>Title</h3>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                    </Col>
                    <Col lg="6" md="6" className="py-2">
                        <h3>Details</h3>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                        <p>Lorem ipsum data</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default BookingCard;

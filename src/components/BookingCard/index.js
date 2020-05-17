import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";

const BookingCard = (props) => {
    const { name, location, date, bookings, index } = props;
    return (
        <Card key={index} className="booking-card">
            <Container>
                <Row className="py-3">
                    <Col className="vertical-center mb-3" lg="4" md="3">
                        <img src={require("../../assets/img/shop.jpeg")} alt="shop-img" />
                    </Col>
                    <Col lg="8" md="9">
                        <h4>{name}</h4>
                        <h5>{date}</h5>
                        <h6>{location}</h6>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h6>Bookings: {bookings}</h6>
                            <Link to="/buyers">
                                <Button
                                    color="danger"
                                    size="md"
                                >
                                    View Buyers
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default BookingCard;

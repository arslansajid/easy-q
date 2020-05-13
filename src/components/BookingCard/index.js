import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";

const BookingCard = (props) => {
    const { name, location, date, bookings, index } = props;
    return (
        <Card key={index} className="booking-card">
            <Container>
                <Row className="py-3">
                    <Col /* className="vertical-center" */ lg="4" md="3">
                        <img src={require("../../assets/img/shop.jpeg")} alt="shop-img" />
                    </Col>
                    <Col lg="8" md="9">
                        <h3>{name}</h3>
                        <h4>{date}</h4>
                        <h5>{location}</h5>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h5>Bookings: {bookings}</h5>
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

import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookingCard from "../../components/BookingCard";

const Bookings = () => {
    document.documentElement.classList.remove("nav-open");
    const count = 5;
    return (
        <div className="section blue-bg">
            <Container className="py-5">
                <Row>
                    <Col lg="12">
                        <h1 className="py-3 text-white">Bookings</h1>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6">
                        {[...Array(count)].map((e, index) => {
                            return (
                                <BookingCard />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bookings;

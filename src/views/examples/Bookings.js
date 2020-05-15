import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookingCard from "../../components/BookingCard";

const shops = [
    {
        name: "The Body Shop",
        location: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        date: "Sunday, 12-May-2020",
        bookings: 214,
    },
    {
        name: "Carrefour",
        location: "Location: Shop # 218, Centaurus Mall, Islamabad, Pakistan.",
        date: "Sunday, 4-August-2020",
        bookings: 71,
    },
    {
        name: "HyperStar",
        location: "Location: Shop # 551, Giga Mall, Lahore, Pakistan.",
        date: "Sunday, 29-June-2020",
        bookings: 146,
    },
]

const Bookings = (props) => {
    document.documentElement.classList.remove("nav-open");
    const count = 5;
    return (
        <div className="section blue-bg">
            <Container className="py-5">
                <Row>
                    <Col lg="12 d-flex align-items-center">
                        <div onClick={() => props.history.goBack()} className="back-button">
                            <i
                                className="fa fa-2x fa-arrow-left text-white mr-3"
                            />
                        </div>
                        <h1 className="py-3 text-white">Bookings</h1>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6">
                        {shops.map((shop, index) => {
                            return (
                                <BookingCard
                                    index={index}
                                    name={shop.name}
                                    location={shop.location}
                                    date={shop.date}
                                    bookings={shop.bookings}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bookings;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookingCard from "../../components/BookingCard";

const Schedule = (props) => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        window.scrollTo(0,0);
        document.body.classList.add("landing-page");
        return function cleanup() {
          document.body.classList.remove("landing-page");
        };
      }, []);
    const count = 3;
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
                        <h2 className="py-3 text-white">Schedule</h2>
                    </Col>
                    <Col className="ml-auto mr-auto py-5" lg="6">
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

export default Schedule;

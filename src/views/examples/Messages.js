import React from "react";
import { Container, Row, Col } from "reactstrap";
import MessageCard from "../../components/MessageCard";

const Messages = () => {
    document.documentElement.classList.remove("nav-open");
    const count = 3;
    return (
        <div className="section blue-bg">
            <Container className="py-5">
                <Row>
                    <Col lg="12">
                        <h1 className="py-3 text-white">Messages</h1>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6">
                        {[...Array(count)].map((e, index) => {
                            return (
                                <MessageCard />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Messages;

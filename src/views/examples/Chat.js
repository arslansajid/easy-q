
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ChatComponent from "../../components/Chat";

const Chat = (props) => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    }, []);

    return (
        <div className="blue-bg">
            <Container className="py-5">
                <Row>
                    <Button className="mobile-chat-close" color="danger" size="sm" onClick={() => props.history.goBack()}>
                        Close
                    </Button>
                    <Col lg="12 d-flex align-items-center">
                        <ChatComponent
                            parent={"mobile"}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Chat;

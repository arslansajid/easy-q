import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";

const UserCard = (props) => {
    const { index, userId, name, email, address, phone, handleClick, hideButtons } = props;

    return (
        <Card key={index} className="user-card">
            <Container>
                <Row className="py-3">
                    <Col className="images-container" lg="4" md="3">
                        <img className="user-img" src={require("../../assets/img/user.png")} alt="shop-img" />
                        <img className="user-qr" src={require("../../assets/img/qr.png")} alt="qr-img" />
                    </Col>
                    <Col lg="8" md="9">
                        <h5 className="mb-2">{userId}</h5>
                        <h4 className="mb-2">{name}</h4>
                        <h5 className="mb-2">{email}</h5>
                        <h5 className="mb-2">{phone}</h5>
                        <h5 className="mb-2">{address}</h5>
                        {!hideButtons && (
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                {/* <img src={require("../../assets/img/qr.png")} alt="qr-img" /> */}
                                {/* <h5>QR: {qrCode}</h5> */}
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={() => handleClick("Reschedule")}
                                >
                                    Reschedule
                            </Button>
                                <Button
                                    color="danger"
                                    size="sm"
                                    onClick={() => handleClick("Cancel")}
                                >
                                    Cancel
                            </Button>
                                <Button
                                    color="info"
                                    size="sm"
                                    onClick={() => handleClick("Postpone")}
                                >
                                    Postpone
                            </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default UserCard;

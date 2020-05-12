import React, { useState } from "react"
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

const Signup = (props) => {
    const [loading, setLoading] = useState(false);

    const onformSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            props.history.push("/login");
        }, 1000);
    }

    return (
        <>
            <div
                className="blue-bg"
                style={{
                    height: "100%",
                    minHeight: "100vh"
                }}
            >
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" lg="4">
                            <Link to="/"><h2 className="text-blue text-center">EASY-Q</h2></Link>
                            <Card className="card-register ml-auto mr-auto">
                                <h3 className="title text-white mx-auto">Welcome</h3>
                                <div className="social-line text-center">
                                    <Button
                                        className="btn-neutral btn-just-icon mr-1"
                                        color="facebook"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook-square" />
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-just-icon mr-1"
                                        color="google"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-google-plus" />
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-just-icon"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter" />
                                    </Button>
                                </div>
                                <Form className="register-form">
                                    <label>Email</label>
                                    <Input placeholder="Email" type="text" />
                                    <label>Username</label>
                                    <Input placeholder="username" type="text" />
                                    <label>Password</label>
                                    <Input placeholder="Password" type="password" />
                                    <Button
                                        disabled={loading}
                                        block
                                        className="btn-round"
                                        onClick={() => onformSubmit()}>
                                        {loading ? "Please Wait" : "Sign Up"}
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="footer register-footer text-center">
                    <h6>
                        Alreay have an account?
                        <Link to="/login">
                            <Button
                                className="btn-link"
                                color="danger">
                                Sign In
                            </Button>
                        </Link>
                    </h6>
                </div>
            </div>
        </>
    )
}

export default Signup;
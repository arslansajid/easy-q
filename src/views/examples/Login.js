
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie"
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  // const [display, setDisplay] = useState(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  useEffect(() => {
    const token = Cookie.get('easyq_access_token');
    if (token) {
      props.history.push("/");
    } else {
      // setDisplay(true);
    }
  })

  const onformSubmit = () => {
    setLoading(true);
    Cookie.set('easyq_access_token', { expires: 14 })
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  }
  
  return (
    <>
      <div
        className="page-header"
        style={{
          // backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
          background: "#87ceeb"
        }}
      >
        {/* <div className="filter" /> */}
        <Container className="mt-0">
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Link to="/"><h2 className="text-blue text-center">EASY-Q</h2></Link>
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
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
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button
                    disabled={loading}
                    block
                    className="btn-round"
                    onClick={() => onformSubmit()}
                  >
                    {loading ? "Please Wait" : "Login"}
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            Don't have an account?
            <Link to="/signup">
              <Button
                className="btn-link"
                color="danger"
              >
                Sign Up
              </Button>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Login;

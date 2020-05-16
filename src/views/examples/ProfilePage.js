
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage(props) {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div className="section blue-bg">
        <Container className="py-5">
          <Row>
            <Col lg="12" className="d-flex align-items-center">
              <div onClick={() => props.history.goBack()} className="back-button">
                <i
                  className="fa fa-2x fa-arrow-left text-white mr-3"
                />
              </div>
              <h1 className="py-3 text-white">Profile</h1>
            </Col>
            </Row>
            <Row className="py-5">
            <Col className="py-5" lg="4">
              <div className="owner">
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/joe-gardner-2.jpg")}
                  />
                </div>
                <div className="name">
                  <h4 className="text-white">
                    SHAHID AFRIDI <br />
                  </h4>
                  <h6 className="text-white">Music Producer</h6>
                </div>
              </div>
            </Col>
            <Col className="text-white" lg="8">
                  <h5 className="mb-3">ID: {"123123"}</h5>
                  <h3 className="mb-3">Name: {"Shahid Afridi"}</h3>
                  <h4 className="mb-3">Email: {"shahid.afridi@email.com"}</h4>
                  <h4 className="mb-3">Phone: {"324-546-123"}</h4>
                  <h5 className="mb-3">Address: {"House # 214 Abc Town, Pakistan"}</h5>
            </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;

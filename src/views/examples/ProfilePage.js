
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import ImagePicker from "../../components/ImagePicker";

function ProfilePage(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [image, setImage] = React.useState([]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0,0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  }, []);

  const setImageCallback = (value) => {
		setImage(value);
  }
  
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
            <Col lg="4" md="4" sm="4">
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
            <Col className="text-white user-data" lg="8" md="8" sm="8">
              <h5 className="mb-3">ID: {"123123"}</h5>
              <h3 className="mb-3">Name: {"Shahid Afridi"}</h3>
              <h4 className="mb-3">Email: {"shahid.afridi@email.com"}</h4>
              <h4 className="mb-3">Phone: {"324-546-123"}</h4>
              <h5 className="mb-3">Address: {"House # 214 Abc Town, Pakistan"}</h5>
              <Button onClick={() => setShowModal(true)} className="mt-3" size="md" color="danger">Edit Profile</Button>
            </Col>
          </Row>
        </Container>
      </div>
      {
        showModal && (
          <Modal
            size={"md"}
            fade={false}
            backdrop={"static"}
            isOpen={showModal} toggle={() => setShowModal(!showModal)}>
            <ModalHeader className="text-black">Edit Profile</ModalHeader>
            <ModalBody className="d-flex justify-content-center align-items-center">
            <Form className="user-form">
                  <Row>
                    <Col className="my-2" md="12">
                      <label>Profile Photo</label>
                      <ImagePicker image={image} setImage={setImageCallback} />
                    </Col>
                    <Col className="my-2" md="12">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col className="my-2" md="12">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-envelope" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
                      </InputGroup>
                    </Col>
                    <Col className="my-2" md="12">
                      <label>Address</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-home" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Address" type="text" />
                      </InputGroup>
                    </Col>
                    <Col className="my-2" md="12">
                      <label>Phone</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-phone" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone" type="number" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
            </ModalBody>
            <ModalFooter className="p-2">
              <Button color="success" onClick={() => setShowModal(false)} size="large" className="">Save</Button>
              <Button color="danger" onClick={() => setShowModal(false)} size="large" className="">Cancel</Button>
            </ModalFooter>
          </Modal>
        )}
    </>
  );
}

export default ProfilePage;

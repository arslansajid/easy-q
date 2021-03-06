import React, { useState } from "react";
import UserCard from "../../components/UserCard";
import QRScanner from "../../components/QRScanner";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
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
import TextField from '@material-ui/core/TextField';

const buyers = [
    {
        userId: 213,
        name: "Shahid Afridi",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
    },
    {
        userId: 346,
        name: "Wasim Akram",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
    },
    {
        userId: 853,
        name: "Imran Khan",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
    },
]

const Events = (props) => {
    document.documentElement.classList.remove("nav-open");

    const [activeTab, setActiveTab] = React.useState("1");
    const [showScanner, setShowScanner] = React.useState(false);
    const [showResultModal, setShowResultModal] = React.useState(false);
    const [result, setResult] = React.useState(false);
    const [bookingIdInput, setBookingIdInput] = useState("");
    const [showBookingIdInput, setShowBookingIdInput] = useState(false);
    const [showWalkInModal, setShowWalkInModal] = useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    }, []);

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

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
                        <h2 className="py-3 text-white">Events</h2>
                    </Col>
                    <Col className="ml-auto mr-auto py-5" lg="6">
                        <Button onClick={() => setShowScanner(true)} className="w-100" color="danger" size="lg">SCAN</Button>
                    </Col>
                    <Col className="ml-auto mr-auto py-lg-5 py-md-5 pb-lg-0 pb-md-0 pb-5" lg="6">
                        <Button onClick={() => setShowWalkInModal(true)} className="w-100" color="warning" size="lg">WALK IN</Button>
                    </Col>
                    <Col lg="12">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <Nav role="tablist" tabs>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "1" ? "active" : ""}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            Total
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "2" ? "active" : ""}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            Present
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "3" ? "active" : ""}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            Departed
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </Col>
                    {/* Tab panes */}
                    {
                        activeTab === "1"
                            ?
                            <Col className="ml-auto mr-auto" lg="6">
                                <h3 className="text-white mb-3">Total Users: 90</h3>
                                {buyers.map((buyer, index) => {
                                    return (
                                        <div key={index}>
                                            <UserCard
                                                index={index}
                                                userId={buyer.userId}
                                                name={buyer.name}
                                                email={buyer.email}
                                                address={buyer.address}
                                                phone={buyer.phone}
                                                hideButtons={true}
                                            />
                                        </div>
                                    )
                                })}
                            </Col>
                            :
                            activeTab === "2"
                                ?
                                <Col className="ml-auto mr-auto" lg="6">
                                    <h1 className="text-white">No records found!</h1>
                                </Col>
                                :
                                <Col className="ml-auto mr-auto" lg="6">
                                    <h3 className="text-white mb-3">Total Users: 87</h3>
                                    {buyers.map((buyer, index) => {
                                        return (
                                            <div key={index}>
                                                <UserCard
                                                    index={index}
                                                    userId={buyer.userId}
                                                    name={buyer.name}
                                                    email={buyer.email}
                                                    address={buyer.address}
                                                    phone={buyer.phone}
                                                    hideButtons={true}
                                                />
                                            </div>
                                        )
                                    })}
                                </Col>
                    }
                </Row>
            </Container>
            {
                showScanner && (
                    <Modal
                        size={"lg"}
                        fade={false}
                        backdrop={"static"}
                        isOpen={showScanner} toggle={() => setShowScanner(!showScanner)}>
                        <ModalHeader className="text-black">SCAN QR</ModalHeader>
                        <ModalBody className="d-flex justify-content-center align-items-center flex-column">
                            <QRScanner setResult={setResult} showSuccess={setShowResultModal} />
                            <div className="w-100 text-center">
                                <strong>Can't scan your code?{"   "}</strong>
                                <Button onClick={() => setShowBookingIdInput(true)} className="m-2" outline size="sm" color="danger">Enter Booking ID</Button>
                                {
                                    showBookingIdInput && (
                                        <Input
                                            className=""
                                            placeholder="Booking ID"
                                            type="number"
                                        />
                                    )
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter className="p-2">
                            <Button color="success" onClick={() => setShowScanner(false)} size="large" className="">Next</Button>
                            <Button color="danger" onClick={() => setShowScanner(false)} size="large" className="">Cancel</Button>
                        </ModalFooter>
                    </Modal>
                )}
            {
                showResultModal && (
                    <Modal
                        size={"lg"}
                        fade={false}
                        backdrop={"static"}
                        isOpen={showResultModal} toggle={() => setShowResultModal(!showResultModal)}>
                        <ModalHeader className="text-black">SCAN QR</ModalHeader>
                        <ModalBody className="d-flex justify-content-center align-items-center flex-column">
                            <h3 className="text-black">Scan Successfull!</h3>
                            <h4>{result}</h4>
                        </ModalBody>
                        <ModalFooter className="p-2">
                            <Button color="danger" onClick={() => setShowResultModal(false)} size="large" className="">Close</Button>
                        </ModalFooter>
                    </Modal>
                )}
            {
                showWalkInModal && (
                    <Modal
                        size={"lg"}
                        fade={false}
                        backdrop={"static"}
                        isOpen={showWalkInModal} toggle={() => setShowWalkInModal(!showWalkInModal)}>
                        <ModalHeader className="text-black">Walk In Booking</ModalHeader>
                        <ModalBody className="d-flex justify-content-center align-items-center flex-column">
                            <Form className="user-form">
                                <Row>
                                    <Col className="my-2" md="12">
                                        <label>First Name</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="First Name" type="text" />
                                        </InputGroup>
                                    </Col>
                                    <Col className="my-2" md="12">
                                        <label>Last Name</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Last Name" type="email" />
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
                                    <Col className="my-2" md="12">
                                        <label>Gender</label>
                                        <select
                                        name="timer_type"
                                        // value={sneakers.timer_type}
                                        className="form-control"
                                        // onChange={this.handleInputChange}
                                        required
                                        >
                                        <option value="">Select Gender</option>
                                            <option value="sneakers">Male</option>
                                            <option value="sneakers">Female</option>
                                        </select>
                                    </Col>
                                    <Col className="my-2" md="12">
                                        <TextField
                                            id="time"
                                            label="Date of Birth"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            />
                                    </Col>
                                </Row>
                            </Form>
                        </ModalBody>
                        <ModalFooter className="p-2">
                            <Button color="success" onClick={() => setShowWalkInModal(false)} size="large" className="">Save</Button>
                            <Button color="danger" onClick={() => setShowWalkInModal(false)} size="large" className="">Close</Button>
                        </ModalFooter>
                    </Modal>
                )}
        </div>
    )
}

export default Events;

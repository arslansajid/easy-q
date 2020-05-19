import React from "react";
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
    ModalFooter
} from "reactstrap";

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

    React.useEffect(() => {
        window.scrollTo(0,0);
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
                        <ModalBody className="d-flex justify-content-center align-items-center">
                            <QRScanner />
                        </ModalBody>
                        <ModalFooter className="p-2">
                            <Button color="success" onClick={() => setShowScanner(false)} size="large" className="">Next</Button>
                            <Button color="danger" onClick={() => setShowScanner(false)} size="large" className="">Cancel</Button>
                        </ModalFooter>
                    </Modal>
                )}
        </div>
    )
}

export default Events;

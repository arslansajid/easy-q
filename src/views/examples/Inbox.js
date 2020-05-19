import React, { useState } from "react";
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
import InboxCard from "components/InboxCard";
import Swal from 'sweetalert2'

const messages = [
    {
        userId: 213,
        name: "Shahid Afridi",
        email: "shahidafridi@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hello! What is the update?",
        time: "Sat, 12:41 pm"
    },
    {
        userId: 346,
        name: "Wasim Akram",
        email: "wasimakram@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        message: "Hi! What is the update??",
        time: "Mon, 07:24 am"
    },
    {
        userId: 853,
        name: "Imran Khan",
        email: "imrankhan@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hey! What is the update?",
        time: "Wed, 05:08 pm"
    },
    {
        userId: 213,
        name: "Shahid Afridi",
        email: "shahidafridi@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hello! What is the update?",
        time: "Sat, 12:41 pm"
    },
    {
        userId: 346,
        name: "Wasim Akram",
        email: "wasimakram@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        message: "Hi! What is the update??",
        time: "Mon, 07:24 am"
    },
    {
        userId: 853,
        name: "Imran Khan",
        email: "imrankhan@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hey! What is the update?",
        time: "Wed, 05:08 pm"
    },
]

const Inbox = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalHeading, setModalHeading] = useState("");
    const [messageEmail, setMessageEmail] = useState("");
    const [msgList, setMsgList] = useState([...messages])

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    }, []);

    const toggleModal = (value, email) => {
        if(value === "compose") {
            setModalHeading("Write Message")
        } else {
            setModalHeading("Reply")
        }
        setMessageEmail(email);
        setShowModal(!showModal)
    }

    const deleteMsg = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Message has been deleted.',
                    'success'
                );
                const messagesArray = msgList.slice();
                messagesArray.splice(index, 1);
                setMsgList([...messagesArray]);
            }
        })
    }

    const sendMessage = () => {
        Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been sent!',
            icon: 'success'
        }).then((result) => {
            if (result.value) {
                toggleModal();
            }
        })
    }


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
                        <h2 className="py-3 text-white">Inbox</h2>
                    </Col>
                    <Col className="ml-auto mr-auto py-5 text-black inbox" lg="12">
                        <Row>
                            <div className="mobile-sidebar">
                                <div className="mobile-btn-container">
                                    <Button onClick={() => toggleModal("compose")} className="w-100 mb-1" size="sm" color="warning">Compose</Button>
                                    <Button className="w-100 mb-1" size="sm" color="success">Inbox ({msgList.length})</Button>
                                    <Button className="w-100 mb-1" size="sm" color="danger">Deleted</Button>
                                    <Button className="w-100 mb-1" size="sm" color="info">Spam</Button>
                                </div>
                                <div className="divider" />
                            </div>
                            <Col className="sidebar" lg="3" lg="3" sm="3">
                                <Button onClick={() => toggleModal("compose")} className="w-100" size="md" color="warning">Compose</Button>
                                <div className="divider" />
                                <Button className="w-100 mb-1" size="md" color="success">Inbox ({msgList.length})</Button>
                                <Button className="w-100 mb-1" size="md" color="danger">Deleted</Button>
                                <Button className="w-100 mb-1" size="md" color="info">Spam</Button>
                            </Col>
                            <Col className="content" lg="9" lg="9" sm="9">
                                {
                                    msgList.map((msg, index) => (
                                        <div key={index}>
                                            <InboxCard
                                                index={index}
                                                total={msgList.length}
                                                name={msg.name}
                                                message={msg.message}
                                                email={msg.email}
                                                time={msg.time}
                                                toggleModal={toggleModal}
                                                deleteMsg={deleteMsg}
                                            />
                                        </div>
                                    ))
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {
                showModal && (
                    <Modal
                        size={"md"}
                        fade={false}
                        backdrop={"static"}
                        isOpen={showModal} toggle={() => setShowModal(!showModal)}>
                        <ModalHeader className="text-black">{modalHeading}</ModalHeader>
                        <ModalBody className="d-flex justify-content-center align-items-center">
                            <Form className="user-form">
                                <Row>
                                    <Col className="my-2" md="12">
                                        <label>Email</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-envelope" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input value={messageEmail} onChange={(e) => setMessageEmail(e.target.value)} placeholder="Email" type="email" />
                                        </InputGroup>
                                    </Col>
                                    <Col className="my-2" md="12">
                                        <label>Message</label>
                                        <Input
                                            placeholder="Message..."
                                            type="textarea"
                                            rows="4"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </ModalBody>
                        <ModalFooter className="p-2">
                            <Button color="success" onClick={() => sendMessage()} size="large" className="">Send</Button>
                            <Button color="danger" onClick={() => setShowModal(false)} size="large" className="">Cancel</Button>
                        </ModalFooter>
                    </Modal>
                )}
        </div>
    )
}

export default Inbox;

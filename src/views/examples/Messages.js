import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MessageCard from "../../components/MessageCard";
import Chat from "../../components/Chat";
import { toggleWidget } from 'react-chat-widget';

const messages = [
    {
        userId: 213,
        name: "Shahid Afridi",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hello! What is the update?",
        time: "Sat, 12:41 pm"
    },
    {
        userId: 346,
        name: "Wasim Akram",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        message: "Hi! What is the update??",
        time: "Mon, 07:24 am"
    },
    {
        userId: 853,
        name: "Imran Khan",
        email: "asd@email.com",
        address: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        phone: "123-987-654",
        message: "Hey! What is the update?",
        time: "Wed, 05:08 pm"
    },
]

const Messages = (props) => {
    document.documentElement.classList.remove("nav-open");
    const [chatUser, setchatUser] = useState(null);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    }, []);

    const toggleChatWidget = (value) => {
        console.log("###### toggleChatWidget")
        // if (chatUser === value) {
            toggleWidget();
        // }
        setchatUser(value);
    }

    const isMobile = window.screen.width < 500;

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
                        <h2 className="py-3 text-white">Messages</h2>
                    </Col>
                    <Col className="ml-auto mr-auto py-5" lg="6">
                        {messages.map((msg, index) => {
                            return (
                                <div key={index}>
                                    <MessageCard
                                        msg={msg}
                                        name={msg.name}
                                        message={msg.message}
                                        time={msg.time}
                                        toggleChatWidget={toggleChatWidget}
                                    />
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            {
                chatUser && !isMobile && (
                    <Chat
                        user={chatUser}
                    />
                )
            }
        </div>
    )
}

export default Messages;

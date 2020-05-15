import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserCard from "../../components/UserCard";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

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
const Buyers = () => {
    document.documentElement.classList.remove("nav-open");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleClick = (value) => {
        setOpen(true);
        setMessage(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="section blue-bg">
            <Container className="py-5">
                <Row>
                    <Col lg="12">
                        <h1 className="py-3 text-white">Buyers</h1>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6">
                        {buyers.map((buyer, index) => {
                            return (
                                <UserCard
                                    index={index}
                                    userId={buyer.userId}
                                    name={buyer.name}
                                    email={buyer.email}
                                    address={buyer.address}
                                    phone={buyer.phone}
                                    handleClick={handleClick}
                                />
                            )
                        })}
                    </Col>
                </Row>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message={`User has been ${message}`}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <i className="fa fa-times-circle" />
                        </IconButton>
                    }
                />
            </Container>
        </div>
    )
}

export default Buyers;

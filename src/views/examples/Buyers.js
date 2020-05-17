import React from "react";
import { Container, Row, Col } from "reactstrap";
import UserCard from "../../components/UserCard";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import DatePicker from "../../components/Pickers"

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
const Buyers = (props) => {
    window.scrollTo(0,0);
    document.documentElement.classList.remove("nav-open");
    const [open, setOpen] = React.useState(false);
    const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleClick = (value) => {
        setMessage(value);
        if (value === "Reschedule") {
            setIsDatePickerOpen(true);
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDatePickerClose = () => {
        setMessage("Reschedule");
        setIsDatePickerOpen(false)
        setOpen(true);
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
                        <h1 className="py-3 text-white">Buyers</h1>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6">
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
                                        handleClick={handleClick}
                                    />
                                </div>
                            )
                        })}
                    </Col>
                </Row>
                <DatePicker
                    isOpen={isDatePickerOpen}
                    setIsOpen={setIsDatePickerOpen}
                    onDatePickerClose={onDatePickerClose}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message={`User has been ${message}d`}
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

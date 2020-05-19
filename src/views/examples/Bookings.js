import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BookingCard from "../../components/BookingCard";
import DatePicker from "../../components/Pickers"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const shops = [
    {
        name: "The Body Shop",
        location: "Location: Shop # 218, Giga Mall, Islamabad, Pakistan.",
        date: "Sunday, 12-May-2020",
        bookings: 214,
    },
    {
        name: "Carrefour",
        location: "Location: Shop # 218, Centaurus Mall, Islamabad, Pakistan.",
        date: "Sunday, 4-August-2020",
        bookings: 71,
    },
    {
        name: "HyperStar",
        location: "Location: Shop # 551, Giga Mall, Lahore, Pakistan.",
        date: "Sunday, 29-June-2020",
        bookings: 146,
    },
]

const Bookings = (props) => {
    document.documentElement.classList.remove("nav-open");
    const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
    const [statusEl, setStatusEl] = React.useState(null);
    const [typeEl, setTypeEl] = React.useState(null);

    const onDatePickerClose = () => {
        setIsDatePickerOpen(false);
        console.log("onDatePickerClose")
    }

    const handleStatusClick = (event) => {
        setStatusEl(event.currentTarget);
    };

    const handleStatusClose = () => {
        setStatusEl(null);
    };

    const handleTypeClick = (event) => {
        setTypeEl(event.currentTarget);
    };

    const handleTypeClose = () => {
        setTypeEl(null);
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
                        <h2 className="py-3 text-white">My Store</h2>
                    </Col>
                    <Col lg="12" className="ml-auto mr-auto d-flex align-items-center justify-content-center mt-3">
                                <Button className="mr-2" color="danger" onClick={() => setIsDatePickerOpen(true)}>Select Date</Button>
                                <DatePicker
                                    isOpen={isDatePickerOpen}
                                    setIsOpen={setIsDatePickerOpen}
                                    onDatePickerClose={onDatePickerClose}
                                />

                                <Button className="mr-2" color="danger" onClick={handleStatusClick}>
                                    Filter By Status
                                </Button>
                                <Menu
                                    id="status-menu"
                                    anchorEl={statusEl}
                                    keepMounted
                                    open={Boolean(statusEl)}
                                    onClose={handleStatusClose}
                                >
                                    <MenuItem onClick={handleStatusClose}>Booked</MenuItem>
                                    <MenuItem onClick={handleStatusClose}>Attended</MenuItem>
                                    <MenuItem onClick={handleStatusClose}>Cancelled</MenuItem>
                                </Menu>

                                <Button color="danger" onClick={handleTypeClick}>
                                    Filter By Status
                                </Button>
                                <Menu
                                    id="type-menu"
                                    anchorEl={typeEl}
                                    keepMounted
                                    open={Boolean(typeEl)}
                                    onClose={handleTypeClose}
                                >
                                    <MenuItem onClick={handleTypeClose}>Super Market</MenuItem>
                                    <MenuItem onClick={handleTypeClose}>Wholesalers/Department Stores</MenuItem>
                                    <MenuItem onClick={handleTypeClose}>Liquor Stores</MenuItem>
                                    <MenuItem onClick={handleTypeClose}>Clothing Stores</MenuItem>
                                    <MenuItem onClick={handleTypeClose}>Restuarants</MenuItem>
                                </Menu>
                    </Col>
                    <Col className="ml-auto mr-auto py-5" lg="6">
                        {shops.map((shop, index) => {
                            return (
                                <div key={index}>
                                    <BookingCard
                                        index={index}
                                        name={shop.name}
                                        location={shop.location}
                                        date={shop.date}
                                        bookings={shop.bookings}
                                    />
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bookings;

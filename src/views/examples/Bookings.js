import React from "react";
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
    Input
} from "reactstrap";
import BookingCard from "../../components/BookingCard";
import UserCard from "../../components/UserCard";
import DatePicker from "../../components/Pickers"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {TextField} from '@material-ui/core'
import { SingleDatePicker } from 'react-dates';

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

const Bookings = (props) => {
    document.documentElement.classList.remove("nav-open");
    const [activeTab, setActiveTab] = React.useState("1");
    const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
    const [statusEl, setStatusEl] = React.useState(null);
    const [typeEl, setTypeEl] = React.useState(null);
    const [bookingFilterDate, setBookingFilterDate] = React.useState(null);
    const [focus, setFocus] = React.useState(false);

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
                        <h2 className="py-3 text-white">Bookings</h2>
                    </Col>
                    <Col lg="6" className="ml-auto mr-auto d-flex align-items-center justify-content-center my-5">
                        <SingleDatePicker
                          date={bookingFilterDate} // momentPropTypes.momentObj or null
                          onDateChange={date => setBookingFilterDate(date)} // PropTypes.func.isRequired
                          focused={focus} // PropTypes.bool
                          onFocusChange={({ focused }) => setFocus(focused)} // PropTypes.func.isRequired
                          id="date-picker" // PropTypes.string.isRequired,
                          displayFormat={"DD-MMM-YYYY"}
                          placeholder="Select date"
                          numberOfMonths={1}
                          className={"w-100"}
                        />
                    </Col>
                    <Col lg="3" className="ml-auto mr-auto d-flex align-items-center justify-content-center my-5">
                        <TextField
                          id="time"
                          label="Start Time"
                          type="time"
                          defaultValue="07:30"
                          className={"w-100 input-white"}
                          InputLabelProps={{
                            // shrink: true,
                          }}
                          inputProps={{
                            step: 600, // 10 min,
                          }}
                          InputProps={{ disableUnderline: true }}
                        />
                    </Col>
                    <Col lg="3" className="ml-auto mr-auto d-flex align-items-center justify-content-center my-5">
                        <TextField
                          id="time"
                          label="End Time"
                          type="time"
                          defaultValue="07:40"
                          className={"w-100 input-white"}
                          InputLabelProps={{
                            // shrink: true,
                          }}
                          inputProps={{
                            step: 600, // 10 min
                          }}
                          InputProps={{ disableUnderline: true }}
                        />
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
                                            Booked
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "2" ? "active" : ""}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            Cancelled
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "3" ? "active" : ""}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            Attended
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </Col>
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
                                                bookingTime={'1-April-2020 12:35 pm'}
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
                                                    entryTime={'31-May-2020 4:07 pm'}
                                                />
                                            </div>
                                        )
                                    })}
                                </Col>
                    }
                    {/* <Col className="ml-auto mr-auto py-5" lg="6">
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
                                        // handleClick={handleClick}
                                    />
                                </div>
                            )
                        })}
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Bookings;

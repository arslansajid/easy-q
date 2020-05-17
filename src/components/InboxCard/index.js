import React from "react";
import {
    Button,
} from "reactstrap";
import Avatar from 'react-avatar';

const InboxCard = (props) => {
    const { total, index } = props;
    return (
        <div className="inbox-card">
            <div className="d-flex justify-content-between">
                <div className="msg-data-container d-flex">
                    <Avatar
                        className="message-avatar"
                        name={props.name}
                    />
                    <div className="msg-data">
                        <p>{props.name}</p>
                        <p>{props.time}</p>
                        <p>{props.message}</p>
                    </div>
                </div>

            <div className="btn-container">
                <Button className="mr-2" onClick={() => props.toggleModal("reply", props.email)} color="success">
                    <i className="fa fa-2x fa-edit" />
                </Button>
                <Button onClick={() => props.deleteMsg(index)} color="danger">
                    <i className="fa fa-2x fa-trash" />
                </Button>
            </div>
            </div>
            {
                total !== index + 1 && (
                    <div className="divider" />
                )
            }
        </div>
    )
}

export default InboxCard;
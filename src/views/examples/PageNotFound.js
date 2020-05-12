import React from "react";
import {Button} from "reactstrap";


const PageNotFound = (props) => {
    const goBack = () => {
        props.history.goBack();
    }
 
    return (
        <div style={styles.conatiner}>
            <h1>Sorry, Page Not Found :(</h1>
            <Button
                className="my-5"
                color="danger"
                size="lg"
                onClick={() => goBack()}
            >
                Go Back
            </Button>
        </div>
    )
}

export default PageNotFound;


const styles = {
    conatiner: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent:  "center",
        alignItems: "center",
        flexDirection: "column"
    }
}
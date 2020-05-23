
import React, { useState } from "react";

// reactstrap components
import {
  Input,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

// core components
import QRScanner from "../../components/QRScanner";

function LandingPageHeader() {
  const [showScanner, setShowScanner] = React.useState(false);
  const [showResultModal, setShowResultModal] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const [bookingIdInput, setBookingIdInput] = useState("");
  const [showBookingIdInput, setShowBookingIdInput] = useState(false);
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        // let windowScrollTop = window.pageYOffset / 3;
        // pageHeader.current.style.transform =
        //   "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        style={{
          // backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header blue-bg"
        data-parallax={true}
        ref={pageHeader}
      >
        {/* <div className="filter" /> */}
        <Container>
          <div className="motto text-center">
            <h1>Easy-Q</h1>
            <h3>Start designing your landing page here.</h3>
            <br />
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              How it Works
            </Button>
            <Button onClick={() => setShowScanner(true)} className="btn-round" color="neutral" type="button" outline>
              Scan QR
            </Button>
          </div>
        </Container>
      </div>
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
            <ModalBody className="d-flex justify-content-center align-items-center">
              <h3 className="text-black">Scan Successfull!</h3>
              <h4>{result}</h4>
            </ModalBody>
            <ModalFooter className="p-2">
              <Button color="danger" onClick={() => setShowResultModal(false)} size="large" className="">Close</Button>
            </ModalFooter>
          </Modal>
        )}
    </>
  );
}

export default LandingPageHeader;

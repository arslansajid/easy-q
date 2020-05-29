import React from "react";
import { Container, Row, Col } from "reactstrap";
import BookingCard from "../../components/BookingCard";
import LineChart from '../../components/Charts/LineChart'
import PieChart from '../../components/Charts/PieChart'
import BarChart from '../../components/Charts/BarChart'
import Doughnut from '../../components/Charts/Doughnut'

const Schedule = (props) => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    }, []);
    const count = 3;
    return (
        <div className="section blue-bg">
            <Container className="py-5">
            {/* <div className = 'row space-3'>
              <div className='col-sm-6 pull-left'>
                <h3 className='my-5'>Listings in last week</h3>
                <LineChart className='chart' data={[1,2,3,4,5,6,7]} labels={['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}/>
              </div>
              <div className='col-sm-6 '>
                <h3 className='my-5'>Rent/Sale Comparison</h3>
                <PieChart className='chart' data={[5,7]}/>
              </div>
            </div>
            <div className = 'row'>
              <div className='col-sm-6'>
                <h3 className='my-5'>Agencies registered</h3>
                <Doughnut className='chart' data={[1,2,3,4,5,6,7]} labels={['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}/>
              </div>
              <div className='col-sm-6'>
                <h3 className='my-5'>Types Comparison</h3>
                <BarChart className='chart' data={[300,200,300]} labels={['Basic', 'Premium', 'Premium Plus']}/>
              </div>
              </div> */}
                <Row>
                    <Col lg="12">
                        <Row className="m-5">
                            <Col lg="6" md="6" sm="12">
                                <h3 className='my-5 text-white text-center'>Events in last week</h3>
                                <LineChart className='chart' data={[1, 2, 3, 4, 5, 6, 7]} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} />
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <h3 className='my-5 text-white text-center'>Walk In Comparison</h3>
                                <PieChart className='chart' data={[5, 7]} />
                            </Col>
                            </Row>
                            <Row className="m-5">
                            <Col lg="6" md="6" sm="12">
                                <h3 className='my-5 text-white text-center'>Shops registered</h3>
                                <Doughnut className='chart' data={[1, 2, 3, 4, 5, 6, 7]} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} />
                            </Col>
                            <Col lg="6" md="6" sm="12">
                            <h3 className='my-5 text-white text-center'>Types Comparison</h3>
                                <BarChart className='chart' data={[300, 200, 300]} labels={['Basic', 'Premium', 'Premium Plus']} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedule;

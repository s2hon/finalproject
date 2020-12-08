import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/index";
import { Row, Col } from "reactstrap";
import Button from "../../components/Button";
import data from "../../db/store.json";
import { useStoreContext } from '../../utils/GlobalStore';
import HomeCarousel from "../../components/HomeCarousel";
import './style.css';

function Home(props) {
    const [state] = useStoreContext();

    return (
        <React.Fragment>
<<<<<<< HEAD
            <Counter />
            <Container>
                <div className="menu-container">
                    <Row className="justify-content-center">
                        {
                            data.map((data, idx) => {
                                return (
                                    <Card key={idx} location={data.location} phone={data.phone} address={data.address}
                                        mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun}>
                                    </Card>

                                )
                            })
                        }
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="12" md={{ size: 10 }} lg={{ size: 10 }} style={{ padding: "30px" }}>
                            <HomeCarousel />
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{ marginTop: 20, marginBottom: 20 }}>
                        <a href={"https://www.yelp.com/biz/sushi-junai-austin"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Reservations</h3></Button>
                        </a>
                        <Link to={!state.userLoggedIn ? "/signinsignup" : "/choice"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Dine In</h3></Button>
                        </Link>
                        <a href={"https://www.yelp.com/order/v2/cart/954de1b27f3ee7705f2ca2d2c8336670"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Carry Out</h3></Button>
                        </a>
                    </Row>
                </div>
            </Container>
        </React.Fragment>);
=======
            <div className="menu-container">
                <Row className="justify-content-center">
                    {
                        data.map((data, idx) => {
                            return (
                                <Card key={idx} location={data.location} phone={data.phone} address={data.address}
                                    mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun} href={data.maps}>
                                </Card>
                            )
                        })
                    }
                </Row>
                <Row className="justify-content-center">
                        <Col sm="12" md={{ size: 10}} lg={{ size: 10}} style={{padding: "30px"}}>
                            <HomeCarousel />
                        </Col>
                </Row>
                <Row className="justify-content-center buttons">
                    <div className="col-lg-3 col-md4 col-sm-12 col-12 custom-grid">
                        <a href={"https://www.yelp.com/biz/sushi-junai-austin"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Reservations</h3></Button>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 custom-grid">
                        <Link to={!state.userLoggedIn ? "/signinsignup": "/dinein"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Dine In</h3></Button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 custom-grid">
                        <a href={"https://www.yelp.com/order/v2/cart/954de1b27f3ee7705f2ca2d2c8336670"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Carry Out</h3></Button>
                        </a>
                    </div>
                </Row>
            </div>
    </React.Fragment>);
>>>>>>> 8b2014e187039850b0e46ef54c718aeac498a57c
}

export default Home;
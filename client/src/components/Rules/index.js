import React from 'react';
import { Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Button from "../Button";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import SoySauce from "./images/soy-sauce.png"
import Noodles from "./images/icons8-noodles-100.png"
import SalmonSushi from "./images/icons8-salmon-sushi-100.png"
import Children from "./images/icons8-maneki-144.png"
import Bento from "./images/icons8-bento-100.png"
import './style.css';
import moment from 'moment';

const Slider = (props) => {
    function setTimer(e) {
        localStorage.setItem("timer", 3600);
        localStorage.setItem("date", moment().format('MMMM Do YYYY'));
    }

    return (
        <>
            <Container className="rules-container">
                <Row>
                    <div className="col-12">
                        <div className="rules-title">
                            <h1>All You Can Eat Rules</h1>
                            <h4>Click "I Agree" to start your time.</h4>
                        </div>
                    </div>
                </Row>
                <div className="rules-wrapper">
                    <Row>
                        <Flip triggerOnce delay={1000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={SalmonSushi} width="40px" alt="SalmonSushi" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #1</h2>
                                        <p>Absolutely NO SHARING between all you can eat and a la carte customers.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={2000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={Noodles} width="40px" alt="Noodles" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #2</h2>
                                        <p>If you don't eat ALL of the items you order, you may be charged À LA CARTE pricing for them.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={3000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                        <Image src={SoySauce} width="40px" alt="SoySauce" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #3</h2>
                                        <p>Items in red can only be ordered once.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={4000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={Bento} width="40px" alt="Bento Box" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #4</h2>
                                        <p>Ordering time for lunch is limited to 60min for $24.95 and 90min for $32.95 for dinner.</p>
                                    </div>
                                </div>
                            </div>
                            </Flip>
                            <Flip triggerOnce delay={5000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={Children} width="40px" alt="Bento Box" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #5</h2>
                                        <p>Children pricing Lunch $10.95 and Dinner $15.95.</p>
                                    </div>
                                </div>
                            </div>
                            <Row className="rules-button">
                                <Link to={"/alacarte"}>
                                    <Button type={"button"} btn={"btn btn2"}>Go to A La Carte</Button>
                                </Link>
                                <Link className="active" to={"/ayce"}>
                                    <Button type={"button"} btn={"btn btn1"} function={setTimer}>I AGREE</Button>
                                </Link>
                            </Row>
                        </Flip>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Slider;
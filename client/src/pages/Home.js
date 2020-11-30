import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Col from "../components/Col";
import Image from "../components/Image";
import Button from "../components/Button";

function Home(props) {
    return (<>
        <Nav />
        <Container>
            <Row>
                <Col size={"sm"} number={6}>
                    <Card>
                        <p>Sushi Junai 1</p>
                        <p>1612 Lavaca St, Austin, TX 78701</p>
                        <p>(512)322-2428</p>

                    </Card>
                </Col>
                <Col size={"sm"} number={6}>
                    <Card>

                        <p>Sushi Junai 2</p>
                        <p>2500 W Parmer Ln #100, Austin, TX 78727</p>
                        <p>(512)716-3922</p>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col size={"md"} number={12}>
                    <Image src={"./assests/logo.png"} alt={"fish logo"} />
                </Col>
            </Row>
            <Col size={"md"} number={6}>
                <Row>
                    <Button type={"button"} btn={"btn btn-dark"}>Reservations</Button>
                </Row>
                <Row>
                    <Button type={"button"} btn={"btn btn-dark"}>Dine In</Button>
                </Row>
                <Row>
                    <Button type={"button"} btn={"btn btn-dark"} >Carry Out</Button>
                </Row>
            </Col>
        </Container>
        <Footer />
    </>);
}

export default Home;
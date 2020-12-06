import React from 'react';
import { Link } from "react-router-dom";
import MenuCartItem from './MenuCartItem';
import Container from "../Container";
import { Table } from 'reactstrap';
import Row from '../Row';
import TipCalculater from '../TipCalculater';
import { Button } from 'reactstrap';
import './style.css';
import Image from "../Image";
import shockedIcon from "./icons8-surprised-50.png"
import sadIcon from "./icons8-sad-50.png"

const MenuCart = (props) => {
    const { menuCart } = props
    const total = menuCart.reduce((acc, val) => acc + val.price, 0)
    const count = menuCart.length

    if (count === 0) {
        return (
            <>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th> <h1>Item (0)</h1></th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                            <tbody>
                                <h3><Image src={shockedIcon} width="25" alt="shockedMaki" /> whatsabi? 0 items so far?
                                <Image src={sadIcon} width="25" alt="sadMaki" />
                                <br/> 
                                <Link
                                    to="/ayce"
                                    className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                                >
                                Go HERE
                                </Link>
                                and order ebi-thing with a dining staff! 
                                <br/> Let's Roll!</h3>
                            </tbody>
                        </thead>
                    </Table>
                </Container>
            </>
        )
    }

    return (
        <>
            <Container>
                <Row><h3 className="cartHeading">Order Summary ({count})</h3></Row>
                <Table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuCart.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} />)}
                        <tr>
                            <Link
                                to="/ayce"
                                className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                            >
                            BACK TO MENU
                            </Link>
                        </tr>
                        <tr>
                            <Button type={"button"} btn={"btn btn-dark"} onClick={() => {props.clearCart(total)}}>Ordered with a Server</Button>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>Total Cost:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>You just saved:</td>
                            <td>${(total - 32.95).toFixed(2)}</td>
                        </tr>
                        <TipCalculater total={total} />
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default MenuCart;
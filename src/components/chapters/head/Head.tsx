import React from "react";
import './head.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { TiUser, TiHome, TiChartArea, TiFlash} from "react-icons/ti";

export default function Head(){

    return(
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="justify-content-around">
                <Container className="justify-content-around" >
                    <Navbar.Brand> <TiHome className="icon"/> </Navbar.Brand>
                    <Navbar.Brand> <TiChartArea className="icon"/> </Navbar.Brand>
                    <Navbar.Brand> <TiFlash className="icon"/> </Navbar.Brand>
                </Container>
                <Navbar.Brand> <TiUser className="icon"/> </Navbar.Brand>
            </Navbar>
        </div>
    );
}
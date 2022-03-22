import React from "react"
// import ReactDOM from 'react-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="container mx-lg-auto  position-fixed ">
            <div className="logged-in float-lg-end float-md-none d-md-flex justify-content-md-center my-3 "> <button className="login btn ">Zaloguj</button> <button className="sign-in btn border">Załóż konto</button></div>
            <Navbar className=" top-0 w-100 navigation " bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link active" aria-current="page"> <Link className='text-reset' to='main' >Start</Link></Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='#' >O co chodzi?</Link></Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='#' >O nas</Link></Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='#' >Fundacja i organizacje</Link></Nav.Link>
                            <Nav.Link className="nav-item mx-4 d-lg-block"><Link className='text-reset' to='#' >Kontakt</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    );
}

export default Navigation;
